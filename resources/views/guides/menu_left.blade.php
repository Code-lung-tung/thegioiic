<div class="left-menu">
    <div class="title">
        Hướng dẫn
    </div>
    <ul class="ul-left-page">
        @foreach (getSuggestServices() as $service)
        <li class="li-service">
            <a href="{{ route('services.show', ['service' => $service->slug]) }}">{{ $service->title }}</a>
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
@include('left_banner')
