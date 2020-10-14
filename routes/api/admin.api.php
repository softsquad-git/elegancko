<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin', 'namespace' => 'Admin'], function () {
    Route::group(['prefix' => 'categories', 'namespace' => 'Categories'], function () {
        Route::get('all', 'CategoryController@index');
        Route::get('find/{categoryId}', 'CategoryController@findById');
        Route::post('create', 'CategoryController@create');
        Route::put('update/{categoryId}', 'CategoryController@update');
        Route::delete('remove/{categoryId}', 'CategoryController@remove');
    });
    Route::group(['prefix' => 'colors', 'namespace' => 'Colors'], function () {
        Route::get('all', 'ColorController@index');
        Route::post('create', 'ColorController@create');
        Route::put('update/{colorId}', 'ColorController@update');
        Route::delete('remove/{colorId}', 'ColorController@remove');
    });
    Route::group(['prefix' => 'sizes', 'namespace' => 'Sizes'], function () {
        Route::get('all', 'SizeController@index');
        Route::post('create', 'SizeController@create');
        Route::put('update/{sizeId}', 'SizeController@update');
        Route::delete('remove/{sizeId}', 'SizeController@remove');
    });
    Route::group(['prefix' => 'products', 'namespace' => 'Products'], function () {
        Route::get('all', 'ProductController@index');
        Route::get('find/{productId}', 'ProductController@findById');
        Route::post('create', 'ProductController@create');
        Route::put('update/{productId}', 'ProductController@update');
        Route::delete('remove/{productId}', 'ProductController@remove');
    });
});
