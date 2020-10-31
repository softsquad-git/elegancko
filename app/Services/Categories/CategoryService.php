<?php

namespace App\Services\Categories;

use App\Interfaces\MetaInterface;
use App\Models\Category;
use App\Repositories\Categories\CategoryRepository;
use App\Services\Meta\MetaService;
use \Exception;
use Illuminate\Support\Facades\DB;

class CategoryService
{
    const RESOURCE_TYPE = 'categories';

    /**
     * @var CategoryRepository $categoryRepository
     */
    protected $categoryRepository;

    /**
     * @var MetaInterface
     */
    private $metaInterface;

    /**
     * @param CategoryRepository $categoryRepository
     * @param MetaInterface $metaInterface
     */
    public function __construct(CategoryRepository $categoryRepository, MetaInterface $metaInterface)
    {
        $this->categoryRepository = $categoryRepository;
        $this->metaInterface = $metaInterface;
    }

    /**
     * @param array $data
     * @return Category|null
     * @throws Exception
     */
    public function create(array $data): ?Category
    {
        if (empty($data['parent_id']))
            $data['parent_id'] = 0;
        if ($data['parent_id'] != 0)
            $this->categoryRepository->findById($data['parent_id']);
        DB::beginTransaction();
        try {
            $item = Category::create($data);
            $this->saveMeta($item->id, $data['meta'], $item->locale);
            DB::commit();
            return $item;
        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception($e->getMessage());
        }
    }

    /**
     * @param array $data
     * @param int $categoryId
     * @return Category
     * @throws Exception
     */
    public function update(array $data, int $categoryId)
    {
        if (empty($data['parent_id']))
            $data['parent_id'] = 0;
        if ($data['parent_id'] != 0)
            $this->categoryRepository->findById($data['parent_id']);
        $item = $this->categoryRepository->findById($categoryId);
        if ($data['parent_id'] && $data['parent_id'] != $item->parent_id)
            $this->categoryRepository->findById($data['parent_id']);
        if ($item->meta) {
            $this->metaInterface->setTitle($data['meta']['title'])
                ->setDesc($data['meta']['description'])
                ->setKeywords($data['meta']['keywords'])
                ->updateMeta($item->meta);
        } else{
            $this->saveMeta($item->id, $data['meta'], $item->locale);
        }
        $item->update($data);
        return $item;
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
            ->setResourceType(MetaService::RESOURCE_CATEGORY)
            ->setTitle($meta['title'])
            ->setDesc($meta['description'])
            ->setKeywords($meta['keywords'])
            ->setLocale($locale)
            ->saveMeta();
    }

    /**
     * @param int $categoryId
     * @return bool|null
     * @throws Exception
     */
    public function remove(int $categoryId): ?bool
    {
        return $this->categoryRepository->findById($categoryId)->delete();
    }
}
