<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\model\Service;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $services = Service::active()->get();
        return view('services.index', compact('services'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $service = Service::active()->whereSlug($id)->firstOrFail();
        return view('services.show', compact('service'));
    }
}
