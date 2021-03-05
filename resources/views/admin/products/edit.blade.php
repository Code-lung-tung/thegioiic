@extends('adminlte::page')
@section('title', 'Dashboard')
@section('content_header')
<h1>Tạo sản phẩm</h1>
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
<div align="right" class="margin-button">
    <a href="{{ route('admin.products.index') }}" class="btn btn-secondary">Back</a>
</div>

<div class="card">
    <div class="card-body">
        <form method="post" action="{{ route('admin.products.update', $product->id) }}" enctype="multipart/form-data">
            @method('PUT')
            @csrf
            <div class="form-group row">
                <label class="col-sm-2 col-form-label require">Tên sản phẩm</label>
                <div class="col-sm-10">
                    <input type="text" name="name" class="form-control" value="{{ $product->name }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label require">Thương hiệu</label>
                <div class="col-sm-10">
                    <select name="brand_id" class="form-control">
                        @foreach ($brands as $brand)
                        <option {{ $product->brand_id == $brand->id ? 'selected' : '' }} value="{{ $brand->id }}">
                            {{ $brand->name }}
                        </option>
                        @endforeach
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label require">Danh mục</label>
                <div class="col-sm-10">
                    <select name="category_id" class="form-control">
                        @foreach ($categories as $category)
                        <option {{ $product->category_id == $category->id ? 'selected' : '' }} value="{{ $category->id }}">
                            {{ $category->name }}
                        </option>
                        @endforeach
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label require">Miêu tả</label>
                <div class="col-sm-10">
                    <input type="text" name="desc" class="form-control" value="{{ $product->desc }}">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label require">Chi tiết sản phẩm</label>
                <div class="col-sm-10">
                    <textarea name="specification">{{ $product->specification }}</textarea>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label require">Loại ảnh</label>
                <div class="col-sm-10">
                    <select name="image_type" class="form-control" id="image_type">
                        @foreach (config('constants.product_image_type_status') as $image_type => $value)
                        <option {{ $product->image_type == $value ? 'selected' : '' }} value="{{ $value }}">
                            {{ $image_type }}
                        </option>
                        @endforeach
                    </select>
                </div>
            </div>
            <div class="form-group row image_file" id='image_type_0'>
                <label class="col-sm-2 col-form-label">Ảnh</label>
                <div class="col-sm-10">
                    <input type="file" name="image" value="{{ $product->image }}" disabled/>
                    <input type="hidden" name="hidden_image" value="{{ $product->image }}" disabled>
                </div>
            </div>
            <div class="form-group row image_file" id='image_type_1'>
                <label class="col-sm-2 col-form-label require">Đường dẫn ảnh</label>
                <div class="col-sm-10">
                    <input type="input" name="image" class="form-control" value="{{ $product->image }}" disabled/>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label require">Giá cứng(VND)</label>
                <div class="col-sm-10">
                    <input type="input" name="price" class="form-control" value="{{ $product->price }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label require">Đơn vị(Cái/Gói)</label>
                <div class="col-sm-10">
                    <input type="input" name="note" class="form-control" value="{{ $product->note }}" placeholder="Cái/Gói(50pcs)"/>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label require">Số lượng</label>
                <div class="col-sm-10">
                    <input type="input" name="quantity" class="form-control" value="{{ $product->quantity }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Link datasheet</label>
                <div class="col-sm-10">
                    <input type="input" name="datasheet" class="form-control" value="{{ $product->datasheet }}"  />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label require">Slug</label>
                <div class="col-sm-10">
                    <input type="text" name="slug" class="form-control" value="{{ $product->slug }}" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Tiêu đề meta</label>
                <div class="col-sm-10">
                    <input categorie="text" name="meta_title" value="{{ $product->meta_title }}" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Từ khóa meta</label>
                <div class="col-sm-10">
                    <input categorie="text" name="meta_keywords" value="{{ $product->meta_keywords }}" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Miêu tả meta</label>
                <div class="col-sm-10">
                    <input categorie="text" name="meta_description" value="{{ $product->meta_description }}" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <input type="hidden" name="count" value="1" />
                <label class="col-sm-2 col-form-label">Đơn giá</label>
                <div class="col-sm-10" id="fields">
                    @foreach ($product->units as $unit)
                    <div class="row margin-button">
                        <div class="col-sm-3">
                            <input autocomplete="off" value="{{ $unit->number }}" class="form-control" name="number-{{ $unit->id }}" type="number" placeholder="Số lượng">
                        </div>
                        <div class="col-sm-3">
                            <input autocomplete="off" value="{{ $unit->unit_price }}" class="form-control" name="unit-{{ $unit->id }}" type="number" placeholder="Đơn giá(VND)">
                        </div>
                        <div class="col-sm-1">
                            <button id="b1" class="btn btn-primary add-more form-control" type="button">+</button>
                        </div>
                        <div class="col-sm-1">
                            <button id="b1" class="btn btn-danger remove-me form-control" type="button">-</button>
                        </div>
                    </div>
                    @endforeach
                    @if (!count($product->units))
                    <div class="row margin-button">
                        <div class="col-sm-3">
                            <input autocomplete="off" class="form-control" name="number_" type="number" placeholder="Số lượng">
                        </div>
                        <div class="col-sm-3">
                            <input autocomplete="off" class="form-control" name="unit_" type="number" placeholder="Đơn giá(VND)">
                        </div>
                        <div class="col-sm-1">
                            <button id="b1" class="btn btn-primary add-more form-control" type="button">+</button>
                        </div>
                    </div>
                    @endif
                </div>
            </div>
            <div class="form-group text-center">
                <input type="submit" name="add" class="btn btn-primary input-lg" value="Cập nhật" />
            </div>
        </form>
    </div>
</div>
@stop
@section('css')
<link rel="stylesheet" href="/css/admin_custom.css">
@stop
@section('js')
<script src={{ url('js/custom.js') }}></script>
<script src={{ url('ckeditor/ckeditor.js') }}></script>
<script>
    CKEDITOR.replace('specification', {
        filebrowserBrowseUrl: '{{ route('ckfinder_browser') }}',
    });
    $(function() {
        $(document).ready(function() {
            const current_image_type = parseInt($('#image_type').val(), 10);
            $('#image_type_' + current_image_type).show().css("display","flex");
            $('#image_type_' + current_image_type + ' input').attr("disabled", false);
        })

        $('#image_type').change(function() {
            $('.image_file').hide();
            $('#image_type_' + $(this).val()).show().css("display","flex");;
            $('#image_type_' + $(this).val() + ' input').attr("disabled", false);
        });
    });
</script>
@include('ckfinder::setup')
@stop