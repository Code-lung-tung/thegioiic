@extends('layouts.app') @section('content')
<div class="container-crumb">
  <div class="texttitle sitemaps">
    <a href="/">Trang Chủ</a>
    <a href="/products">Sản Phẩm</a>
    <a href="/product/{{ $product->category->type->slug }}">{{ $product->category->type->name }}</a>
    <a href="/product/{{ $product->category->slug }}">{{ $product->category->name }}</a>
    <a>{{$product->name}}</a>
  </div>
</div>
<div id="body-left">
  <div class="left-menu-new ablack">
    <div class="lss">
      <ul>
        @foreach ($categories as $category )
        <li><a href="/product/{{ $category->slug }}">{{ $category->name }}<span>({{ count($category->products) }})</span></a></li>
        @endforeach
      </ul>
    </div>
  </div>

  <div class="left-menu">
    @include('newest_comments')
  </div>
  <script>
    $(document).ready(function($) {
      $.ajax({
        url: '/new_report',
        type: "get",
        dataType: 'script'
      });
    })
  </script>
  <style>
    #product-report {
      max-height: 258px;
      overflow: auto;
      border-bottom: 1px solid #DDD;
      overscroll-behavior: none;
      overflow-x: hidden;
      scrollbar-width: thin;
      scrollbar-color: #666;
    }

    #product-report::-webkit-scrollbar {
      width: 6px;
      background: #eee;
    }

    #product-report::-webkit-scrollbar-thumb {
      background: #666;
    }
  </style>

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



  <script>
    window.fbAsyncInit = function() {
      FB.init({
        appId: '476526335840468',
        xfbml: true,
        version: 'v2.4'
      });
    };
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  </script>
  <div class="right-detail">
    <div id="view-product">

      <div id="info-product">
        <div class="image-product-show">
          <div class="image">
            <div class="show" href="{{ getProductImageUrl($product->id) }}" style="position: relative;">
              <img class="large" alt="LM258P" src="{{ getProductImageUrl($product->id) }}" id="show-img" style="width: 100%; height: 100%;">
              <div style="position: absolute; left: 76.5px; top: 149px; background-color: rgb(0, 0, 0); width: 100px; height: 100px; opacity: 0.2; border: 1px solid rgb(204, 204, 204); cursor: crosshair; display: none;"></div>
            </div>
          </div>
          <div class="small-img">
            <div class="small-container">
              <div id="small-img-roll">
                <img src="{{ getProductImageUrl($product->id) }}" class="thumb show-small-img" alt="now" style="border: 1px solid rgb(149, 27, 37); padding: 2px;">
              </div>
            </div>
          </div>
        </div>
        <div class="new-update-style-name right">
          <h1>{{ $product->name }}</h1>
          <p id="name-p">
            {{ $product->desc }}
          </p>
        </div>
        <div class="new-update-style-info right">
          <div class="info-product-show infodescription">
            <div id="info-p">
              <p style="padding:4px 0">
                <b style="margin-right:10px;display:inline-block">Thương hiệu:</b><a style="color:#09c;" href="/brands/{{ $product->brand->slug }}">{{ $product->brand->name }}</a>
              </p>
              <div class="inventory_product">
                <div class="contact-to-order-w bgaqua"><span class="icon-i"></span>
                  @if ($product->status == 0)
                  <div class="brown"><span class="f"><a class="contact-to-order-show" href="https://thegioiic.com/pages/dat-mua-linh-kien-dien-tu">Hết hàng</a></span><span>(Đặt mua 7-10 ngày có hàng)</span></div>
                  @else
                  <div class="ngreen"><span class="f">Hàng còn: {{ $product->quantity }}</span><span>(Gửi hàng trong ngày)</span></div>
                  @endif
                </div>
              </div>

              <div class="product-option-group" style="line-height:32px">
              </div>
              <form action="/carts/add_to_cart" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="✓">
                <input type="hidden" name="id" value="18480">
                <input type="hidden" name="option_id" value="" id="product_option_id">
                <p style="float:left;margin-right:10px">
                  <b style="position:relative;top:-4px">Số lượng mua:</b>
                </p>
                <div class="input-group touchspin" style="margin-top:12px">
                  <span class="input-group-btn">
                    <button class="btn btn-default touchspin-down" type="button">-</button>
                  </span>
                  <input class="quantity-buy" type="tel" name="quantitybuy" value="1" min="1" max="100" style="display: block;">
                  <span class="input-group-btn">
                    <button class="btn btn-default touchspin-up" type="button">+</button>
                  </span>
                </div>
                <p id="cart-p" style="padding-top:13px">
                  <input hidden value="{{ $product->id }}" class="products_id">
                  <input type="button" value="Thêm vào giỏ hàng" class="btn-cart btn-cart-show" id="{{$product->id}}">
                </p>
              </form>
              @if (Auth::check())
              <form class="new_favorite" id="new_favorite" action="/favorite" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="✓">
                <input type="hidden" name="product_id" value="{{ $product->id }}" id="product_id">
                <input type="submit" value="Thêm vào mục yêu thích" class="add_favorite" />
              </form>
              @endif
            </div>
            <div class="clear"></div>
            <span id="button-view-report" style="vertical-align: top;margin-right:20px;float:left"><b style="vertical-align: top;color:#09c">{{ getTotalReplies($product) }}</b> Phản hồi</span>
          </div>
          <div class="info-product-show infoprice">
            <div class="info-tip">
              <div style="font-weight:bold; color:#2689CA; padding-left:2px;"></div>
              <div style="" class="info_sp">
                <p style="color:#0000ff">Bảng giá</p>
                <table class="list-price-product" cellpadding="0" cellspacing="0">
                  <tbody>
                    <tr class="header">
                      <td>Số lượng mua<br>({{ unit_product($product->note) }})
                      </td>
                      <td>Đơn giá<br>(VND)</td>
                    </tr>
                    @foreach ($product->units as $unit)
                    <tr>
                      <td class="price-column">{{ $unit->number }} +</td>
                      <td class="price-column">{{ number_format($unit->unit_price) }} </td>
                    </tr>
                    @endforeach
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="info-product-show infoshare" style="margin-top:15px;">
            <div>
              <a href="http://www.facebook.com/sharer.php?u=https://thegioiic.com/products/lm258p" target="_blank" title="Share Facebook" rel="nofollow">
                <img src="https://thegioiic.com/images/facebook-icon.png" alt="Facebook">
              </a>
            </div>
            <div>
              <a href="https://twitter.com/share?url=https://thegioiic.com/products/lm258p" target="_blank" title="Share Twitter" rel="nofollow">
                <img src="https://thegioiic.com/images/twitter-icon.png" alt="Twitter">
              </a>
            </div>
            <div>
              <div id="fb-root" class=" fb_reset">
                <div style="position: absolute; top: -10000px; width: 0px; height: 0px;">
                  <div><iframe name="fb_xdm_frame_https" id="fb_xdm_frame_https" aria-hidden="true" title="Facebook Cross Domain Communication Frame" tabindex="-1" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://staticxx.facebook.com/connect/xd_arbiter.php?version=44#channel=fa061f17e51308&amp;origin=https%3A%2F%2Fthegioiic.com" style="border: none;"></iframe></div>
                  <div></div>
                </div>
              </div>
              <script>
                (function(d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) return;
                  js = d.createElement(s);
                  js.id = id;
                  js.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v3.1';
                  fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
              </script>
              <div class="fb-like fb_iframe_widget" data-href="https://thegioiic.com/products/lm258p" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=476526335840468&amp;container_width=0&amp;href=https%3A%2F%2Fthegioiic.com%2Fproducts%2Flm258p&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style="vertical-align: bottom; width: 122px; height: 20px;"><iframe name="f2f380f6d395c14" width="1000px" height="1000px" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.4/plugins/like.php?action=like&amp;app_id=476526335840468&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D44%23cb%3Df14fa49a745621%26domain%3Dthegioiic.com%26origin%3Dhttps%253A%252F%252Fthegioiic.com%252Ffa061f17e51308%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2Fthegioiic.com%2Fproducts%2Flm258p&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style="border: none; visibility: visible; width: 122px; height: 20px;" class=""></iframe></span></div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="info-product-show-content">
        <div id="feature-f">
          <div id="ff-f">
            <ul id="product_tab">
              <li>
                <a href="javascript:" class="select" data-id="1">Tính năng</a>
              </li>
              <li>
                <a href="javascript:" data-id="2">Datasheet</a>
              </li>
            </ul>
            <div class="clear"></div>
          </div>
          <div class="detail-tab">
            <div id="tabp1" class="view_tab_product" style="display: block;">
              {!! $product->specification !!}
            </div>
            <div id="tabp2" class="view_tab_product" style="display: none;">
            <p><a href="{{ $product->datasheet }}" target="_blank">{{ $product->datasheet ? $product->name : '' }}</a></p>
            </div>
            <div id="tabp6" class="view_tab_product" style="display: none;">
              <div class="sam-buy-product-list">
                <div class="clear"></div>
              </div>


            </div>
            <div class="clear"></div>
          </div>
        </div>

        @include('comment_section', ['commentable_object' => $product, 'commentable_type' => 'App\model\Product'])
      </div>
      <div class="info-product-show-right">
        <div class="right-menu" id="same-product">
          <div class="title">
            Sản phẩm cùng loại
          </div>
          <div class="same-by-list" id="paging_container8">
            <ul class="content">
              @foreach ( $sameProducts as $sameProduct )
              <li>
                <div class="list-same">
                  <div class="image-same ">
                    <a href="/products/{{ $sameProduct->slug }}"><img alt="" src="{{ loadImage($sameProduct->image) }}"></a>
                  </div>
                  <div class="name-same">
                    <p class="name-a ablack">
                      <a title="MCP6041T-I/OT" href="/products/{{ $sameProduct->slug }}">{{ $sameProduct->name }}</a>
                    </p>
                    <p class="price blue">
                      {{ number_format($sameProduct->price) }} đ/{{ unit_product($sameProduct->note) }}
                    </p>
                    <p>
                      @if ($sameProduct-> status == 0)
                      <span class="green"> <a class="contact-to-order" href="https://thegioiic.com/pages/dat-mua-linh-kien-dien-tu">Hết hàng</a></span>
                      @else
                      <span class="green"> <span class="bb">Hàng còn: </span><span class="iv">{{ $sameProduct->quantity }}</span></span>
                      @endif
                    </p>
                  </div>
                  <div class="clear"></div>
                </div>
              </li>
              @endforeach
            </ul>
            <div style="text-align: right;padding: 10px" id="view-more">
              <a href="/product/{{ $product->category->slug }}">Xem thêm</a>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div id="product-sellmore" class="right-menu">
          <div class="title">
            Sản phẩm nổi bật
          </div>

          <div class="same-by-list" id="paging_container8">
            <ul class="content">
              @foreach ( $productHots as $productHot)
              <li>
                <div class="list-same">
                  <div class="image-same">
                    <a id="{{$product->id}}" class="review-product" href="/products/{{ $productHot->slug }}"><img alt="" src="{{ URL::to('/') }}/images/{{ $productHot->image }}"></a>
                  </div>
                  <div class="name-same">
                    <p class="name-a ablack">
                      <a id="{{$product->id}}" class="review-product" title="{{  $productHot->name }}" href="/products/{{ $productHot->slug }}">{{ $productHot->name }}</a>
                    </p>
                    <p class="price blue">
                      {{ number_format($productHot->price) }} đ/{{ unit_product($productHot->note) }}
                    </p>
                    <p>
                      @if ($productHot-> status == 0)
                      <span class="green"> <a class="contact-to-order" href="https://thegioiic.com/pages/dat-mua-linh-kien-dien-tu">Hết hàng</a></span>
                      @else
                      <span class="green"> <span class="bb">Hàng còn: </span><span class="iv">{{ $productHot->quantity }}</span></span>
                      @endif
                    </p>
                  </div>
                  <div class="clear"></div>
                </div>
              </li>
              @endforeach
            </ul>
            <div class="clear"></div>
          </div>
          <style>
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
        </div>
        @include('right_banner')
      </div>
      <div class="clear"></div>
    </div>
  </div>
  <script type="text/javascript">
    $(document).ready(function($) {
      $("ul#product_tab li a").click(function() {
        var id = $(this).attr('data-id');
        $("ul#product_tab li a").removeClass("select");
        $(this).addClass("select");
        $(".view_tab_product").css("display", "none");
        $("#tabp" + id).css("display", "block");
      });
      $(".detail-tab .view_tab_product").css('display', 'none');
      $(".detail-tab .view_tab_product:first").css('display', 'block');
      $.ajax({
        url: '/products/same_category?id=18480&amp;subject_id=95',
        type: "get",
        dataType: 'script'
      });
      $("#button-view-report").click(function() {
        $('html, body').animate({
          scrollTop: $("#report-user").offset().top
        }, 2000);
      });
      $("#store_id").change(function() {
        var store_id = $(this).val();
        $.ajax({
          url: '/get_store_number',
          type: "get",
          data: {
            product_id: 18480,
            store_id: store_id
          },
          dataType: 'script'
        });
      });
      $(document).on("click", ".add_favorite", function() {
        $.ajaxSetup({
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
        });
        $.ajax({
          url: '/favorite',
          type: 'post',
          data: $("#new_favorite").serialize(),
          success: function(data) {
            $('.flash-message').html(data);
          }
        });
      });
    });
  </script>
  <style>
    .rigthad img {
      max-width: 100%;
    }

    .inventory_product {
      color: green
    }

    .detail-tab ul,
    .detail-tab ol {
      padding-left: 20px;
      list-style: inherit
    }

    .slideimage img.thumb {
      border: 1px solid #DDD;
    }

    #button-view-report {
      cursor: pointer;
    }

    .slideimage .caroufredsel_wrapper {
      height: 43px !important;
      padding: 0 !important;
      width: 275px !important
    }

    .inventory_product span.bb {
      font-weight: bold;
      width: 91px;
      display: inline-block
    }

    .report-product .rp-user .rplist::-webkit-scrollbar {
      width: 4px;
      background: #eee;
    }

    .report-product .rp-user .rplist {
      overflow-x: hidden;
      scrollbar-width: thin;
      scrollbar-color: #666;
    }
  </style>

</div>

@endsection
