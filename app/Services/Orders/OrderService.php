<?php

namespace App\Services\Orders;

use App\Interfaces\MailInterface;
use App\Models\Orders\Order;
use App\Models\Orders\OrderProduct;
use App\Repositories\Orders\OrderRepository;
use App\Repositories\Products\ProductRepository;
use App\Repositories\Shipments\ShipmentRepository;
use Illuminate\Support\Facades\DB;
use \Exception;
use Illuminate\Support\Str;

class OrderService
{
    /**
     * 1-złożono zamówienie
     * 2-przyjęto do realizacji
     * 3-oczekuje na nadanie
     * 4-przesyłka wysłana
     * 5-zakończone
     */
    public const ORDER_STATUS = [
        'ORDER_PLACED' => 1,
        'ACCEPTED' => 2,
        'WAITING' => 3,
        'SENT' => 4,
        'FINISHED' => 5
    ];
    /**
     * @var OrderRepository
     */
    private $orderRepository;

    /**
     * @var MailInterface
     */
    private $mailInterface;

    /**
     * @var ShipmentRepository
     */
    private $shipmentRepository;

    /**
     * @var ProductRepository
     */
    private $productRepository;

    public function __construct(
        OrderRepository $orderRepository,
        ShipmentRepository $shipmentRepository,
        ProductRepository $productRepository,
        MailInterface $mailInterface
    )
    {
        $this->orderRepository = $orderRepository;
        $this->shipmentRepository = $shipmentRepository;
        $this->productRepository = $productRepository;
        $this->mailInterface = $mailInterface;
    }

    /**
     * @param array $data
     * @return mixed
     * @throws Exception
     */
    public function create(array $data)
    {
       DB::beginTransaction();
        try {
            $shipment = $this->shipmentRepository->findById($data['shipment_id']);

            $data['total_price'] = 0;
            $data['token'] = Str::random(64);

            $order = Order::create($data);
            $totalPriceProduct = null;
            foreach ($data['products'] as $datum) {
                $product = $this->productRepository->findById($datum['product_id']);
                $totalPrice = $product->price->price * $datum['quantity'];
                OrderProduct::create([
                    'order_id' => $order->id,
                    'product_id' => $product->id,
                    'quantity' => $datum['quantity'],
                    'color_id' => $datum['color_id'],
                    'size_id' => $datum['size_id']
                ]);
                $totalPriceProduct += $totalPrice;
            }
            $totalPrice = $totalPriceProduct + $shipment->price;
            $order->update([
                'total_price' => $totalPrice
            ]);
            $this->mailInterface
                ->setSubject(trans('mail.orders.created'))
                ->setTemplate('orders.created')
                ->setToEmail($order->email)
                ->setBody([
                    'order' => $order
                ])
                ->send();
            DB::commit();
            return $order;
        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception($e->getMessage());
        }
    }

    /**
     * @param array $data
     * @param int $orderId
     * @return mixed
     * @throws Exception
     */
    public function update(array $data, int $orderId)
    {
        $item = $this->orderRepository->findOrder($orderId);
        $item->update($data);
        if (!empty($data['payment_status']))
            $item->payment()->update(['status' => $data['payment_status']]);
        return $item;
    }

    /**
     * @param int $orderId
     * @return bool|null
     * @throws Exception
     */
    public function remove(int $orderId): ?bool
    {
        return $this->orderRepository->findOrder($orderId)->delete();
    }

    /**
     * TODO
     * sprawdzić działanie na serwerze klienta
     * status ma się aktualizować po udanej płatności
     * @param string $token
     * @return mixed
     * @throws Exception
     */
    public function updateStatus(string $token)
    {
        $item = $this->orderRepository->findOrderByToken($token);
        $item->update(['status' => self::ORDER_STATUS['ACCEPTED']]);
        $item->payment()->update(['status' => OrderPaymentService::PAYMENT_STATUS['FINISHED']]);
        return $item;
    }
}
