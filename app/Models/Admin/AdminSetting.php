<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;

class AdminSetting extends Model
{
    use HasFactory;

    protected $table = 'admin_settings';

    protected $fillable = [
        'type_id',
        'value'
    ];

    /**
     * @return BelongsTo
     */
    public function type()
    {
        return $this->belongsTo(AdminSettingType::class);
    }
}
