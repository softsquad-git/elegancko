<?php

namespace App\Http\Controllers\Front\Products;

use App\Http\Controllers\Controller;
use App\Http\Resources\Products\ProductResource;
use App\Http\Resources\Products\ProductsResource;
use App\Repositories\Products\ProductRepository;
use Illuminate\Http\Request;
use \Exception;
use \Illuminate\Http\JsonResponse;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\App;

class ProductController extends Controller
{

    /**
     * @var ProductRepository
     */
    private $productRepository;

    /**
     * @param ProductRepository $productRepository
     */
    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    /**
     * @param Request $request
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $params = [
            'title' => $request->get('title'),
            'category_id' => $request->get('category_id'),
            'is_activated' => $request->get('is_activated'),
            'ordering' => $request->get('ordering'),
            'pagination' => $request->get('pagination'),
            'locale' => App::getLocale()
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
}
