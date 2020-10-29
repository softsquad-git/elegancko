<?php

namespace Database\Seeders;

use App\Models\Admin\AdminSettingType;
use Illuminate\Database\Seeder;

class AdminSettingTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['_key' => 'facebook_url', 'name' => 'Link do Facebook'],
            ['_key' => 'service_name', 'name' => 'Nazwa serwisu'],
            ['_key' => 'products_top_banner', 'name' => 'Banner na stronie produktów'],
            ['_key' => 'home_top_banner', 'name' => 'Banner na stronie głównej'],
            ['_key' => 'phone_contact', 'name' => 'Telefon kontaktowy'],
            ['_key' => 'email_contact', 'name' => 'E-mail'],
            ['_key' => 'number_account_pay', 'name' => 'Numer konta bankowego'],
            ['_key' => 'shop_address', 'name' => 'Adres sklepu'],
            ['_key' => 'auth_left_banner', 'name' => 'Banner na stronie logowanie'],
            ['_key' => 'home_top_banner_text', 'name' => 'Napis na stronie głównej'],
            ['_key' => 'home_top_banner_desc', 'name' => 'Opis na stronie głównej']
        ];
        foreach ($data as $datum) {
            AdminSettingType::create($datum);
        }
    }
}
