<?php

namespace App\Http\Controllers\Front\Pages;

use App\Http\Controllers\Controller;
use App\Http\Resources\Pages\PageResource;
use App\Http\Resources\Pages\PagesResource;
use App\Repositories\Pages\PageRepository;
use Illuminate\Http\Request;
use \Exception;
use \Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\App;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PageController extends Controller
{
    /**
     * @var PageRepository
     */
    private $pageRepository;

    /**
     * @param PageRepository $pageRepository
     */
    public function __construct(PageRepository $pageRepository)
    {
        $this->pageRepository = $pageRepository;
    }

    /**
     * @param Request $request
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $params = [
            'title' => $request->get('title'),
            'locale' => App::getLocale(),
            'position' => $request->get('position'),
            'ordering' => $request->get('ordering'),
            'pagination' => $request->get('pagination')
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
}
