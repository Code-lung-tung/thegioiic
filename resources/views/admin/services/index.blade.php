@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
<h1>Danh sách dịch vụ</h1>
<br>
<a href="{{ route('admin.services.create') }}" class="btn btn-primary">Thêm mới Dịch vụ</a>
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
                @foreach($services as $service)
                <tr>
                    <td>{{ $service->id }}</td>
                    <td>{{ $service->title }}</td>
                    <td>{!! Str::words(strip_tags($service->content), 30, '...') !!}</td>
                    <td><img src="{{ URL::to('/') }}/images/{{ $service->thumbnail }}" class="img-thumbnail" width="75" /></td>
                    <td>{{ $service->slug }}</td>
                    <td>
                        <a href="{{ route('admin.services.edit',$service->id) }}" class="btn btn-primary">Edit</a>
                    </td>
                    <td>
                        <form action="{{ route('admin.services.destroy', $service->id)}}" method="post" style="display: inline;">
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
        {{ $services->links() }}
    </div>
</div>
@stop
@section('css')
<link rel="stylesheet" href="/css/admin_custom.css">
@stop
@section('js')
@stop