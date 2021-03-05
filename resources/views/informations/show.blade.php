@extends('layouts.app') @section('content') @section('content')
<div class="container-crumb">
    <div class="texttitle sitemaps">
        <a href="/">Trang Chủ</a>
        <a href="/informations">Thông tin công ty</a>
        <a href="/informations/{{ $information->slug }}">{{ $information->title }}</a>
    </div>
</div>
<div id="body-left">
    @include('informations.menu_left')
</div>
<div id="body-right">
    <div class="middle-page">
        <div style="position:relative;padding-bottom:5px; border: 1px solid #DDD;-moz-border-radius: 8px;-webkit-border-radius: 8px; background-color:#fff; margin-bottom:8px;">
            <div style="position:relative;">
                <h1 style="font-size:14px; font-weight:bolder; padding:10px 0 8px 12px; color:#027AC7; ">
                    {{ $information->title }}
                </h1>
            </div>
            <div style="padding:12px 6px 12px 12px;" id="page_content">
                {!!html_entity_decode($information->content)!!}
            </div>
        </div>
        @include('comment_section', ['commentable_object' => $information, 'commentable_type' => 'App\model\information'])
    </div>
    @include('informations.menu_right')
</div>
@endsection
