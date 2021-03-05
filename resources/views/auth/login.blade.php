@extends('layouts.app')

@section('content')

<div id="wrapper">
  <div id="body">
    <div id="body-main" style="margin-top:10px">
      <div style="width:350px; background-color:#fff; border:1px solid #ccc; margin:0 auto;">
        <div class="title-gf" style="color:#FFF;padding: 5px 0 5px 10px;background: #3f96cf">
          Đăng Nhập
        </div>
        <div style="padding:8px 0 12px 12px;">
          <form method="POST" action="{{ route('login') }}">
            @csrf
            <p style="padding:8px 0 0 0; font-weight:bolder;">
              Email
            </p>
            <p>
              <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" style="width:285px; padding:6px;" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
              @error('email')
                  <span class="invalid-feedback" role="alert">
                      <strong>{{ $message }}</strong>
                  </span>
              @enderror
            </p>
            <p style="padding:8px 0 0 0; font-weight:bolder;">
              Mật khẩu
            </p>
            <p>
              <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" style="width:285px; padding:6px;" name="password" required autocomplete="current-password">
              @error('password')
                  <span class="invalid-feedback" role="alert">
                      <strong>{{ $message }}</strong>
                  </span>
              @enderror
            </p>

            <p style="padding:12px 0 0 0px; text-align:left;">
              <input type="submit" name="commit" value="Đăng Nhập" class="btn btn-primary" data-disable-with="Đăng Nhập" />
              &nbsp;&nbsp;<span id="tool-log"><a href="/password/reset">Quên mật khẩu?</a> | <a href="/register">Đăng Ký</a></span>
            </p>
          </form>
          <div class="clear"></div>
        </div>
      </div>

      <div class="clear"></div>

    </div>
    <div class="clear"></div>
  </div>
</div>
@endsection