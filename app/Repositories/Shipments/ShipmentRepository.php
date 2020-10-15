<?php

namespace App\Repositories\Shipments;

use App\Models\Shipment;
use Illuminate\Support\Facades\App;
use \Exception;

class ShipmentRepository
{
    /**
     * @param array $params
     * @return mixed
     */
    public function findAll(array $params)
    {
        return Shipment::orderBy('id', $params['ordering'] ?? config('app.df.ordering'))
            ->where('locale', App::getLocale())
            ->paginate($params['pagination'] ?? config('app.df.pagination'));
    }

    /**
     * @param int $shipmentId
     * @return mixed
     * @throws Exception
     */
    public function findById(int $shipmentId)
    {
        $item = Shipment::find($shipmentId);
        if (empty($item))
            throw new Exception(trans('exceptions.no_found'));
        return $item;
    }
}
