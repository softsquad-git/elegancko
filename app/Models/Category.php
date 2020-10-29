<?php

namespace App\Models;

use App\Models\Images\Image;
use App\Models\Products\Product;
use App\Services\Categories\CategoryService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\HasMany;
use \Illuminate\Database\Eloquent\Relations\HasOne;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';

    protected $fillable = [
        'name',
        'alias',
        'parent_id',
        'position',
        'is_active',
        'locale',
    ];

    /**
     * @return HasMany
     */
    public function products()
    {
        return $this->hasMany(Product::class, 'category_id');
    }

    /**
     * @return HasOne
     */
    public function image()
    {
        return $this->hasOne(Image::class, 'resource_id', 'id')
            ->where('resource_type', CategoryService::RESOURCE_TYPE);
    }
}
