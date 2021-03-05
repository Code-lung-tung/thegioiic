<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    protected $fillable = [
        'id', 'user_id', 'product_id'
    ];
}
