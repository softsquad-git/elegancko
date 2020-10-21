<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Settings\AdminSettingRequest;
use App\Http\Resources\Admin\Settings\AdminSettingResource;
use App\Repositories\Admin\Settings\AdminSettingRepository;
use App\Services\Admin\Settings\AdminSettingService;
use Illuminate\Http\Request;
use \Exception;
use \Illuminate\Http\JsonResponse;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class AdminSettingController extends Controller
{
    /**
     * @var AdminSettingService
     */
    private $adminSettingService;

    /**
     * @var AdminSettingRepository
     */
    private $adminSettingRepository;

    /**
     * @param AdminSettingRepository $adminSettingRepository
     * @param AdminSettingService $adminSettingService
     */
    public function __construct(AdminSettingRepository $adminSettingRepository, AdminSettingService $adminSettingService)
    {
        $this->adminSettingRepository = $adminSettingRepository;
        $this->adminSettingService = $adminSettingService;
    }

    /**
     * @param Request $request
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        try {
            $params = [
                'ordering' => $request->get('ordering'),
                'pagination' => $request->get('pagination')
            ];
            $data = $this->adminSettingRepository->findAll($params);
            return AdminSettingResource::collection($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param string $type
     * @return JsonResponse
     */
    public function findByType(string $type): JsonResponse
    {
        try {
            $item = $this->adminSettingRepository->findByType($type);
            return response()->json([
                'data' => [
                    'value' => $item->value,
                    'type' => $item->type
                ]
            ]);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param AdminSettingRequest $request
     * @return JsonResponse
     */
    public function create(AdminSettingRequest $request): JsonResponse
    {
        try {
            $data = $request->all();
            if ($request->resource_type === $this->adminSettingService::ADMIN_SETTING_FILE)
                $data['value'] = $request->file('value');
            $this->adminSettingService->create($data);
            return $this->successResponse(trans('messages.created'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param int $settingId
     * @return AdminSettingResource|JsonResponse
     */
    public function find(int $settingId)
    {
        try {
            $item = $this->adminSettingRepository->findById($settingId);
            return new AdminSettingResource($item);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param AdminSettingRequest $request
     * @param int $settingId
     * @return JsonResponse
     */
    public function update(AdminSettingRequest $request, int $settingId): JsonResponse
    {
        try {
            $data = $request->only(['resource_type', 'value']);
            if ($request->resource_type === $this->adminSettingService::ADMIN_SETTING_FILE)
                $data['value'] = $request->file('value');
            $this->adminSettingService->update($request->all(), $settingId);
            return $this->successResponse(trans('messages.updated'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param int $settingId
     * @return JsonResponse
     */
    public function remove(int $settingId): JsonResponse
    {
        try {
            $this->adminSettingService->remove($settingId);
            return $this->successResponse(trans('messages.removed'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
