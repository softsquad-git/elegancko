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
        Route::post('remove-images/{productId}', 'ProductController@removeProductImages');
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
        Route::get('find/{settingId}', 'AdminSettingController@find');
        Route::get('all', 'AdminSettingController@index');
        Route::post('create', 'AdminSettingController@create');
        Route::post('update/{settingId}', 'AdminSettingController@update');
        Route::delete('remove/{settingId}', 'AdminSettingController@remove');
        Route::group(['prefix' => 'types'], function () {
            Route::get('all', 'AdminSettingTypeController@index');
            Route::post('create', 'AdminSettingTypeController@create');
            Route::put('update/{typeId}', 'AdminSettingTypeController@update');
            Route::delete('remove/{typeId}', 'AdminSettingTypeController@remove');
        });
    });
    Route::group(['prefix' => 'pages', 'namespace' => 'Pages'], function () {
        Route::get('all', 'PageController@index');
        Route::get('find/{pageId}', 'PageController@findById');
        Route::post('create', 'PageController@create');
        Route::post('update/{pageId}', 'PageController@update');
        Route::delete('remove/{pageId}', 'PageController@remove');
    });
    Route::group(['prefix' => 'orders', 'namespace' => 'Orders'], function () {
        Route::get('all', 'OrderController@index');
        Route::get('find/{orderId}', 'OrderController@findById');
        Route::post('create', 'OrderController@create');
        Route::post('update/{orderId}', 'OrderController@update');
        Route::delete('remove/{orderId}', 'OrderController@remove');
        Route::get('all-products/{orderId}', 'OrderController@findAllOrderProducts');
    });
    Route::group(['prefix' => 'reports', 'namespace' => 'Reports'], function () {
        Route::get('users', 'ReportController@reportUsers');
        Route::get('orders', 'ReportController@reportOrders');
        Route::get('messages', 'ReportController@reportMessages');
    });
    Route::group(['prefix' => 'messages', 'namespace' => 'Messages'], function () {
       Route::get('all', 'MessageController@index');
       Route::get('find/{messageId}', 'MessageController@findById');
       Route::post('create', 'MessageController@create');
       Route::post('is-reading/{messageId}', 'MessageController@isReading');
       Route::delete('remove/{messageId}', 'MessageController@remove');
    });
    Route::group(['prefix' => 'meta', 'namespace' => 'Meta'], function () {
        Route::get('all', 'MetaController@index');
        Route::get('find/{metaId}', 'MetaController@findById');
        Route::post('create', 'MetaController@create');
        Route::post('update/{metaId}', 'MetaController@update');
        Route::delete('remove/{metaId}', 'MetaController@remove');
    });
});
