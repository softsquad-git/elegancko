<?php

namespace App\Helpers;

use Illuminate\Support\Str;

class Upload
{
    /**
     * @param string $path
     * @param $file
     * @return string
     */
    public static function single(string $path, $file)
    {
        $url = config('app.df.assets');
        $path = $url . '/' . $path;
        $fileName = md5(Str::random(32)) . '.' . $file->getClientOriginalExtension();
        $file->move($path, $fileName);
        return $fileName;
    }
}
