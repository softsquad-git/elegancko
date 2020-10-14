<?php

namespace App\Repositories\Products;

use App\Models\Products\ProductSize;
use \Exception;

class ProductSizeRepository
{
    /**
     * @param array $params
     * @return mixed
     */
    public function findAll(array $params)
    {
        return ProductSize::orderBy('id', $params['ordering'] ?? config('app.df.ordering'))
            ->paginate($params['pagination'] ?? config('app.df.pagination'));
    }

    /**
     * @param int $sizeId
     * @return mixed
     * @throws Exception
     */
    public function findById(int $sizeId)
    {
        $item = ProductSize::find($sizeId);
        if (empty($item))
            throw new Exception(trans('exceptions.no_found'));
        return $item;
    }
}
