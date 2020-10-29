<?php

namespace App\Http\Resources\Admin\Settings;

use App\Helpers\Images;
use App\Services\Admin\Settings\AdminSettingService;
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
        if ($this->resource_type === AdminSettingService::ADMIN_SETTING_FILE)
            $this->value = Images::getPath($this->type_id, 'settings/'.$this->resource_type, $this->value);
        return [
            'id' => $this->id,
            'type' => [
                'id' => $this->type_id,
                'key' => $this->type->_key,
                'name' => $this->type->name
            ],
            'resource_type' => $this->resource_type,
            'value' => $this->value
        ];
    }
}
