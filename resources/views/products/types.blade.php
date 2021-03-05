@extends('layouts.app') @section('content')
<div class="container-crumb">
    <div class="texttitle sitemaps">
        <a href="/">Trang Chủ</a>
        <a href="/products">Sản Phẩm</a>
        <a href="#">
            <h1 class="h1-title">{{ $type->name }}</h1>
        </a>
    </div>
</div>
<div id="body-left">
    <div class="left-menu-new">
        <div class="lss">
            <ul>
                @foreach ($types as $item )
                <li><a href="/product/{{ $item->slug }}">{{ $item->name }}</a></li>
                @endforeach
            </ul>
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
        @foreach ($type->categories as $category )
            @if (count($category->products))
            <div id="view-subject">
                <div class="subject subject-category subject-with-load-data" data-subject-id="11" data-object="subject" style="height: 235px;" auto-load="finish">
                    <div class="title" style="position:relative">
                        <h2 style="margin: 0;padding: 0"><a href="/product/{{ $category->slug }}">{{ $category->name }}</a></h2>
                        <span style="text-align:right;position: absolute;top: 2px;right: 3px;"><a style="font-size: 11px;font-weight: normal;" href="/product/{{ $category->slug }}">Xem thêm</a></span>
                    </div>
                <div class="a999" id="list-subject-ss-{{$category->id}}">
                        <div class="caroufredsel_wrapper" style="position: relative; overflow: hidden; width: 764px; height: 216px;">
                        <div class="list-subject" id="list-subject-s-{{$category->id}}" style="position: absolute; width: 2674px; height: 216px;">
                            @foreach ( $category->products as $product )
                                <div class="item-subject">
                                    <div class="image">
                                        <a id="{{$product->id}}" class="review-product" title="ICDREC" href="/products/{{ $product->slug }}"><img alt="ICDREC" class="" src="{{ getProductImageUrl($product->id) }}"></a>
                                    </div>
                                    <div class="name">
                                        <a id="{{$product->id}}" class="review-product" href="/products/{{ $product->slug }}">{{ $product->name }}</a>
                                    </div>
                                </div>
                            @endforeach
                        
                            </div>
                        </div>
                        <a href="javascript:" id="prev">
                            <i class="arrow-left-01"></i>
                        </a>
                        <a href="javascript:" id="next">
                            <i class="arrow-right-02"></i>
                        </a>
                    </div>
                </div>
            </div>
            @endif
        @endforeach
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
