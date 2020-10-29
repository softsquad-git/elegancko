<?php

namespace App\Repositories\Products;

use App\Helpers\Status;
use App\Models\Products\Product;
use \Exception;
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
        $category = $params['category'];
        $activated = $params['is_activated'];
        $locale = $params['locale'];
        $type = $params['type'];
        $ordering = $params['ordering'];
        if (Auth::check() && Auth::user()->role != config('app.user.roles.admin'))
            $activated = Status::STATUS_ON;
        else if (!Auth::check())
            $activated = Status::STATUS_ON;
        $orderBy = [
            'file' => '',
            'sort' => ''
        ];
        if (!empty($ordering)) {
            if ($ordering == 'ASC' || $ordering == 'DESC') {
              $orderBy['file'] = 'id';
              $orderBy['sort'] = $ordering;
            } else {
                if ($ordering == 'PRICE_MIN') {
                    $orderBy['file'] = 'price';
                    $orderBy['sort'] = 'ASC';
                } else {
                    $orderBy['file'] = 'price';
                    $orderBy['sort'] = 'DESC';
                }
            }
        } else {
            $orderBy['file'] = 'id';
            $orderBy['sort'] = config('app.df.ordering');
        }
        $data = Product::orderBy($orderBy['file'], $orderBy['sort']);
        if (!empty($title))
            $data->where('title', 'like' . '%' . $title . '%');
        if (!empty($category)) {
            if (is_numeric($category))
                $data->where('category_id', $category);
            else
                $data->whereHas('category', function ($q) use ($category) {
                   $q->where('alias', $category);
                });
        }
        if (!empty($activated))
            $data->where('is_activated', $activated);
        if (!empty($locale))
            $data->where('locale', $locale);
        if (!empty($type))
            $data->where('type', $type);

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

    /**
     * @param array $productsIds
     * @return mixed
     */
    public function findByIds(array $productsIds): array
    {
        return Product::whereIn('id', $productsIds)
            ->orderBy('id', config('app.df.ordering'))
            ->get();
    }
}
