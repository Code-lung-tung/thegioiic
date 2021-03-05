@extends('layouts.app')

@section('content')
<!-- <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Reset Password') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('password.update') }}">
                        @csrf

                        <input type="hidden" name="token" value="{{ $token }}">

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Reset Password') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> -->
<div id="wrapper">
  <div id="body">
    <div id="body-main" style="margin-top:10px">
      <div style="width:350px; background-color:#fff; border:1px solid #ccc; margin:0 auto;">
        <div class="title-gf" style="color:#FFF;padding: 5px 0 5px 10px;background: #3f96cf">
          Đăng Nhập
        </div>
        <div style="padding:8px 0 12px 12px;">
          <form method="POST" action="{{ route('password.update') }}">
            @csrf
            <p style="padding:8px 0 0 0; font-weight:bolder;">
              Email
            </p>
            <p>
              <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" style="width:285px; padding:6px;" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>
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
              <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" style="width:285px; padding:6px;" name="password" required autocomplete="new-password">
                @error('password')
                    <span class="invalid-feedback" role="alert">
                      <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </p>
            <p style="padding:8px 0 0 0; font-weight:bolder;">
                Nhập lại Mật khẩu
            </p>
            <p>
                <input id="password-confirm" type="password" class="form-control" style="width:285px; padding:6px;" name="password_confirmation" required autocomplete="new-password">
            </p>

            <p style="padding:12px 0 0 0px; text-align:left;">
                <button type="submit" class="btn btn-primary">
                    Thiết lập lại mật khẩu
                </button>
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
