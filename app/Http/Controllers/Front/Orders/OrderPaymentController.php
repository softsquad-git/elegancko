<?php

namespace App\Http\Controllers\Front\Orders;

use App\Http\Controllers\Controller;
use App\Http\Requests\Orders\OrderPaymentRequest;
use App\Repositories\Orders\OrderPaymentRepository;
use App\Repositories\Orders\OrderRepository;
use App\Services\Orders\OrderPaymentService;
use App\Services\Payments\PaymentService;
use \Exception;
use \Illuminate\Http\JsonResponse;

class OrderPaymentController extends Controller
{
    /**
     * @var OrderPaymentRepository
     */
    private $orderPaymentRepository;

    /**
     * @var OrderPaymentService
     */
    private $orderPaymentService;

    /**
     * @var PaymentService
     */
    protected $paymentService;

    /**
     * @var OrderRepository
     */
    private $orderRepository;

    /**
     * @param OrderPaymentService $orderPaymentService
     * @param OrderPaymentRepository $orderPaymentRepository
     * @param PaymentService $paymentService
     * @param OrderRepository $orderRepository
     */
    public function __construct(
        OrderPaymentService $orderPaymentService,
        OrderPaymentRepository $orderPaymentRepository,
        PaymentService $paymentService,
        OrderRepository $orderRepository
    )
    {
        $this->orderPaymentRepository = $orderPaymentRepository;
        $this->orderPaymentService = $orderPaymentService;
        $this->paymentService = $paymentService;
        $this->orderRepository = $orderRepository;
    }

    /**
     * @param OrderPaymentRequest $request
     * @return JsonResponse
     */
    public function create(OrderPaymentRequest $request)
    {
        try {
            $data = $request->all();
            $order = $this->orderRepository->findOrderByToken($data['order_token']);
            $data['order_id'] = $order->id;
            $item = $this->orderPaymentService->create($data);
            if ($item->payment_type == $this->orderPaymentService::PAYMENT_TYPE_HOME) {
                return response()->json([
                    'success' => 1,
                    'payment_type' => $item->payment_type
                ]);
            } elseif ($item->payment_type == $this->orderPaymentService::PAYMENT_TYPE_PAYU) {
                return response()->json([
                    'success' => 1,
                    'payment_type' => $item->payment_type,
                    'payload' => json_decode($this->paymentService->pay($item))
                ]);
            } else {
                return $this->successResponse(trans('messages.created'));
            }
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
