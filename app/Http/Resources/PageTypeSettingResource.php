<?php

namespace App\Http\Resources;

use App\Helpers\Images;
use App\Services\Admin\Settings\AdminSettingService;
use Illuminate\Http\Resources\Json\JsonResource;

class PageTypeSettingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'resource_type' => $this->resource_type,
            'value' => $this->resource_type == AdminSettingService::ADMIN_SETTING_TEXT
                ? $this->value
                : Images::getPath($this->type_id, 'settings/'.$this->resource_type, $this->value)
        ];
    }
}
