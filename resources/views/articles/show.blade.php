@extends('layouts.app') @section('content')
<div class="container-crumb">
    <div class="texttitle sitemaps">
        <a href="/">Trang Chủ</a>
        <a href="/news">Tin tức</a>
        <a href="/news-detail/{{ $article->slug }}">{{ $article->title }}</a>
    </div>
</div>
<div id="body-left">
    @include('articles.menu_left')
</div>
<div id="body-right">
    <div class="middle-page">
        <div style="position:relative;padding-bottom:5px; border: 1px solid #DDD;-moz-border-radius: 8px;-webkit-border-radius: 8px; background-color:#fff; margin-bottom:8px;">
            <div style="position:relative;">
                <h1 style="font-size:14px; font-weight:bolder; padding:10px 0 8px 12px; color:#027AC7; ">
                    {{ $article->title }}
                </h1>
                <span style="padding-left: 11px;" class="date">{{ date('d/m/Y | G:i', strtotime($article->created_at)) }}</span>
                <span class="cmt-count">{{ getTotalReplies($article) }}</span>
                <span class="view-count">{{ $article->view_count }}</span>
            </div>
            <div style="padding:12px 6px 12px 12px;" id="page_content">
                {!!html_entity_decode($article->content)!!}
            </div>
        </div>
        @include('comment_section', ['commentable_object' => $article, 'commentable_type' => 'App\model\Article'])
        @include('articles.related_articles', ['related_articles' => $related_articles])
    </div>
    @include('articles.menu_right')
</div>
@endsection