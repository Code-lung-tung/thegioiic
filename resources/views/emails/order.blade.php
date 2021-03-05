<div class="">
    <div class="aHl"></div>
    <div id=":pf" tabindex="-1"></div>
    <div id=":o1" class="ii gt">
        <div id=":o2" class="a3s aXjCH ">
            <u></u>
            <div>
                <div style="font-size:16px">Xin chào khách <span class="il">hàng</span> 
                    {{ $order->user->name }}.
                </div>
            <div>Mã đơn <span class="il">hàng</span>: {{ $order->code }}</div>
                <div style="padding:0;clear:both">
                     {!! App\model\Mail::find(1)->content !!}
                </div>
                <div style="padding:0;margin:5px 0;font-weight:bolder">
                    Danh Sách Sản Phẩm
                </div>
                <table border="1">
                    <tbody>
                        <tr>
                            <td>
                                No.
                            </td>
                            <td style="width:290px;font-weight:bold">
                                Sản phẩm
                            </td>
                            <td style="width:100px;font-weight:bold;text-align:center">
                                Số lượng mua
                            </td>
                            <td style="width:140px;font-weight:bold;text-align:center">
                                Đơn giá
                            </td>
                            <td style="width:160px;font-weight:bold;text-align:center">
                                Thành tiền
                            </td>
                            <td style="width:80px;font-weight:bold;text-align:center">
                                Tồn kho
                            </td>
                        </tr>
                        @foreach ($order->products as $key => $item)
                        <tr>
                            <td>
                                {{ $key + 1 }}
                            </td>
                            <td>
                            <a style="text-decoration:none" href="{{ URL::to('/products/').'/'.$item->slug }}" target="_blank" >{{ $item->name }}</a>
                            </td>
                            <td style="text-align:right;padding-right:6px">
                                {{ $item->pivot->quantity}}  {{ $item->note }}
                            </td>
                            <td style="text-align:right;padding-right:6px">
                                {{ number_format($item->pivot->price) }}  đ 
                            </td>
                            <td style="text-align:right;padding-right:6px">
                               {{ number_format($item->pivot->quantity*$item->pivot->price) }}  đ 
                            </td>
                            <td style="text-align:right;padding-right:6px">
                                {{ $item->quantity }}
                            </td>
                        </tr>
                        @endforeach
                        <tr>
                            <td></td>
                            <td colspan="3" style="color:#c30;text-align:right;padding-right:6px">Tổng tiền</td>
                            <td style="text-align:right;padding-right:6px"> {{ total_money_of_products($order->products) }}  đ </td>
                        </tr>
                    </tbody>
                </table>
               {!! App\model\Mail::find(1)->payment !!}
            </div>
            <p style="font-weight:bolder;color:#c30;padding:20px;clear:both;border-top:2px solid #09c">
            </p>
            <p><a title="Nhà phân phối linh kiện điện tử" href="http://linhkieniotvn.com/" target="_blank">Nhà phân phối linh kiện điện tử</a></p>
            <div class="yj6qo"></div>
            <div class="adL">
                <p></p>
            </div>
        </div>
    </div>
    <div id=":pa" class="ii gt" style="display:none">
        <div id=":pb" class="a3s aXjCH undefined"></div>
    </div>
    <div class="hi"></div>
</div>