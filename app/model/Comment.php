<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;
use App\model\Reply;
use App\User;

class Comment extends Model
{
    public function commentable()
    {
        return $this->morphTo();
    }

    public function replies()
    {
        return $this->hasMany(Reply::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
