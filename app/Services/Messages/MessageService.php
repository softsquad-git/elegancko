<?php

namespace App\Services\Messages;

use App\Helpers\Status;
use App\Interfaces\MailInterface;
use App\Models\Message;
use App\Repositories\Messages\MessageRepository;
use \Exception;

class MessageService
{
    /**
     * @var MessageRepository
     */
    private $messageRepository;

    /**
     * @var MailInterface
     */
    private $mailInterface;

    /**
     * @param MessageRepository $messageRepository
     * @param MailInterface $mailInterface
     */
    public function __construct(MessageRepository $messageRepository, MailInterface $mailInterface)
    {
        $this->messageRepository = $messageRepository;
        $this->mailInterface = $mailInterface;
    }

    /**
     * @param array $data
     * @throws Exception
     */
    public function create(array $data)
    {
        $item = Message::create($data);
        if (!empty($item)) {
            $this->mailInterface
                ->setToEmail($item->email)
                ->setSubject($item->subject ?? config('app.emails.subject'))
                ->setTemplate('emails.messages.message')
                ->setBody([
                    'name' => $item->name,
                    'content' => $item->content
                ])
                ->send();
        }
        throw new Exception(trans('exceptions.no_found'));
    }

    /**
     * @param int $messageId
     * @return mixed
     * @throws Exception
     */
    public function isReading(int $messageId)
    {
        $item = $this->messageRepository->findById($messageId);
        if ($item->is_reading == Status::STATUS_OFF)
            $isReading = Status::STATUS_ON;
        else
            $isReading = Status::STATUS_OFF;
        $item->update(['is_reading' => $isReading]);
        return $item;
    }

    /**
     * @param int $messageId
     * @return bool|null
     * @throws Exception
     */
    public function remove(int $messageId): ?bool
    {
        return $this->messageRepository->findById($messageId)->delete();
    }
}
