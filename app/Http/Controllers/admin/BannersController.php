<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\model\Banner;

class BannersController extends Controller
{
    public function index()
    {
        $banners = Banner::all();
        return view('admin.banners.index', compact('banners'));
    }

    public function edit($id)
    {
        $banner = Banner::findOrFail($id);
        return view('admin.banners.edit', compact('banner'));
    }

    public function update(Request $request, $id)
    {
        $image_name = $request->hidden_image;
        $image = $request->file('image');
        if($image)
        {
            $request->validate([
                'status'    =>  'required',
                'image'     =>  'required|image|mimes:jpeg,png,jpg,gif,svg|max:5000',
            ]);

            $image_name = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('images'), $image_name);
        }
        else
        {
            $request->validate([
                'status'    =>  'required',
            ]);
        }

        $form_data = array(
            'link'      =>   $request->link,
            'alt'       =>   $request->alt,
            'status'    =>   $request->status,
            'image'     =>   $image_name,
        );

        Banner::whereId($id)->update($form_data);

        return redirect()->route('admin.banners.index')->with('success', 'Data Updated successfully.');
    }

    public function banner_items()
    {
        $banner = Banner::findOrFail($id);
        $banner_items = BannerItem::where('banner_id', $banner->id);
        return view('admin.banners.banner_items', compact('banner', 'banner_items'));
    }
}
