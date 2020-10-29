<?php


namespace App\Services\Admin\Settings;


use App\Models\Admin\AdminSettingType;
use App\Repositories\Admin\Settings\AdminSettingTypeRepository;
use \Exception;

class AdminSettingTypeService
{
    /**
     * @var AdminSettingTypeRepository
     */
    private $adminSettingTypeRepository;

    /**
     * @param AdminSettingTypeRepository $adminSettingTypeRepository
     */
    public function __construct(AdminSettingTypeRepository $adminSettingTypeRepository)
    {
        $this->adminSettingTypeRepository = $adminSettingTypeRepository;
    }

    /**
     * @param array $data
     * @return mixed
     * @throws Exception
     */
    public function create(array $data)
    {
        $item = AdminSettingType::create($data);
        if (empty($item))
            throw new Exception(trans('exceptions.no_created'));
        return $item;
    }

    /**
     * @param array $data
     * @param int $typeId
     * @return mixed
     * @throws Exception
     */
    public function update(array $data, int $typeId)
    {
        $item = $this->adminSettingTypeRepository->findById($typeId);
        $item->update($data);
        return $item;
    }

    /**
     * @param int $typeId
     * @return mixed
     * @throws Exception
     */
    public function remove(int $typeId)
    {
        return $this->adminSettingTypeRepository->findById($typeId)->delete();
    }
}
