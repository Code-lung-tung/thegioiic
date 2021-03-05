@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
<h1>Danh sách danh mục tin tức</h1>
<br>
<a href="{{ route('admin.article_categories.create') }}" class="btn btn-primary">Thêm mới Danh mục tin tức</a>
@stop
@section('content')
<div class="card">
    <div class="card-body">
        @include('admin.layouts.alert_section')
        <table class="table table-striped">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Tên</td>
                    <td>Trạng thái</td>
                    <td>Slug</td>
                </tr>
            </thead>
            <tbody>
                @foreach($article_categories as $article_category)
                <tr>
                    <td>{{ $article_category->id }}</td>
                    <td>{{ $article_category->name }}</td>
                    <td>{{ statusStr($article_category->status) }}</td>
                    <td>{{ $article_category->slug }}</td>
                    <td>
                        <a href="{{ route('admin.article_categories.edit',$article_category->id) }}" class="btn btn-primary">Edit</a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
        <br>
        {{ $article_categories->links() }}
    </div>
</div>
@stop
@section('css')
<link rel="stylesheet" href="/css/admin_custom.css">
@stop
@section('js')
@stop