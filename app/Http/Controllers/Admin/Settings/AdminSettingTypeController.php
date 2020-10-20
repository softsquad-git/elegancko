<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminSettingTypeRequest;
use App\Http\Resources\Admin\Settings\AdminSettingTypeResource;
use App\Repositories\Admin\Settings\AdminSettingTypeRepository;
use App\Services\Admin\Settings\AdminSettingTypeService;
use \Exception;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use \Illuminate\Http\JsonResponse;

class AdminSettingTypeController extends Controller
{
    /**
     * @var AdminSettingTypeRepository
     */
    private $adminSettingTypeRepository;

    /**
     * @var AdminSettingTypeService
     */
    private $adminSettingTypeService;

    /**
     * @param AdminSettingTypeRepository $adminSettingTypeRepository
     * @param AdminSettingTypeService $adminSettingTypeService
     */
    public function __construct(
        AdminSettingTypeRepository $adminSettingTypeRepository,
        AdminSettingTypeService $adminSettingTypeService
    )
    {
        $this->adminSettingTypeRepository = $adminSettingTypeRepository;
        $this->adminSettingTypeService = $adminSettingTypeService;
    }

    /**
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function index()
    {
        try {
            $data = $this->adminSettingTypeRepository->findAll();
            return AdminSettingTypeResource::collection($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param AdminSettingTypeRequest $request
     * @return JsonResponse
     */
    public function create(AdminSettingTypeRequest $request)
    {
        try {
            $this->adminSettingTypeService->create($request->all());
            return $this->successResponse(trans('messages.created'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param AdminSettingTypeRequest $request
     * @param int $typeId
     * @return JsonResponse
     */
    public function update(AdminSettingTypeRequest $request, int $typeId)
    {
        try {
            $this->adminSettingTypeService->update($request->all(), $typeId);
            return $this->successResponse(trans('messages.updated'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param int $typeId
     * @return JsonResponse
     */
    public function remove(int $typeId)
    {
        try {
            $this->adminSettingTypeService->remove($typeId);
            return $this->successResponse(trans('messages.removed'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
