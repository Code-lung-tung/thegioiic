<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\model\Order;
use Hash;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function mypage()
    {
        $user = Auth::user();
        return view('user.mypage', compact('user'));
    }

    public function update(Request $request)
    {
        // dd($request);
        request()->validate([
            'name' => 'required|string',
            'phone_number' => 'required|string|min:10',
            'address' => 'required|string',
            'avatar' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'company_name' => 'string|max:255|nullable',
            'tax_code' => 'integer|nullable',
            'company_address' => 'string|max:255|nullable'
        ]);


        $user = Auth::user();

        if(!empty(request()->avatar))
        {
            $avatarName = $user->id.'_avatar'.time().'.'.request()->avatar->getClientOriginalExtension();
            $request->avatar->storeAs('avatars', $avatarName);
            $user->avatar = $avatarName;
        }
        
        $user->name = $request->name;
        $user->phone_number = $request->phone_number;
        $user->address = $request->address;
        $user->company_name = $request->company_name;
        $user->tax_code = $request->tax_code;
        $user->company_address = $request->company_address;
        $user->save();

        return redirect('/mypage')->with('success', 'Cập nhật thông tin thành công...');
    }

    public function showChangePasswordForm()
    {
        return view('auth.passwords.changepassword');
    }

    public function changePassword(Request $request)
    {
        if (!(Hash::check($request->get('current-password'), Auth::user()->password))) {
            // The passwords matches
            return redirect()->back()->with("error", "Mật khẩu hiện tại không trùng, hãy nhập lại!");
        }
        if (strcmp($request->get('current-password'), $request->get('new-password')) == 0) {
            //Current password and new password are same
            return redirect()->back()->with("error", "Mật khẩu mới không được trùng với mật khẩu hiện tại, hãy nhập lại!");
        }
        $validatedData = $request->validate([
            'current-password' => 'required',
            'new-password' => 'required|string|min:8',
            'password-confirm' => 'required|same:new-password',
        ]);
        //Change Password
        $user = Auth::user();
        $user->password = bcrypt($request->get('new-password'));
        $user->save();
        return redirect('/mypage')->with("success", "Đổi mật khẩu thành công!");
    }

    public function orders()
    {
        $orders = Order::where('user_id', Auth::id())->get();
        return view('orders.list', compact('orders'));
    }

    public function ordersDestroy($id)
    {
        $data = Order::findOrFail($id);
        $data->delete();
        return redirect()->route('orders')->with('success', 'Data is successfully deleted');
    }

    public function ordersDetail($id)
    {
        $order = Order::findOrFail($id);
        return view('orders.show', compact('order'));
    }
}
