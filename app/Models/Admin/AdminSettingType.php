<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\HasOne;

class AdminSettingType extends Model
{
    use HasFactory;

    protected $table = 'admin_setting_type';

    protected $fillable = [
        'key',
        'name'
    ];

    /**
     * @return HasOne
     */
    public function setting()
    {
        return $this->hasOne(AdminSetting::class, 'type_id');
    }
}
