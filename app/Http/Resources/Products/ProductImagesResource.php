<?php

namespace App\Http\Resources\Products;

use App\Helpers\Images;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductImagesResource extends JsonResource
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
            'src' => Images::getPath($this->resource_id, $this->resource_type, $this->src)
        ];
    }
}
