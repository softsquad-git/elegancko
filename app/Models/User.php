<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'last_name',
        'email',
        'password',
        'phone',
        'city',
        'post_code',
        'address',
        'is_activated',
        'role'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * @return HasOne
     */
    public function key()
    {
        return $this->hasOne(VerifyKey::class, 'user_id');
    }
}
