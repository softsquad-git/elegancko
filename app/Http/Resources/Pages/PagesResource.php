<?php

namespace App\Http\Resources\Pages;

use App\Helpers\Images;
use Illuminate\Http\Resources\Json\JsonResource;

class PagesResource extends JsonResource
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
            'id' => $this->id,
            'title' => $this->title,
            'position' => $this->position,
            'is_active' => $this->is_active,
            'locale' => Images::getLocaleFlag($this->locale),
            'created_at' => (string)$this->created_at
        ];
    }
}
