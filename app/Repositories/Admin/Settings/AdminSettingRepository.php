<?php

namespace App\Repositories\Admin\Settings;

use App\Models\Admin\AdminSetting;
use \Exception;

class AdminSettingRepository
{
    /**
     * @param int $typeId
     * @return mixed
     */
    public function findByTypeId(int $typeId)
    {
        return AdminSetting::where('type_id', $typeId)
            ->first();
    }

    /**
     * @param array $params
     * @return mixed
     */
    public function findAll(array $params)
    {
        return AdminSetting::orderBy('id', $params['ordering'] ?? config('app.df.ordering'))
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
