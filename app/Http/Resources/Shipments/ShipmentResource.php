<?php

namespace App\Http\Resources\Shipments;

use App\Helpers\Images;
use Illuminate\Http\Resources\Json\JsonResource;

class ShipmentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $data = parent::toArray($request);
        $data['locale'] = Images::getLocaleFlag($this->locale);
        $data['locale_key'] = $this->locale;

        return $data;
    }
}
