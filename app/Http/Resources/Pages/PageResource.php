<?php

namespace App\Http\Resources\Pages;

use App\Http\Resources\Meta\MetaResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PageResource extends JsonResource
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
        $data['meta'] = new MetaResource($this->meta);
        return $data;
    }
}
