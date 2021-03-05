@extends('layouts.app') @section('content')
<div class="container-crumb">
    <div class="texttitle sitemaps">
        <a href="/">Trang Chủ</a>
        <a href="/products">Sản Phẩm</a>

        <a href="/product/{{ $categor->type->slug }}">{{ $categor->type->name }}</a>
        <a href="#">
            <h1 class="h1-title">{{ $categor->name }}</h1>
        </a>
    </div>
</div>
<div id="body-left">
    <div class="left-menu-new ablack">
        <div class="lss">
            <ul>
                @foreach ( $categories as $category )
                    <li>
                        <a href="/product/{{ $category->slug}}">{{ $category->name }}<span>({{ count($category->products) }})</span></a>
                    </li>
                @endforeach
            </ul>
        </div>
    </div>


    <div class="left-menu">
        <div class="title">
            Sản phẩm đã xem
        </div>
        <div id="product_viewed">
            <div class="same-by-list ">
                <ul class="content seed-product">
                </ul>
                <div class="clear"></div>
            </div>
        </div>
    </div>
    <style>
        .green a {
            padding: 0 !important;
        }

        .same-by-list {
            max-height: 258px;
            overflow: auto;
            border-bottom: 1px solid #DDD;
            overscroll-behavior: none;
            overflow-x: hidden;
            scrollbar-width: thin;
            scrollbar-color: #666;
        }

        .same-by-list::-webkit-scrollbar {
            width: 6px;
            background: #eee;
        }

        .same-by-list::-webkit-scrollbar-thumb {
            background: #666;
        }
    </style>
    @include('left_banner')
</div>

<div id="body-right">
    <div class="body-right-content">
        <div id="view-subject">
        </div>
        <form action="/product/{{$categor->slug}}" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="✓">
            <div class="subject" style="padding-bottom:0px;height: auto;">
                <div class="title" style="position:relative;padding-right: 0">
                    <h2 class="h2-subject-title">{{ $categor->name }}<span style="font-size:15px;font-weight:normal;color:#027AC7">({{ count($categor->products) }})</span></h2>
                    <span style="position:relative; top:-3px;float: right;">
<input type="submit" id="btn-submit-view" value="" style="width:0;height:0;display:none">
<select name="order_sort" id="sort_value">
<option value="0">Sắp xếp</option>
<option value="1">Tên sản phẩm</option>
<option value="2">Giá sản phẩm</option>
<option value="3">Lượng tồn kho</option>
<option value="4">Mới nhất</option>
</select>
</span>
                    <span style="position:relative; top:-3px;float: right;">
<select name="number_view" id="view_value">
<option value="40">Hiển thị 40</option>
<option value="80"> Hiển thị 80</option>
<option value="120"> Hiển thị 120</option>
<option value="160"> Hiển thị 160</option>
<option value="200"> Hiển thị 200</option>
</select>
</span>

                    {{--  <span style="position:relative; top:-2px; float:right;margin-right: 10px">
<span><a href="/product/amplifiers-audio-ics?view_ls=true"><img src="/images/list_product.png" alt="List product"></a></span>
                    <span><a href="/product/amplifiers-audio-ics?view_ga=true"><img src="/images/list_gallery.png" alt="List gallery"></a></span>
                    </span>  --}}
            </div>
                <div style="padding:2px 2px 10px 2px" class="text-subject">
                </div>
                <div class="list-subject2" id="order_product">
                @foreach ( $products as $product )
                    <div class="item-product-category" style="height: 315px">
                        <div class="image popular">
                            <a id="{{$product->id}}" class="review-product" title="LA4440J" target="_blank" href="/products/{{ $product->slug }}"><img src="{{ getProductImageUrl($product->id) }}"></a>
                        </div>
                        <div class="name">
                            <p class="name-a">
                                <a id="{{$product->id}}" class="review-product" title="LA4440J" target="_blank" href="/products/{{ $product->slug }}">{{ $product->name }}</a>
                            </p>
                            <div class="desc_small">
                                {{ $product->desc }}
                            </div>
                            <div class="supplier-name-show">
                                {{ $product->brand->name }}
                            </div>
                            <p class="price blue">
                               {{ number_format($product->price) }} đ/{{ unit_product($product->note) }}
                            </p>

                            @include('products.quantity')
                            <div class="adtocartdestop">
                                <input type="hidden" name="id" class="product_id" value="9319">
                                <input type="hidden" name="option_id" value="">
                                <div>
                                    <div class="_50">
                                        <div class="input-group touchspin">
                                            <span class="input-group-btn">
        <button class="btn btn-default touchspin-down" type="button">-</button>
    </span>
                                            <input class="quantity-buy" type="tel" name="quantitybuy" value="1" min="1" max="100" style="display: block;">
                                            <span class="input-group-btn">
        <button class="btn btn-default touchspin-up" type="button">+</button>
    </span>
                                        </div>
                                    </div>
                                    <div class="_50">
                                    <input type="button" value="+ Giỏ Hàng" class="btn-cart" id="{{$product->id}}">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="showtip_9319" class="showtip">
                            <img class="fff" src="{{ getProductImageUrl($product->id) }}">

                        </div>
                        <script type="text/javascript">
                            $(".popular a#showtip_i_9319").easyTooltip({
                                useElement: "showtip_9319"
                            });
                        </script>
                    </div>

                @endforeach
                    <div class="clear">
                    </div>
                </div>
            </div>
        </form>
        <style type="text/css">
            #hide-text {
                display: none
            }

            .read-less,
            .read-more {
                color: #09c
            }

            .read-less:hover,
            .read-more:hover {
                text-deconation: underline
            }

            .add-cart-group-ls {
                float: right;
                margin-bottom: 10px
            }

            .add-cart-group-ls .touchspin .quantity-buy {
                width: 34px
            }

            .text-subject {
                position: relative;
            }

            .text-subject ul {
                list-style: inherit;
                padding-left: 25px
            }
        </style>
        <div class="pager">

            <div style="float:right; padding-right:12px; font-size:13px;">
            </div>
            <div class="clear"></div>
        </div>
        <script type="text/javascript">
            $(document).ready(function($) {
                var local = window.location.toString();
                var view_product = $("#view_ls").val();
                $("#captcha").css("border", "1px solid #c30;")
                $("#sort_value").change(function() {
                    $("#btn-submit-view").click();
                });
                $("#view_value").change(function() {
                    $("#btn-submit-view").click();
                });


                $(".subject-with-load-data").slice(0, 3).each(function() {
                    $(this).attr('auto-load', 'finish');
                    var data_object = $(this).attr('data-object');
                    var subject_id = $(this).attr('data-subject-id');
                    $.ajax({
                        url: "/subjects/get-by-subject-id?id=" + subject_id + "&object=" + data_object,
                        dataType: 'script'
                    })

                });
                $(window).scroll(function() {
                    $(".subject-with-load-data").each(function() {
                        if ((($(window).scrollTop() + (this).offsetHeight + 400) >= (this).offsetTop) && ($(window).scrollTop() <= ((this).offsetTop + (this).offsetHeight)) && ($(this).attr('auto-load') == undefined)) {
                            var data_object = $(this).attr('data-object');
                            var subject_id = $(this).attr('data-subject-id');
                            $.ajax({
                                url: "/subjects/get-by-subject-id?id=" + subject_id + "&object=" + data_object,
                                dataType: 'script'
                            })
                            $(this).attr('auto-load', 'finish');

                        }
                    });
                });
            });
        </script>
    </div>
    <style type="text/css">
        .supplier-name-show {
            color: #000;
            font-style: italic;
        }
    </style>
</div>
@endsection
