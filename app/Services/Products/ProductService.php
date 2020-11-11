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
        try {
            $item = Product::create($data);
            $item->price()->create($data);
            $this->saveParametersProduct($item, $data);
            $this->setMetaData($data, $item->id);
            DB::commit();
            return $item;
        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception($e->getMessage());
        }
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
        $meta = $this->setMetaData($data, $item->id);
        if ($item->meta)
            $meta->updateMeta($item->meta);
        else
            $meta->saveMeta();
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
     * @param array $data
     * @param int $itemId
     * @return MetaInterface
     */
    private function setMetaData(array $data, int $itemId): MetaInterface
    {
        return $this->metaInterface
            ->setResourceId($itemId)
            ->setResourceType(MetaService::RESOURCE_PRODUCT)
            ->setTitle($data['meta_title'])
            ->setLocale($data['locale'])
            ->setKeywords($data['meta_keywords'])
            ->setDesc($data['meta_desc']);
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
}
