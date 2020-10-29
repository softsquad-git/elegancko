<?php

namespace App\Services\Orders;

use App\Models\Orders\OrderPayment;
use App\Repositories\Orders\OrderPaymentRepository;
use App\Repositories\Orders\OrderRepository;
use \Exception;

class OrderPaymentService
{
    public const PAYMENT_TYPE_PAYU = 1;

    public const PAYMENT_TYPE_HOME = 2;

    public const PAYMENT_STATUS = [
        'STARTED' => 1,
        'FINISHED' => 2
    ];

    /**
     * @var OrderPaymentRepository
     */
    private $orderPaymentRepository;

    /**
     * @var OrderRepository
     */
    private $orderRepository;

    /**
     * @param OrderPaymentRepository $orderPaymentRepository
     * @param OrderRepository $orderRepository
     */
    public function __construct(OrderPaymentRepository $orderPaymentRepository, OrderRepository $orderRepository)
    {
        $this->orderPaymentRepository = $orderPaymentRepository;
        $this->orderRepository = $orderRepository;
    }

    /**
     * @param array $data
     * @return mixed
     * @throws Exception
     */
    public function create(array $data)
    {
        $itemByOrder = $this->orderPaymentRepository->findByOrderPayment($data['order_id']);
        if (!empty($itemByOrder))
            throw new Exception(trans('exceptions.order.no_empty'));
        if ($data['payment_type'] == self::PAYMENT_TYPE_HOME)
            $data['status'] = self::PAYMENT_STATUS['FINISHED'];
        elseif ($data['payment_type'] == self::PAYMENT_TYPE_PAYU)
            $data['status'] = self::PAYMENT_STATUS['STARTED'];
        $item = OrderPayment::create($data);
        if ($item->payment_type == self::PAYMENT_TYPE_HOME)
            $item->order()->update(['status' => OrderService::ORDER_STATUS['ACCEPTED']]);
        if (empty($item))
            throw new Exception(trans('exceptions.no_created'));
        return $item;
    }
}
