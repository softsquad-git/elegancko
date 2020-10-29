<?php

namespace App\Http\Controllers\Basket;

use App\Http\Controllers\Controller;
use App\Http\Requests\Basket\BasketRequest;
use App\Http\Resources\Basket\BasketResource;
use App\Repositories\Basket\BasketRepository;
use App\Services\Basket\BasketService;
use Illuminate\Http\Request;
use \Exception;
use \Illuminate\Http\JsonResponse;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class BasketController extends Controller
{
    /**
     * @var BasketService
     */
    private $basketService;

    /**
     * @var BasketRepository
     */
    private $basketRepository;

    /**
     * @param BasketRepository $basketRepository
     * @param BasketService $basketService
     */
    public function __construct(BasketRepository $basketRepository, BasketService $basketService)
    {
        $this->basketRepository = $basketRepository;
        $this->basketService = $basketService;
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
            $data = $this->basketRepository->findAll($params);
            return BasketResource::collection($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param BasketRequest $request
     * @return
     */
    public function create(BasketRequest $request)
    {
        try {
            $this->basketService->create($request->all());
            return $this->successResponse(trans('messages.basket.created'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param BasketRequest $request
     * @param int $basketId
     * @return JsonResponse
     */
    public function update(BasketRequest $request, int $basketId)
    {
        try {
            $this->basketService->update($request->all(), $basketId);
            return $this->successResponse(trans('messages.basket.updated'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function remove(Request $request)
    {
       // dd($request->all());
        try {
            $this->basketService->remove($request->all());
            return $this->successResponse(trans('messages.basket.removed'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
