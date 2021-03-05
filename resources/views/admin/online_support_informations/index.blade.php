@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
<h1>Danh sách hỗ trợ trực tuyến của: <b>{{ $setting->value }}</b></h1>
<br>
<a href="{{ route('admin.online_support_informations.create', ['settingId' => $setting->id]) }}" class="btn btn-primary">Thêm mới hỗ trợ trực tuyến</a>
@stop
@section('content')
<div align="right">
    <a href="{{ route('admin.settings.index') }}" class="btn btn-default">Back</a>
</div>
<br>
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
          <td>Tên</td>
          <td>Zalo</td>
          <td>Skype</td>
          <td>Facebook</td>
          <td>SĐT</td>
          <td>Trạng thái</td>
        </tr>
    </thead>
    <tbody>
        @foreach($online_support_informations as $online_support_information)
        <tr>
            <td>{{ $online_support_information->name }}</td>
            <td>{{ $online_support_information->zalo }}</td>
            <td>{{ $online_support_information->skype }}</td>
            <td>{{ $online_support_information->facebook }}</td>
            <td>{{ $online_support_information->tel }}</td>
            <td>{{ statusStr($online_support_information->status) }}</td>
            <td>
                <a href="{{ route('admin.online_support_informations.edit', ['settingId' => $setting->id, 'id' => $online_support_information->id]) }}" class="btn btn-primary">Edit</a>
            </td>
            <td>
                <form action="{{ route('admin.online_support_informations.destroy', ['settingId' => $setting->id, 'id' => $online_support_information->id])}}" method="post"
                    style="display: inline;">
                    @csrf
                    @method('DELETE')
                    <button class="btn btn-danger" type="submit"
                        onclick="return confirm('Are you sure you want to delete this item?');">Delete</button>
                </form>
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
