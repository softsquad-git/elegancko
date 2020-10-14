<?php

namespace App\Services\Products;

use App\Models\Products\Product;
use App\Repositories\Categories\CategoryRepository;
use App\Repositories\Products\ProductRepository;
use \Exception;

class ProductService
{
    /**
     * @var ProductRepository
     */
    private $productRepository;

    /**
     * @var CategoryRepository
     */
    private $categoryRepository;

    /**
     * @param ProductRepository $productRepository
     * @param CategoryRepository $categoryRepository
     */
    public function __construct(ProductRepository $productRepository, CategoryRepository $categoryRepository)
    {
        $this->productRepository = $productRepository;
        $this->categoryRepository = $categoryRepository;
    }

    /**
     * @param array $data
     * @return mixed
     * @throws Exception
     */
    public function create(array $data)
    {
        $this->categoryRepository->findById($data['category_id']);
        $data['colors_ids'] = json_encode($data['colors_ids'], true);
        $data['sizes_ids'] = json_encode($data['sizes_ids'], true);
        $data['shipments_ids'] = json_encode(config('app.df.shipments'), true);
        $item = Product::create($data);
        if (empty($item))
            throw new Exception(trans('exceptions.no_created'));
        return $item;
    }

    /**
     * @param array $data
     * @param int $productId
     * @return mixed
     * @throws Exception
     */
    public function update(array $data, int $productId)
    {
        $item = $this->productRepository->findById($productId);
        if (!empty($data['colors_ids']))
            $data['colors_ids'] = json_encode($data['colors_ids'], true);
        if (!empty($data['sizes_ids']))
            $data['sizes_ids'] = json_encode($data['sizes_ids'], true);
        $item->update($data);
        return $item;
    }

    /**
     * @param int $productId
     * @return mixed
     * @throws Exception
     */
    public function remove(int $productId)
    {
        return $this->productRepository->findById($productId)->delete();
    }
}
