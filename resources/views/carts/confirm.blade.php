@extends('layouts.app') @section('content')
<div id="body-main" style="margin-top:10px">
    <div>
        <table class="table table-bordered">
            <tr>
                <td>Email:</td>
                <td>{{ $currentUser->email }}</td>
            </tr>
            <tr>
                <td>Số điện thoại:</td>
                <td>{{ $currentUser->phone_number }}</td>
            </tr>
            <tr>
                <td>Địa chỉ giao hàng:</td>
                <td>{{ $currentUser->address }}</td>
            </tr>
        </table>
    </div>
</div>
@endsection

