<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;
use App\model\Comment;
use App\model\InformationCategory;
use Cviebrock\EloquentSluggable\Sluggable;
use Cviebrock\EloquentSluggable\SluggableScopeHelpers;

class Information extends Model
{
    protected $table = 'informations';

    use Sluggable;
    use SluggableScopeHelpers;

    const Types = [
        1 => 'Thông tin công ty',
        2 => 'Dịch vụ bán hàng',
        3 => 'Chính sách - Quy định',
        4 => 'Hỗ trợ khách hàng'
    ];
    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }

    public function information_category()
    {
        return $this->belongsTo(InformationCategory::class);
    }

    protected $fillable = [
        'id', 'title', 'content', 'slug', 'thumbnail', 'meta_title', 'meta_keywords', 'meta_description', 'information_category_id'
    ];
}
