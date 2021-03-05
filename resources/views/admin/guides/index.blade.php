@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
<h1>Danh sách hướng dẫn</h1>
<br>
<a href="{{ route('admin.guides.create') }}" class="btn btn-primary">Thêm mới Hướng dẫn</a>
@stop
@section('content')
<div class="card">
    <div class="card-body">
        @include('admin.layouts.alert_section')
        <table class="table table-striped">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Tiêu đề</td>
                    <td>Nội dung</td>
                    <td>Hình ảnh</td>
                    <td>Slug</td>
                </tr>
            </thead>
            <tbody>
                @foreach($guides as $guide)
                <tr>
                    <td>{{ $guide->id }}</td>
                    <td>{{ $guide->title }}</td>
                    <td>{!! Str::words(strip_tags($guide->content), 30, '...') !!}</td>
                    <td><img src="{{ URL::to('/') }}/images/{{ $guide->thumbnail }}" class="img-thumbnail" width="75" /></td>
                    <td>{{ $guide->slug }}</td>
                    <td>
                        <a href="{{ route('admin.guides.edit',$guide->id) }}" class="btn btn-primary">Edit</a>
                    </td>
                    <td>
                        <form action="{{ route('admin.guides.destroy', $guide->id)}}" method="post" style="display: inline;">
                            @csrf
                            @method('DELETE')
                            <button class="btn btn-danger" type="submit" onclick="return confirm('Bạn muốn xóa mục này?');">Delete</button>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
        <br>
        {{ $guides->links() }}
    </div>
</div>
@stop
@section('css')
<link rel="stylesheet" href="/css/admin_custom.css">
@stop
@section('js')
@stop