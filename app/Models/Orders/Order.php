<?php

namespace App\Models\Orders;

use App\Models\Shipment;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;
use \Illuminate\Database\Eloquent\Relations\HasMany;
use \Illuminate\Database\Eloquent\Relations\HasOne;

class Order extends Model
{
    use HasFactory;

    protected $table = 'orders';

    protected $fillable = [
        'email',
        'name',
        'last_name',
        'total_price',
        'shipment_id',
        'post_code',
        'city',
        'address',
        'country',
        'type',
        'company_name',
        'nip',
        'number_phone',
        'comments',
        'status',
        'token'
    ];

    /**
     * @return BelongsTo
     */
    public function shipment()
    {
        return $this->belongsTo(Shipment::class);
    }

    /**
     * @return HasMany
     */
    public function products()
    {
        return $this->hasMany(OrderProduct::class, 'order_id');
    }

    /**
     * @return HasOne
     */
    public function payment()
    {
        return $this->hasOne(OrderPayment::class, 'order_id');
    }

    /**
     * @return string
     */
    public function getFullName(): string
    {
        return $this->name . ' ' . $this->last_name;
    }

    /**
     * @return string
     */
    public function getAddress(): string
    {
        return $this->post_code . ' ' . $this->city . ', ' . trans('lang.address.street') . '. ' . $this->address . ', ' . $this->country;
    }
}
