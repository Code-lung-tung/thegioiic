@extends('layouts.app') @section('content') @section('content')
<div class="container-crumb">
    <div class="texttitle sitemaps">
        <a href="/">Trang Chủ</a>
        <a href="/brands">Thương hiệu</a>
        <a href="/brands/{{ $brand->slug }}">{{ $brand->name }}</a>
    </div>
</div>
<div id="body-left">
    @include('brands.menu_left')
</div>
<div id="body-right">
    <div class="supply_class" style="float:left; width:768px;">
        <div
            style="border:1px solid #ccc; padding:5px;-webkit-border-radius: 5px; -moz-border-radius: 5px; background-color:#fff;position: relative;padding-bottom:25px;">
            <div style="padding:0 8px 0 12px;">
                <img alt="" src="{{ loadImage($brand->logo) }}" style="max-width: 250px;">
                {!!html_entity_decode($brand->desc)!!}
            </div>
            <div
                style="font-size: 14px;color: #027AC7;font-family: Arial, Tahoma, Verdana,MS Sans Serif;font-weight: bold; padding:30px 0 8px 12px;">
                Danh mục sản phẩm({{ $total_count }})
            </div>
            <div class="show-ls">
                @foreach ($products as $product)
                <div style="border-bottom:1px solid #ccc; margin-bottom:12px;padding-bottom:12px;">
                    <div class="image" style="float:left;">
                        <a href="/products/{{ $product->slug }}"><img alt="{{ $product->slug }}" class=""
                                src="{{ getProductImageUrl($product->id) }}"></a>
                    </div>
                    <div style="float:left; padding:3px 0 0 12px; width:400px;">
                        <div class="name-a">
                            <a style="padding-bottom:6px; display:block;" href="/products/{{ $product->slug }}">{{ $product->name }}</a>
                        </div>
                        <div class="desc_small">
                            {{ $product->desc }}
                        </div>
                        <div class="price blue">
                            {{ number_format($product->price) }} đ/{{ unit_product($product->note) }}
                        </div>
                        {{--  <div>
                            <span class="green"> <a class="contact-to-order"
                                    href="https://thegioiic.com/pages/dat-mua-linh-kien-dien-tu">Hết hàng</a></span>
                        </div>  --}}
                        @if ($product->status == 0)
                            <div class="brown"><span class="f"><a class="contact-to-order-show" href="https://thegioiic.com/pages/dat-mua-linh-kien-dien-tu">Hết hàng</a></span><span>(Đặt mua 7-10 ngày có hàng)</span></div>
                        @else
                            <div class="ngreen"><span class="f">Hàng còn:  {{ $product->quantity }} </span><span>(Gửi hàng trong ngày)</span></div>
                        @endif
                    </div>
                    <div class="adtocartdestop" style="float:left; width:180px;text-align: right">
                        <input type="hidden" name="id" class="product_id" value="19">

                        <input type="hidden" name="option_id" value="">
                        <div>
                            <div class="add-cart-group-ls">
                                <div class="input-group touchspin" style="float:right;margin-bottom:7px">
                                    <span class="input-group-btn">
                                        <button class="btn btn-default touchspin-down" type="button">-</button>
                                    </span>
                                    <input class="quantity-buy" type="tel" name="quantitybuy" value="1" min="1"
                                        max="100" style="display: block;width:35px">
                                    <span class="input-group-btn">
                                        <button class="btn btn-default touchspin-up" type="button">+</button>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <input type="button" value="+ Giỏ Hàng" class="btn-cart-show btn-cart" id="{{ $product->id }}">
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div>
                    {{ $products->links('pagination.default') }}
                </div>
                @endforeach
                <div class="clear"></div>
            </div>

        </div>
    </div>
</div>
@endsection
