<?php

namespace App\Http\Controllers\Admin\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\Products\ProductColorRequest;
use App\Http\Resources\Products\ProductColorsResource;
use App\Repositories\Products\ProductColorRepository;
use App\Services\Products\ProductColorService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use \Exception;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProductColorController extends Controller
{
    /**
     * @var ProductColorService
     */
    private $productColorService;

    /**
     * @var ProductColorRepository
     */
    private $productColorRepository;

    /**
     * @param ProductColorRepository $productColorRepository
     * @param ProductColorService $productColorService
     */
    public function __construct(ProductColorRepository $productColorRepository, ProductColorService $productColorService)
    {
        $this->productColorRepository = $productColorRepository;
        $this->productColorService = $productColorService;
    }

    /**
     * @param Request $request
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $params = [
            'ordering' => $request->get('ordering'),
            'pagination' => $request->get('pagination')
        ];
        try {
            $data = $this->productColorRepository->findAll($params);
            return ProductColorsResource::collection($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param ProductColorRequest $request
     * @return JsonResponse
     */
    public function create(ProductColorRequest $request): JsonResponse
    {
        try {
            $this->productColorService->create($request->all());
            return $this->successResponse(trans('messages.created'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param ProductColorRequest $request
     * @param int $colorId
     * @return JsonResponse
     */
    public function update(ProductColorRequest $request, int $colorId): JsonResponse
    {
        try {
            $this->productColorService->update($request->all(), $colorId);
            return $this->successResponse(trans('messages.updated'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param int $colorId
     * @return JsonResponse
     */
    public function remove(int $colorId): JsonResponse
    {
        try {
            $this->productColorService->remove($colorId);
            return $this->successResponse(trans('messages.removed'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
