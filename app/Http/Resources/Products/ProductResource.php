<?php

namespace App\Http\Resources\Products;

use App\Helpers\Status;
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
                'name' => $this->category->name
            ],
            'content' => $this->content,
            'desc' => $this->description,
            'created_at' => (string)$this->created_at,
            'colors' => $this->colors,
            'sizes' => $this->sizes,
            'images' => ProductImagesResource::collection($this->images),
            'price' => [
                'price' => $this->price,
                'currency' => App::getLocale() == 'pl' ? 'zł' : '$'
            ],
            'type' => Status::checkTypeProduct($this->type)
        ];
    }
}
