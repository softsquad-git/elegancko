<?php

namespace App\Repositories\Products;

use App\Models\Products\ProductColor;
use \Exception;

class ProductColorRepository
{
    /**
     * @param array $params
     * @return mixed
     */
    public function findAll(array $params)
    {
        return ProductColor::orderBy('id', $params['ordering'] ?? config('app.df.ordering'))
            ->paginate($params['pagination'] ?? config('app.df.pagination'));
    }

    /**
     * @param int $colorId
     * @return mixed
     * @throws Exception
     */
    public function findById(int $colorId)
    {
        $item = ProductColor::find($colorId);
        if (empty($item))
            throw new Exception(trans('exceptions.no_found'));
        return $item;
    }
}
