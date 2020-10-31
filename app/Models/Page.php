<?php

namespace App\Models;

use App\Services\Meta\MetaService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\HasOne;

class Page extends Model
{
    use HasFactory;

    protected $table = 'pages';

    protected $fillable = [
        'title',
        'content',
        'position',
        'is_active',
        'locale'
    ];

    /**
     * @return HasOne
     */
    public function meta()
    {
        return $this->hasOne(Meta::class, 'resource_id', 'id')
            ->where('resource_type', MetaService::RESOURCE_PAGE);
    }
}
