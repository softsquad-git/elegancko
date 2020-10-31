<?php

namespace App\Console\Commands;

use Database\Seeders\AdminSettingTypeSeeder;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class Configuration extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'configuration:run';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Configuration service';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $seedersClass = [
            'AdminAccount',
            'Category',
            'AdminSetting',
            'Meta',
            'AdminSettingType'
        ];
        Artisan::call('migrate:fresh');
        foreach ($seedersClass as $seedClass) {
            Artisan::call('db:seed --class='.$seedClass.'Seeder');
        }
    }
}
