<?php

namespace App\Services\Pages;

use App\Models\Page;
use App\Repositories\Pages\PageRepository;
use \Exception;

class PageService
{
    /**
     * @var PageRepository
     */
    private $pageRepository;

    /**
     * @param PageRepository $pageRepository
     */
    public function __construct(PageRepository $pageRepository)
    {
        $this->pageRepository = $pageRepository;
    }

    /**
     * @param array $data
     * @return mixed
     * @throws Exception
     */
    public function create(array $data)
    {
        $item = Page::create($data);
        if (empty($item))
            throw new Exception(trans('exceptions.no_created'));
        return $item;
    }

    /**
     * @param array $data
     * @param int $pageId
     * @return mixed
     * @throws Exception
     */
    public function update(array $data, int $pageId)
    {
        $item = $this->pageRepository->findById($pageId);
        $item->update($data);
        return $item;
    }

    /**
     * @param int $pageId
     * @return bool|null
     * @throws Exception
     */
    public function remove(int $pageId): ?bool
    {
        return $this->pageRepository->findById($pageId)->delete();
    }
}
