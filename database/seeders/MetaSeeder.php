<?php

namespace Database\Seeders;

use App\Models\Meta;
use App\Services\Meta\MetaService;
use Illuminate\Database\Seeder;

class MetaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $meta = new Meta();
        $home = MetaService::RESOURCE_HOME;
        $meta->create([
            'resource_type' => $home,
            'title' => config('app.meta.pl.service'),
            'locale' => 'pl'
        ]);
        $meta->create([
            'resource_type' => $home,
            'title' => config('app.meta.en.service'),
            'locale' => 'en'
        ]);
        $categories = MetaService::RESOURCE_CATEGORIES;
        $meta->create([
            'resource_type' => $categories,
            'title' => config('app.meta.pl.categories'),
            'locale' => 'pl'
        ]);
        $meta->create([
            'resource_type' => $categories,
            'title' => config('app.meta.en.categories'),
            'locale' => 'en'
        ]);
        $products = MetaService::RESOURCE_PRODUCTS;
        $meta->create([
            'resource_type' => $products,
            'title' => config('app.meta.pl.products'),
            'locale' => 'pl'
        ]);
        $meta->create([
            'resource_type' => $products,
            'title' => config('app.meta.en.products'),
            'locale' => 'en'
        ]);
        $contact = MetaService::RESOURCE_CONTACT;
        $meta->create([
            'resource_type' => $contact,
            'title' => config('app.meta.pl.contact'),
            'locale' => 'pl'
        ]);
        $meta->create([
            'resource_type' => $contact,
            'title' => config('app.meta.en.contact'),
            'locale' => 'en'
        ]);
        $login = MetaService::RESOURCE_LOGIN;
        $meta->create([
            'resource_type' => $login,
            'title' => config('app.meta.pl.auth.login'),
            'locale' => 'pl'
        ]);
        $meta->create([
            'resource_type' => $login,
            'title' => config('app.meta.en.auth.login'),
            'locale' => 'en'
        ]);
        $register = MetaService::RESOURCE_REGISTER;
        $meta->create([
            'resource_type' => $register,
            'title' => config('app.meta.pl.auth.register'),
            'locale' => 'pl'
        ]);
        $meta->create([
            'resource_type' => $register,
            'title' => config('app.meta.en.auth.register'),
            'locale' => 'en'
        ]);
        $terms = MetaService::RESOURCE_TERMS;
        $meta->create([
            'resource_type' => $terms,
            'title' => config('app.meta.pl.terms'),
            'locale' => 'pl'
        ]);
        $meta->create([
            'resource_type' => $terms,
            'title' => config('app.meta.en.terms'),
            'locale' => 'en'
        ]);
        $pp = MetaService::RESOURCE_PP;
        $meta->create([
            'resource_type' => $pp,
            'title' => config('app.meta.pl.pp'),
            'locale' => 'pl'
        ]);
        $meta->create([
            'resource_type' => $pp,
            'title' => config('app.meta.en.pp'),
            'locale' => 'en'
        ]);
        $forgotPassword = MetaService::RESOURCE_FORGOT_PASSWORD;
        $meta->create([
            'resource_type' => $forgotPassword,
            'title' => config('app.meta.pl.forgotPassword'),
            'locale' => 'pl'
        ]);
        $meta->create([
            'resource_type' => $forgotPassword,
            'title' => config('app.meta.en.forgotPassword'),
            'locale' => 'en'
        ]);
    }
}
