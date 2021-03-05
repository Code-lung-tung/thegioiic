@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
<h1>Chỉnh sửa đơn hàng</h1>
@stop
@section('content')
@if($errors->any())
<div class="alert alert-danger">
  <ul>
    @foreach($errors->all() as $error)
    <li>{{ $error }}</li>
    @endforeach
  </ul>
</div>
@endif
<div align="right">
  <a href="{{ route('admin.orders.index') }}" class="btn btn-default">Back</a>
</div>

<div class="card">
  <div class="card-body">
    <form method="post" action="{{ route('admin.orders.update', $order->id) }}" enctype="multipart/form-data">
      @method('PUT')
      @csrf
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Tên người mua</label>
        <div class="col-sm-10">
          <input type="text" name="name" class="form-control" value="{{ $order->user->name }}" disabled />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Email người mua</label>
        <div class="col-sm-10">
          <input type="text" name="email" class="form-control" value="{{ $order->user->email }}" disabled />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Số điện thoại</label>
        <div class="col-sm-10">
          <input type="text" name="email" class="form-control" value="{{ $order->user->phone_number }}" disabled />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Địa chỉ giao hàng</label>
        <div class="col-sm-10">
          <input type="text" name="address" class="form-control" value="{{ $order->user->address }}" disabled />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Mã đặt hàng</label>
        <div class="col-sm-10">
          <input type="text" name="email" class="form-control" value="{{ $order->code }}" disabled />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Ngày đặt đơn</label>
        <div class="col-sm-10">
          <input type="text" name="desc" class="form-control" value="{{ $order->date_order }}" disabled />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Tổng giá trị đơn hàng</label>
        <div class="col-sm-10">
          <input type="text" name="desc" class="form-control" value="{{ $order->total }}" disabled />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Trạng thái</label>
        <div class="col-sm-10">
          <select name="status" class="form-control">
            @foreach(config('constants.order_status') as $status => $value)
            <option {{ $order->status == $value ? 'selected' : '' }} value="{{ $value }}">
              {{ $status }}
            </option>
            @endforeach
          </select>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          Chi tiết đơn hàng
        </div>
        <div class="card-body">
          <table class="cart" cellpadding="0" cellspacing="0">
            <tbody>
                <tr>
                    <td style="font-weight:bold;width:100px;"> No </td>
                    <td style="width:290px; font-weight:bold;">Tên sản phẩm </td>
                    <td style="width:300px;font-weight:bold;">Số lượng mua</td>
                    <td style="width:240px;font-weight:bold;">Đơn giá</td>
                    <td style="width:160px;font-weight:bold;">Thành tiền</td>
                    <td style="width:260px;font-weight:bold;">Số lượng còn lại</td>
                </tr>
                @foreach ($order->products as $item)
              <tr id="item-{{$item->id}}">
                    <td> {{ $item->id }} </td>
                <td style=""> <a target="_blank" href="/products/{{ $item->slug }}">{{ $item->name }}</a>
                    </td>
                    <td style="padding-right:6px">
                        {{ $item->pivot->quantity }} {{ unit_product($item->note) }}
                     </td>
                    <td style="padding-right:6px">
                    {{ $item->pivot->price }}  đ
                        </td>
                       @php
                            $totalItem = ($item->pivot->quantity)*($item->pivot->price)
                       @endphp
                    <td style="padding-right:6px"> {{ number_format($totalItem) }}  đ  </td>
                    <td style="padding-right:6px;"> {{ $item->quantity }} </td>
                </tr>
            @endforeach
            </tbody>
        </table>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          Thêm sản phẩm
        </div>
        <div class="card-body">
          <table class="table" id="products_table">
            <thead>
                <tr>
                    <th>Sản phẩm</th>
                    <th>Số lượng</th>
                </tr>
            </thead>
            <tbody>
              @php ($row_number = 0)
              @foreach ($order->products as $c_product)
                <tr id="product{{$row_number}}">
                  <td>
                      <select name="products[]" class="form-control">
                          <option value="">-- choose product --</option>
                          @foreach ($products as $product)
                              <option value="{{ $product->id }}" {{ $product->id == $c_product->id ? 'selected' : '' }}>
                                  {{ $product->name }} (₫{{ number_format($product->price) }})
                              </option>
                          @endforeach
                      </select>
                  </td>
                  <td>
                      <input type="number" name="quantities[]" class="form-control" value="{{ $c_product->pivot->quantity}}" />
                  </td>
                </tr>
                @php ($row_number++)
              @endforeach
              <tr id="product1"></tr>
            </tbody>
          </table>

<!--           <div class="row">
              <div class="col-md-12">
                  <button id="add_row" class="btn btn-default pull-left">+ Add Row</button>
                  <button id='delete_row' class="pull-right btn btn-danger">- Delete Row</button>
              </div>
          </div> -->
          </div>
      </div>
      <div class="form-group text-center">
        <input type="submit" name="add" class="btn btn-primary input-lg" value="Cập nhật" />
      </div>
    </form>
  </div>
</div>
@stop
@section('js')
<script type="text/javascript" charset="utf-8" async defer>
  $(document).ready(function(){
    let row_number = 1;
    $("#add_row").click(function(e){
      e.preventDefault();
      let new_row_number = row_number - 1;
      $('#product' + row_number).html($('#product' + new_row_number).html()).find('td:first-child');
      $('#products_table').append('');
      row_number++;
    });

    $("#delete_row").click(function(e){
      e.preventDefault();
      if(row_number > 1){
        $("#product" + (row_number - 1)).html('');
        row_number--;
      }
    });
  });
</script>
@stop