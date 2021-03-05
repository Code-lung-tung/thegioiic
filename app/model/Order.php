<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\model\OrderDetail;

class Order extends Model
{
       /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'user_id', 'date_order', 'total', 'note', 'code'
     ];

    public function scopeOrderDetail($query, $product_id)
    {
        return $query->where('product_id', $product_id);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, 'order_details')
                    ->withPivot('quantity', 'price');
    }
}
