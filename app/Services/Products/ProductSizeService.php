<?php

namespace App\Services\Products;

use App\Models\Products\ProductSize;
use App\Repositories\Products\ProductSizeRepository;
use \Exception;

class ProductSizeService
{
    /**
     * @var ProductSizeRepository
     */
    private $productSizeRepository;

    /**
     * @param ProductSizeRepository $productSizeRepository
     */
    public function __construct(ProductSizeRepository $productSizeRepository)
    {
        $this->productSizeRepository = $productSizeRepository;
    }

    /**
     * @param array $data
     * @return mixed
     * @throws Exception
     */
    public function create(array $data)
    {
        $item = ProductSize::create($data);
        if (empty($item))
            throw new Exception(trans('exception.no_created'));
        return $item;
    }

    /**
     * @param array $data
     * @param int $sizeId
     * @return mixed
     * @throws Exception
     */
    public function update(array $data, int $sizeId)
    {
        $item = $this->productSizeRepository->findById($sizeId);
        $item->update($data);
        return $item;
    }

    /**
     * @param int $sizeId
     * @return bool|null
     * @throws Exception
     */
    public function remove(int $sizeId): ?bool
    {
        return $this->productSizeRepository->findById($sizeId)->delete();
    }
}
