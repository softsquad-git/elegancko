<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'front', 'namespace' => 'Front'], function () {
    Route::group(['prefix' => 'products', 'namespace' => 'Products'], function () {
        Route::get('all', 'ProductController@index');
        Route::get('find/{productId}', 'ProductController@findById');
    });
    Route::group(['prefix' => 'settings', 'namespace' => 'Settings'], function () {
        Route::get('find-by-type/{type}', 'PageSettingController@findByType');
    });
    Route::group(['prefix' => 'shipments'], function () {
        Route::get('all', 'IndexController@getShipments');
    });
    Route::group(['prefix' => 'orders', 'namespace' => 'Orders'], function () {
        Route::get('find/{orderBy}', 'OrderController@find');
        Route::post('create', 'OrderController@create');
        Route::group(['prefix' => 'payments'], function () {
            Route::post('create', 'OrderPaymentController@create');
        });
    });
});
