<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('category_id')->references('id')->on('categories');
            $table->integer('brand_id')->references('id')->on('brands');
            $table->string('name', 200);
            $table->string('desc');
            $table->string('image');
            $table->string('specification');
            $table->integer('quantity');
            $table->integer('price')->default(0);
            $table->integer('status')->default(1);
            $table->string('slug');
            $table->string('meta_title')->default(null);
            $table->string('meta_keywords')->default(null);
            $table->string('meta_description')->default(null);
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
        Schema::dropIfExists('products');
    }
}
