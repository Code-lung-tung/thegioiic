<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\model\Product;
use App\model\Order;
use App\model\OrderDetail;
use Illuminate\Support\Facades\Mail;
use App\Mail\Orders;
use DB;

class CartsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function cart()
    {
        return view('carts.cart');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function cartProducts(Request $request)
    {
        $ids = $request->has('ids') ? $request->ids : [];
        $products = Product::with('units')->whereIn("id", $ids)->get();
        return response()->json($products);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function buyProducts(Request $request)
    {
        $carts = $request->has('cards') ? $request->cards : [];
        $note = $request->has('note') ? $request->note : "";
        $user_id = \Auth::id();
        $email = \Auth::user()->email;
        $order = [
            'user_id'       => $user_id,
            'date_order'    => now(),
            'status'        => 1,
            'total'         => end($carts)['total'],
            'note'          => $note,
            'code'          => rand(100000, 999999)
        ];
        try {
            $order = Order::create($order);
            foreach($carts as $cart) {
                if (count(array_keys($cart)) == 3) {
                    OrderDetail::create([
                        'order_id'      => $order->id,
                        'product_id'    => $cart['id'],
                        'quantity'      => $cart['quantity'],
                        'price'         => $cart['unit']
                    ]);
                }
            }
            Mail::to($email)->send(new Orders($order));
        }
        catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
        # create order detail
        return response()->json(true);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
