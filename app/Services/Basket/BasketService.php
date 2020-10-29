<?php

namespace App\Services\Basket;

use App\Models\Basket;
use App\Repositories\Basket\BasketRepository;
use Illuminate\Support\Facades\Auth;
use \Exception;

class BasketService
{

    /**
     * @var BasketRepository
     */
    private $basketRepository;

    /**
     * @param BasketRepository $basketRepository
     */
    public function __construct(BasketRepository $basketRepository)
    {
        $this->basketRepository = $basketRepository;
    }

    /**
     * @param array $data
     * @return mixed
     * @throws Exception
     */
    public function create(array $data)
    {
        $data['user_id'] = Auth::id();
        $item = Basket::create($data);
        if (empty($item))
            throw new Exception(trans('exceptions.no_created'));
        return $item;
    }

    /**
     * @param array $data
     * @param int $basketId
     * @return mixed
     * @throws Exception
     */
    public function update(array $data, int $basketId)
    {
        $item = $this->basketRepository->findById($basketId);
        $item->update($data);
        return $item;
    }

    /**
     * @param array $basketIds
     * @throws Exception
     */
    public function remove(array $basketIds)
    {
        return $this->basketRepository->whereInByIds($basketIds)->each(function ($product) {
            $product->delete();
        });
    }
}
