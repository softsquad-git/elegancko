<?php

namespace App\Http\Controllers\Front\Orders;

use App\Helpers\Status;
use App\Http\Controllers\Controller;
use App\Http\Requests\Orders\OrderRequest;
use App\Http\Resources\Orders\OrderResource;
use App\Repositories\Orders\OrderRepository;
use App\Services\Orders\OrderService;
use \Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class OrderController extends Controller
{
    /**
     * @var OrderService
     */
    private $orderService;

    /**
     * @var OrderRepository
     */
    private $orderRepository;

    /**
     * @param OrderService $orderService
     * @param OrderRepository $orderRepository
     */
    public function __construct(OrderService $orderService, OrderRepository $orderRepository)
    {
        $this->orderRepository = $orderRepository;
        $this->orderService = $orderService;
    }

    /**
     * @param int $orderId
     * @return OrderResource|JsonResponse
     */
    public function findById(int $orderId)
    {
        try {
            $item = $this->orderRepository->findOrder($orderId);
            return new OrderResource($item);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param OrderRequest $request
     * @return JsonResponse
     */
    public function create(OrderRequest $request): JsonResponse
    {
        try {
            $item = $this->orderService->create($request->all());
            return response()->json([
                'success' => Status::STATUS_ON,
                'msg' => trans('messages.created_order'),
                'order_id' => $item->id
            ]);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    public function updateStatus(string $token): JsonResponse
    {
        try {
            $this->orderService->updateStatus($token);
            return response()->json('');
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
