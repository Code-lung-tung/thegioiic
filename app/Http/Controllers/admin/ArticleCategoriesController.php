<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\model\ArticleCategory;


class ArticleCategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $article_categories = ArticleCategory::paginate(10);
        return view('admin.article_categories.index', compact('article_categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.article_categories.create');
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
            'name'     =>  'required',
            'status'   =>  'required',
        ]);

        $article_category = array(
            'name'            =>   $request->name,
            'status'          =>   $request->status,
        );

        ArticleCategory::create($article_category);

        return redirect()->route('admin.article_categories.index')->with('success', 'Data Added successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $article_category = ArticleCategory::findOrFail($id);
        return view('admin.article_categories.edit', compact('article_category'));
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
            'status'   =>  'required',
            'slug'     =>  'required|unique:article_categories'
        ]);

        $form_data = array(
            'name'            =>   $request->name,
            'status'          =>   $request->status,
            'slug'            =>   $request->slug
        );

        ArticleCategory::whereId($id)->update($form_data);

        return redirect()->route('admin.article_categories.index')->with('success', 'Data Updated successfully.');
    }
}
