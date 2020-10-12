<?php

namespace App\Helpers;

use App\Mail\Auth\RegisterEmail;
use App\Models\VerifyKey;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use \Exception;

class VerifyEmailHelper
{
    /**
     * @return string
     */
    private static function generate(): string
    {
        return substr(md5(time() . Str::random(64)), 15, 15);
    }

    /**
     * @param int $userId
     * @return VerifyKey|null
     */
    private static function keyDb(int $userId): ?VerifyKey
    {
        return VerifyKey::where('user_id', $userId)->first();
    }

    /**
     * @param string $key
     * @return bool
     */
    public static function check(string $key): bool
    {
        if ($key != self::keyDb(Auth::id()))
            return false;
        return true;
    }

    /**
     * @param int $userId
     * @return bool
     * @throws Exception
     */
    public static function save(int $userId)
    {
        $key = self::generate();
        $keyDb = self::keyDb($userId);
        if (!empty($keyDb))
            self::delete($keyDb);
        $dataKey = [
            '_key' => $key,
            'user_id' => $userId
        ];
        $item = VerifyKey::create($dataKey);
        if (empty($item))
            throw new Exception(trans('register.send_key'));
        Mail::to(Auth::user()->email)->send(new RegisterEmail($item));
        return true;
    }

    /**
     * @param VerifyKey $verifyKey
     * @return bool|null
     * @throws Exception
     */
    private static function delete(VerifyKey $verifyKey): ?bool
    {
        if (!empty($verifyKey))
            return $verifyKey->delete();
        return false;
    }
}
