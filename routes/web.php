<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', 'App\Http\Controllers\Front\IndexController@index')
    ->where('any', '.*');
