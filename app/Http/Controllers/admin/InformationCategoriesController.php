<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\model\InformationCategory;


class InformationCategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $information_categories = InformationCategory::paginate(10);
        return view('admin.information_categories.index', compact('information_categories'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $information_category = InformationCategory::findOrFail($id);
        return view('admin.information_categories.edit', compact('information_category'));
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
        $request->validate([
            'name'     =>  'required',
        ]);

        $form_data = array(
            'name'            =>   $request->name,
        );

        InformationCategory::whereId($id)->update($form_data);

        return redirect()->route('admin.information_categories.index')->with('success', 'Data Updated successfully.');
    }
}
