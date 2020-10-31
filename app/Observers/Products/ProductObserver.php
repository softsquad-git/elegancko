<?php

namespace App\Observers\Products;

use App\Models\Products\Product;

class ProductObserver
{
    /**
     * @param Product $product
     */
    public function deleted(Product $product)
    {
        $product->images()->delete();
        $product->meta()->delete();
    }
}
