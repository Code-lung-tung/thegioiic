@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
<h1>Danh sách thiết lập</h1>
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
          <td>Loại thiết lập</td>
          <td>Giá trị</td>
        </tr>
    </thead>
    <tbody>
        @foreach($settings as $setting)
        <tr>
            <td>{{ settingTypeText($setting->type) }}</td>
            <td>{{ $setting->value }}</td>
            <td>
                <a href="{{ route('admin.settings.edit', $setting->id) }}" class="btn btn-primary">Edit</a>
            </td>
            <td>
                @if (in_array($setting->type, onlineSupportSettingTypes()))
                <a href="{{ route('admin.online_support_informations.index', ['settingId' => $setting->id]) }}" class="btn btn-success">Details</a>
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
