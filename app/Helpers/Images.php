<?php

namespace App\Helpers;

use App\Models\Images\Image;

class Images
{
    /**
     * @param int $resourceId
     * @param string $resourceType
     * @return string
     */
    public static function find(int $resourceId, string $resourceType): string
    {
        $image = Image::where([
            'resource_id' => $resourceId,
            'resource_type' => $resourceType
        ])->first();
        if (!empty($image))
            return asset(config('app.df.assets') . '/' . $resourceType . '/' . $resourceId . '/' . $image->src);
        return asset(config('app.df.assets') . '/' . $resourceType . '/df.png');
    }

    /**
     * @param int $resourceId
     * @param string $resourceType
     * @param string $path
     * @return string
     */
    public static function getPath(int $resourceId, string $resourceType, string $path): string
    {
        return asset(config('app.df.assets').'/'.$resourceType.'/'.$resourceId.'/'.$path);
    }
}
