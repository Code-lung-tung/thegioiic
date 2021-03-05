@extends('layouts.app') @section('content')
<div class="container-crumb">
    <div class="texttitle sitemaps">
        <a href="/">Trang Chủ</a>
        <a href="/information">Thông tin công ty</a>
        <a href="/information/chinh-sach-quy-dinh">Chính sách - Quy định</a>
        <a href="#">Quy định bảo hành</a>
    </div>
</div>
<div id="body-left">
    @include('policies.menu_left')
</div>
<div id="body-right">
    @include('pages.warranty_right')
</div>
@endsection