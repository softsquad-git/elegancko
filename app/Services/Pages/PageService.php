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
        $this->saveMeta($item->id, $data['meta'], $item->locale);
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
        if ($item->meta) {
            $this->metaInterface->setTitle($data['meta']['title'])
                ->setDesc($data['meta']['description'])
                ->setKeywords($data['meta']['keywords'])
                ->updateMeta($item->meta);
        } else {
            $this->saveMeta($item->id, $data['meta'], $item->locale);
        }
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

    /**
     * @param int $id
     * @param array $meta
     * @param string $locale
     */
    private function saveMeta(int $id, array $meta, string $locale)
    {
        $this->metaInterface
            ->setResourceId($id)
            ->setResourceType(MetaService::RESOURCE_PAGE)
            ->setTitle($meta['title'])
            ->setDesc($meta['description'])
            ->setKeywords($meta['keywords'])
            ->setLocale($locale)
            ->saveMeta();
    }
}
