@extends('layouts.app') @section('content')
<div id="body-main" style="margin-top:10px">
    <div class="left-content-cart left">
        <div id="infor_cart" style="margin-top:15px">
            <div class="title-gh">
                Giỏ hàng (<span class="number_order"></span>)
            </div>
            <div id="show-cart">
                <form id="update_cart" action="/carts/update_to_cart" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="✓">
                    <table class="cart" cellpadding="0" cellspacing="0">
                        <tbody class="list-carts">
                            <tr>
                                <th> No. </th>
                                <th> Tên sản phẩm </th>
                                <th> Bảng giá </th>
                                <th style="width: 90px;"> Số lượng mua </th>
                                <th> Đơn giá </th>
                                <th> Thành tiền </th>
                                <th> Xóa </th>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <style>
                    .image-hover {
                        width: 96%
                    }
                </style>
                <script type="text/javascript">
                    $(document).ready(function() {
                        $("#total-cart-index").html($("#total-cart").html());
                        $("#value-total-cart").html($("#total-cart").html());
                        $("#value-total-cart").data("value", $("#total-cart").data('value'));
                        $(".btn-cod").click(function() {
                            $("#cod_payment").trigger('click');
                        });
                        $("#cod_payment").click(function() {
                            $("#cod_code").toggle();
                            if ($(this).is(":checked")) {
                                $("#bill_buy_cod").val("1");
                                var cod = $("#cod-value").data('value');
                                var total = parseInt(cod) + parseInt($("#total-cart").data('value'));
                                $("#total-cart").html(accounting.formatMoney(total, "", 0) + " đ");
                            } else {
                                $("#bill_buy_cod").val("0");
                                $("#total-cart").html(accounting.formatMoney($("#total-cart").data('value'), "", 0) + " đ");
                            }
                        });

                        $(".cart-quantity-change").change(function() {
                            var id = $(this).attr('id');
                            var quantity = $(this).val();
                            var form = jQuery("#update_cart");
                            if (!isNaN(quantity) && quantity != "" && quantity > -1) {
                                $.ajax({
                                    type: "POST",
                                    url: form.attr('action'),
                                    data: {
                                        product_id: id,
                                        quantity: quantity
                                    },
                                    dataType: "script",
                                    success: function() {

                                    }
                                });
                            } else {
                                alert("!!!Error!!!");
                            }
                        });
                    });
                </script>
            </div>
        </div>
        @if (Auth::guest())
        <div style="border:1px solid #DDD;padding:10px;text-align:center">
            Vui lòng
            <a style="margin:0 5px;" class="btn btn-primary" href="/login"><b>Đăng Nhập</b></a> để đặt hàng
        </div>
        @endif
        @if (!Auth::guest())
        <div id="infor_cart" style="margin-top:15px">
            <div class="title-gh">
                Hình thức giao hàng
            </div>
            <div class="method-cart">
                <ul>
                    <li>
                        <input type="radio" name="bill_buy" value="1" checked="checked" id="buy_in_shop">
                        <label for="buy_in_shop">Mua và thanh toán tại cửa hàng</label>
                    </li>
                    <li>
                        <input type="radio" name="bill_buy" value="2" id="buy_in_shop">
                        <label for="express_delivery">Chuyển phát nhanh</label>
                        <span id="express-delivery-value" data-value="37000" style="display:none">
                        37,000  đ
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div style="border:1px solid #DDD;padding:10px;">
            <ul id="list-info">
                <li>
                    <div id="action-cart">
                        <input type="submit" id="btnSubmit" value="Đặt hàng" class="btn btn-primary confirm-order">
                        <input type="button" value="Mua thêm" class="btn btn-warning continue-buy">
                    </div>
                </li>
            </ul>
            <div class="clear"></div>
        </div>

        @endif
        <div class="infor-cart-help">
            <div class="title-gh">
                Trợ giúp
            </div>
            <ul id="help-gh">
                @if ($help = getSetting(App\Enums\SettingType::Help))
                {!!html_entity_decode($help->value)!!}
                @endif
            </ul>
            <div class="clear"></div>
        </div>
    </div>
    @if (Auth::guest())
    <div class="right-sidebar-cart right">
        <div style="background-color:#fff; border:1px solid #ccc; width:96%;float:right">
            <div class="title-gf" style="color:#FFF;padding: 5px 0 5px 10px;background: #3f96cf">
                Đăng Nhập
            </div>
            <div style="padding:1px 0 6px 9px;">
                <form class="new_user" id="new_user" method="POST" action="{{ route('login') }}" accept-charset="UTF-8">
                    @csrf
                    <input name="utf8" type="hidden" value="✓">
                    <input type="hidden" name="authenticity_token" value="Hf0eVFUZ3koyS6UMWnRrFUWPLbC6OMbnTmeGgISGLM6QslQnaCWpp5HPj7GZ0/DDA6ITtgoy6gJlI8n65p8JEA==">
                    <p style="padding:8px 0 0 0; font-weight:bolder;">
                        Email
                    </p>
                    <p>
                        <input value="" style="border:1px solid #DDD; padding:6px;width:90%" type="text" name="email" id="user_email">
                        <input type="hidden" value="/carts" name="path">
                    </p>
                    <p style="padding:8px 0 0 0; font-weight:bolder;">
                        Mật khẩu
                    </p>
                    <p>
                        <input style="border:1px solid #DDD; padding:6px;width:90%" type="password" name="password" id="user_password">
                    </p>

                    <p style="padding:8px 0 0 0px; text-align:left;">
                        <input type="submit" name="commit" value="Đăng Nhập" class="btn btn-primary" data-disable-with="Đăng Nhập">
                    </p>
                    <p style="padding:8px 0 0 0px; text-align:left;"><span id="tool-log"><a href="/account/new_password">Quên mật khẩu?</a> | <a href="/users/new">Đăng Ký</a></span></p>
                </form>
                <div class="clear"></div>
            </div>
        </div>
    </div>
    @endif
    <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content"  style="width: 400px">
            <div class="modal-header title-gf" style="">
                <span class="close">&times;</span>
                <h2 style="font-weight: bolder;
                font-size: 15px;
                color: #fff;"><strong>Xác nhận địa chỉ giao hàng</strong></h2>
            </div>
            <div class="modal-body">
                <table class="tbl-list" cellpadding="0" cellspacing="0" style="width:100%;">
                    <tr>
                        <td><strong>Số điện thoại:</strong> </td>
                    <td>{{ \Auth::user() ? \Auth::user()->phone_number : '' }}</td>
                    </tr>
                    <tr>
                        <td><strong>Địa chỉ giao hàng: </strong></td>
                        <td>{{ \Auth::user() ? \Auth::user()->address : '' }}</td>
                    </tr>
                </table>
            </div>
            <div class="modal-footer">
                <div id="action-cart1" style="margin-top: 20px;">
                    <input type="button" id="update-address" value="Cập nhật địa chỉ" class="btn btn-warning">
                    <input type="button" id="update-confirm-order" value="Xác nhận" class="btn btn-primary" style="float:right">
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
