<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class Mail extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'driver', 'host', 'port', 'from_address', 'from_name', 'encryption', 'username', 'password', 'content', 'payment'
    ];
}
