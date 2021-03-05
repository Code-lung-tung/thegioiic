<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\model\Order;
use App\model\Product;
use App\model\OrderDetail;

class OrdersController extends Controller
{
    public function index(Request $request)
    {
        $q = $request->has('q') ? $request->q : "";
        $orders = Order::where("code", 'LIKE','%'.$q.'%')->
        orWhere("note", 'LIKE','%'.$q.'%')->
        orWhere("date_order", 'LIKE','%'.$q.'%')->
        orderBy('id', 'desc')->paginate(15);
        return view('admin.orders.index', compact('orders'));
    }

    public function edit($id)
    {
        $order = Order::findOrFail($id);
        $products = Product::all();
        return view('admin.orders.edit', compact(['order', 'products']));
    }

    public function update(Request $request, $id)
    {
        $order = Order::find($id);
        $order->status = $request->status;
        $order->note = $request->note;
        $products = $request->input('products', []);
        $quantities = $request->input('quantities', []);
        $total = 0;
        for ($product=0; $product < count($products); $product++)
        {            
            $order_detail = OrderDetail::where([
                ['product_id', $products[$product]],
                ['order_id', $order->id]
            ])->get();

            if ($products[$product] != '') 
            {   
                $price = Product::find($products[$product])->price;
                if (count($order_detail) > 0)
                {
                    $order->products()->sync([$products[$product], ['quantity' => $quantities[$product], 'price' => $price]]);
                }
                else
                {
                    $order->products()->detach();
                    $order->products()->attach($products[$product], ['quantity' => $quantities[$product], 'price' => $price]);
                }
                $total += ($price * $quantities[$product]);
            }
        }

        $order->total = $total;
        $order->save();
        return redirect()->route('admin.orders.index')->with('success', 'Cập nhật thành công');
    }

    public function destroy($id)
    {
        $order = Order::find($id);
        $order->status = 5;
        $order->save();
        return redirect()->route('admin.orders.index')->with('success', 'Cập nhật thành công');
    }
}
