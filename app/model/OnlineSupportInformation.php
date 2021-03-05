<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;
use App\model\Setting;

class OnlineSupportInformation extends Model
{
    protected $table = 'online_support_informations';

    public function banner()
    {
        return $this->belongsTo(Setting::class);
    }

    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }

    protected $fillable = [
        'id', 'name', 'facebook', 'zalo', 'skype', 'tel', 'setting_id', 'status'
    ];
}
