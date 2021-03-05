<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>
    @if ($title = getSetting(App\Enums\SettingType::MetaTitle))
    {!!strip_tags($title->value)!!}
    @endif
  </title>
  <link rel="shortcut icon" href="{{ url('logo/logo.ico') }}" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">

  <!-- Scripts -->
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"
      crossorigin="anonymous">
  </script>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
 <!--  <script src="{{ url('js/jnoty.js') }}" defer></script>
  <script src="{{ url('js/jnoty.min.js') }}" defer></script> -->
  <script src="{{ url('js/main.js') }}" defer></script>
  <script src="{{ url('js/custom.js') }}" defer></script>
  <script src="{{ url('js/comment.js') }}" defer></script>
  <!-- Fonts -->
  <link rel="dns-prefetch" href="//fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

  <!-- Styles -->
  <link href="{{ url('css/style.css') }}" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css">
</head>

<body data-cart="0">
  <div id="top-fix-scroll" class="top-fix-scroll" style="height: 40px;">
    <div id="top-fix-scroll">
      <div>
        <div class="logo-scroll">
            @if ($logo = getBanner(App\Enums\BannerType::Logo))
            <a href="{{ $logo->link }}">
                <img alt="{{ $logo->alt }}" class="" src="{{ URL::to('/') }}/images/{{ $logo->image }}" />
            </a>
            @endif
        </div>
        <div class="form-scroll" id="main-search-scroll">
          <form action="/products" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
            <div class="namesub">
              <input type="text" placeholder="Tên sản phẩm" name="search" value="" autocomplete="off" id="txtQueryTop" class="defaultText text">
              <input type="submit" class="btn-search-home" value="" style="right:7px;top:4px">
            </div>
          </form>
        </div>
        <div class="register-cart">
          <div class="register-scroll">
            <div class="user_control" style="display: flex;">
              <input type="hidden" id="check_login" value="0">
              @if (Auth::check())
                @if (Auth::user()->is_admin == true)
                  <a href="/admin" class="admin_btn">Trang quản trị</a> |
                @endif
                <a href="/mypage" class="mypage_btn">Chào {{ Auth::user()->name }} </a> |
                <form method="POST" class='logout' action="{{ route('logout') }}">@csrf<button class='logout_btn' type="submit"> Đăng xuất</button></form>
              @else
                <a href="/login" class="login_btn">Đăng Nhập </a>|<a href="/register" class="register_btn"> Đăng Ký</a>
              @endif
              <a class="support-img" href="/support/me"><img src="/images/yah.png" alt="Yah"></a>
            </div>
          </div>

          <div class="cart-scroll" id="box-cart-scroll">
            <div id="cart1" class="cart-popup-hover-scroll">
              <a class="bb-hover" href="/carts">
                <label class="lbcart">
                  Giỏ hàng
                </label>
                <span class="cartd" id="cartd">
                  <sup>
                    <strong style="color:red" class="card_value">0</strong>
                  </sup>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
  <h1 class="h1_home">IC, transistor, capacitor, inductor, Linh kiện điện tử, linh kien dien tu, electronic component</h1>
  <div id="divAdRight" style="position: absolute; top: 0px">
    @if ($leftMost = getBanner(App\Enums\BannerType::LeftMost))
        <a href="{{ $leftMost->link }}" TARGET="_blank">
            <img alt="{{ $leftMost->alt }}" width="140" class="" src="{{ URL::to('/') }}/images/{{ $leftMost->image }}" />
        </a>
    @endif
  </div>
  <div class="container">
    <div id="top_bar" class="col-12">
      <div class="col-12 main-col">
        <div class="menu-doc">
          <span class="view-menu"><img src="/images/menu-24.png" class="view-menu-btn"></span>
          <a href="/?mobile=1">
            <span class="view-desktop"><img src="/images/phone-24.png"></span>
          </a>
          <ul>
            <li><a href="/product">Sản phẩm</a></li>
            <li><a href="/services">Dịch vụ</a></li>
            <li><a href="/forum">Diễn đàn</a></li>
            <li><a href="/news">Tin tức</a></li>

            <li><a href="/carts">Giỏ hàng</a></li>
            <li><a href="/lien-he">Liên hệ</a></li>
            <li><a href="/information">Thông tin</a></li>
            <span><img src="/images/close_pirobox.png"></span>
          </ul>
        </div>
        <div class="textmenu_top" style="float: left;">
          <img class="phone" src="https://thegioiic.com/assets/phone-5132c0a1dbb76aaf5137a4c070684d7332a2cd648f49606b6212839e8fc77b83.png" alt="Phone">
          @if ($tel = getSetting(App\Enums\SettingType::Tel))
          <span class="px">{!!strip_tags($tel->value)!!}</span>
          @endif
        </div>
        <div class="marquee">
          @if ($openTime = getSetting(App\Enums\SettingType::OpenTime))
          {!!html_entity_decode($openTime->value)!!}
          @endif
        </div>
        <div class="user_control" style="display: flex;">
          <input type="hidden" id="check_login" value="0">
          @if (Auth::check())
            @if (Auth::user()->is_admin == true)
              <a href="/admin" class="admin_btn">Trang quản trị</a> |
            @endif
            <a href="/mypage" class="mypage_btn">Chào {{ Auth::user()->name }} </a> |
            <form method="POST" class='logout' action="{{ route('logout') }}">@csrf<button class='logout_btn' type="submit"> Đăng xuất</button></form>
          @else
            <a href="/login" class="login_btn">Đăng Nhập </a>|<a href="/register" class="register_btn"> Đăng Ký</a>
          @endif
          <a class="support-img" href="/support/me"><img src="/images/yah.png" alt="Yah"></a>
        </div>
        <div class="clear"></div>
      </div>
    </div>
    <div id="view_bar" class="col-12 main-col">
      <div id="logo">
          @if ($logo = getBanner(App\Enums\BannerType::Logo))
              <a href="{{ $logo->link }}" class="logobat logo1">
                  <img alt="{{ $logo->alt }}" class="" src="{{ URL::to('/') }}/images/{{ $logo->image }}" />
              </a>
          @endif
          @if ($topLeft = getBanner(App\Enums\BannerType::TopLeft))
              <a href="{{ $topLeft->link }}" class="logobat logo2">
                  <img alt="{{ $topLeft->alt }}" class="" src="{{ URL::to('/') }}/images/{{ $topLeft->image }}" />
              </a>
          @endif
      </div>
      <div id="info-website">
        <div id="box-cart">
          <div id="cart1" class="cart-popup-hover-main">
            <a class="bb-hover" href="/carts">
              <label class="lbcart">
                Giỏ hàng
              </label>
              <span class="cartd" id="cartd"><sup>
                  <strong style="color:red" class="card_value">0</strong>
                </sup>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div style="float:right; line-height:0;" class="topad">
		@if ($topRight = getBanner(App\Enums\BannerType::TopRight))
			<a href="{{ $topRight->link }}" target="_blank">
				<img alt="{{ $topRight->alt }}" class="top_ad" src="{{ URL::to('/') }}/images/{{ $topRight->image }}" />
			</a>
		@endif
      </div>
      <div class="clear"></div>
    </div>
    <div class="menubar" id="topmenubar">
      @include('menu')
    </div>
    <div id="menubar" class="markermenu" style="display: none;">
      @include('menu_item')
    </div>
  </div>
  <div id="wrapper">
    <div id="body">
      <div class="flash-message">
        @include('layouts.partials.alert_section')
      </div>
      @yield('content')
      @include('auth.login_dialog')
    </div>
    <div id="footer">
      @include('footer')
    </div>
  </div>
  <div id="divAdLeft" style="position: fixed; top: 175px; right: 30.5px; display: block;">
  	@if ($rightMost = getBanner(App\Enums\BannerType::RightMost))
        <a href="{{ $rightMost->link }}" target="_blank">
            <img alt="{{ $rightMost->alt }}" width="140" class="" src="{{ URL::to('/') }}/images/{{ $rightMost->image }}" />
        </a>
    @endif
  </div>
  <div id="left-support" onclick="$('#supportbox').show();">
    <a href="#">Chat</a>
  </div>
  <div class="overlay"></div>
  <div class="go-top" style="display: block;"></div>
  <div class="clear"></div>
  <div class="autocomplete-suggestions " style="display: none; top: 149px; left: 868.5px; width: 352px;"></div>
  <div class="autocomplete-suggestions " style="display: none; top: 2500px; left: 386.938px; width: 424px;"></div>
  @include('online_support')
</body>
</html>
