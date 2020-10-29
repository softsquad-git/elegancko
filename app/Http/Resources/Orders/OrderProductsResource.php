<?php

namespace App\Http\Resources\Orders;

use App\Http\Resources\Products\ProductColorsResource;
use App\Http\Resources\Products\ProductSizesResource;
use App\Http\Resources\Products\ProductsResource;
use Illuminate\Http\Resources\Json\JsonResource;
use \Illuminate\Http\Request;

class OrderProductsResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'order_id' => $this->order_id,
            'product' => new ProductsResource($this->product),
            'size' => new ProductSizesResource($this->size),
            'color' => new ProductColorsResource($this->color)
        ];
    }
}
