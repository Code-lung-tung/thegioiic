@extends('layouts.app') @section('content') @section('content')
<div class="container-crumb">
    <div class="texttitle sitemaps">
        <a href="/">Trang Chủ</a>
        <a href="/information">Thông tin công ty</a>
    </div>
</div>
<div id="body-left">
    @include('informations.menu_left')
</div>
<div id="body-right">
    <div class="middle-page">
        <div style="border: 1px solid #DDD;-moz-border-radius: 8px;-webkit-border-radius: 8px; background-color:#fff;">
            <div style="font-size:14px; font-weight:bolder; padding:6px 0 8px 16px; color:#027AC7;">
            </div>
            <div style="padding:12px 6px 12px 12px;">
              @foreach ($informations as $information)
                <div class="information">
                    <div class="img-information">
                        <a href="{{ route('informations.show', ['information' => $information->slug]) }}">
                            <img src="{{ loadImage($information->thumbnail) }}" class="img-thumbnail" />
                        </a>
                    </div>
                    <div class="info-information">
                        <div class="title-information">
                            <h2 style="padding: 0;margin: 0">
                              <a href="{{ route('informations.show', ['information' => $information->slug]) }}">
                                {{ $information->title }}
                              </a>
                            </h2>
                        </div>
                        <div class="desc-information">
                            {!! Str::words(strip_tags($information->content), 50, '...')  !!}
                        </div>
                    </div>
                    <div class="detail-information">
                        <a href="{{ route('informations.show', ['information' => $information->slug]) }}">Chi tiết</a>
                    </div>
                    <div class="clear"></div>
                </div>
              @endforeach
                <div style="margin-top: 20px;margin-left: 20px;width: 90%;float: left;text-align: center;"></div>
            </div>
        </div>
    </div>
    @include('informations.menu_right')
</div>
@endsection
