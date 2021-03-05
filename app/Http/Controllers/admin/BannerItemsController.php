<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\model\Banner;
use App\model\BannerItem;
use App\Enums\BannerType;

class BannerItemsController extends Controller
{
    public function index(Request $request)
    {
        $banner = Banner::where(['type' => BannerType::Slider, 'id' => $request->bannerId])->firstOrFail();
        $banner_items = BannerItem::where('banner_id', $banner->id)->get();
        return view('admin.banner_items.index', compact('banner', 'banner_items'));
    }

    public function edit(Request $request)
    {
        $banner = Banner::where(['type' => BannerType::Slider, 'id' => $request->bannerId])->firstOrFail();
        $banner_item = BannerItem::findOrFail($request->id);
        return view('admin.banner_items.edit', compact('banner', 'banner_item'));
    }

    public function update(Request $request)
    {
        $banner = Banner::where(['type' => BannerType::Slider, 'id' => $request->bannerId])->firstOrFail();
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

        BannerItem::whereId($request->id)->update($form_data);

        return redirect()->route('admin.banner_items.index', ['bannerId' => $banner->id])->with('success', 'Data Updated successfully.');
    }
}
