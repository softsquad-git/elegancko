<?php

namespace App\Services\Payments;

use App\Models\Orders\OrderPayment;

class PaymentService
{
    /**
     * @var PaymentPayUService
     */
    private $paymentPayUService;

    public function __construct(PaymentPayUService $paymentPayUService)
    {
        $this->paymentPayUService = $paymentPayUService;
    }

    /**
     * @param OrderPayment $orderPayment
     * @return bool|string
     */
    public function pay(OrderPayment $orderPayment)
    {
        return $this->paymentPayUService
            ->setBuyerEmail($orderPayment->order->email)
            ->setDescription('Testowa płatność')
            ->setOrderToken($orderPayment->order->token)
            ->setTotalAmount($orderPayment->order->total_price)
            ->setBuyerPhone($orderPayment->order->number_phone)
            ->setBuyerFirstName($orderPayment->order->name)
            ->setBuyerLastName($orderPayment->order->last_name)
            ->pay();
    }
}
