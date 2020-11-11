<?php

namespace App\Repositories\Shipments;

use App\Models\Shipment;
use Illuminate\Support\Facades\App;
use \Exception;
use Illuminate\Support\Facades\Auth;

class ShipmentRepository
{
    /**
     * @param array $params
     * @return mixed
     */
    public function findAll(array $params)
    {
        $data = Shipment::orderBy('id', $params['ordering'] ?? config('app.df.ordering'));
        if (Auth::user()->role != config('app.users.roles.admin'))
            $data->where('locale', App::getLocale());
        return $data->paginate($params['pagination'] ?? config('app.df.pagination'));
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
