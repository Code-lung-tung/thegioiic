@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
<h1>Danh sách danh mục thông tin</h1>
<br>
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
                </tr>
            </thead>
            <tbody>
                @foreach($information_categories as $information_category)
                <tr>
                    <td>{{ $information_category->id }}</td>
                    <td>{{ $information_category->name }}</td>
                    <td>
                        <a href="{{ route('admin.information_categories.edit',$information_category->id) }}" class="btn btn-primary">Edit</a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
        <br>
        {{ $information_categories->links() }}
    </div>
</div>
@stop
@section('css')
<link rel="stylesheet" href="/css/admin_custom.css">
@stop
@section('js')
@stop