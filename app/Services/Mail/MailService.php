<?php

namespace App\Services\Mail;

use App\Interfaces\MailInterface;
use App\Mail\SendMail;
use Illuminate\Support\Facades\Mail;

class MailService implements MailInterface
{
    /**
     * @var string
     */
    private $subject;

    /**
     * @var string
     */
    private $toEmail;

    /**
     * @var string
     */
    private $template;

    /**
     * @var array
     */
    private $body;

    /**
     * @return string
     */
    public function getSubject(): string
    {
        return $this->subject;
    }

    /**
     * @param string $subject
     * @return $this
     */
    public function setSubject(string $subject)
    {
        $this->subject = $subject;

        return $this;
    }

    /**
     * @return string
     */
    public function getToEmail(): string
    {
        return $this->toEmail;
    }

    /**
     * @param string $toEmail
     * @return $this
     */
    public function setToEmail(string $toEmail)
    {
        $this->toEmail = $toEmail;

        return $this;
    }

    /**
     * @return string
     */
    public function getTemplate(): string
    {
        return $this->template;
    }

    /**
     * @param string $template
     * @return $this
     */
    public function setTemplate(string $template)
    {
        $this->template = $template;

        return $this;
    }

    /**
     * @return array
     */
    public function getBody(): array
    {
        return $this->body;
    }

    /**
     * @param array $body
     * @return $this
     */
    public function setBody(array $body)
    {
        $this->body = $body;

        return $this;
    }

    public function send()
    {
        $dataMail = [
            'subject' => $this->getSubject(),
            'template' => $this->getTemplate(),
            'body' => $this->getBody()
        ];
        Mail::to($this->getToEmail())
            ->send(new SendMail($dataMail));
    }
}
