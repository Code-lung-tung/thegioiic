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
            <div class="right-information" style="background: #FFF;">
                    <div style="padding:15px;">
                    <div style="font:bold 13px Arial, Helvetica, sans-serif;">
                        Mã đơn hàng {{ $order->id }}
                    </div>
                    <div>
                        Họ tên: {{ $order->user->name }}
                    </div>
                    <div>
                        Email: {{ $order->user->email }}
                    </div>
                    <div>
                        Phone: {{ $order->user->phone_number }}
                    </div>
                    <div>
                        Địa chỉ: {{ $order->user->address }}
                    </div>
                    <div>
                        Ngày đặt: {{ $order->date_order }}
                    </div>

                    <p> Thông tin đơn hàng</p>

                    <table class="cart" cellpadding="0" cellspacing="0">
                        <tbody><tr>
                            <td style="font-weight:bold;"> No </td>
                            <td style="width:290px; font-weight:bold;">Tên sản phẩm </td>
                            <td style="width:100px;font-weight:bold;text-align:center;">Số lượng mua</td>
                            <td style="width:140px;font-weight:bold;text-align:center;">Đơn giá</td>
                            <td style="width:160px;font-weight:bold;text-align:center;">Tổng tiền</td>
                        </tr>
                        @foreach ($order->products as $item)
                            <tr id="item-377472">
                                <td> {{ $item->id }} </td>
                            <td style=""> <a target="_blank" href="/products/{{ $item->slug }}">{{ $item->name }}</a>
                                </td>
                                <td style=" text-align:right;padding-right:6px">
                                    {{ $item->pivot->quantity }} {{ unit_product($item->note) }}
                                 </td>
                                <td style=" text-align:right;padding-right:6px">
                                {{ $item->pivot->price }}  đ
                                    </td>
                                   @php
                                        $totalItem = ($item->pivot->quantity)*($item->pivot->price)
                                   @endphp
                                <td style=" text-align:right;padding-right:6px"> {{ number_format($totalItem) }}  đ  </td>
                            </tr>
                        @endforeach
                    </tbody></table>
                    <table class="total_bill" style="width:100%">
                        <tbody>
                        <tr>
                            <td style="text-align:right; color:#c30;" colspan="5">Thanh toán</td>
                            <td style="text-align:right;padding-right:4px;" id="total_bill"><span>{{ number_format($order->total) }}  đ </span></td>

                        </tr>
                    </tbody></table>
                    <br>
                    </div>
                </div>
    </div>
  </div>
</div>
@endsection
