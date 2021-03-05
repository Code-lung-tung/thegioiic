<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;
use App\model\Information;

class InformationCategory extends Model
{
    public function informations()
    {
        return $this->hasMany(Information::class);
    }
}
