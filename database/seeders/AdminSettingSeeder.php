<?php

namespace Database\Seeders;

use App\Models\Admin\AdminSetting;
use App\Models\Admin\AdminSettingType;
use Illuminate\Database\Seeder;

class AdminSettingSeeder extends Seeder
{
    private const TYPE_TEXT = 1;
    private const TYPE_FILE = 2;
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = AdminSettingType::all();
        foreach ($types as $type) {
            if ($type->_key == 'products_top_banner'
                || $type->_key == 'home_top_banner'
                || $type->_key == 'auth_left_banner')
                $resourceType = self::TYPE_FILE;
            else
                $resourceType = self::TYPE_TEXT;
            AdminSetting::create([
                'type_id' => $type->id,
                'resource_type' => $resourceType,
                'value' => '...'
            ]);
        }
    }
}
