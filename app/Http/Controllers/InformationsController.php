<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\model\Information;

class InformationsController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $informations = Information::active()->get();
        return view('informations.index', compact('informations'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $information = Information::active()->whereSlug($id)->firstOrFail();
        return view('informations.show', compact('information'));
    }
}
