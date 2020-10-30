<?php

namespace App\Http\Resources\Messages;

use App\Helpers\Status;
use Illuminate\Http\Resources\Json\JsonResource;

class MessagesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $data = parent::toArray($request);
        if ($this->email == config('app.emails.email'))
            $to = Status::STATUS_ON;
        else
            $to = Status::STATUS_OFF;
        $data['to'] = [
            'stat' => $to,
            'txt' => $to == Status::STATUS_ON ? 'Do' : 'Od'
        ];
        $data['reading'] = [
            'key' => $this->is_reading,
            'txt' => $this->is_reading == Status::STATUS_ON ? 'Tak' : 'Nie'
        ];
        return $data;
    }
}
