<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\model\Brand;
use App\model\Product;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {   
        if ($request->has('q')) {
            $query = $request->query('q');
            $total_count = Brand::active()->where('name', 'like', '%' . $query . '%')->count();
            $brands = Brand::active()->where('name', 'like', '%' . $query . '%')->paginate(30);
        } else {
            $total_count = Brand::active()->count();
            $brands = Brand::active()->paginate(30);
        }
        return view('brands.index', compact('brands', 'total_count'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $brand = Brand::active()->whereSlug($id)->firstOrFail();
        $products = Product::where('brand_id', $brand->id)->paginate(20);
        $total_count = Product::where('brand_id', $brand->id)->count();
        return view('brands.show', compact('brand', 'products', 'total_count'));
    }
}
