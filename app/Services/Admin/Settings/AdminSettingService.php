<?php

namespace App\Services\Admin\Settings;

use App\Helpers\Upload;
use App\Models\Admin\AdminSetting;
use App\Repositories\Admin\Settings\AdminSettingRepository;
use \Exception;

class AdminSettingService
{
    const ADMIN_SETTING_TEXT = 1;
    const ADMIN_SETTING_FILE = 2;
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
        $item = $this->adminSettingRepository->findByTypeId($data['type_id']);
        if (!empty($item))
            $this->remove($item->id);
        if ($data['resource_type'] != AdminSettingService::ADMIN_SETTING_TEXT)
            $data['value'] = Upload::single('settings/'.$data['resource_type'].'/'.$data['type_id'], $data['value']);
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
        if ($data['resource_type'] != AdminSettingService::ADMIN_SETTING_TEXT)
            $data['value'] = Upload::single('settings/'.$data['resource_type'].'/'.$item->type_id, $data['value']);
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
