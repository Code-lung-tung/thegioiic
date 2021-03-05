@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
<h1>Cập nhật thiết lập</h1>
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
<div align="right">
    <a href="{{ route('admin.settings.index') }}" class="btn btn-default">Back</a>
</div>
<br>
<div class="card">
    <div class="card-body">
        <form method="post" action="{{ route('admin.settings.update', $setting->id) }}" enctype="multipart/form-data">
            @method('PUT')
            @csrf
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Loại thiết lập</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" value="{{ settingTypeText($setting->type) }}" disabled />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Giá trị</label>
                <div class="col-sm-10">
                    <textarea name="value">{{ $setting->value }}</textarea>
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
    CKEDITOR.replace( 'value', {
        filebrowserBrowseUrl: '{{ route('ckfinder_browser') }}',
    } );
</script>
@include('ckfinder::setup')
@stop
