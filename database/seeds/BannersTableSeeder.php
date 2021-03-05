<?php

use Illuminate\Database\Seeder;
use App\Enums\BannerType;
use App\Enums\Status;

class BannersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(DB::table('banners')->get()->count() > 0 || DB::table('banner_items')->get()->count() > 0 )
        {
            return;
        }
        $banners = [
            [
                'id' => 1,
                'type' => BannerType::Logo,
                'status' => Status::Active,
                'image' => 'logo.jpg',
                'alt' => '',
                'link' => 'https://thegioiic.com/pages/thegioiic-la-nha-phan-phoi-cua-waveshare',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 2,
                'type' => BannerType::TopRight,
                'status' => Status::Active,
                'image' => 'top_right.jpg',
                'alt' => '',
                'link' => 'https://thegioiic.com/services/phan-phoi-linh-kien-dien-tu-va-thiet-bi-dien-tu',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 3,
                'type' => BannerType::TopLeft,
                'status' => Status::Active,
                'image' => 'top_left.jpg',
                'alt' => '',
                'link' => 'https://thegioiic.com/pages/thegioiic-la-nha-phan-phoi-cua-waveshare',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 4,
                'type' => BannerType::LeftMost,
                'status' => Status::Active,
                'image' => 'left_most.jpg',
                'alt' => '',
                'link' => 'https://ledsang.com/',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 5,
                'type' => BannerType::RightMost,
                'status' => Status::Active,
                'image' => 'right_most.jpg',
                'alt' => '',
                'link' => 'https://vinaautomation.com/',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 6,
                'type' => BannerType::Left,
                'status' => Status::Active,
                'image' => 'left.jpg',
                'alt' => '',
                'link' => 'https://ledsang.com/',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 7,
                'type' => BannerType::Right,
                'status' => Status::Active,
                'image' => 'right.jpg',
                'alt' => '',
                'link' => 'https://vnsmarthome.com/',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 8,
                'type' => BannerType::Slider,
                'status' => Status::Active,
                'image' => '',
                'alt' => '',
                'link' => '',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]
        ];
        $bannerItems = [
            [
                'banner_id' => 8,
                'status' => Status::Active,
                'image' => 'banner1.jpg',
                'alt' => '',
                'link' => 'https://www.thegioiic.com/services/phan-phoi-linh-kien-dien-tu-va-thiet-bi-dien-tu',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'banner_id' => 8,
                'status' => Status::Active,
                'image' => 'banner2.jpg',
                'alt' => '',
                'link' => 'https://thegioiic.com/services/gia-cong-cac-loai-day-bus-va-day-cap',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'banner_id' => 8,
                'status' => Status::Active,
                'image' => 'banner3.jpg',
                'alt' => '',
                'link' => 'https://www.thegioiic.com/services/thiet-ke-mach-dien-tu-he-thong-nhung-hardware-development-for-embedded-systems',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]
        ];
        DB::table('banners')->insert($banners);
        DB::table('banner_items')->insert($bannerItems);
    }
}
