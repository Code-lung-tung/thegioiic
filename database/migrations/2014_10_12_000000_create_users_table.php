<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->boolean('is_admin')->default(false);
            $table->string('province_id')->references('id')->on('provinces')->nullable();
            $table->string('district_id')->references('id')->on('districts')->nullable();
            $table->string('ward_id')->references('id')->on('wards')->nullable();
            $table->string('address');
            $table->bigInteger('phone_number');
            $table->integer('company_name')->nullable();
            $table->integer('tax_code')->nullable();
            $table->integer('company_address')->nullable();
            $table->string('note')->nullable();
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
        Schema::dropIfExists('users');
    }
}
