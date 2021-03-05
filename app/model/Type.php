<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Cviebrock\EloquentSluggable\SluggableScopeHelpers;
use App\model\Category;

class Type extends Model
{
    use Sluggable;
    use SluggableScopeHelpers;

     /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'name', 'desc', 'slug', 'status'
    ];

    public function categories()
    {
        return $this->hasMany(Category::class);
    }

    public function scopeShowable($query)
    {
        return $query->where('status', 1);
    }
}
