<?php

namespace App\Repositories\Admin\Settings;

use App\Models\Admin\AdminSetting;
use \Exception;

class AdminSettingRepository
{
    /**
     * @param string $type
     * @return mixed
     */
    public function findByType(string $type)
    {
        return AdminSetting::where('type', $type)
            ->first();
    }

    /**
     * @param array $params
     * @return mixed
     */
    public function findAll(array $params)
    {
        return AdminSetting::orderBy($params['ordering'] ?? config('app.df.ordering'))
            ->paginate($params['pagination'] ?? config('app.df.pagination'));
    }

    /**
     * @param int $settingId
     * @return mixed
     * @throws Exception
     */
    public function findById(int $settingId)
    {
        $item = AdminSetting::find($settingId);
        if (!empty($item))
            return $item;
        throw new Exception(trans('exceptions.no_found'));
    }
}
