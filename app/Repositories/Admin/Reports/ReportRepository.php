<?php

namespace App\Repositories\Admin\Reports;

use App\Helpers\Status;
use App\Models\Message;
use App\Models\Orders\Order;
use App\Models\User;
use App\Services\Orders\OrderPaymentService;
use App\Services\Orders\OrderService;

class ReportRepository
{
    /**
     * @return array
     */
    public function reportUsers(): array
    {
        $users = User::all();
        $countUsers = count($users);
        $countUsersActive = 0;
        $countUsersLock = 0;
        $countUsersAdmin = 0;
        foreach ($users as $user) {
            if ($user->is_activated == Status::STATUS_ON)
                $countUsersActive ++;
            if ($user->role == config('app.users.roles.admin'))
                $countUsersAdmin ++;
        }
        return [
            'count_users' => $countUsers,
            'count_users_active' => $countUsersActive,
            'count_users_lock' => $countUsersLock,
            'count_users_admin' => $countUsersAdmin
        ];
    }

    /**
     * @return array
     */
    public function reportOrders(): array
    {
        $orders = Order::all();
        $countOrders = count($orders);
        $countOrdersPaymentFinish = 0;
        $countOrdersFinish = 0;
        $countOrdersProfit = 0;
        $countReturns = 0;
        foreach ($orders as $order) {
            if ($order->payment->status == OrderPaymentService::PAYMENT_STATUS['FINISHED'])
                $countOrdersPaymentFinish ++;
            if ($order->status == OrderService::ORDER_STATUS['FINISHED'])
                $countOrdersFinish ++;
            $countOrdersProfit += $order->total_price;
        }
        return [
            'count_orders' => $countOrders,
            'count_orders_payment_finish' => $countOrdersPaymentFinish,
            'count_orders_finish' => $countOrdersFinish,
            'count_orders_profit' => $countOrdersProfit,
            'count_returns' => $countReturns
        ];
    }

    /**
     * @return array
     */
    public function reportMessages(): array
    {
        $messages = Message::all();
        $countMessages = count($messages);
        $countReadingMessages = 0;
        $countSendMessages = 0;
        $countMessagesReceived = 0;
        foreach ($messages as $message) {
            if ($message->is_reading == Status::STATUS_ON)
                $countReadingMessages ++;
            if ($message->email == config('app.emails.mail'))
                $countMessagesReceived ++;
            else
                $countSendMessages ++;
        }
        return [
            'count_messages' => $countMessages,
            'count_reading_messages' => $countReadingMessages,
            'count_send_messages' => $countSendMessages,
            'count_received_messages' => $countMessagesReceived
        ];
    }
}
