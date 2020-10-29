<?php

namespace App\Repositories;

use App\Models\Admin\AdminSetting;
use App\Models\Admin\AdminSettingType;
use \Exception;

class PageSettingRepository
{
    /**
     * @param string $type
     * @return string
     * @throws Exception
     */
    public function findByType(string $type)
    {
        $type = AdminSettingType::where('_key', $type)->first();
        if (empty($type))
            throw new Exception('exceptions.type_no_found');
        $item = AdminSetting::where('type_id', $type->id)->first();
        if (empty($item))
            return '';
        return $item;
    }
}
