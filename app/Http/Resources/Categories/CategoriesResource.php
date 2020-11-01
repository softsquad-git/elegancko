<?php

namespace App\Http\Resources\Categories;

use App\Helpers\Images;
use App\Helpers\Status;
use App\Services\Categories\CategoryService;
use App\Services\Products\ProductService;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoriesResource extends JsonResource
{
    public function toArray($request)
    {
        if (!empty($this->image()))
            $image = Images::find($this->id, CategoryService::RESOURCE_TYPE);
        else
            $image = Images::find($this->products()->first()->id, ProductService::RESOURCE_TYPE);
        $data = [];
        $data['id'] = $this->id;
        $data['name'] = $this->name;
        $data['alias'] = $this->alias;
        $data['image'] = $image;
        $data['locale'] = Images::getLocaleFlag($this->locale);
        $data['created_at'] = (string)$this->created_at;
        $data['c_products'] = count($this->products);
        $data['activated'] = $this->is_active== Status::STATUS_ON ? true : false;
        return $data;
    }
}
