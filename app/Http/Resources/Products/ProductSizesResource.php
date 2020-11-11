<?php

namespace App\Http\Resources\Products;

use App\Helpers\Images;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductSizesResource extends JsonResource
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
        $data['locale'] = Images::getLocaleFlag($this->locale);
        $data['locale_key'] = $this->locale;

        return $data;
    }
}
