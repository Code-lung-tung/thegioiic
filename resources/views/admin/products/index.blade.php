@extends('adminlte::page')
@section('title', 'Danh sách sản phẩm')
@section('content_header')
<h1>Danh sách sản phẩm</h1>
@stop
@section('content')
@error('excel_file')
    <div class="alert alert-danger">
        {{ $message }}
    </div>
@enderror
<div class="card">
    <div class="card-header">
        <div class="row">
            <form action="{{ route('admin.products.index') }}" method="GET" class="col-sm-5">
                <div class="input-group">
                    <input type="text" name="search" class="form-control" placeholder="Tìm kiếm">
                    <div class="input-group-append_btn">
                        <button type="submit" class="btn btn-secondary" type="button">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
            <div class="margin-button col-sm-7">
                <a href="{{ route('admin.products.create') }}" class="btn btn-primary float-right">Thêm mới</a>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div>
                    <form action="{{ route('admin.products.import') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="excel_upload" name='excel_file'>
                            <label class="custom-file-label" for="excel_upload">Chọn file</label>

                            <small id="fileHelp" class="form-text text-muted">Hãy upload file excel theo mẫu sau:
                                <a href="{{ route('admin.products.download.example') }}">Tải về</a>
                            </small>
                        </div>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="submit" id="inputGroupFileAddon04">Upload file excel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="card-body">
        @include('admin.layouts.alert_section')
        <table class="table table-striped">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Tên sản phẩm</td>
                    <td>Mã sản phẩm</td>
                    <td>Miêu tả</td>
                    <td>Hình ảnh</td>
                </tr>
            </thead>
            <tbody>
                @foreach($products as $product)
                <tr>
                    <td>{{ $product->id }}</td>
                    <td>{{ $product->name }}</td>
                    <td>{{ $product->code }}</td>
                    <td>{!! Str::words(strip_tags($product->desc), 30, '...') !!}</td>
                    <td><img src="{{ getProductImageUrl($product->id) }}" class="img-thumbnail" width="75" /></td>
                    <td>
                        <a href="{{ route('admin.products.edit',$product->id) }}" class="btn btn-primary">Edit</a>
                    </td>
                    <td>
                        <form action="{{ route('admin.products.destroy', $product->id)}}" method="post">
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
        {{ $products->links() }}
    </div>
</div>
@stop
@section('css')
<link rel="stylesheet" href="/css/admin_custom.css">

@stop
@section('js')
<script>
    document.querySelector('.custom-file-input').addEventListener('change',function(e){
      var fileName = document.getElementById("excel_upload").files[0].name;
      var nextSibling = e.target.nextElementSibling
      nextSibling.innerText = fileName
    })
</script>
@stop