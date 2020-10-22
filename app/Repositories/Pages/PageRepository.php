<?php

namespace App\Repositories\Pages;

use App\Helpers\Status;
use App\Models\Page;
use \Exception;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

class PageRepository
{
    /**
     * @param array $params
     * @return mixed
     */
    public function findAll(array $params)
    {
        $title = $params['title'];
        $locale = $params['locale'];
        $position = $params['position'];
        $data = Page::orderBy('id', $params['ordering'] ?? config('app.df.ordering'));
        if (!Auth::check() || Auth::user()->role != config('app.users.roles.admin'))
            $data->where('is_active', Status::STATUS_ON);
        elseif (!empty($params['is_active']))
            $data->where('is_active', $data['is_active']);
        if (!empty($title))
            $data->where('title', 'like', '%' . $title . '%');
        if (!Auth::check() || Auth::user()->role != config('app.users.roles.admin'))
            $data->where('locale', App::getLocale());
        else
            if (!empty($locale))
                $data->where('locale', $locale);
        if (!empty($position))
            $data->where('position', $position);

        return $data->paginate($params['pagination'] ?? config('app.df.pagination'));
    }

    /**
     * @param int $pageId
     * @return mixed
     * @throws Exception
     */
    public function findById(int $pageId)
    {
        $item = Page::find($pageId);
        if (empty($item))
            throw new Exception(trans('exceptions.no_found'));
        return $item;
    }
}
