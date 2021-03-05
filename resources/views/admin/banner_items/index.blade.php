@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
<h1>Danh sách Slide</h1>
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
          <td>Ảnh</td>
          <td>Đường dẫn</td>
          <td>Alt</td>
          <td>Trạng thái</td>
        </tr>
    </thead>
    <tbody>
        @foreach($banner_items as $banner_item)
        <tr>
            <td>
                <img src="{{ loadImage($banner_item->image) }}" class="img-thumbnail" width="125" />
            </td>
            <td>{{ $banner_item->link }}</td>
            <td>{{ $banner_item->alt }}</td>
            <td>{{ statusStr($banner_item->status) }}</td>
            <td>
                <a href="{{ route('admin.banner_items.edit', ['bannerId' => $banner->id, 'id' => $banner_item->id]) }}" class="btn btn-primary">Edit</a>
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
