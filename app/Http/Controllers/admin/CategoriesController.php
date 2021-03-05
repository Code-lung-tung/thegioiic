<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\model\Category;
use App\model\Type;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $name = $request->has('search') ? $request->search : "";
        $categories = Category::where("name", 'LIKE','%'.$name.'%')->paginate(10);
        return view('admin.categories.index', ['categories' => $categories]);
    }

     /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $types = Type::all();
        return view('admin.categories.create', compact('types'));
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
            'type_id'           =>  'required',
            'desc'              =>  'required',
            'meta_title'        =>  'required',
            'meta_keywords'     =>  'required',
            'meta_description'  =>  'required'
        ]);

        $Categotie = array(
            'name'              =>   $request->name,
            'type_id'           =>   $request->type_id,
            'desc'              =>   $request->desc,
            'slug'              =>   $request->slug,
            'meta_title'        =>   $request->meta_title,
            'meta_keywords'     =>   $request->meta_keywords,
            'meta_description'  =>   $request->meta_description
        );

        Category::create($Categotie);

        return redirect()->route('admin.categories.index')->with('success', 'Data Added successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $category = Category::findOrFail($id);
        $types = Type::all();
        return view('admin.categories.edit', compact('category', 'types'));
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
            'name'              =>  'required',
            'type_id'           =>  'required',
            'desc'              =>  'required',
            'meta_title'        =>  'required',
            'meta_keywords'     =>  'required',
            'meta_description'  =>  'required'
        ]);

        $form_data = array(
            'name'              =>   $request->name,
            'type_id'           =>   $request->type_id,
            'desc'              =>   $request->desc,
            'slug'              =>   $request->slug,
            'meta_title'        =>   $request->meta_title,
            'meta_keywords'     =>   $request->meta_keywords,
            'meta_description'  =>   $request->meta_description
        );

        Category::whereId($id)->update($form_data);

        return redirect()->route('admin.categories.index')->with('success', 'Data Updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Category::findOrFail($id);
        $data->delete();
        return redirect()->route('admin.categories.index')->with('success', 'Data is successfully deleted');
    }
}
