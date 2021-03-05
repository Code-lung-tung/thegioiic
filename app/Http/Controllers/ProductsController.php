<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\model\Type;
use App\model\Product;
use App\model\Category;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $types = Type::showable()->get();
        return view('products.index', compact('types'));
    }

    public function searchAutoHome(Request $request)
    {
        $q = $request->has('q') ? $request->q : '';
        $products = Product::where('name', 'LIKE', '%'.$q.'%')->orWhere('desc', 'LIKE', '%'.$q.'%')->get();
        if (count($products) == 0 && $q != '') {
            $tmps = explode(" ", $q);
            foreach ($tmps as $tmp) {
                $products = $products->where('name', 'LIKE', '%'.$tmp.'%')->get();
            }
        }
        return response()->json(['total' => count($products), 'products' => $products]);
    }

    public function productByType(Request $request)
    {   
        $type = $request->type;
        $page = $request->page;
        $current = $request->current;
        $page = intval($page);
        if ($current == 'next') {
            $page += 1;
        } else {
            $page -= 1;
        }
        $products = [];
       
        if ($page >= 0) {
            $category_ids = Category::where("type_id", $type)->get()->pluck('id');
            //dd($category_ids);
            $products = Product::whereIn("category_id", $category_ids)->offset($page*4)->limit(4)->get();
        }
        return response()->json($products);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $name = $request->has('search') ? $request->search : '';
        $page = $request->has('page') ? $request->page : 1;
        $offset = $page == 1 ? 0 : 16*($page - 1);
        $products = Product::where("name", 'LIKE','%'.$name.'%')->offset($offset)->limit(16)->get();
        $list = Product::where("name", 'LIKE','%'.$name.'%')->get();
        $total = count($list);
        $numberPage = $total / 16;
        return view('products.list', compact('products', 'name', 'numberPage', 'total'));
    }

      /**
     * Display the specified resource.
     *
     * @param  int  $slug
     * @return \Illuminate\Http\Response
     */
    public function showCategories(Request $request, $slug)
    {
        $categor = Category::where('slug', $slug)->first();
        if (!$categor) {
            $type = Type::where('slug', $slug)->first();
            $types = Type::all();
            $categories = Category::where("type_id", $type->id);
            return view("products.types", compact("type", "types", "categories"));
        } else {
            $limit = $request->has('number_view') ? $request->number_view : 40;
            $categories = Category::where("type_id", $categor->type_id)->get();
            $type_id = $request->has('order_sort') ? $request->order_sort : 1;
            $type = [];
            switch ($type_id) {
                case 1:
                    $type = ['name', 'asc'];
                    break;
                case 2:
                    $type = ['price', 'asc'];
                    break;
                case 3:
                    $type = ['quantity', 'asc'];
                    break;
                case 4:
                    $type = ['created_at', 'desc'];
                    break;
                default:
                    $type = ['name', 'asc'];
                    break;
            }
            $products = Product::where("category_id", $categor->id)->orderBy($type[0], $type[1])->limit($limit)->get();
            return view("products.categories", compact("categor", "categories", "products"));
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $product = Product::where('slug', $slug)->first();
        $sameProducts = Product::where("category_id", $product->category_id)
            ->whereNotIn("id", [$product->id])->get();
        $productHots = Product::whereNotIn("id", [$product->id])
            ->orderBy('price', 'DESC')->limit(10)->get();
        $categories = Category::where("id", $product->category_id)->get();
        return view("products.show", compact("product", "categories", "sameProducts", "productHots"));
    }
}
