<?php

namespace App\Repositories\Settings;

use App\Models\ChangeEmail;
use Illuminate\Support\Facades\Auth;

class SettingRepository
{
    /**
     * @param int $userId
     * @return mixed
     */
    public function findChangeEmailByUserId(int $userId)
    {
        return ChangeEmail::where('user_id', $userId)->first();
    }

    /**
     * @param int|null $userId
     * @return bool
     */
    public function checkChangeEmail(?int $userId): bool
    {
        if (empty($userId) || Auth::user()->role != config('app.users.roles.admin'))
            $userId = Auth::id();
        $item = $this->findChangeEmailByUserId($userId);
        if (empty($item))
            return false;
        return true;
    }
}
