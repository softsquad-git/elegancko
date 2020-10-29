<?php

namespace App\Http\Controllers\Front\Settings;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\Settings\AdminSettingResource;
use App\Http\Resources\PageTypeSettingResource;
use App\Repositories\PageSettingRepository;
use \Exception;
use \Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PageSettingController extends Controller
{
    /**
     * @var PageSettingRepository
     */
    private $pageSettingRepository;

    /**
     * @param PageSettingRepository $pageSettingRepository
     */
    public function __construct(PageSettingRepository $pageSettingRepository)
    {
        $this->pageSettingRepository = $pageSettingRepository;
    }

    /**
     * @param string $type
     * @return PageTypeSettingResource|JsonResponse
     */
    public function findByType(string $type)
    {
        try {
            $item = $this->pageSettingRepository->findByType($type);
            return new PageTypeSettingResource($item);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param Request $request
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function findByTypes(Request $request)
    {
        try {
            $data = $this->pageSettingRepository->findByTypes($request->all());
            return AdminSettingResource::collection($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
