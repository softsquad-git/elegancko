<?php

namespace App\Services\Admin\Settings;

use App\Models\Admin\AdminSetting;
use App\Repositories\Admin\Settings\AdminSettingRepository;
use \Exception;

class AdminSettingService
{
    /**
     * @var AdminSettingRepository
     */
    private $adminSettingRepository;

    /**
     * @param AdminSettingRepository $adminSettingRepository
     */
    public function __construct(AdminSettingRepository $adminSettingRepository)
    {
        $this->adminSettingRepository = $adminSettingRepository;
    }

    /**
     * @param array $data
     * @return mixed
     * @throws Exception
     */
    public function create(array $data)
    {
        $item = $this->adminSettingRepository->findByType($data['type']);
        if (!empty($item))
            $this->remove($data['type']);
        $item = AdminSetting::create($data);
        if (!empty($item))
            return $item;
        throw new Exception(trans('exceptions.no_created'));
    }

    /**
     * @param array $data
     * @param int $settingId
     * @return mixed
     * @throws Exception
     */
    public function update(array $data, int $settingId)
    {
        $item = $this->adminSettingRepository->findById($settingId);
        $item->update($data);
        return $item;
    }

    /**
     * @param int $settingId
     * @return mixed
     * @throws Exception
     */
    public function remove(int $settingId)
    {
        return $this->adminSettingRepository->findById($settingId);
    }
}
