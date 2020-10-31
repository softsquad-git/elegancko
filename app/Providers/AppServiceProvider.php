<?php

namespace App\Providers;

use App\Interfaces\MailInterface;
use App\Interfaces\MetaInterface;
use App\Models\Category;
use App\Models\Page;
use App\Models\Products\Product;
use App\Observers\Categories\CategoryObserver;
use App\Observers\Pages\PageObserver;
use App\Observers\Products\ProductObserver;
use App\Services\Mail\MailService;
use App\Services\Meta\MetaService;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            MailInterface::class,
            MailService::class
        );
        $this->app->bind(
            MetaInterface::class,
            MetaService::class
        );
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
        Category::observe(CategoryObserver::class);
        Page::observe(PageObserver::class);
        Product::observe(ProductObserver::class);
    }
}
