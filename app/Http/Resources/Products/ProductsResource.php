<?php

namespace App\Http\Resources\Products;

use App\Helpers\Images;
use App\Services\Products\ProductService;
use Illuminate\Http\Resources\Json\JsonResource;
use \Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class ProductsResource extends JsonResource
{

    /**
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'category' => [
                'id' => $this->category_id,
                'name' => $this->category->name,
                'alias' => $this->category->alias
            ],
            'price' => [
                'price' => $this->price,
                'currency' => App::getLocale() == 'pl' ? 'zł' : '$'
            ],
            'locale' => $this->locale,
            'created_at' => (string)$this->created_at,
            'image' => Images::find($this->id, ProductService::RESOURCE_TYPE)
        ];
    }
}
