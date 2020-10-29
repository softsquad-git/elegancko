<?php

namespace App\Services\Auth;

use App\Helpers\VerifyEmailHelper;
use App\Models\User;
use App\Services\SoftSquadService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use \Exception;

class AuthService extends SoftSquadService
{
    /**
     * @param array $data
     * @return mixed
     * @throws Exception
     */
    public function register(array $data)
    {
        $data['password'] = Hash::make($data['password']);
        DB::beginTransaction();
        try {
            $user = User::create($data);
            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception($e);
        }
        try {
            VerifyEmailHelper::save($user->id);
            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception($e);
        }
        return $user;
    }
}
