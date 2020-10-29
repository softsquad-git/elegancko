<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;

class ChangeEmail extends Model
{
    use HasFactory;

    protected $table = 'change_email';

    protected $fillable = [
        'user_id',
        'new_email',
        'new_email_key',
        'old_email_key'
    ];

    /**
     * @return BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
