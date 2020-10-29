<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create([
            'name' => 'Baz kategorii',
            'alias' => 'bez-kategorii',
            'position' => 1,
            'locale' => 'pl'
        ]);
        Category::create([
            'name' => 'No category',
            'alias' => 'no-category',
            'position' => 1,
            'locale' => 'en'
        ]);
    }
}
