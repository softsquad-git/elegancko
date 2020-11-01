<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function () {
   Route::post('login', 'AuthController@login');
   Route::post('register', 'AuthController@register');
   Route::post('logout', [
       'middleware' => 'auth:api',
       'uses' => 'AuthController@logout'
   ]);
});
