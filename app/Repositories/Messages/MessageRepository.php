<?php

namespace App\Repositories\Messages;

use App\Models\Message;
use \Exception;

class MessageRepository
{
    /**
     * @param array $params
     * @return mixed
     */
    public function findAll(array $params)
    {
        $isReading = $params['is_reading'];
        $email = $params['email'];
        $name = $params['name'];
        $data = Message::orderBy('id', $params['ordering'] ?? config('app.df.ordering'));
        if (!empty($isReading))
            $data->where('is_reading', $isReading);
        if (!empty($email))
            $data->where('email', $email);
        if (!empty($name))
            $data->where('name', 'like', '%' . $name . '%');
        return $data->paginate($params['pagination'] ?? config('app.df.pagination'));
    }

    /**
     * @param int $messageId
     * @return mixed
     * @throws Exception
     */
    public function findById(int $messageId)
    {
        $item = Message::find($messageId);
        if (empty($item))
            throw new Exception(trans('exceptions.no_found'));
        return $item;
    }
}
