<?php

namespace App\Services\Products;

use App\Models\Products\ProductColor;
use App\Repositories\Products\ProductColorRepository;
use \Exception;

class ProductColorService
{
    /**
     * @var ProductColorRepository
     */
    private $productColorRepository;

    /**
     * @param ProductColorRepository $productColorRepository
     */
    public function __construct(ProductColorRepository $productColorRepository)
    {
        $this->productColorRepository = $productColorRepository;
    }

    /**
     * @param array $data
     * @return mixed
     * @throws Exception
     */
    public function create(array $data)
    {
        $item = ProductColor::create($data);
        if (empty($item))
            throw new Exception(trans('exceptions.no_created'));
        return $item;
    }

    /**
     * @param array $data
     * @param int $colorId
     * @return mixed
     * @throws Exception
     */
    public function update(array $data, int $colorId)
    {
        $item = $this->productColorRepository->findById($colorId);
        $item->update($data);
        return $item;
    }

    /**
     * @param int $colorId
     * @return mixed
     * @throws Exception
     */
    public function remove(int $colorId)
    {
        return $this->productColorRepository->findById($colorId)->delete();
    }
}
