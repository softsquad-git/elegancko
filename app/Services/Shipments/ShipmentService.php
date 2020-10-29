<?php

namespace App\Services\Shipments;

use App\Models\Shipment;
use App\Repositories\Shipments\ShipmentRepository;
use \Exception;

class ShipmentService
{
    /**
     * @var ShipmentRepository
     */
    private $shipmentRepository;

    /**
     * @param array $data
     * @return mixed
     * @throws Exception
     */
    public function store(array $data)
    {
        $item = Shipment::create($data);
        if (empty($item))
            throw new Exception(trans('exceptions.no_created'));
        return $item;
    }

    /**
     * @param array $data
     * @param int $shipmentId
     * @return mixed
     * @throws Exception
     */
    public function update(array $data, int $shipmentId)
    {
        $item = $this->shipmentRepository->findById($shipmentId);
        $item->update($data);
        return $item;
    }

    /**
     * @param int $shipmentId
     * @return bool|null
     * @throws Exception
     */
    public function remove(int $shipmentId): ?bool
    {
        return $this->shipmentRepository->findById($shipmentId)->delete();
    }
}
