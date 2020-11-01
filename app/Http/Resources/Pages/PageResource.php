<?php

namespace App\Http\Resources\Pages;

use App\Http\Resources\Meta\MetaResource;
use Illuminate\Http\Resources\Json\JsonResource;
use \Illuminate\Http\Request;

class PageResource extends JsonResource
{
    /**
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        $data = parent::toArray($request);
        $data['meta'] = $this->meta
            ? new MetaResource($this->meta)
            : config('app.df.meta');
        return $data;
    }
}
