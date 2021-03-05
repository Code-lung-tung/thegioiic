<?php

use Illuminate\Database\Seeder;
use App\Enums\SettingType;

class SettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(DB::table('settings')->get()->count() > 0 || DB::table('online_support_informations')->get()->count() > 0)
        {
            return;
        }
        $settings = [
            [
                'id' => 1,
                'type' => SettingType::Tel,
                'value' => '(28)3896.8699 | 0972924961',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 2,
                'type' => SettingType::OpenTime,
                'value' => '<a href="">Giờ mở cửa: Thứ 2~7: 7:30~18:00 | CN: 8:00~16:30 (Bán thông trưa)</a>',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 3,
                'type' => SettingType::Address,
                'value' => '
                    <ul>
                        <li class="title">
                            © THEGIOIIC.COM
            
                        </li>
                        <li>
                            <p>939/1A Kha Vạn Cân, Linh Tây, Thủ Đức, HCM</p>
                        </li>
                        <li>
                            <p>Điện thoại: (28)3896.8699</p>
                        </li>
                        <li>
                            <p>Email: info@thegioiic.com. Skype ID: giaolo, thegioiic</p>
                        </li>
                    </ul>',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 4,
                'type' => SettingType::OnlineSupportBusiness,
                'value' => 'Kinh Doanh (Thứ 2-7, 7:30-12:00 | 1:30-18:00)',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 5,
                'type' => SettingType::OnlineSupportTechnical,
                'value' => 'Hỗ trợ Kỹ Thuật',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 6,
                'type' => SettingType::OnlineSupportSaleWarranty,
                'value' => 'Hỗ trợ sau Bán hàng - Bảo hành',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
        ];
        $online_support_informations = [
            [
                'id' => 1,
                'setting_id' => 4,
                'name' => 'Ms. Trâm',
                'skype' => '',
                'zalo' => '',
                'facebook' => '',
                'tel' => '0972.924.961',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 2,
                'setting_id' => 4,
                'name' => 'Ms. Thu',
                'skype' => '',
                'zalo' => '',
                'facebook' => '',
                'tel' => '0972.924.961',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 3,
                'setting_id' => 5,
                'name' => 'Mr. Linh',
                'skype' => '',
                'zalo' => '',
                'facebook' => '',
                'tel' => '0972.924.961',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 4,
                'setting_id' => 6,
                'name' => 'Ms. Hoan',
                'skype' => '',
                'zalo' => '',
                'facebook' => '',
                'tel' => '0972.924.961',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]
        ];
        DB::table('settings')->insert($settings);
        DB::table('online_support_informations')->insert($online_support_informations);
    }
}
