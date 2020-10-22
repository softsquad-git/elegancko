<?php

namespace App\Http\Controllers\Admin\Categories;

use App\Http\Controllers\Controller;
use App\Http\Requests\Categories\CategoryRequest;
use App\Http\Resources\Categories\CategoriesResource;
use App\Http\Resources\Categories\CategoryResource;
use App\Repositories\Categories\CategoryRepository;
use App\Services\Categories\CategoryImageService;
use App\Services\Categories\CategoryService;
use Illuminate\Http\Request;
use \Exception;
use \Illuminate\Http\JsonResponse;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CategoryController extends Controller
{
    /**
     * @var CategoryService
     */
    private $categoryService;

    /**
     * @var CategoryRepository
     */
    private $categoryRepository;

    /**
     * @var CategoryImageService
     */
    private $categoryImageService;

    /**
     * @param CategoryRepository $categoryRepository
     * @param CategoryService $categoryService
     * @param CategoryImageService $categoryImageService
     */
    public function __construct(
        CategoryRepository $categoryRepository,
        CategoryService $categoryService,
        CategoryImageService $categoryImageService)
    {
        $this->categoryRepository = $categoryRepository;
        $this->categoryService = $categoryService;
        $this->categoryImageService = $categoryImageService;
    }

    /**
     * @param Request $request
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $params = [
            'name' => $request->get('name'),
            'alias' => $request->get('alias'),
            'parent_id' => $request->get('parent_id'),
            'pagination' => $request->get('pagination'),
            'ordering' => $request->get('ordering'),
            'is_active' => $request->get('is_active'),
            'locale' => $request->get('locale')
        ];
        try {
            $data = $this->categoryRepository->findAll($params);
            return CategoriesResource::collection($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param int $categoryId
     * @return CategoryResource|JsonResponse
     */
    public function findById(int $categoryId)
    {
        try {
            $item = $this->categoryRepository->findById($categoryId);
            return new CategoryResource($item);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param CategoryRequest $request
     * @return JsonResponse
     */
    public function create(CategoryRequest $request): JsonResponse
    {
        try {
            $item = $this->categoryService->create($request->all());
            if ($request->hasFile('image'))
                $this->categoryImageService->upload($request->file('image'), $item);
            return $this->successResponse(trans('messages.created'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param CategoryRequest $request
     * @param int $categoryId
     * @return JsonResponse
     */
    public function update(CategoryRequest $request, int $categoryId): JsonResponse
    {
        try {
            $item = $this->categoryService->update($request->all(), $categoryId);
            if ($request->hasFile('image'))
                $this->categoryImageService->upload($request->file('image'), $item);
            return $this->successResponse(trans('messages.updated'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param int $categoryId
     * @return JsonResponse
     */
    public function remove(int $categoryId): JsonResponse
    {
        try {
            $this->categoryService->remove($categoryId);
            return $this->successResponse(trans('messages.removed'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

}
