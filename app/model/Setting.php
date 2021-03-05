<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;
use App\model\OnlineSupportInformation;

class Setting extends Model
{
    public function onlineSupportInformations()
    {
        return $this->hasMany(OnlineSupportInformation::class);
    }

    protected $fillable = [
        'id', 'value'
    ];
}
