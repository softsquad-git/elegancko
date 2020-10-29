<?php

namespace App\Services\Categories;

use App\Models\Category;
use App\Repositories\Categories\CategoryRepository;
use \Exception;

class CategoryService
{
    const RESOURCE_TYPE = 'categories';

    /**
     * @var CategoryRepository $categoryRepository
     */
    protected $categoryRepository;

    /**
     * @param CategoryRepository $categoryRepository
     */
    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
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
        $item = Category::create($data);
        if (empty($item))
            throw new Exception(trans('exception.no_created'));
        return $item;
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
        $item->update($data);
        return $item;
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
