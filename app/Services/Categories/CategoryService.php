<?php

namespace App\Services\Categories;

use App\Models\Category;
use App\Repositories\Categories\CategoryRepository;
use \Exception;

class CategoryService
{
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
     * @return array
     * @throws Exception
     */
    public function update(array $data, int $categoryId)
    {
        $item = $this->categoryRepository->findById($categoryId);
        if ($data['parent_id'] && $data['parent_id'] != $item->parent_id)
            $this->categoryRepository->findById($data['parent_id']);
        $item->update($data);
        return $data;
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
