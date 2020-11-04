<?php

namespace App\Http\Controllers\User\Orders;

use App\Http\Controllers\Controller;
use App\Http\Resources\Orders\OrderResource;
use App\Repositories\Orders\OrderRepository;
use Illuminate\Http\Request;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\JsonResponse;
use \Exception;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    /**
     * @var OrderRepository
     */
    private $orderRepository;

    /**
     * @param OrderRepository $orderRepository
     */
    public function __construct(OrderRepository $orderRepository)
    {
        $this->orderRepository = $orderRepository;
    }

    /**
     * @param Request $request
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        try {
            $params = [
                'email' => Auth::user()->email,
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
    public function findOrderById(int $orderId)
    {
        try {
            $item = $this->orderRepository->findOrder($orderId);
            return new OrderResource($item);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
