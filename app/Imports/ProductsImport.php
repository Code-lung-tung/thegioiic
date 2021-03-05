<?php

namespace App\Imports;

use App\model\Product;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\model\Brand;
use App\model\Category;

class ProductsImport implements ToModel, WithValidation, WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        $brand_name = clean_str($row['thuong_hieu']);
        $brand = Brand::where('name', 'like', '%'.$brand_name.'%')->get();
        $brand_not_exist = $brand->isEmpty();
        $brand_id = ($brand_not_exist ? 1 : $brand->first()->id);

        $category_name = clean_str($row['danh_muc']);
        $category = Category::where('name', 'LIKE', '%'.$category_name.'%')->get();
        $category_not_exist = $category->isEmpty();
        $category_id = ($category_not_exist ? 1 : $category->first()->id);

        return new Product([
            'name' => $row['ten'],
            'desc' => $row['mo_ta'],
            'brand_id' => $brand_id,
            'category_id' => $category_id,
            'specification' => $row['thong_so'],
            'price' => $row['gia_tien'],
            'image' => $row['duong_dan_anh'],
            'image_type' => 1,
            'quantity' => $row['so_luong'],
            'note' => $row['don_vi'],
            'datasheet' => $row['datasheet'],
            'code'     => rand(1000000000, 9999999999),
            'meta_title'=> $row['meta_title'],
            'meta_keywords'=> $row['meta_keywords'],
            'meta_description'=> $row['meta_description']
        ]);
    }

    public function rules(): array
    {
        return [
            'ten'               =>  'required',
            'mo_ta'             =>  'required',
            'thuong_hieu'       =>  'required',
            'danh_muc'          =>  'required',
            'so_luong'          =>  'required',
            'don_vi'            =>  'required',
            'gia_tien'          =>  'required',
            'thong_so'          =>  'required',
            'duong_dan_anh'     =>  'required'
        ];
    }
}
