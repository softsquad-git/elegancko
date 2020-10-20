<?php

namespace App\Repositories\Admin\Settings;

use App\Models\Admin\AdminSettingType;
use \Illuminate\Database\Eloquent\Collection;
use \Exception;

class AdminSettingTypeRepository
{
    /**
     * @return AdminSettingType[]|Collection
     */
    public function findAll()
    {
        return AdminSettingType::all();
    }

    /**
     * @param int $typeId
     * @return mixed
     * @throws Exception
     */
    public function findById(int $typeId)
    {
        $item = AdminSettingType::find($typeId);
        if (empty($item))
            throw new Exception(trans('exceptions.no_found'));
        return $item;
    }
}
