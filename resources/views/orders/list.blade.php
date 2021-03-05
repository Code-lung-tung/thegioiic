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
          Đơn hàng của tôi
        </div>
        <div class="right-information">
            <table class="tbl-list" cellpadding="0" cellspacing="0" style="width:100%;">
                <tbody><tr>
                    <th>No</th>
                    <th>Mã đơn hàng</th>
                    <th>Ngày đặt</th>
                    <th>Tổng tiền</th>
                    <th>Trạng thái</th>
                    <th></th>
                </tr>
                @foreach ($orders as $key => $order)
                <tr id="bill-91194">
                    <td> {{ $key + 1 }} </td>
                <td><a href="/orders/{{ $order->id }}">{{ $order->code }}</a></td>
                    <td style="text-align:left;width:120px"> {{ $order->date_order }} </td>
                    <td style="text-align:right;padding-right:5px">{{ number_format($order->total) }} đ</td>
                    <td style="width:200px">
                        @foreach(config('constants.order_status') as $status => $value)
                            @if ($order->status == $value)
                                {{ $status }}
                            @endif
                        @endforeach
                    </td>
                    <td>
                    <a style="float:left;" href="/orders/{{ $order->id }}"><img title="Show" src="/images/eye-icon-cf87cf9d307c222d2e287ff7abd9ad5aebadcddc6276f6bdac6ed2c7aa544fd6.png" alt="Eye icon"></a>
                        <form action="{{ route('orders.destroy', $order->id)}}" method="post" id="order">
                            @csrf
                            @method('DELETE')
                            <a style="float:left;margin-top:5px;" onclick="document.getElementById('order').submit();"><img title="Delete" src="/images/cross-icon-d04ecfc93ff86c44f6fc39e35945e3d8a7648ba8fcd97a2635920df2e88893b3.png" alt="Cross icon"></a>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
            </table>
            <div class="clear"></div>
            </div>
      </div>
    </div>
  </div>
</div>
@endsection
