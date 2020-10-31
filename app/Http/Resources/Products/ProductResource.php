<?php

namespace App\Http\Resources\Products;

use App\Helpers\Status;
use App\Http\Resources\Meta\MetaResource;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\App;

class ProductResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'category' => [
                'id' => $this->category_id,
                'name' => $this->category->name,
                'alias' => $this->category->alias
            ],
            'content' => $this->content,
            'locale' => $this->locale,
            'desc' => $this->description,
            'created_at' => (string)$this->created_at,
            'colors' => $this->colors,
            'sizes' => $this->sizes,
            'images' => ProductImagesResource::collection($this->images),
            'price' => [
                'price' => $this->price->price,
                'currency' => $this->price->currency,
                'old' => $this->price->old_price
            ],
            'type' => [
                'name' => Status::checkTypeProduct($this->type),
                'id' => $this->type
            ],
            'shipments' => $this->shipments,
            'meta' => new MetaResource($this->meta)
        ];
    }
}
