<?php

namespace App\Http\Controllers\Admin\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\Products\ProductRequest;
use App\Http\Resources\Products\ProductResource;
use App\Http\Resources\Products\ProductsResource;
use App\Repositories\Products\ProductRepository;
use App\Services\Products\ProductImageService;
use App\Services\Products\ProductService;
use Illuminate\Http\Request;
use \Exception;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use \Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    /**
     * @var ProductRepository
     */
    private $productRepository;

    /**
     * @var ProductService
     */
    private $productService;

    /**
     * @var ProductImageService
     */
    private $productImageService;

    /**
     * @param ProductRepository $productRepository
     * @param ProductService $productService
     * @param ProductImageService $productImageService
     */
    public function __construct(
        ProductRepository $productRepository,
        ProductService $productService,
        ProductImageService $productImageService
    )
    {
        $this->productRepository = $productRepository;
        $this->productService = $productService;
        $this->productImageService = $productImageService;
    }

    /**
     * @param Request $request
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $params = [
            'title' => $request->get('title'),
            'category' => $request->get('category'),
            'is_activated' => $request->get('is_activated'),
            'ordering' => $request->get('ordering'),
            'pagination' => $request->get('pagination'),
            'locale' => $request->get('locale'),
            'type' => $request->get('type')
        ];
        try {
            $data = $this->productRepository->findAll($params);
            return ProductsResource::collection($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param int $productId
     * @return ProductResource|JsonResponse
     */
    public function findById(int $productId)
    {
        try {
            $item = $this->productRepository->findById($productId);
            return new ProductResource($item);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param ProductRequest $request
     * @return JsonResponse
     */
    public function create(ProductRequest $request): JsonResponse
    {
        try {
            $item = $this->productService->create($request->all());
            if ($request->hasFile('images'))
                $this->productImageService->upload($request->file('images'), $item);
            return $this->successResponse(trans('messages.created'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param ProductRequest $request
     * @param int $productId
     * @return JsonResponse
     */
    public function update(ProductRequest $request, int $productId): JsonResponse
    {
        try {
            $item = $this->productService->update($request->all(), $productId);
            if ($request->hasFile('images'))
                $this->productImageService->upload($request->file('images'), $item);
            return $this->successResponse(trans('messages.updated'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param int $productId
     * @return JsonResponse
     */
    public function remove(int $productId): JsonResponse
    {
        try {
            $this->productService->remove($productId);
            return $this->successResponse(trans('messages.removed'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param Request $request
     * @param int $productId
     * @return JsonResponse
     */
    public function removeProductImages(Request $request, int $productId)
    {
        try {
            $item = $this->productRepository->findById($productId);
            $this->productImageService->remove($item, $request->all());
            return $this->successResponse(trans('messages.removed'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
    /**TODO
     * -oagarnąć edycje - przysłanie zdjęć
     * -podczas usuwania usuwać pliki z serwera
     */
}
