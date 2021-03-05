@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
<h1>Danh sách thương hiệu</h1>
@stop
@section('content')
<div class="card">
    <div class="card-header">
        <div class="row">
            <form action="{{ route('admin.brands.index') }}" method="GET" class="col-sm-5">
                <div class="input-group">
                    <input type="text" name="search" class="form-control" placeholder="Tìm kiếm">
                <div class="input-group-append_btn">
                        <button type="submit" class="btn btn-secondary" type="button">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
            <div class="margin-button col-sm-7">
                <a href="{{ route('admin.brands.create') }}" class="btn btn-primary float-right">Thêm mới</a>
            </div>
        </div>
    </div>
    <div class="card-body">
    @include('admin.layouts.alert_section')
    <table class="table table-striped">
        <thead>
            <tr>
            <td>ID</td>
            <td>Tên thương hiệu</td>
            <td>Miêu tả</td>
            <td>Hình ảnh</td>
            <td>Slug</td>
            </tr>
        </thead>
        <tbody>
            @foreach($brands as $brand)
            <tr>
                <td>{{$brand->id}}</td>
                <td>{{$brand->name}}</td>
                <td>{!! Str::words(strip_tags($brand->desc), 30, '...')  !!}</td>
                <td><img src="{{ loadImage($brand->logo) }}" class="img-thumbnail" width="75" /></td>
                <td>{{$brand->slug}}</td>
                <td>
                    <a href="{{ route('admin.brands.edit',$brand->id) }}" class="btn btn-primary">Edit</a>
                </td>
                <td>
                    <form action="{{ route('admin.brands.destroy', $brand->id)}}" method="post">
                    @csrf
                    @method('DELETE')
                    <button class="btn btn-danger" type="submit">Delete</button>
                    </form>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <br>
    {{ $brands->links() }}
    </div>
</div>
@stop
@section('css')
<link rel="stylesheet" href="/css/admin_custom.css">
@stop
@section('js')
<script>
    console.log('Hi!');
</script>
@stop
