<?php

namespace App\Http\Resources\Categories;

use App\Helpers\Images;
use App\Services\Categories\CategoryService;
use App\Services\Products\ProductService;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        if (!empty($this->image()))
            $image = Images::find($this->id, CategoryService::RESOURCE_TYPE);
        else
            $image = Images::find($this->products()->first()->id, ProductService::RESOURCE_TYPE);
        $data = parent::toArray($request);
        $data['image'] = $image;
        return $data;
    }
}
