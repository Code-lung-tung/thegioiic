@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
<h1>Cập nhật banner</h1>
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
<div align="right">
    <a href="{{ route('admin.banners.index') }}" class="btn btn-default">Back</a>
</div>
<br>
<div class="card">
    <div class="card-body">
        <form method="post" action="{{ route('admin.banners.update', $banner->id) }}" enctype="multipart/form-data">
            @method('PUT')
            @csrf
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Loại banner</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" value="{{ bannerTypeText($banner->type) }}" disabled />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Ảnh</label>
                <div class="col-sm-10">
                    <input type="file" name="image" value="{{ $banner->image }}" />
                    <input type="hidden" name="hidden_image" value="{{ $banner->image }}">
                    <img src="{{ URL::to('/') }}/images/{{ $banner->image }}" class="img-thumbnail" width="125" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Đường dẫn</label>
                <div class="col-sm-10">
                    <input type="text" name="link" class="form-control" value="{{ $banner->link }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Alt</label>
                <div class="col-sm-10">
                    <input type="text" name="alt" class="form-control" value="{{ $banner->alt }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label require">Trạng thái</label>
                <div class="col-sm-10">
                    <select name="status" class="form-control">
                        @foreach ([1 => 'Active', 0 => 'Disabled'] as $key => $value)
                        <option value="{{ $key }}" 
                            @if ($key == $banner->status)
                                selected="selected"
                            @endif
                        >
                            {{ $value }}
                        </option>
                        @endforeach
                    </select>
                </div>
            </div>
            <div class="form-group text-center">
                <input type="submit" name="add" class="btn btn-primary input-lg" value="Cập nhật" />
            </div>
        </form>
    </div>
</div>
@stop
@section('css')
<link rel="stylesheet" href="/css/admin_custom.css">
@stop
