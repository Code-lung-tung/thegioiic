@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
<h1>Thông tin công ty</h1>
<br>
<a href="{{ route('admin.informations.create') }}" class="btn btn-primary">Thêm mới thông tin</a>
@stop
@section('content')
<div class="card">
    <div class="card-body">
    @if(session()->get('success'))
    <div class="alert alert-success">
        {{ session()->get('success') }}
    </div>
    @endif
    <table class="table table-striped">
    <thead>
        <tr>
          <td>ID</td>
          <td>Tiêu đề</td>
          <td>Danh mục</td>
          <td>Nội dung</td>
          <td>Hình ảnh</td>
          <td>Slug</td>
        </tr>
    </thead>
    <tbody>
        @foreach($informations as $information)
        <tr>
            <td>{{ $information->id }}</td>
            <td>{{ $information->title }}</td>
            <td>{{ $information->information_category->name }}</td>
            <td>{!! Str::words(strip_tags($information->content), 30, '...')  !!}</td>
            <td><img src="{{ loadImage($information->thumbnail) }}" class="img-thumbnail" width="75" /></td>
            <td>{{ $information->slug }}</td>
            <td>
                <a href="{{ route('admin.informations.edit',$information->id) }}" class="btn btn-primary">Edit</a>
                <form action="{{ route('admin.informations.destroy', $information->id)}}" method="post" style="display: inline;">
                  @csrf
                  @method('DELETE')
                  <button class="btn btn-danger" type="submit" onclick="return confirm('Are you sure you want to delete this item?');">Delete</button>
                </form>
            </td>
        </tr>
        @endforeach
    </tbody>
    </div>
</div>
@stop
@section('css')
<link rel="stylesheet" href="/css/admin_custom.css">
@stop
@section('js')
@stop
