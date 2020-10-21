<?php

namespace App\Services\Settings;

use App\Helpers\VerifyEmailHelper;
use App\Mail\Settings\ChangeEmailMail;
use App\Models\ChangeEmail;
use App\Repositories\Settings\SettingRepository;
use App\Repositories\Users\UserRepository;
use Illuminate\Support\Facades\Auth;
use \Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class SettingService
{
    /**
     * @var UserRepository
     */
    private $userRepository;

    /**
     * @var SettingRepository
     */
    private $settingRepository;

    /**
     * @param SettingRepository $settingRepository
     * @param UserRepository $userRepository
     */
    public function __construct(SettingRepository $settingRepository, UserRepository $userRepository)
    {
        $this->settingRepository = $settingRepository;
        $this->userRepository = $userRepository;
    }

    /**
     * @param array $data
     * @return mixed
     * @throws Exception
     */
    public function basicDataSetting(array $data)
    {
        $userId = Auth::id();
        if (isset($data['user_id']) && !empty($data['user_id']) && Auth::user()->role == config('app.users.roles.admin'))
            $userId = $data['user_id'];
        $user = $this->userRepository->findById($userId);
        $user->update($data);
        return $user;
    }

    /**
     * @param array $data
     * @throws Exception
     */
    public function emailSetting(array $data)
    {
        $userId = Auth::id();
        if (isset($data['user_id']) && !empty($data['user_id']) && Auth::user()->role == config('app.users.roles.admin'))
            $userId = $data['user_id'];
        $user = $this->userRepository->findById($userId);
        $item = $this->settingRepository->findChangeEmailByUserId($userId);
        if (!empty($item))
            $item->delete();
        $generateKeyNewEmail = VerifyEmailHelper::generate();
        $data['new_email_key'] = $generateKeyNewEmail;
        $generateKeyOldEmail = VerifyEmailHelper::generate();
        $data['old_email_key'] = $generateKeyOldEmail;
        $data['user_id'] = $userId;
        DB::beginTransaction();
        ChangeEmail::create($data);
        try {
            Mail::to($user->email)->send(new ChangeEmailMail([
                'name' => $user->getFullName(),
                'key' => $data['old_email_key'],
                'type' => 'old'
            ]));
            Mail::to($data['new_email'])->send(new ChangeEmailMail([
                'name' => $user->getFullName(),
                'key' => $data['new_email_key'],
                'type' => 'new'
            ]));
            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception($e->getMessage());
        }
    }

    /**
     * @param array $data
     * @return mixed
     * @throws Exception
     */
    public function saveNewEmail(array $data)
    {
        $userId = Auth::id();
        if (isset($data['user_id']) && !empty($data['user_id']) && Auth::user()->role == config('app.users.roles.admin'))
            $userId = $data['user_id'];
        $changeEmail = $this->settingRepository->findChangeEmailByUserId($userId);
        $user = $this->userRepository->findById($userId);
        if (empty($changeEmail))
            throw new Exception(trans('exceptions.generate_new_key_change_email'));
        if ($changeEmail->old_email_key == $data['old_email_key'] && $changeEmail->new_email_key == $data['new_email_key']) {
            $user->update([
                'email' => $changeEmail->new_email
            ]);
            $changeEmail->delete();
            return $user;
        }
        throw new Exception(trans('exceptions.change_email_keys_valid'));
    }

    /**
     * @param int|null $userId
     * @return mixed
     * @throws Exception
     */
    public function removeChangeEmailKey(?int $userId)
    {
        if (empty($userId) || Auth::user()->role != config('app.users.roles.admin'))
            $userId = Auth::id();
        $item = $this->settingRepository->findChangeEmailByUserId($userId);
        if (!empty($item))
            return $item->delete();
        throw new Exception(trans('exceptions.no_found'));
    }

    /**
     * @param array $data
     * @return mixed
     * @throws Exception
     */
    public function passwordSetting(array $data)
    {
        $userId = Auth::id();
        if (isset($data['user_id']) && !empty($data['user_id']) && Auth::user()->role == config('app.users.roles.admin'))
            $userId = $data['user_id'];
        $user = $this->userRepository->findById($userId);
        $newPassword = Hash::make($data['new_password']);
        if (Auth::user()->role != config('app.users.roles.admin')) {
            if (Hash::check($data['old_password'], $user->password)) {
                $user->update([
                    'password' => $newPassword
                ]);
                return $user;
            }
            throw new Exception(trans('exceptions.settings.no_valid_old_password'));
        }
        $user->update([
            'password' => $newPassword
        ]);
        return $user;
    }

    /**
     * @param int|null $userId
     * @return mixed
     * @throws Exception
     */
    public function removeAccount(?int $userId)
    {
        if (empty($userId) || Auth::user()->role != config('app.users.roles.admin'))
            $userId = Auth::id();
        $user = $this->userRepository->findById($userId);
        return $user->delete();
    }
}
