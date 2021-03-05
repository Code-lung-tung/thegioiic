<div class="left-menu">
    <div class="title">
        Tin tức
    </div>
    <ul class="ul-left-page">
        @foreach (getArticleCategories() as $category)
        <li>
            <a class="parent" href="/news/{{ $category->slug }}">{{ $category->name }}</a>
        </li>
        @endforeach
    </ul>
</div>
@include('left_banner')
