<?php

namespace App\Models\Orders;

use App\Models\Products\Product;
use App\Models\Products\ProductColor;
use App\Models\Products\ProductSize;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;

class OrderProduct extends Model
{
    use HasFactory;

    protected $table = 'order_products';

    public $timestamps = false;

    protected $fillable = [
        'order_id',
        'product_id',
        'quantity',
        'color_id',
        'size_id'
    ];

    /**
     * @return BelongsTo
     */
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    /**
     * @return BelongsTo
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * @return BelongsTo
     */
    public function color()
    {
        return $this->belongsTo(ProductColor::class);
    }

    /**
     * @return BelongsTo
     */
    public function size()
    {
        return $this->belongsTo(ProductSize::class);
    }
}
