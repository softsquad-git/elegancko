<?php

namespace App\Repositories\Orders;

use App\Models\Orders\Order;
use \Exception;

class OrderRepository
{
    /**
     * @param int $orderId
     * @return mixed
     * @throws Exception
     */
    public function findOrder(int $orderId)
    {
        $item = Order::find($orderId);
        if (!empty($item))
            return $item;
        throw new Exception(trans('exceptions.no_found'));
    }

    /**
     * @param array $params
     * @return mixed
     */
    public function findAll(array $params)
    {
        $email = $params['email'];
        $status = $params['status'];
        $paymentStatus = $params['payment_status'];
        $data = Order::orderBy('id', $params['ordering'] ?? config('app.df.ordering'));
        if (!empty($email))
            $data->where('email', $email);
        if (!empty($status))
            $data->where('status', $status);
        if (!empty($paymentStatus))
            $data->whereHas('payment', function ($q) use ($paymentStatus) {
                $q->where('status', $paymentStatus);
            });
        return $data->paginate($params['pagination'] ?? config('app.df.pagination'));
    }

    /**
     * @param string $token
     * @return mixed
     * @throws Exception
     */
    public function findOrderByToken(string $token)
    {
        $item = Order::where('token', $token)->first();
        if (!empty($item))
            return $item;
        throw new Exception(trans('exceptions.no_found'));
    }
}
