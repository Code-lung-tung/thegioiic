<?php

use Illuminate\Database\Seeder;
use App\model\Information;

class CreateInformationCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(DB::table('information_categories')->get()->count() > 0)
        {
            return;
        }
        $categories = [
            [
                'id' => 1,
                'name' => 'Thông tin công ty',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 2,
                'name' => 'Dịch vụ bán hàng',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 3,
                'name' => 'Chính sách công ty',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 4,
                'name' => 'Hỗ trợ Khách hàng',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
        ];
        DB::table('information_categories')->insert($categories);

        Information::where(['types' => 1])->update([
            'information_category_id' => 1
        ]);
        Information::where(['types' => 2])->update([
            'information_category_id' => 2
        ]);
        Information::where(['types' => 3])->update([
            'information_category_id' => 3
        ]);
        Information::where(['types' => 4])->update([
            'information_category_id' => 5
        ]);
    }
}
