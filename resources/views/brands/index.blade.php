@extends('layouts.app') @section('content') @section('content')
<div class="container-crumb">
    <div class="texttitle sitemaps">
        <a href="/">Trang Chủ</a>
        <a href="/brands">Thương hiệu</a>
    </div>
</div>
<div id="body-left">
    @include('brands.menu_left')
</div>
<div id="body-right">
    <div class="body-right-content">
        <div style="border:1px solid #ccc; padding:5px;-webkit-border-radius: 5px; -moz-border-radius: 5px; background-color:#fff;">
            <div>
                <div style="float:left;">
                    <h1 style="font-size: 14px;color: #027AC7;font-family: Arial, Tahoma, Verdana,MS Sans Serif;font-weight: bold; padding:8px 0 14px 11px;">
                        Danh sách thương hiệu <span style="color:#c30;">({{ $total_count }})</span>
                    </h1>
                </div>
                <div style="float: right">
                    <form action="/brands" accept-charset="UTF-8" method="get">
                        <input name="utf8" type="hidden" value="✓">
                        <input type="text" name="q" placeholder="Tìm kiếm" style="padding:5px;border:1px solid #ddd;float:left;margin-right:5px;border-radius:5px">
                        <input type="submit" value="Tìm kiếm" class="btn btn-primary">
                    </form>
                </div>
                <div class="clear"></div>
                <div class="supplier">
                    <ul>
                        @foreach ($brands as $brand)
                        <li style="width:30%;float:left;height: 185px;margin:0 10px 10px 10px;text-align:center;border:1px solid #DDD;border-radius:5px">
                            <div style="height: 85%;">
                                <a href="{{ route('brands.show', ['brand' => $brand->slug]) }}">
                                    <img alt="" src="{{ loadImage($brand->logo) }}" style="height: 90%;width: 80%;object-position: center;object-fit: contain;margin-top: 10px;">
                                </a>
                            </div>
                            <div>
                                <a href="{{ route('brands.show', ['brand' => $brand->slug]) }}">{{ $brand->name }}</a>
                            </div>
                        </li>
                        @endforeach
                    </ul>
                    <div style="margin-top: 20px;margin-left: 20px;width: 90%;float: left;text-align: center;">
                        {{ $brands->links('pagination.default') }}
                    </div>

                    <div class="clear"></div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</div>
@endsection
