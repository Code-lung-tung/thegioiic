<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\model\Favorite;

class FavoriteController extends Controller
{
    public function lists()
    {
        $products = Auth::user()->favorites;
        return view('user.favorites', compact('products'));
    }   

    public function add(Request $request)
    {
        request()->validate([ 'product_id' => 'required' ]);

        $favorite = Favorite::where('user_id',Auth::id())
                            ->where('product_id', $request->product_id)
                            ->first();
        if($favorite){
          session()->flash("error","Bạn đã thêm sản phẩm này!");
          return view('layouts.partials.alert_section');
        } 

        $favorite = new Favorite;
        $favorite->product_id = $request->product_id;
        $favorite->user_id = Auth::id();
        $check = $favorite->save();

        if($check){
          session()->flash("success","Thêm thành công!");
        }else {
          session()->flash("error","Đã xảy ra lỗi!");
        }

        return view('layouts.partials.alert_section');
    }

    public function destroy($id)
    {
      $check = Favorite::where('product_id',$id)->where('user_id', Auth::id())->delete();

      if($check){
        session()->flash("success","Xóa thành công!");
      }else {
        session()->flash("error","Đã xảy ra lỗi!");
      }

      return view('layouts.partials.alert_section');
    }
}
