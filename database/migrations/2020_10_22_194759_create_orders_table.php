<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->string('name');
            $table->string('last_name');
            $table->decimal('total_price');
            $table->integer('shipment_id')->index();
            $table->string('post_code');
            $table->string('city');
            $table->string('address');
            $table->string('country');
            $table->integer('type');
            $table->string('company_name')->nullable();
            $table->string('nip')->nullable();
            $table->string('number_phone');
            $table->text('comments')->nullable();
            $table->integer('status')->default(\App\Services\Orders\OrderService::ORDER_STATUS['ORDER_PLACED']);
            $table->string('token', 64);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
