@extends('layouts.app')
@section('content')

<div id="wrapper">
  <div id="body">
    @include('layouts.mypage.side_menu')
    <div id="body-right">
      <style type="text/css">
        .select-location {
          border: 1px solid #ccc;
          padding: 6px;
          width: 312px;
          background-color: #efefef;
        }
      </style>
      <div style="background-color:#fff; padding:0px; width:100%;float:left; margin-right:6px;">
        <div class="title-gf">
          Thông tin khách hàng
        </div>
        <div class="content-gf" style="position: relative">
          <div style="border-bottom:1px solid #ddd; padding:2px 0 4px 4px; font-size:15px; font-weight:bold; color:#666; margin-bottom:9px;">
            Thông tin dùng đăng nhập website
          </div>
          <form class="edit_profile" id="edit_profile_17932" enctype="multipart/form-data" action="/update_info" accept-charset="UTF-8" method="post">
            @csrf
            <table>
              <tr>
                <td>Email</td>
                <td>{{ $user->email }}</td>
              </tr>
              <tr>
                <td></td>
                <td><a href="/change-password">Đổi mật khẩu</a></td>
              </tr>
            </table>
            <div class="avatar-update">
              ` <div style="float:left;width:120px;">
                @if(empty($user->avatar))
                  <img src="https://thegioiic.com/images/no-avatar-100.png" alt="No avatar 100" />
                @else
                  <img src="/storage/avatars/{{$user->avatar}}" alt="my avatar" />
                @endif
              </div>
              <div style="float:left;">
                <div style="position:relative;margin-bottom:32px">
                  Hình đại diện
                </div>

                <input id="avatar" type="file" class="form-control" name="avatar" />
              </div>
            </div>
            <div style="border-bottom:1px solid #ddd; padding:20px 0 4px 4px; font-size:15px; font-weight:bold; color:#666; margin-bottom:9px;">
              Thông tin khách hàng
            </div>
            <div id="notice" style="display:none;padding-left:155px;"></div>
            <table>
              <tr>
                <td>
                  <div style="position:relative;">
                    Họ tên<sup> * </sup>
                  </div>
                </td>
                <td>
                  <input class="required" value="{{ $user->name }}" type="text" name="name" id="user_fullname" />
                  <br>
                  <label class="off red" id="lb_user_fullname">Hãy nhập họ tên của bạn</label>
                  @error('phone')
                  <span class="invalid-feedback red" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </td>
              </tr>
              <tr>
                <td>
                  Điện thoại<sup> * </sup>
                </td>
                <td> <input class="number required" type="text" value="{{ $user->phone_number }}" name="phone_number" id="profile_phone" />
                  <br>
                  <label class="off red" id="lb_profile_phone">Nhập số điện thoại</label>
                  @error('phone_number')
                  <span class="invalid-feedback red" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </td>
              </tr>
              <!-- <tr>
                  <td>
                    <div style="position:relative;">
                      Tỉnh/thành phố<sup> * </sup>
                    </div>
                  </td>
                  <td>
                    <select name="profile[location1]" id="profile-location1" class="select-location">
                      <option value="0">Chọn tỉnh/ thành phố</option>
                      <option value="1" selected="selected">Hà Nội</option>
                      <option value="50">Hồ Chí Minh</option>
                      <option value="2">Hà Giang</option>
                      <option value="3">Cao Bằng</option>
                      <option value="4">Bắc Kạn</option>
                      <option value="5">Tuyên Quang</option>
                      <option value="6">Lào Cai</option>
                      <option value="7">Điện Biên</option>
                      <option value="8">Lai Châu</option>
                      <option value="9">Sơn La</option>
                      <option value="10">Yên Bái</option>
                      <option value="11">Hoà Bình</option>
                      <option value="12">Thái Nguyên</option>
                      <option value="13">Lạng Sơn</option>
                      <option value="14">Quảng Ninh</option>
                      <option value="15">Bắc Giang</option>
                      <option value="16">Phú Thọ</option>
                      <option value="17">Vĩnh Phúc</option>
                      <option value="18">Bắc Ninh</option>
                      <option value="19">Hải Dương</option>
                      <option value="20">Hải Phòng</option>
                      <option value="21">Hưng Yên</option>
                      <option value="22">Thái Bình</option>
                      <option value="23">Hà Nam</option>
                      <option value="24">Nam Định</option>
                      <option value="25">Ninh Bình</option>
                      <option value="26">Thanh Hóa</option>
                      <option value="27">Nghệ An</option>
                      <option value="28">Hà Tĩnh</option>
                      <option value="29">Quảng Bình</option>
                      <option value="30">Quảng Trị</option>
                      <option value="31">Thừa Thiên Huế</option>
                      <option value="32">Đà Nẵng</option>
                      <option value="33">Quảng Nam</option>
                      <option value="34">Quảng Ngãi</option>
                      <option value="35">Bình Định</option>
                      <option value="36">Phú Yên</option>
                      <option value="37">Khánh Hòa</option>
                      <option value="38">Ninh Thuận</option>
                      <option value="39">Bình Thuận</option>
                      <option value="40">Kon Tum</option>
                      <option value="41">Gia Lai</option>
                      <option value="42">Đắk Lắk</option>
                      <option value="43">Đắk Nông</option>
                      <option value="44">Lâm Đồng</option>
                      <option value="45">Bình Phước</option>
                      <option value="46">Tây Ninh</option>
                      <option value="47">Bình Dương</option>
                      <option value="48">Đồng Nai</option>
                      <option value="49">Bà Rịa - Vũng Tàu</option>
                      <option value="51">Long An</option>
                      <option value="52">Tiền Giang</option>
                      <option value="53">Bến Tre</option>
                      <option value="54">Trà Vinh</option>
                      <option value="55">Vĩnh Long</option>
                      <option value="56">Đồng Tháp</option>
                      <option value="57">An Giang</option>
                      <option value="58">Kiên Giang</option>
                      <option value="59">Cần Thơ</option>
                      <option value="60">Hậu Giang</option>
                      <option value="61">Sóc Trăng</option>
                      <option value="62">Bạc Liêu</option>
                      <option value="63">Cà Mau</option>
                    </select><br>
                    <label class="off red" id="lb_profile-location1">Hãy chọn tỉnh/thành phố</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    Quận/huyện<sup> * </sup>
                  </td>
                  <td>
                    <div id="location2">
                      <select name="profile[location2]" id="profile-location2" class="select-location">
                        <option value="64">Quận Ba Đình</option>
                        <option value="65">Quận Hoàn Kiếm</option>
                        <option value="66">Quận Tây Hồ</option>
                        <option value="67">Quận Long Biên</option>
                        <option value="68">Quận Cầu Giấy</option>
                        <option value="69">Quận Đống Đa</option>
                        <option value="70">Quận Hai Bà Trưng</option>
                        <option value="71">Quận Hoàng Mai</option>
                        <option value="72">Quận Thanh Xuân</option>
                        <option value="73">Huyện Sóc Sơn</option>
                        <option value="74">Huyện Đông Anh</option>
                        <option value="75">Huyện Gia Lâm</option>
                        <option value="76" selected="selected">Quận Nam Từ Liêm</option>
                        <option value="77">Huyện Thanh Trì</option>
                        <option value="78">Quận Bắc Từ Liêm</option>
                        <option value="79">Huyện Mê Linh</option>
                        <option value="80">Quận Hà Đông</option>
                        <option value="81">Thị xã Sơn Tây</option>
                        <option value="82">Huyện Ba Vì</option>
                        <option value="83">Huyện Phúc Thọ</option>
                        <option value="84">Huyện Đan Phượng</option>
                        <option value="85">Huyện Hoài Đức</option>
                        <option value="86">Huyện Quốc Oai</option>
                        <option value="87">Huyện Thạch Thất</option>
                        <option value="88">Huyện Chương Mỹ</option>
                        <option value="89">Huyện Thanh Oai</option>
                        <option value="90">Huyện Thường Tín</option>
                        <option value="91">Huyện Phú Xuyên</option>
                        <option value="92">Huyện Ứng Hòa</option>
                        <option value="93">Huyện Mỹ Đức</option>
                      </select>
                    </div>
                    <label class="off red" id="lb_profile-location2">Hãy chọn quận/huyện</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    Phường/xã<sup> * </sup>
                  </td>
                  <td>
                    <div id="location3">
                      <select name="profile[location3]" class="select-location" id="profile-location3">
                        <option value="294">Phường Cầu Diễn</option>
                        <option value="295">Phường Xuân Phương</option>
                        <option value="296">Phường Phương Canh</option>
                        <option value="297">Phường Mỹ Đình 1</option>
                        <option value="298">Phường Mỹ Đình 2</option>
                        <option value="299">Phường Tây Mỗ</option>
                        <option value="300">Phường Mễ Trì</option>
                        <option value="301" selected="selected">Phường Phú Đô</option>
                        <option value="302">Phường Đại Mỗ</option>
                        <option value="303">Phường Trung Văn</option>
                      </select>
                    </div>
                    <label class="off red" id="lb_profile-location3">Hãy chọn phường/xã</label>
                  </td>
                </tr> -->
              <tr>
                <td>
                  <div style="position:relative;">
                    Số nhà và tên đường<sup> * </sup>
                  </div>
                </td>
                <td>
                  <input class="required" type="text" value="{{ $user->address }}" name="address" id="profile_address" /> <br>
                  <label class="off red" id="lb_profile_address">Vui lòng nhập số nhà, tên đường</label>
                  @error('address')
                  <span class="invalid-feedback red" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </td>
              </tr>
            </table>
            <div style="border-bottom:1px solid #ddd; padding:20px 0 4px 4px; font-size:15px; font-weight:bold; color:#666; margin-bottom:9px;">
              Thông tin xuất hóa đơn
            </div>
            <table>
              <tr>
                <td>
                  <div style="position:relative;">
                    Tên công ty
                  </div>
                </td>
                <td> <input type="text" value="{{ $user->company_name }}" name="company_name" id="profile_company" /> </td>
              </tr>
              <tr>
                <td> Mã số thuế </td>
                <td> <input type="text" value="{{ $user->tax_code }}" name="tax_code" id="profile_mst" /></td>
              </tr>
              <tr>
                <td> Địa chỉ công ty </td>
                <td> <input type="text" value="{{ $user->company_address }}" name="company_address" id="profile_address_pay" /></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input type="submit" value="Cập nhật" class="btn btn-primary" />
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
      <!-- <script>
        $(document).ready(function() {
          $("input.required").blur(function() {
            if ($(this).val() != "") {
              $(this).removeClass('border-red');
              $("#lb_" + $(this).attr('id')).hide();
            }
          });
          $("#profile-location1").change(function() {
            var id = $(this).val();
            if (parseInt(id) > 0) {
              $(this).removeClass('border-red');
              var dataid = $(this).attr('id');
              $("#lb_" + dataid).hide();
              $.ajax({
                url: "/locations/location?id=" + id,
                dataType: "script"
              });
            } else {
              $("#location2").html('<select name="location2" class="select-location" id="profile-location2"><option selected="selected" value="0">--</option></select>');
            }
            $("#location3").html('<select name="location3" class="select-location" id="profile-location3"><option selected="selected" value="0">--</option></select>');
          });
          $("#profile-location2").change(function() {
            var id = $(this).val();
            $.ajax({
              url: "/locations/location?id=" + id,
              dataType: "script"
            });

          });

          $(".edit_profile").submit(function(event) {
            var ready = 0;
            $(this).find("input.required").each(function() {
              if ($(this).val() == "") {
                $(this).addClass('border-red');
                $("#lb_" + $(this).attr('id')).show();
                ready--;
              } else {
                $(this).removeClass('border-red');
                $("#lb_" + $(this).attr('id')).hide();
                ready++;
              }
            });
            $(this).find("select.select-location").each(function() {
              if ($(this).val() == "0") {
                var id = $(this).attr('id');
                $("#lb_" + id).show();
                $(this).addClass('border-red');
                ready--;
              } else {
                var id = $(this).attr('id');
                $("#lb_" + id).hide();
                $(this).removeClass('border-red');

                ready++;
              }
            });
            if (ready == 6) {
              return true;
            } else {
              event.preventDefault();
              return false;
            }

          });
        });
      </script> -->
    </div>
    <div class="clear"></div>
  </div>
</div>
@endsection
