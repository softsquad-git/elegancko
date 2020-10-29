<?php

namespace App\Http\Controllers\Categories;

use App\Http\Controllers\Controller;
use App\Http\Resources\Categories\CategoriesResource;
use App\Http\Resources\Categories\CategoryResource;
use App\Repositories\Categories\CategoryRepository;
use Illuminate\Http\Request;
use \Exception;
use \Illuminate\Http\JsonResponse;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\App;

class CategoryController extends Controller
{
    /**
     * @var CategoryRepository $categoryRepository;
     */
    private $categoryRepository;

    /**
     * @param CategoryRepository $categoryRepository
     */
    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
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
            'position' => $request->get('position'),
            'locale' => App::getLocale()
        ];
        try {
            $data = $this->categoryRepository->findAll($params);
            return CategoriesResource::collection($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param string $alias
     * @return CategoryResource|JsonResponse
     */
    public function findByAlias(string $alias)
    {
        try {
            $item = $this->categoryRepository->findByAlias($alias);
            return new CategoryResource($item);
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
}
