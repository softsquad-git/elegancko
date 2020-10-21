<?php

use Illuminate\Support\Facades\Route;

Route::group(['namespace' => 'App\Http\Controllers'], function () {
   include 'api/auth.api.php';
   include 'api/front.api.php';
   Route::group(['middleware' => 'auth:api'], function () {
      include 'api/user.api.php';
      include 'api/admin.api.php';
      include 'api/setting.api.php';
   });
   Route::group(['prefix' => 'categories', 'namespace' => 'Categories'], function () {
       Route::get('all', 'CategoryController@index');
       Route::get('find/{alias}', 'CategoryController@findByAlias');
       Route::get('find/id/{categoryId}', 'CategoryController@findById');
   });
});
