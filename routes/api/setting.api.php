<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'settings', 'namespace' => 'Settings'], function () {
    Route::post('basic-data', 'SettingController@basicDataSetting');
    Route::post('password', 'SettingController@passwordSetting');
    Route::post('email-first', 'SettingController@emailSetting');
    Route::post('email-second', 'SettingController@saveNewEmail');
    Route::get('check-email', 'SettingController@checkEmailChange');
    Route::delete('change-email-delete', 'SettingController@removeChangeEmailKey');
});
