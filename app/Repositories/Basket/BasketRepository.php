<?php

namespace App\Repositories\Basket;

use App\Models\Basket;
use Illuminate\Support\Facades\Auth;
use \Exception;

class BasketRepository
{
    /**
     * @param array $params
     * @return mixed
     */
    public function findAll(array $params)
    {
        return Basket::where('user_id', Auth::id())
            ->orderBy('id', $params['ordering'] ?? config('app.df.ordering'))
            ->paginate($params['pagination'] ?? config('app.df.pagination'));
    }

    /**
     * @param int $basketId
     * @return mixed
     * @throws Exception
     */
    public function findById(int $basketId)
    {
        $item = Basket::find($basketId);
        if (empty($item))
            throw new Exception(trans('exceptions.no_found'));
        return $item;
    }

    /**
     * @param array $ids
     * @return mixed
     */
    public function whereInByIds(array $ids)
    {
        return Basket::whereIn('id', $ids)->get();
    }
}
