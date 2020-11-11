<?php

namespace App\Services\Pages;

use App\Interfaces\MetaInterface;
use App\Models\Page;
use App\Repositories\Pages\PageRepository;
use App\Services\Meta\MetaService;
use \Exception;

class PageService
{
    /**
     * @var PageRepository
     */
    private $pageRepository;

    /**
     * @var MetaInterface
     */
    private $metaInterface;

    /**
     * @param PageRepository $pageRepository
     * @param MetaInterface $metaInterface
     */
    public function __construct(PageRepository $pageRepository, MetaInterface $metaInterface)
    {
        $this->pageRepository = $pageRepository;
        $this->metaInterface = $metaInterface;
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
        $this->setMetaData($data, $item->id);
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
        $meta = $this->setMetaData($data, $item->id);
        if ($item->meta)
            $meta->updateMeta($item->meta);
        else
            $meta->saveMeta();
        $item->update($data);
        return $item;
    }

    /**
     * @param array $data
     * @param int $itemId
     * @return MetaInterface
     */
    private function setMetaData(array $data, int $itemId)
    {
        return $this->metaInterface
            ->setResourceId($itemId)
            ->setResourceType(MetaService::RESOURCE_PAGE)
            ->setTitle($data['meta_title'])
            ->setLocale($data['locale'])
            ->setKeywords($data['meta_keywords'])
            ->setDesc($data['meta_desc']);
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
