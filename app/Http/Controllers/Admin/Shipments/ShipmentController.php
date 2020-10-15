<?php

namespace App\Http\Controllers\Admin\Shipments;

use App\Http\Controllers\Controller;
use App\Http\Requests\Shipments\ShipmentRequest;
use App\Http\Resources\Shipments\ShipmentResource;
use App\Repositories\Shipments\ShipmentRepository;
use App\Services\Shipments\ShipmentService;
use Illuminate\Http\Request;
use \Exception;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use \Illuminate\Http\JsonResponse;

class ShipmentController extends Controller
{
    /**
     * @var ShipmentService
     */
    private $shipmentService;

    /**
     * @var ShipmentRepository
     */
    private $shipmentRepository;

    /**
     * @param ShipmentRepository $shipmentRepository
     * @param ShipmentService $shipmentService
     */
    public function __construct(ShipmentRepository $shipmentRepository, ShipmentService $shipmentService)
    {
        $this->shipmentRepository = $shipmentRepository;
        $this->shipmentService = $shipmentService;
    }

    /**
     * @param Request $request
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $params = [
            'ordering' => $request->get('ordering'),
            'pagination' => $request->get('pagination')
        ];
        try {
            $data = $this->shipmentRepository->findAll($params);
            return ShipmentResource::collection($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param ShipmentRequest $request
     * @return JsonResponse
     */
    public function create(ShipmentRequest $request): JsonResponse
    {
        try {
            $this->shipmentService->store($request->all());
            return $this->successResponse(trans('messages.created'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param ShipmentRequest $request
     * @param int $shipmentId
     * @return JsonResponse
     */
    public function update(ShipmentRequest $request, int $shipmentId): JsonResponse
    {
        try {
            $this->shipmentService->update($request->all(), $shipmentId);
            return $this->successResponse(trans('messages.updated'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param int $shipmentId
     * @return JsonResponse
     */
    public function remove(int $shipmentId): JsonResponse
    {
        try {
            $this->shipmentService->remove($shipmentId);
            return $this->successResponse(trans('messages.removed'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
