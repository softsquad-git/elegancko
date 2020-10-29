<?php

namespace App\Http\Controllers\Admin\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\Products\ProductSizeRequest;
use App\Http\Resources\Products\ProductSizesResource;
use App\Repositories\Products\ProductSizeRepository;
use App\Services\Products\ProductSizeService;
use Illuminate\Http\Request;
use \Exception;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use \Illuminate\Http\JsonResponse;

class ProductSizeController extends Controller
{
    /**
     * @var ProductSizeRepository
     */
    private $productSizeRepository;

    /**
     * @var ProductSizeService
     */
    private $productSizeService;

    /**
     * @param ProductSizeRepository $productSizeRepository
     * @param ProductSizeService $productSizeService
     */
    public function __construct(ProductSizeRepository $productSizeRepository, ProductSizeService $productSizeService)
    {
        $this->productSizeRepository = $productSizeRepository;
        $this->productSizeService = $productSizeService;
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
            $data = $this->productSizeRepository->findAll($params);
            return ProductSizesResource::collection($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param ProductSizeRequest $request
     * @return JsonResponse
     */
    public function create(ProductSizeRequest $request): JsonResponse
    {
        try {
            $this->productSizeService->create($request->all());
            return $this->successResponse(trans('messages.created'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param ProductSizeRequest $request
     * @param int $sizeId
     * @return JsonResponse
     */
    public function update(ProductSizeRequest $request, int $sizeId): JsonResponse
    {
        try {
            $this->productSizeService->update($request->all(), $sizeId);
            return $this->successResponse(trans('messages.updated'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param int $sizeId
     * @return JsonResponse
     */
    public function remove(int $sizeId): JsonResponse
    {
        try {
            $this->productSizeService->remove($sizeId);
            return $this->successResponse(trans('messages.removed'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
