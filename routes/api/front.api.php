<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'front', 'namespace' => 'Front'], function() {
    Route::group(['prefix' => 'products', 'namespace' => 'Products'], function () {
       Route::get('all', 'ProductController@index');
       Route::get('find/{productId}', 'ProductController@findById');
    });
});
