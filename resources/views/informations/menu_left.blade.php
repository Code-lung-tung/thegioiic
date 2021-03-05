<div class="left-menu">
    <div class="title">
       Thông tin công ty
    </div>
    <ul class="ul-left-page">
        @foreach (getSuggestInformations() as $information)
        <li class="li-information">
            <a href="{{ route('informations.show', ['information' => $information->slug]) }}">{{ $information->title }}</a>
        </li>
        @endforeach
    </ul>
</div>

<style>
    .green a {
        padding: 0 !important;
    }

    .same-by-list {
        max-height: 258px;
        overflow: auto;
        border-bottom: 1px solid #DDD;
        overscroll-behavior: none;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: #666;
    }

    .same-by-list::-webkit-scrollbar {
        width: 6px;
        background: #eee;
    }

    .same-by-list::-webkit-scrollbar-thumb {
        background: #666;
    }
</style>
<div class="left-menu">

    <a target="_blank" href="http://vinasemi.com/"><img alt="" class="" src="https://thegioiic.com/upload/large/10577.jpg"></a>

</div>
