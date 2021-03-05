<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Enums\Status;

class CreateOnlineSupportInformationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('online_support_informations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('setting_id')->references('id')->on('settings');
            $table->integer('status')->default(Status::Active);
            $table->string('name');
            $table->string('skype')->nullable();
            $table->string('zalo')->nullable();
            $table->string('facebook')->nullable();
            $table->string('tel')->nullable();
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
        Schema::dropIfExists('online_support_informations');
    }
}
