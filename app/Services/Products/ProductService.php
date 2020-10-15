<?php

namespace App\Services\Products;

use App\Models\Products\Product;
use App\Repositories\Categories\CategoryRepository;
use App\Repositories\Products\ProductRepository;
use \Exception;
use Illuminate\Support\Facades\App;

class ProductService
{
    const RESOURCE_TYPE = 'products';

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
        if (empty($data['category_id'])) {
            if (App::getLocale() == 'pl')
                $data['category_id'] = $this->categoryRepository->findByAlias('bez-kategorii')->id;
            else
                $data['category_id'] = $this->categoryRepository->findByAlias('no-category')->id;
        }
        else
            $this->categoryRepository->findById($data['category_id']);

        $sizeIds = [];
        $colorIds = [];
        $shipmentIds = [];
        if (isset($data['sizes'])) {
            foreach ($data['sizes'] as $size) {
                $sizeIds[] = $size['id'];
            }
        }
        if (isset($data['colors'])) {
            foreach ($data['colors'] as $color) {
                $colorIds[] = $color['id'];
            }
        }
        if (isset($data['shipments'])) {
            foreach ($data['shipments'] as $shipment) {
                $shipmentIds[] = $shipment['id'];
            }
        }
        $item = Product::create($data);
        if (count($sizeIds) > 0) {
            $syncSizes = [];
            foreach ($sizeIds as $id) {
                $syncSizes[$id] = ['product_id' => $item->id];
            }
            $item->sizes()->sync($syncSizes);
        }
        if (count($colorIds) > 0) {
            $syncColors = [];
            foreach ($colorIds as $id) {
                $syncColors[$id] = ['product_id' => $item->id];
            }
            $item->colors()->sync($syncColors);
        }
        if (count($shipmentIds)) {
            $syncShipments = [];
            foreach ($shipmentIds as $id) {
                $syncShipments[$id] = ['product_id' => $item->id];
            }
            $item->shipments()->sync($syncShipments);
        }


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
