@extends('layouts.app') @section('content')
<div class="container-crumb">
    <div class="texttitle sitemaps">
        <a href="/">Trang Chủ</a>
        <a href="/information">Thông tin công ty</a>
        <a href="#">Chính sách - Quy định</a>
    </div>
</div>
<div id="body-left">
    @include('policies.menu_left')
</div>
<div id="body-right">
    @include('policies.menu_right')
</div>
@endsection