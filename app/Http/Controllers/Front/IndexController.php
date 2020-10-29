<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Http\Resources\Shipments\ShipmentResource;
use App\Repositories\Shipments\ShipmentRepository;
use Illuminate\Http\Request;
use \Exception;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use \Illuminate\Http\JsonResponse;

class IndexController extends Controller
{
    /**
     * @var ShipmentRepository
     */
    private $shipmentRepository;

    /**
     * @param ShipmentRepository $shipmentRepository
     */
    public function __construct(ShipmentRepository $shipmentRepository)
    {
        $this->shipmentRepository = $shipmentRepository;
    }

    public function index()
    {
        return view('index');
    }

    /**
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function getShipments()
    {
        try {
            $data = $this->shipmentRepository->findAll([]);
            return ShipmentResource::collection($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
