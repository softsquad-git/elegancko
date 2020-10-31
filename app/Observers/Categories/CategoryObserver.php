<?php

namespace App\Observers\Categories;

use App\Models\Category;

class CategoryObserver
{
    /**
     * @param Category $category
     */
    public function deleted(Category $category)
    {
        $category->products()->delete();
        $category->image()->delete();
        $category->meta()->delete();
    }
}
