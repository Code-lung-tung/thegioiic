<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use App\model\Product;
use App\model\Brand;
use App\model\Category;
use App\model\Unit;
use App\Imports\ProductsImport;
use Maatwebsite\Excel\Facades\Excel;


class ProductsController extends Controller
{
  /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $name = $request->has('search') ? $request->search : "";
        $products = Product::where("name", 'LIKE','%'.$name.'%')->orWhere("desc", 'LIKE','%'.$name.'%')->
        orWhere("code", 'LIKE','%'.$name.'%')->paginate(10);
        return view('admin.products.index', ['products' => $products]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $brands = Brand::all();
        $categories = Category::all();
        return view('admin.products.create', compact('brands', 'categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'              =>  'required',
            'desc'              =>  'required',
            'quantity'          =>  'required|numeric',
            'note'              =>  'required',
            'specification'     =>  'required',
            'brand_id'          =>  'required',
            'category_id'       =>  'required',
            'price'             =>  'required|numeric'
        ]);

        if($request->image_type == 0)
        {
            $image = $request->file('image');
    
            $new_name = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('images'), $new_name);
        }
        else
        {
            $new_name = $request->image;
        }

        $product = array(
            'name'               =>   $request->name,
            'desc'               =>   $request->desc,
            'specification'      =>   $request->specification,
            'price'              =>   $request->price,
            'note'               =>   $request->note,
            'quantity'           =>   $request->quantity,
            'slug'               =>   $request->slug,
            'datasheet'          =>   $request->datasheet,
            'brand_id'           =>   $request->brand_id,
            'category_id'        =>   $request->category_id,
            'image'              =>   $new_name,
            'image_type'         =>   $request->image_type,
            'meta_title'         =>   $request->meta_title,
            'meta_keywords'      =>   $request->meta_keywords,
            'meta_description'   =>   $request->meta_description,
            'code'               =>   rand(1000000000, 9999999999)
        );
        $product = Product::create($product);
        $units = [];
        $i = 0;

        foreach($request->request as $key => $value) {

            if (stripos($key, "number") !== false && $value != null) {
                array_push($units, ['number' => $value]);
            }
            if (stripos($key, "unit") !== false && $value != null) {
                $units[$i]['unit'] = $value;
                $i += 1;
            }
        }

        if (count($units)) {
            foreach($units as $unit) {
                Unit::create([
                    'product_id' => $product->id,
                    'number'     => $unit['number'],
                    'unit_price' => $unit['unit']
                ]);
            }
        }

        return redirect()->route('admin.products.index')->with('success', 'Data Added successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = Product::findOrFail($id);
        $brands = Brand::all();
        $categories = Category::all();
        return view('admin.products.edit', compact('product', 'brands', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if($request->image_type == 0)
        {
            $image_name = $request->hidden_image;
            $image = $request->file('image');
        }
        else
        {
            $image_name = $request->image;
            $image = $request->image;
        }
        if($image && ($request->image_type == 0))
        {
            $request->validate([
                'name'              =>  'required',
                'desc'              =>  'required',
                'note'              =>  'required',
                'specification'     =>  'required',
                'quantity'          =>  'required|numeric',
                'brand_id'          =>  'required',
                'category_id'       =>  'required',
                'price'             =>  'required|numeric'
            ]);

            $image_name = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('images'), $image_name);
        }
        else
        {
            $request->validate([
                'name'              =>  'required',
                'desc'              =>  'required',
                'note'              =>  'required',
                'specification'     =>  'required',
                'price'             =>  'required',
                'brand_id'          =>  'required',
                'category_id'       =>  'required'
            ]);
        }

        $form_data = array(
            'name'              =>   $request->name,
            'desc'              =>   $request->desc,
            'specification'     =>   $request->specification,
            'quantity'          =>   $request->quantity,
            'note'              =>   $request->note,
            'price'             =>   $request->price,
            'slug'              =>   $request->slug,
            'datasheet'         =>   $request->datasheet,
            'brand_id'          =>   $request->brand_id,
            'category_id'       =>   $request->category_id,
            'image'             =>   $image_name,
            'image_type'        =>   $request->image_type,
            'meta_title'        =>   $request->meta_title,
            'meta_keywords'     =>   $request->meta_keywords,
            'meta_description'  =>   $request->meta_description
        );

        Product::whereId($id)->update($form_data);
        $units = [];
        $unitsOld = [];
        $i = 0;
        $j = 0;
        foreach($request->request as $key => $value) {
            if (stripos($key, "number-") !== false && $value != null) {
                $idUnit = explode("-", $key)[1];
                array_push($unitsOld, ['id' => $idUnit, 'number' => $value]);
            }

            if (stripos($key, "unit-") !== false && $value != null) {
                $unitsOld[$j]['unit'] = $value;
                $j += 1;
            }

            if (stripos($key, "number_") !== false && $value != null) {
                array_push($units, ['number' => $value]);
            }
            if (stripos($key, "unit_") !== false && $value != null) {
                $units[$i]['unit'] = $value;
                $i += 1;
            }
        }

        if (count($unitsOld)) {
            foreach($unitsOld as $unit) {
                Unit::whereId($unit['id'])->update([
                    'product_id' => $id,
                    'number'     => $unit['number'],
                    'unit_price' => $unit['unit']
                ]);
            }
        }

        $product =  Product::findOrFail($id);
        foreach($product->units as $unit){
            $check = false;
            foreach($unitsOld as $u) {
                if ($unit-> id == $u['id']) {
                    $check = true;
                }
            }
            if (!$check) {
                Unit::findOrFail($unit->id)->delete();
            }
        }

        if (count($units)) {
            foreach($units as $unit) {
                Unit::create(
                    [
                        'product_id' => $id,
                        'number'     => $unit['number'],
                        'unit_price' => $unit['unit']
                    ]
                );
            }
        }

        return redirect()->route('admin.products.index')->with('success', 'Data Updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Product::findOrFail($id);
        $data->delete();
        return redirect()->route('admin.products.index')->with('success', 'Data is successfully deleted');
    }

    public function import()
    {
        request()->validate([
            'excel_file' => 'required|file|mimes:xlsx'
           ]);
        try {
            Excel::import(new ProductsImport,request()->file('excel_file'));
        } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
            $failures = $e->failures();
            $er='';
             foreach ($failures as $failure) {
                $er .= 'Dòng:' . $failure->row() . '- Cột: ' . $failure->attribute() . ' | ';
             }
            return back()->withError("Dữ liệu nhập vào chưa chuẩn tại các cột - mục sau: " . $er )->withInput();
        }
        return redirect()->route('admin.products.index')->with('success', 'Thành công !');
    }

    public function download_excel()
    {
        return Storage::download('download/example.xlsx');
    }
}
