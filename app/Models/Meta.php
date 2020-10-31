<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meta extends Model
{
    use HasFactory;

    protected $table = 'meta';

    protected $fillable = [
        'resource_id',
        'resource_type',
        'title',
        'description',
        'keywords',
        'locale'
    ];
}
