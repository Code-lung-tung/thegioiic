@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
<h1>Danh sách banner</h1>
@stop
@section('content')
<div class="card">
    <div class="card-body">
        @include('admin.layouts.alert_section')
        <table class="table table-striped">
            <thead>
                <tr>
                    <td>Loại banner</td>
                    <td>Ảnh</td>
                    <td>Đường dẫn</td>
                    <td>Alt</td>
                    <td>Trạng thái</td>
                </tr>
            </thead>
            <tbody>
                @foreach($banners as $banner)
                <tr>
                    <td>{{ bannerTypeText($banner->type) }}</td>
                    <td>
                        @if ($banner->type != App\Enums\BannerType::Slider)
                        <img src="{{ loadImage($banner->image) }}" class="img-thumbnail" width="75" />
                        @endif
                    </td>
                    <td>{{ $banner->link }}</td>
                    <td>{{ $banner->alt }}</td>
                    <td>{{ statusStr($banner->status) }}</td>
                    <td>
                        @if ($banner->type == App\Enums\BannerType::Slider)
                        <a href="{{ route('admin.banner_items.index', ['bannerId' => $banner->id]) }}" class="btn btn-primary">Edit</a>
                        @else
                        <a href="{{ route('admin.banners.edit', $banner->id) }}" class="btn btn-primary">Edit</a>
                        @endif
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