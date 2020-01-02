<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\model\Article;
use App\model\ArticleCategory;

class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles = Article::with('article_category')->get();
        return view('admin.articles.index', compact('articles'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = ArticleCategory::all();
        return view('admin.articles.create', compact('categories'));
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
            'title'               =>  'required',
            'content'             =>  'required',
            'status'              =>  'required',
            'slug'                =>  'required',
            'article_category_id' =>  'required',
            'thumbnail'           =>  'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $thumbnail = $request->file('thumbnail');

        $new_name = time().'.'.$thumbnail->getClientOriginalExtension();
        $thumbnail->move(public_path('images'), $new_name);
        $article = array(
            'title'               =>   $request->title,
            'content'             =>   $request->content,
            'slug'                =>   $request->slug,
            'status'              =>   $request->status,
            'article_category_id' =>   $request->article_category_id,
            'thumbnail'           =>   $new_name,
            'meta_title'          =>   $request->meta_title,
            'meta_keywords'       =>   $request->meta_keywords,
            'meta_description'    =>   $request->meta_description
        );

        Article::create($article);

        return redirect()->route('admin.articles.index')->with('success', 'Data Added successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $categories = ArticleCategory::all();
        $article = Article::findOrFail($id);
        return view('admin.articles.edit', compact('article', 'categories'));
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
        $image_name = $request->hidden_image;
        $image = $request->file('logo');
        if($image)
        {
            $request->validate([
                'title'               =>  'required',
                'content'             =>  'required',
                'status'              =>  'required',
                'slug'                =>  'required',
                'article_category_id' =>  'required',
                'thumbnail'           =>  'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);

            $image_name = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('images'), $image_name);
        }
        else
        {
            $request->validate([
                'title'               =>  'required',
                'content'             =>  'required',
                'status'              =>  'required',
                'slug'                =>  'required',
                'article_category_id' =>  'required'
            ]);
        }

        $form_data = array(
            'title'               =>   $request->title,
            'content'             =>   $request->content,
            'slug'                =>   $request->slug,
            'status'              =>   $request->status,
            'article_category_id' =>   $request->article_category_id,
            'thumbnail'           =>   $image_name,
            'meta_title'          =>   $request->meta_title,
            'meta_keywords'       =>   $request->meta_keywords,
            'meta_description'    =>   $request->meta_description 
        );

        Article::whereId($id)->update($form_data);

        return redirect()->route('admin.articles.index')->with('success', 'Data Updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Article::findOrFail($id);
        $data->delete();
        return redirect()->route('admin.articles.index')->with('success', 'Data is successfully deleted');
    }
}
