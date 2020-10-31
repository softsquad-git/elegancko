<?php

namespace App\Interfaces;

use App\Models\Meta;

interface MetaInterface
{
    /**
     * @param string|null $resourceType
     * @return $this
     */
    public function setResourceType(?string $resourceType);

    /**
     * @param int|null $resourceId
     * @return $this
     */
    public function setResourceId(?int $resourceId);

    /**
     * @param string|null $title
     * @return $this
     */
    public function setTitle(?string $title);

    /**
     * @param string|null $desc
     * @return $this
     */
    public function setDesc(?string $desc);

    /**
     * @param string|null $keywords
     * @return $this
     */
    public function setKeywords(?string $keywords);

    /**
     * @param string|null $locale
     * @return $this
     */
    public function setLocale(?string $locale);

    public function saveMeta();

    public function updateMeta(Meta $meta);

    public function removeMeta(Meta $meta);
}
