<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'user'], function () {
    Route::get('logged', function () {
        return auth()->user();
    });
});

Route::group(['prefix' => 'account', 'namespace' => 'User'], function () {
   Route::group(['prefix' => 'orders', 'namespace' => 'Orders'], function () {
       Route::get('all', 'OrderController@index');
       Route::get('find/{orderId}', 'OrderController@findById');
   });
});

Route::group(['prefix' => 'basket', 'namespace' => 'Basket'], function () {
   Route::get('all', 'BasketController@index');
   Route::post('create', 'BasketController@create');
   Route::post('update/{basketId}', 'BasketController@update');
   Route::post('remove', 'BasketController@remove');
});
