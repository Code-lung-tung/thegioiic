@extends('layouts.app') @section('content')
<div id="body-left">
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

    <div class="right-information">
        <div style="background-color:#fff;">
            <div style="border-bottom:1px solid #ccc; margin-bottom:18px;">
                <div style="font-size: 14px;color: #027AC7;font-family: Arial, Tahoma, Verdana,MS Sans Serif;font-weight: bold; padding-bottom:8px;">
                    KẾT QUẢ TÌM KIẾM
                </div>
                <div class="detail-search">
                    <span>{{ $total }}</span> kết quả cho <span>{{ $name }}</span>
                </div>
            </div>
            <div class="subject" style="height:auto">
                <div class="list-subject2" id="order_product">
                @foreach ( $products as $product )
                    <div class="item-product-category">
                        <div class="image popular">
                            <a id="{{$product->id}}" class="review-product" title="{{ $product->name }}" target="_blank" href="/products/{{ $product-> slug }}"><img src="{{ getProductImageUrl($product->id) }}"></a>
                        </div>
                        <div class="name">
                            <p class="name-a">
                                <a id="{{$product->id}}" class="review-product" title="{{ $product->name }}" target="_blank" href="/products/{{ $product->slug }}">{{ $product->name }}</a>
                            </p>
                            <div class="desc_small">
                                {{ $product->desc }}
                            </div>

                            <p class="price blue">
                                {{ $product->price }} đ/{{ unit_product($product->note) }}
                            </p>

                            @include('products.quantity')
                            <div class="adtocartdestop">
                                <input type="hidden" name="id" class="product_id" value="10">
                                <input type="hidden" name="option_id" value="">
                                <div>
                                    <div class="_50">
                                        <div class="input-group touchspin">
                                            <span class="input-group-btn">
                                            <button class="btn btn-default touchspin-down" type="button">-</button>
                                        </span>
                                            <input hidden class="products_id" value="{{ $product->id }}">
                                            <input class="quantity-buy" type="tel" name="quantitybuy" value="1" min="1" max="100" style="display: block;">
                                            <span class="input-group-btn">
                                            <button class="btn btn-default touchspin-up" type="button">+</button>
                                        </span>
                                        </div>
                                    </div>
                                    <div class="_50">
                                        <input type="button" value="+ Giỏ Hàng" class="btn-cart" id="{{ $product->id }}">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="showtip_10" class="showtip">
                            <img alt="{{$product->code}}" class="fff" src="https://thegioiic.com/upload/large/89.jpg">

                        </div>
                        <script type="text/javascript">
                            $(".popular a#showtip_i_10").easyTooltip({
                                useElement: "showtip_10"
                            });
                        </script>
                    </div>
                @endforeach
                </div>
                <div style="display:block;float:left;width:100%;">
                    <div class="pagination"><span class="previous_page disabled">&nbsp; </span>
                        @for ($i = 0; $i < $numberPage; $i++)
                            <a rel="next" href="/products?page={{ $i + 1 }}&amp;search={{ $name }}&amp;utf8=%E2%9C%93">{{ $i + 1 }}</a>&nbsp; </a>
                        @endfor
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
    <style type="text/css">
        .detail-search {
            color: #575757;
            padding-bottom: 1px;
        }

        .detail-search span {
            color: red;
            font-weight: bold;
            font-size: 15px;
        }
    </style>
</div>
@endsection
