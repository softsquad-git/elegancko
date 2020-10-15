<?php

namespace App\Http\Resources\Categories;

use App\Helpers\Status;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoriesResource extends JsonResource
{
    public function toArray($request)
    {
        $data = [];
        $data['id'] = $this->id;
        $data['name'] = $this->name;
        $data['alias'] = $this->alias;
        $data['image'] = 'https://www.expertdevelopment.pl/images/expertdevelopmentpl/552-wizytowa-sukienka-z-falban%C4%85-na-wesele-km66-12-pudrowy-r%C3%B3%C5%BC-%E2%9D%A4-kartes-moda-%E2%9D%A4-7185.jpg';
        $data['created_at'] = (string)$this->created_at;
        $data['c_products'] = count($this->products);
        $data['activated'] = $this->is_active== Status::STATUS_ON ? true : false;
        return $data;
    }
}
