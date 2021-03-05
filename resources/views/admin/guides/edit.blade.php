@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
<h1>Cập nhật hướng dẫn</h1>
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
    <a href="{{ route('admin.guides.index') }}" class="btn btn-default">Back</a>
</div>
<br>
<div class="card">
    <div class="card-body">
        <form method="post" action="{{ route('admin.guides.update', $guide->id) }}" enctype="multipart/form-data">
            @method('PUT')
            @csrf
            <div class="form-group row">
                <label class="col-sm-2 col-form-label require">Tiêu đề</label>
                <div class="col-sm-10">
                    <input type="text" name="title" class="form-control" value="{{ $guide->title }}" />
                </div>
            </div>
             <div class="form-group row">
                <label class="col-sm-2 col-form-label require">Nội dung</label>
                <div class="col-sm-10">
                    <textarea name="content" class="form-control">{{ $guide->content }}</textarea>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label require">Ảnh</label>
                <div class="col-sm-10">
                    <input type="file" name="thumbnail" value="{{ $guide->thumbnail }}" />
                    <input type="hidden" name="hidden_image" value="{{ $guide->thumbnail }}">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label require">Slug</label>
                <div class="col-sm-10">
                    <input type="text" name="slug" class="form-control" value="{{ $guide->slug }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Meta title</label>
                <div class="col-sm-10">
                    <input type="text" name="meta_title" class="form-control" value="{{ $guide->meta_title }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Meta keyword</label>
                <div class="col-sm-10">
                    <input type="text" name="meta_keywords" class="form-control" value="{{ $guide->meta_keywords }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Meta description</label>
                <div class="col-sm-10">
                    <textarea name="meta_description" class="form-control">{{ $guide->meta_description }}</textarea>
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
</script>
@include('ckfinder::setup')
@stop