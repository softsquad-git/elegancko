<?php

namespace App\Http\Controllers\Admin\Pages;

use App\Http\Controllers\Controller;
use App\Http\Requests\Pages\PageRequest;
use App\Http\Resources\Pages\PageResource;
use App\Http\Resources\Pages\PagesResource;
use App\Repositories\Pages\PageRepository;
use App\Services\Pages\PageService;
use Illuminate\Http\Request;
use \Exception;
use \Illuminate\Http\JsonResponse;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PageController extends Controller
{
    /**
     * @var PageService
     */
    private $pageService;

    /**
     * @var PageRepository
     */
    private $pageRepository;

    /**
     * @param PageService $pageService
     * @param PageRepository $pageRepository
     */
    public function __construct(PageService $pageService, PageRepository $pageRepository)
    {
        $this->pageRepository = $pageRepository;
        $this->pageService = $pageService;
    }

    /**
     * @param Request $request
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $params = [
            'title' => $request->get('title'),
            'locale' => $request->get('locale'),
            'position' => $request->get('position'),
            'ordering' => $request->get('ordering'),
            'pagination' => $request->get('pagination'),
            'is_active' => $request->get('is_active')
        ];
        try {
            $data = $this->pageRepository->findAll($params);
            return PagesResource::collection($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param int $pageId
     * @return PageResource|JsonResponse
     */
    public function findById(int $pageId)
    {
        try {
            $item = $this->pageRepository->findById($pageId);
            return new PageResource($item);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param PageRequest $request
     * @return JsonResponse
     */
    public function create(PageRequest $request): JsonResponse
    {
        try {
            $this->pageService->create($request->all());
            return $this->successResponse(trans('messages.created'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param PageRequest $request
     * @param int $pageId
     * @return JsonResponse
     */
    public function update(PageRequest $request, int $pageId): JsonResponse
    {
        try {
            $this->pageService->update($request->all(), $pageId);
            return $this->successResponse(trans('messages.updated'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param int $pageId
     * @return JsonResponse
     */
    public function remove(int $pageId): JsonResponse
    {
        try {
            $this->pageService->remove($pageId);
            return $this->successResponse(trans('messages.removed'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
