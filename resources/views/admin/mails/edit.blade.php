@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
<h1>Cập nhật mail</h1>
@stop
@section('content')
@if($errors->any())
<div class="alert alert-danger">
    <ul>
        @foreach($errors->all() as $error)
        <li>{{ $error }}</li>
        @endforeach
    </ul>
</div>
@endif
@include('admin.layouts.alert_section')

<br>
<div class="card">
    <div class="card-body">
        <form method="post" action="{{ route('admin.mails.update', $mail->id) }}" enctype="multipart/form-data">
            @method('PUT')
            @csrf
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Driver</label>
                <div class="col-sm-10">
                    <input type="text" name="driver" class="form-control" value="{{ $mail->driver }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Host</label>
                <div class="col-sm-10">
                    <input type="text" name="host" class="form-control" value="{{ $mail->host }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Port</label>
                <div class="col-sm-10">
                    <input type="text" name="port" class="form-control" value="{{ $mail->port }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">From Address</label>
                <div class="col-sm-10">
                    <input type="text" name="from_address" class="form-control" value="{{ $mail->from_address }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">From Name</label>
                <div class="col-sm-10">
                    <input type="text" name="from_name"  class="form-control" value="{{ $mail->from_name }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Encryption</label>
                <div class="col-sm-10">
                    <input type="text" name="encryption" class="form-control" value="{{ $mail->encryption }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-10">
                    <input type="text" name="username" class="form-control" value="{{ $mail->username }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="text" name="password" class="form-control" value="{{ $mail->password }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Nội dung email</label>
                <div class="col-sm-10">
                    <textarea name="content">{{ $mail->content }}</textarea>
                </div>
            </div>
             <div class="form-group row">
                <label class="col-sm-2 col-form-label">Thông tin thanh toán</label>
                <div class="col-sm-10">
                    <textarea name="payment">{{ $mail->payment }}</textarea>
                </div>
            </div>
            <div class="form-group text-center">
                <input type="submit" name="add" class="btn btn-primary input-lg" value="Cập nhật" />
            </div>
        </form>
    </div>
</div>
@stop
@section('css')
<link rel="stylesheet" href="/css/admin_custom.css">
@stop
@section('js')
<script src={{ url('ckeditor/ckeditor.js') }}></script>
<script>
    CKEDITOR.replace( 'content', {
        filebrowserBrowseUrl: '{{ route('ckfinder_browser') }}',
    } );
    CKEDITOR.replace( 'payment', {
        filebrowserBrowseUrl: '{{ route('ckfinder_browser') }}',
    } );
</script>
@include('ckfinder::setup')
@stop
