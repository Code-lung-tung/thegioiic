<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;
use App\model\BannerItem;

class Banner extends Model
{
    public function bannerItems()
    {
        return $this->hasMany(BannerItem::class);
    }

    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }

    protected $fillable = [
        'id', 'link', 'alt', 'status', 'image'
    ];
}
