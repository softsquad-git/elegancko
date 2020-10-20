<?php

namespace App\Models;

use App\Models\Products\Product;
use App\Models\Products\ProductColor;
use App\Models\Products\ProductSize;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;

class Basket extends Model
{
    use HasFactory;

    protected $table = 'basket';

    protected $fillable = [
        'product_id',
        'size_id',
        'color_id',
        'user_id'
    ];

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
    public function size()
    {
        return $this->belongsTo(ProductSize::class);
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
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
