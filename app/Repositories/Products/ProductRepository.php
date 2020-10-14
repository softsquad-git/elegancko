<?php

namespace App\Repositories\Products;
use App\Helpers\Status;
use App\Models\Products\Product;
use \Exception;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

class ProductRepository
{
    /**
     * @param array $params
     * @return mixed
     */
    public function findAll(array $params)
    {
        $title = $params['title'];
        $category = $params['category_id'];
        $activated = $params['is_activated'];
        if (Auth::user()->role != config('app.user.roles.admin'))
            $activated = Status::STATUS_ON;
        $data = Product::where('locale', App::getLocale())
            ->orderBy('id', $params['ordering'] ?? config('app.df.ordering'));
        if (!empty($title))
            $data->where('title', 'like' . '%' . $title . '%');
        if (!empty($category))
            $data->where('category_id', $category);
        if (!empty($activated))
            $data->where('is_activated', $activated);

        return $data->paginate($params['pagination'] ?? config('app.df.pagination'));
    }

    /**
     * @param int $productId
     * @return mixed
     * @throws Exception
     */
    public function findById(int $productId)
    {
        $item = Product::find($productId);
        if (empty($item))
            throw new Exception(trans('exceptions.no_found'));
        return $item;
    }
}
