<?php

namespace App\Http\Resources\Meta;

use Illuminate\Http\Resources\Json\JsonResource;
use \Illuminate\Http\Request;

class MetaResource extends JsonResource
{
    /**
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'title' => $this->title
                ? $this->title
                : config('app.df.meta.title'),
            'description' => $this->description
                ? $this->description
                : config('app.df.meta.description'),
            'keywords' => $this->keywords
                ? $this->keywords
                : config('app.df.meta.keywords')
        ];
    }
}
