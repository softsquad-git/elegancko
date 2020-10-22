<?php

namespace App\Services\Categories;

use App\Models\Category;
use Illuminate\Support\Str;

class CategoryImageService
{
    /**
     * @param $image
     * @param Category $category
     * @return bool
     */
    public function upload($image, Category $category): bool
    {
        $this->remove($category);
        $_bPath = config('app.df.assets') . '/' . CategoryService::RESOURCE_TYPE . '/' . $category->id;
        $fileName = md5(time() . Str::random(32)) . '.' .$image->getClientOriginalExtension();
        $image->move($_bPath, $fileName);
        $category->image()->create([
            'resource_id' => $category->id,
            'resource_type' => CategoryService::RESOURCE_TYPE,
            'src' => $fileName
        ]);
        return true;
    }

    /**
     * @param Category $category
     * @return bool
     */
    public function remove(Category $category): bool
    {
        if (!empty($category->image()))
            $category->image()->delete();
        return true;
    }
}
