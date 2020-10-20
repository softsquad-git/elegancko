<?php

namespace App\Http\Resources\Admin\Settings;

use Illuminate\Http\Resources\Json\JsonResource;
use \Illuminate\Http\Request;

class AdminSettingResource extends JsonResource
{

    /**
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'type' => [
                'id' => $this->type_id,
                'name' => $this->type->name
            ],
            'value' => $this->value
        ];
    }
}
