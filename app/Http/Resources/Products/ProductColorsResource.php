<?php

namespace App\Http\Resources\Products;

use App\Helpers\Images;
use Illuminate\Http\Resources\Json\JsonResource;
use \Illuminate\Http\Request;

class ProductColorsResource extends JsonResource
{
    /**
     * @param Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'hex' => $this->hex,
            'name' => $this->name,
            'locale' => Images::getLocaleFlag($this->locale),
            'locale_key' => $this->locale
        ];
    }
}
