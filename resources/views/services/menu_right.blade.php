<div class="right-page">
    <div class="right-forums-item">
        <div class="rdetails">
            @include('news_search_form')
        </div>
    </div>
    <div class="right-menu">
        @foreach (getSuggestArticleCategories() as $category)
        <div class="title">{{ $category->name }}</div>
        <ul class="ul-left-page">
            @foreach ($category->articles as $article)
            <li>
                <a href="/news-detail/{{ $article->slug }}">{{ $article->title }}</a>
            </li>
            @endforeach
        </ul>
        @endforeach
    </div>

    @include('right_banner')

</div>