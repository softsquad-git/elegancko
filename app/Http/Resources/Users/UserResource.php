<?php

namespace App\Http\Resources\Users;

use App\Helpers\Images;
use App\Helpers\Status;
use App\Services\Users\UserService;
use Illuminate\Http\Resources\Json\JsonResource;
use \Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserResource extends JsonResource
{
    /**
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => [
                'first' => $this->name,
                'last' => $this->last_name,
                'full' => $this->getFullName()
            ],
            'email' => $this->email,
            'avatar' => Images::find($this->id, UserService::RESOURCE_TYPE),
            'created_at' => (string)$this->created_at,
            'is_activated' => $this->is_activated == Status::STATUS_ON ? true : false,
            'role' => Auth::user()->role == config('app.users.roles.admin') ? 'admin' : '',
            'c_orders' => 0,
            'c_messages' => 0,
            'city' => $this->city,
            'post_code' => $this->post_code,
            'address' => $this->address,
            'phone' => $this->phone
        ];
    }
}
