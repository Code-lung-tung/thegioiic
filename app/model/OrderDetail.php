<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    protected $fillable = [
        'id', 'order_id', 'product_id', 'price', 'quantity'
    ];
}
