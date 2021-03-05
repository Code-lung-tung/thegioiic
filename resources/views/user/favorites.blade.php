@extends('layouts.app')
@section('content')

<div id="wrapper">
  <div id="body">
    @include('layouts.mypage.side_menu')
    <div id="body-right">
      <div class="title-gf">
        Sản phẩm yêu thích
      </div>
      <div class="right-information">
        <table class="tbl-list" cellpadding="0" cellspacing="0">
          <tr>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th class="action">Thao tác</th>
          </tr>
          @foreach ($products as $product)
            <tr id="product_id_{{ $product->id }}">
              <td class="img"><a href="/products/{{ $product->slug }}"><img src="{{ getProductImageUrl($product->id) }}" alt="89" /></a></td>
              <td><a href="/products/{{ $product->slug }}">{{ $product->name }}</a></td>
              <td>
                {{ number_format($product->price) }} đ/{{ unit_product($product->note) }}<br />
                <span class='green'> <span class='bb'>Hàng còn: </span><span class='iv'>{{ $product->quantity }}</span></span>
              </td>
              <td>
                <a data-remote="true" rel="nofollow" data-method="post" href="#" id="{{$product->id}}">
                  <input hidden value="{{ $product->id }}" class="products_id">
                  <img title="Add to cart" src="/images/cart-add-icon.png" alt="Cart add icon" />
                </a>
                <a href="javascript:void(0)" confirm="Are you sure?" id="delete-user" data-id="{{ $product->id }}" class="delete-user"><img title="Delete" src="/images/delete-icon.png" alt="Delete icon" /></a>
              </td>
            </tr>
          @endforeach
        </table>
      </div>

    </div>
    <div class="clear"></div>
  </div>
  <script>
  $(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

   //delete user login
    $('body').on('click', '.delete-user', function () {
        var product_id = $(this).data("id");
        if(confirm("Are You sure want to delete !")) {
 
        $.ajax({
            type: "DELETE",
            url: "{{ url('/favorite')}}"+'/'+product_id,
            success: function (data) {
                $("#product_id_" + product_id).remove();
                $('.flash-message').html(data);
            },
            error: function (data) {
                console.log('Error:', data);
            }
        });
       }
    });   
  });
   
</script>
</div>
@endsection