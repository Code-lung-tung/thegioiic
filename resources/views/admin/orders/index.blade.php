@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
<h1>Danh sách đơn hàng</h1>
@stop
@section('content')
<div class="card">
    <div class="card-body">
        @include('admin.layouts.alert_section')
        <table class="table table-striped">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Tên người mua</td>
                    <td>Mã đặt hàng</td>
                    <td>Ngày đặt đơn</td>
                    <td>Tổng giá trị</td>
                    <td>Lưu ý</td>
                    <td>Trạng thái</td>
                </tr>
            </thead>
            <tbody>
                @foreach($orders as $order)
                <tr>
                    <td>{{$order->id}}</td>
                    <td>{{$order->user->name}}</td>
                    <td>{{$order->code}}</td>
                    <td>{{$order->date_order}}</td>
                    <td>₫{{ number_format($order->total)}}</td>
                    <td>{{$order->note}}</td>
                    <td>
                        @foreach(config('constants.order_status') as $status => $value)
                            @if ($order->status == $value)
                                {{ $status }}
                            @endif
                        @endforeach
                    </td>
                    <td>
                        <a href="{{ route('admin.orders.edit',$order->id) }}" class="btn btn-primary">Edit</a>
                    </td>
                    <td>
                        <form action="{{ route('admin.orders.destroy', $order->id)}}" method="post">
                            @csrf
                            @method('DELETE')
                            <button class="btn btn-danger" type="submit">Delete</button>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
         <br>
        {{ $orders->links() }}
    </div>
</div>
@stop
@section('css')
<link rel="stylesheet" href="/css/admin_custom.css">
@stop
@section('js')
<script>
    console.log('Hi!');
</script>
@stop
