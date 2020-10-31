<?php

namespace App\Services\Meta;

use App\Interfaces\MetaInterface;
use App\Models\Meta;
use \Exception;
use Illuminate\Support\Facades\DB;

class MetaService implements MetaInterface
{
    const RESOURCE_PAGE = 'PAGE';
    const RESOURCE_PRODUCT = 'PRODUCT';
    const RESOURCE_PRODUCTS = 'PRODUCTS';
    const RESOURCE_CATEGORY = 'CATEGORY';
    const RESOURCE_CATEGORIES = 'CATEGORIES';
    const RESOURCE_CONTACT = 'CONTACT';
    const RESOURCE_TERMS = 'TERMS';
    const RESOURCE_PP = 'PP'; #polityka prywatności
    const RESOURCE_HOME = 'HOME';
    const RESOURCE_REGISTER = 'REGISTER';
    const RESOURCE_LOGIN = 'LOGIN';
    const RESOURCE_FORGOT_PASSWORD = 'FORGOT_PASSWORD';

    /**
     * @var string
     */
    private $resourceType;

    /**
     * @var int|null
     */
    private $resourceId;

    /**
     * @var string
     */
    private $locale;

    /**
     * @var string
     */
    private $title;

    /**
     * @var string
     */
    private $desc;

    /**
     * @var string
     */
    private $keywords;

    /**
     * @return string|null
     */
    public function getResourceType(): ?string
    {
        return $this->resourceType;
    }

    /**
     * @param string|null $resourceType
     * @return $this
     */
    public function setResourceType(?string $resourceType)
    {
        $this->resourceType = $resourceType;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getResourceId(): ?int
    {
        return $this->resourceId;
    }

    /**
     * @param int|null $resourceId
     * @return $this
     */
    public function setResourceId(?int $resourceId)
    {
        $this->resourceId = $resourceId;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getLocale(): ?string
    {
        return $this->locale;
    }

    /**
     * @param string|null $locale
     * @return $this
     */
    public function setLocale(?string $locale)
    {
        $this->locale = $locale;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getTitle(): ?string
    {
        return $this->title;
    }

    /**
     * @param string|null $title
     * @return $this
     */
    public function setTitle(?string $title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getDesc(): ?string
    {
        return $this->desc;
    }

    /**
     * @param string|null $desc
     * @return $this
     */
    public function setDesc(?string $desc)
    {
        $this->desc = $desc;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getKeywords(): ?string
    {
        return $this->keywords;
    }

    /**
     * @param string|null $keywords
     * @return $this
     */
    public function setKeywords(?string $keywords)
    {
        $this->keywords = $keywords;

        return $this;
    }

    /**
     * @return Meta|null
     */
    public function saveMeta(): ?Meta
    {
        return Meta::create($this->prepareData());
    }

    /**
     * @param Meta $meta
     * @return Meta
     */
    public function updateMeta(Meta $meta): Meta
    {
        $data = $this->prepareData();
        $meta->update([
            'title' => $data['title'],
            'description' => $data['description'],
            'keywords' => $data['keywords']
        ]);
        return $meta;
    }

    /**
     * @param Meta $meta
     * @return bool|null
     * @throws Exception
     */
    public function removeMeta(Meta $meta): ?bool
    {
        return $meta->delete();
    }

    /**
     * @return array
     */
    private function prepareData(): array
    {
        return [
            'resource_id' => $this->getResourceId(),
            'resource_type' => $this->getResourceType(),
            'title' => $this->getTitle(),
            'description' => $this->getDesc(),
            'keywords' => $this->getKeywords(),
            'locale' => $this->getLocale()
        ];
    }
}
