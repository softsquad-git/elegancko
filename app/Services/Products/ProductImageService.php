<?php

namespace App\Services\Products;

use App\Models\Products\Product;
use Illuminate\Support\Str;
use \Exception;

class ProductImageService
{
    /**
     * @param array $images
     * @param Product $product
     * @return bool
     */
    public function upload(array $images, Product $product): bool
    {
        if (count($images) > 0) {
            $_bPath = config('app.df.assets') . '/' . ProductService::RESOURCE_TYPE . '/' . $product->id;
            foreach ($images as $image) {
                $fileName = md5(time() . Str::random(32)) . '.' . $image->getClientOriginalExtension();
                $image->move($_bPath, $fileName);
                $product->images()->create([
                    'resource_id' => $product->id,
                    'resource_type' => ProductService::RESOURCE_TYPE,
                    'src' => $fileName
                ]);
            }
            return true;
        }
        return false;
    }

    /**
     * @param Product $product
     * @param array $imagesIds
     * @return bool
     * @throws Exception
     */
    public function remove(Product $product, array $imagesIds): bool
    {
        $product->images()->whereIn('id', $imagesIds)->each(function ($image) {
            $image->delete();
        });
        return true;
    }
}
