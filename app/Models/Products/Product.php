<?php

namespace App\Models\Products;

use App\Models\Category;
use App\Models\Images\Image;
use App\Models\Shipment;
use App\Services\Products\ProductService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;
use \Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = [
        'title',
        'description',
        'category_id',
        'content',
        'is_activated',
        'locale',
        'price',
        'type'
    ];

    /**
     * @return BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * @return BelongsToMany
     */
    public function colors()
    {
        return $this->belongsToMany(ProductColor::class,
            'product_color', 'product_id', 'color_id');
    }

    /**
     * @return BelongsToMany
     */
    public function sizes()
    {
        return $this->belongsToMany(ProductSize::class,
            'product_size', 'product_id', 'size_id');
    }

    /**
     * @return BelongsToMany
     */
    public function shipments()
    {
        return $this->belongsToMany(Shipment::class,
            'product_shipment', 'product_id', 'shipment_id');
    }

    public function images()
    {
        return $this->hasMany(Image::class, 'resource_id')
            ->where('resource_type', ProductService::RESOURCE_TYPE);
    }
}
