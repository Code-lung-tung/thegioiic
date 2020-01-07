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
        $brand = Brand::where('name', 'like', '%' . $row['thuong_hieu'] . '%')->get();
        $brand_id = (empty($brand) ? 1 : $brand->id);

        $category = Category::where('name', 'like', '%' . $row['danh_muc'] . '%')->get();
        $category_id = (empty($category) ? 1 : $category->id);

        // $image_name = time() . '.' . $image->getClientOriginalExtension();
        // $image->move(public_path('images'), $image_name);

        return new Product([
            'name' => $row['ten'],
            'desc' => $row['mo_ta'],
            'brand_id' => $brand_id,
            'category_id' => $category_id,
            'specification' => $row['thong_so'],
            'price' => $row['gia_tien'],
            'image' => $row['anh'],
            'slug' => $row['ten_duong_dan'],
            'quantity' => $row['so_luong']
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
            'gia_tien'          =>  'required',
            'thong_so'          =>  'required',
            'ten_duong_dan'     =>  'required',
            'image'             =>  'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ];
    }

    public function customValidationMessages()
    {
        return [
            '1.in' => 'Custom message for :attribute.',
        ];
    }
}
