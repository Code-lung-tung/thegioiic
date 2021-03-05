<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\model\Mail;

class MailController extends Controller
{
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $mail = Mail::findOrFail($id);
        return view('admin.mails.edit', compact('mail'));
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
        $form_data = array(
            'driver'            =>   $request->driver,
            'host'              =>   $request->host,
            'port'              =>   $request->port,
            'from_address'      =>   $request->from_address,
            'from_name'         =>   $request->from_name,
            'encryption'        =>   $request->encryption,
            'username'          =>   $request->username,
            'password'          =>   $request->password,
            'content'          =>   $request->content,
            'payment'          =>   $request->payment
        );
        Mail::whereId($id)->update($form_data);
        return redirect()->route('admin.mails.edit', $id)->with('success', 'Data Updated successfully.');
    }
}
