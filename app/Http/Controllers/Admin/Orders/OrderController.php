<?php

namespace App\Http\Controllers\Admin\Orders;

use App\Http\Controllers\Controller;
use App\Http\Requests\Orders\OrderRequest;
use App\Http\Resources\Orders\OrderProductsResource;
use App\Http\Resources\Orders\OrderResource;
use App\Http\Resources\Products\ProductsResource;
use App\Repositories\Orders\OrderRepository;
use App\Services\Orders\OrderService;
use Illuminate\Http\Request;
use \Exception;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use \Illuminate\Http\JsonResponse;

class OrderController extends Controller
{
    /**
     * @var OrderRepository
     */
    private $orderRepository;

    /**
     * @var OrderService
     */
    private $orderService;

    /**
     * @param OrderRepository $orderRepository
     * @param OrderService $orderService
     */
    public function __construct(OrderRepository $orderRepository, OrderService $orderService)
    {
        $this->orderRepository = $orderRepository;
        $this->orderService = $orderService;
    }

    /**
     * @param Request $request
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        try {
            $params = [
                'email' => $request->get('email'),
                'status' => $request->get('status'),
                'payment_status' => $request->get('payment_status'),
                'ordering' => $request->get('ordering'),
                'pagination' => $request->get('pagination')
            ];
            $data = $this->orderRepository->findAll($params);
            return OrderResource::collection($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
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
     * @param int $orderId
     * @return JsonResponse
     */
    public function update(OrderRequest $request, int $orderId)
    {
        try {
            $this->orderService->update($request->all(), $orderId);
            return $this->successResponse(trans('messages.updated'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param int $orderId
     * @return JsonResponse
     */
    public function remove(int $orderId)
    {
        try {
            $this->orderService->remove($orderId);
            return $this->successResponse(trans('messages.removed'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param int $orderId
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function findAllOrderProducts(int $orderId)
    {
        try {
            $data = $this->orderRepository->findOrder($orderId)
                ->products()
                ->get();
            return OrderProductsResource::collection($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
