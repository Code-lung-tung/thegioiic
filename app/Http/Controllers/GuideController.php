<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\model\Guide;

class GuideController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {   
        $guides = Guide::active()->get();
        return view('guides.index', compact('guides'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $guide = Guide::active()->whereSlug($id)->firstOrFail();
        return view('guides.show', compact('guide'));
    }
}
