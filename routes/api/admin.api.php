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
});
