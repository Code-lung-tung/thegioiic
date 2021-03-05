@extends('layouts.app')

@section('content')
<style type="text/css">
  .select-location {
    border: 1px solid #ccc;
    padding: 6px;
    width: 102px;
    background-color: #efefef;
  }
</style>
<div id="wrapper">
  <div id="body">
    @include('layouts.mypage.side_menu')
    <div id="body-right">
      <div style="background-color:#fff; padding:0px; width:100%;float:left; margin-right:6px;">
        <div class="title-gf">
          Thay đổi mật khẩu
        </div>
        <div class="content-gf" style="position: relative">
          <form class="change_password" id="change_password" method="POST" action="/change-password">
            @csrf
            <div id="notice" style="padding-left:155px"></div>
            <table>
              <tr>
              <tr>
                <td>
                  Mật khẩu hiện tại<sup>*</sup>
                </td>
                <td>
                  <input id="current-password" type="password" class="required @error('current-password') is-invalid @enderror" name="current-password" required autocomplete="password"><br>
                  @error('current-password')
                  <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                  <label class="off red" id="lb_user_password">Nhập mật khẩu</label>
                </td>
              </tr>
              <tr>
                <td>
                  Mật khẩu<sup>*</sup>
                </td>
                <td>
                  <input id="new-password" type="password" class="required @error('new-password') is-invalid @enderror" name="new-password" required><br>
                  @error('new-password')
                  <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                  <label class="off red" id="lb_user_password">Nhập mật khẩu</label>
                </td>
              </tr>
              <tr>
                <td>
                  Nhập lại mật khẩu<sup>*</sup>
                </td>
                <td>
                  <input id="password-confirm" type="password" class="required" name="password-confirm" required><br>
                  <label class="off red" id="lb_user_password_confirmation">Hãy nhập lại mật khẩu</label>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <div class="cap-orderonline">
                    <input type="submit" value="Cập nhật mật khẩu" class="btn btn-primary" />
                  </div>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection
