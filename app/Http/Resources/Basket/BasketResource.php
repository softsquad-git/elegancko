<?php

namespace App\Http\Resources\Basket;

use App\Helpers\Images;
use App\Http\Resources\Products\ProductColorsResource;
use App\Http\Resources\Products\ProductSizesResource;
use App\Services\Products\ProductService;
use Illuminate\Http\Resources\Json\JsonResource;
use \Illuminate\Http\Request;

class BasketResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'product' => [
                'id' => $this->product_id,
                'image' => Images::find($this->product_id, ProductService::RESOURCE_TYPE),
                'title' => $this->product->title
            ],
            'size' => new ProductSizesResource($this->size),
            'color' => new ProductColorsResource($this->color)
        ];
    }
}
