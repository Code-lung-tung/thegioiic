<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;
use App\model\Product;

class Unit extends Model
{
      /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'product_id', 'number', 'unit_price'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
