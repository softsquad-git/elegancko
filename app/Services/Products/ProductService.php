<?php

namespace App\Services\Products;

use App\Interfaces\MetaInterface;
use App\Models\Products\Product;
use App\Models\Products\ProductPrice;
use App\Repositories\Categories\CategoryRepository;
use App\Repositories\Products\ProductRepository;
use App\Services\Meta\MetaService;
use \Exception;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

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
     * @var MetaInterface
     */
    private $metaInterface;

    /**
     * @param ProductRepository $productRepository
     * @param CategoryRepository $categoryRepository
     * @param MetaInterface $metaInterface
     */
    public function __construct(
        ProductRepository $productRepository,
        CategoryRepository $categoryRepository,
        MetaInterface $metaInterface
    )
    {
        $this->productRepository = $productRepository;
        $this->categoryRepository = $categoryRepository;
        $this->metaInterface = $metaInterface;
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

        DB::beginTransaction();
        $item = new \stdClass();
        try {
            $item = Product::create($data);
            $this->saveParametersProduct($item, $data);
            $this->saveMeta($item->id, $data['meta'], $item->locale);
            $data['product_id'] = $item->id;
            ProductPrice::create($data);
        } catch (Exception $e) {
            DB::rollBack();
        }
        DB::commit();
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
        if ($data['category_id'] != $item->category_id)
            $this->categoryRepository->findById($data['category_id']);
        if ($item->meta) {
            $this->metaInterface->setTitle($data['meta']['title'])
                ->setDesc($data['meta']['description'])
                ->setKeywords($data['meta']['keywords'])
                ->updateMeta($item->meta);
        } else {
            $this->saveMeta($item->id, $data['meta'], $item->locale);
        }
        $item->price()->update([
            'old_price' => $data['old_price'],
            'price' => $data['price'],
            'currency' => $data['currency']
        ]);
        $item->update($data);
        $this->saveParametersProduct($item, $data);

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

    /**
     * @param array $data
     * @return array[]
     */
    private function prepareData(array $data)
    {
        $sizeIds = [];
        $colorIds = [];
        $shipmentIds = [];
        if (isset($data['sizes'])) {
            foreach (json_decode($data['sizes']) as $size) {
                $sizeIds[] = $size->id;
            }
        }
        if (isset($data['colors'])) {
            foreach (json_decode($data['colors']) as $color) {
                $colorIds[] = $color->id;
            }
        }
        if (isset($data['shipments'])) {
            foreach (json_decode($data['shipments']) as $shipment) {
                $shipmentIds[] = $shipment->id;
            }
        }

        return [
            'size_ids' => $sizeIds,
            'color_ids' => $colorIds,
            'shipment_ids' => $shipmentIds
        ];
    }

    /**
     * @param Product $item
     * @param array $data
     * @return bool
     */
    private function saveParametersProduct(Product $item, array $data)
    {
        $prepareData = $this->prepareData($data);
        if (count($sizeIds = $prepareData['size_ids']) > 0) {
            $syncSizes = [];
            foreach ($sizeIds as $id) {
                $syncSizes[$id] = ['product_id' => $item->id];
            }
            $item->sizes()->sync($syncSizes);
        }
        if (count($colorIds = $prepareData['color_ids']) > 0) {
            $syncColors = [];
            foreach ($colorIds as $id) {
                $syncColors[$id] = ['product_id' => $item->id];
            }
            $item->colors()->sync($syncColors);
        }
        if (count($shipmentIds = $prepareData['shipment_ids'])) {
            $syncShipments = [];
            foreach ($shipmentIds as $id) {
                $syncShipments[$id] = ['product_id' => $item->id];
            }
            $item->shipments()->sync($syncShipments);
        }

        return true;
    }

    /**
    * @param int $id
    * @param array $meta
    * @param string $locale
    */
    private function saveMeta(int $id, array $meta, string $locale)
    {
        $this->metaInterface
            ->setResourceId($id)
            ->setResourceType(MetaService::RESOURCE_PRODUCT)
            ->setTitle($meta['title'])
            ->setDesc($meta['description'])
            ->setKeywords($meta['keywords'])
            ->setLocale($locale)
            ->saveMeta();
    }

}
