<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'user'], function () {
    Route::get('logged', function () {
        return auth()->user();
    });

});

Route::group(['prefix' => 'basket', 'namespace' => 'Basket'], function () {
   Route::get('all', 'BasketController@index');
   Route::post('create', 'BasketController@create');
   Route::post('update/{basketId}', 'BasketController@update');
   Route::post('remove', 'BasketController@remove');
});
