<?php

namespace App\Observers\Pages;

use App\Models\Page;

class PageObserver
{
    /**
     * @param Page $page
     */
    public function deleted(Page $page)
    {
        $page->meta()->delete();
    }
}
