<div class="report-product" style="margin-top: 10px">
    <div id="other-news">
        <div style="font-weight:bold;border-bottom: 1px solid #DDD;margin-bottom:10px;">
            Các tin khác
        </div>
        <ul>
            @foreach ($related_articles as $article)
            <li>
                <a href="/news-detail/{{ $article->slug }}">{{ $article->title }}</a>
                <div class="clear"></div>
            </li>
            @endforeach
        </ul>
        <div class="pager" style="margin-right:12px;">
          {{ $related_articles->links('pagination.default') }}
        </div>
        <div class="clear"></div>
    </div>
</div>
