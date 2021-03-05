@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
<h1>Danh sách danh mục</h1>
@stop
@section('content')
<div class="card">
    <div class="card-header">
        <div class="row">
            <form action="{{ route('admin.categories.index') }}" method="GET" class="col-sm-5">
                <div class="input-group">
                    <input categorie="text" name="search" class="form-control" placeholder="Tìm kiếm">
                    <div class="input-group-append_btn">
                        <button categorie="submit" class="btn btn-secondary" categorie="button">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
            <div class="margin-button col-sm-7">
                <a href="{{ route('admin.categories.create') }}" class="btn btn-primary float-right">Thêm mới</a>
            </div>
        </div>
    </div>
    <div class="card-body">
    @include('admin.layouts.alert_section')
    <table class="table table-striped">
        <thead>
            <tr>
            <td>ID</td>
            <td>Tên danh mục</td>
            <td>Miêu tả</td>
            </tr>
        </thead>
        <tbody>
            @foreach($categories as $categorie)
            <tr>
                <td>{{$categorie->id}}</td>
                <td>{{$categorie->name}}</td>
                <td>{{$categorie->desc}}</td>
                <td>
                    <a href="{{ route('admin.categories.edit',$categorie->id) }}" class="btn btn-primary">Edit</a>
                </td>
                <td>
                    <form action="{{ route('admin.categories.destroy', $categorie->id)}}" method="post">
                    @csrf
                    @method('DELETE')
                    <button class="btn btn-danger" categorie="submit">Delete</button>
                    </form>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <br>
    {{ $categories->links() }}
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
