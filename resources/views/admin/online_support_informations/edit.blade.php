@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
<h1>Cập nhật Thông tin hỗ trợ trực tuyến của: <b>{{ $setting->value }}</b></h1>
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
    <a href="{{ route('admin.online_support_informations.index', ['settingId' => $setting->id]) }}" class="btn btn-default">Back</a>
</div>
<br>
<div class="card">
    <div class="card-body">
        <form method="post" action="{{ route('admin.online_support_informations.update', ['settingId' => $setting->id, 'id' => $online_support_information->id]) }}" enctype="multipart/form-data">
            @method('PUT')
            @csrf
            <div class="form-group row">
                <label class="col-sm-2 col-form-label require">Tên</label>
                <div class="col-sm-10">
                    <input type="text" name="name" class="form-control" value="{{ $online_support_information->name }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Skype</label>
                <div class="col-sm-10">
                    <input type="text" name="skype" class="form-control" value="{{ $online_support_information->skype }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Zalo</label>
                <div class="col-sm-10">
                    <input type="text" name="zalo" class="form-control" value="{{ $online_support_information->zalo }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Facebook</label>
                <div class="col-sm-10">
                    <input type="text" name="facebook" class="form-control" value="{{ $online_support_information->facebook }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">SĐT</label>
                <div class="col-sm-10">
                    <input type="text" name="tel" class="form-control" value="{{ $online_support_information->tel }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label require">Trạng thái</label>
                <div class="col-sm-10">
                    <select name="status" class="form-control">
                        @foreach ([1 => 'Active', 0 => 'Disabled'] as $key => $value)
                        <option value="{{ $key }}" 
                            @if ($key == $online_support_information->status)
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
