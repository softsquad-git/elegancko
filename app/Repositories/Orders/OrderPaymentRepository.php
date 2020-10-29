<?php

namespace App\Repositories\Orders;

use \Exception;
use App\Models\Orders\OrderPayment;

class OrderPaymentRepository
{
    /**
     * @param int $paymentId
     * @return mixed
     * @throws Exception
     */
    public function findPayment(int $paymentId)
    {
        $item = OrderPayment::find($paymentId);
        if (empty($item))
            throw new Exception(trans('exceptions.no_found'));
        return $item;
    }

    /**
     * @param int $orderId
     * @return mixed
     */
    public function findByOrderPayment(int $orderId)
    {
        return OrderPayment::where('order_id', $orderId)
            ->first();
    }
}
