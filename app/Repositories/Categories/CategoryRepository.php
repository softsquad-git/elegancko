<?php

namespace App\Repositories\Categories;

use App\Helpers\Status;
use App\Models\Category;
use \Exception;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

class CategoryRepository
{
    /**
     * @param array $params
     * @return mixed
     */
    public function findAll(array $params)
    {
        $name = $params['name'];
        $alias = $params['alias'];
        $parentId = $params['parent_id'];
        $isActive = $params['is_active'];
        $data = Category::orderBy('id', $params['ordering'] ?? config('app.df.ordering'))
            ->where('locale', App::getLocale());
        if (!empty($name))
            $data->where('name', 'like' . '%' . $name . '%');
        if (!empty($alias))
            $data->where('alias', $alias);
        if (!empty($parentId))
            $data->where('parent_id', $parentId);
        if (!empty($isActive) && Auth::check() && Auth::user()->role == config('app.users.roles.admin'))
            $data->where('is_active', $isActive);
        else
            $data->where('is_active', Status::STATUS_ON);
        return $data->paginate($params['pagination'] ?? config('app.df.pagination'));
    }

    /**
     * @param string $alias
     * @return mixed
     * @throws Exception
     */
    public function findByAlias(string $alias)
    {
        $item = Category::where('alias', $alias)->first();
        if (empty($item))
            throw new Exception(trans('exception.no_found'));
        return $item;
    }

    /**
     * @param int $categoryId
     * @return mixed
     * @throws Exception
     */
    public function findById(int $categoryId)
    {
        $item = Category::find($categoryId);
        if (empty($item))
            throw new Exception(trans('exception.no_found'));
        return $item;
    }
}
