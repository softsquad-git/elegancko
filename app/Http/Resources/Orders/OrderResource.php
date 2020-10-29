<?php

namespace App\Http\Resources\Orders;

use App\Services\Orders\OrderPaymentService;
use App\Services\Orders\OrderService;
use Illuminate\Http\Resources\Json\JsonResource;
use \Illuminate\Http\Request;

class OrderResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => [
                'first' => $this->name,
                'last' => $this->last_name,
                'full' => $this->name . ' ' . $this->last_name,
            ],
            'contact' => [
                'email' => $this->email,
                'phone' => $this->number_phone
            ],
            'price' => $this->total_price,
            'shipment' => [
                'id' => $this->shipment_id,
                'name' => $this->shipment->name,
                'address' => [
                    'country' => $this->country,
                    'post_code' => $this->post_code,
                    'city' => $this->city,
                    'address' => $this->address
                ]
            ],
            'type' => $this->type,
            'company' => [
                'name' => $this->company_name,
                'nip' => $this->nip
            ],
            'status' => [
                'key' => $this->status,
                'name' => $this->checkStatus($this->status),
                'payment' => [
                    'status' => [
                        'key' => $this->payment->status ?? null,
                        'name' => $this->checkStatusPayment($this->payment->status ?? 0)
                    ]
                ]
            ],
            'comments' => $this->comments,
            'created_at' => (string)$this->created_at
        ];
    }

    /**
     * @param int $status
     * @return string|null
     */
    private function checkStatus(int $status): ?string
    {
        switch ($status):
            case OrderService::ORDER_STATUS['ORDER_PLACED']:
                return 'Złożono zamówienie';
                break;
            case OrderService::ORDER_STATUS['ACCEPTED']:
                return 'Przyjęto do realizacji';
                break;
            case OrderService::ORDER_STATUS['WAITING']:
                return 'Oczekuje na nadanie';
                break;
            case OrderService::ORDER_STATUS['SENT']:
                return 'Przesyłka wysłana';
                break;
            case OrderService::ORDER_STATUS['FINISHED']:
                return 'Zakończone';
                break;
            default:
                return null;
                break;
        endswitch;
    }

    /**
     * @param int $status
     * @return string|null
     */
    public function checkStatusPayment(int $status): ?string
    {
        switch ($status):
            case OrderPaymentService::PAYMENT_STATUS['STARTED']:
                return 'Rozpoczęta';
                break;
            case OrderPaymentService::PAYMENT_STATUS['FINISHED']:
                return 'Zakończona';
                break;
            default:
                return null;
                break;
        endswitch;
    }
}
