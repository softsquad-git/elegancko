<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\HasOne;

class AdminSettingType extends Model
{
    use HasFactory;

    /**
     * @var bool
     */
    public $timestamps = false;

    protected $table = 'admin_setting_type';

    protected $fillable = [
        '_key',
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
