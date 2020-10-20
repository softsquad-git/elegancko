<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin', 'namespace' => 'Admin'], function () {
    Route::group(['prefix' => 'categories', 'namespace' => 'Categories'], function () {
        Route::get('all', 'CategoryController@index');
        Route::get('find/{categoryId}', 'CategoryController@findById');
        Route::post('create', 'CategoryController@create');
        Route::post('update/{categoryId}', 'CategoryController@update');
        Route::delete('remove/{categoryId}', 'CategoryController@remove');
    });
    Route::group(['prefix' => 'products', 'namespace' => 'Products'], function () {
        Route::get('all', 'ProductController@index');
        Route::get('find/{productId}', 'ProductController@findById');
        Route::post('create', 'ProductController@create');
        Route::post('update/{productId}', 'ProductController@update');
        Route::delete('remove/{productId}', 'ProductController@remove');
        Route::group(['prefix' => 'colors'], function () {
            Route::get('all', 'ProductColorController@index');
            Route::post('create', 'ProductColorController@create');
            Route::post('update/{colorId}', 'ProductColorController@update');
            Route::delete('remove/{colorId}', 'ProductColorController@remove');
        });
        Route::group(['prefix' => 'sizes'], function () {
            Route::get('all', 'ProductSizeController@index');
            Route::post('create', 'ProductSizeController@create');
            Route::post('update/{sizeId}', 'ProductSizeController@update');
            Route::delete('remove/{sizeId}', 'ProductSizeController@remove');
        });
    });
    Route::group(['prefix' => 'shipments', 'namespace' => 'Shipments'], function () {
        Route::get('all', 'ShipmentController@index');
        Route::post('create', 'ShipmentController@create');
        Route::post('update/{shipmentId}', 'ShipmentController@update');
        Route::delete('remove/{shipmentId}', 'ShipmentController@remove');
    });
    Route::group(['prefix' => 'users', 'namespace' => 'Users'], function () {
        Route::get('all', 'UserController@index');
        Route::get('find/{userId}', 'UserController@findById');
    });
    Route::group(['prefix' => 'settings', 'namespace' => 'Settings'], function () {
       Route::get('find-by/{type}', 'AdminSettingController@findByType');
       Route::get('all', 'AdminSettingController@index');
       Route::post('create', 'AdminSettingController@create');
       Route::put('update/{settingId}', 'AdminSettingController@update');
       Route::delete('remove/{settingId}', 'AdminSettingController@remove');
       Route::group(['prefix' => 'types'], function () {
           Route::get('all', 'AdminSettingTypeController@index');
           Route::post('create', 'AdminSettingTypeController@create');
           Route::put('update/{typeId}', 'AdminSettingTypeController@update');
           Route::delete('remove/{typeId}', 'AdminSettingTypeController@remove');
       });
    });
});
