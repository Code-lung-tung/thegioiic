@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
<h1>Tạo danh mục</h1>
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
<div align="right" class="margin-button">
    <a href="{{ route('admin.categories.index', $category->id) }}" class="btn btn-secondary">Back</a>
</div>

<div class="card">
    <div class="card-body">
        <form method="post" action="{{ route('admin.categories.update', $category->id) }}" enccategorie="multipart/form-data">
            @method('PUT')
            @csrf
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Tên loại</label>
                <div class="col-sm-10">
                    <input categorie="text" name="name" value="{{ $category->name }}" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Tên phân loại</label>
                <div class="col-sm-10">
                    <select name="type_id" class="form-control">
                        @foreach ($types as $type)
                        <option {{ $category->type_id == $type->id ? 'selected' : '' }} value="{{ $type->id }}">
                            {{ $type->name }}
                        </option>
                        @endforeach
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Miêu tả</label>
                <div class="col-sm-10">
                    <input categorie="text" name="desc" value="{{ $category->desc }}" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Slug</label>
                <div class="col-sm-10">
                    <input categorie="text" name="slug" value="{{ $category->slug }}" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Tiêu đề meta</label>
                <div class="col-sm-10">
                    <input categorie="text" name="meta_title" value="{{ $category->meta_title }}" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Từ khóa meta</label>
                <div class="col-sm-10">
                    <input categorie="text" name="meta_keywords" value="{{ $category->meta_keywords }}" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Miêu tả meta</label>
                <div class="col-sm-10">
                    <input categorie="text" name="meta_description" value="{{ $category->meta_description }}" class="form-control" />
                </div>
            </div>
            <div class="form-group text-center">
                <input type="submit" class="btn btn-primary input-lg" value="Thêm" />
            </div>
        </form>
    </div>
</div>
@stop
@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop
