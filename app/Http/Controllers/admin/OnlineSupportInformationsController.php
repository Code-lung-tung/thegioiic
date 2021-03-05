<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\model\Setting;
use App\model\OnlineSupportInformation;
use App\Enums\SettingType;

class OnlineSupportInformationsController extends Controller
{
    public function index(Request $request)
    {
        $setting = Setting::whereIn('type', onlineSupportSettingTypes())
                            ->where('id', $request->settingId)
                            ->firstOrFail();
        $online_support_informations = OnlineSupportInformation::where('setting_id', $setting->id)->get();
        return view('admin.online_support_informations.index', compact('setting', 'online_support_informations'));
    }

    public function create(Request $request)
    {
        $setting = Setting::whereIn('type', onlineSupportSettingTypes())
                            ->where('id', $request->settingId)
                            ->firstOrFail();
        return view('admin.online_support_informations.create', compact('setting'));
    }

    public function edit(Request $request)
    {
        $setting = Setting::whereIn('type', onlineSupportSettingTypes())
                            ->where('id', $request->settingId)
                            ->firstOrFail();
        $online_support_information = OnlineSupportInformation::findOrFail($request->id);
        return view('admin.online_support_informations.edit', compact('setting', 'online_support_information'));
    }

    public function update(Request $request, $id)
    {
        $setting = Setting::whereIn('type', onlineSupportSettingTypes())
                            ->where('id', $request->settingId)
                            ->firstOrFail();
        $request->validate([
            'name'    =>  'required',
        ]);

        $form_data = array(
            'name'            =>   $request->name,
            'zalo'            =>   $request->zalo,
            'facebook'        =>   $request->facebook,
            'skype'           =>   $request->skype,
            'tel'             =>   $request->tel,
            'status'          =>   $request->status
        );

        OnlineSupportInformation::whereId($request->id)->update($form_data);

        return redirect()->route('admin.online_support_informations.index', ['settingId' => $setting->id])->with('success', 'Data Updated successfully.');
    }

    public function store(Request $request)
    {
        $setting = Setting::whereIn('type', onlineSupportSettingTypes())
                            ->where('id', $request->settingId)
                            ->firstOrFail();
        $request->validate([
            'name'    =>  'required',
        ]);

        $form_data = array(
            'name'            =>   $request->name,
            'zalo'            =>   $request->zalo,
            'facebook'        =>   $request->facebook,
            'skype'           =>   $request->skype,
            'tel'             =>   $request->tel,
            'setting_id'      =>   $request->settingId,
        );

        OnlineSupportInformation::create($form_data);

        return redirect()->route('admin.online_support_informations.index', ['settingId' => $setting->id])->with('success', 'Data Updated successfully.');
    }

    public function destroy(Request $request)
    {
        $setting = Setting::whereIn('type', onlineSupportSettingTypes())
                            ->where('id', $request->settingId)
                            ->firstOrFail();
        $data = OnlineSupportInformation::findOrFail($request->id);
        $data->delete();
        return redirect()->route('admin.online_support_informations.index', ['settingId' => $setting->id])->with('success', 'Data is successfully deleted');
    }
}
