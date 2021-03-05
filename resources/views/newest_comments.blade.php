<div class="title">
    Phản hồi mới
</div>
<div id="product-report">
    <div class="ablack">
        <ul class="g" style="border:1px solid #DDD;border-bottom:none">
            @foreach (getNewestComments() as $comment)
            <li class="item-forum-content" style="border-bottom:1px solid #DDD">
                <div class="content-forum left" style="width:100%;padding-left:3px">
                    <a href="/products/{{ $comment->commentable->slug }}">{{ $comment->commentable->name }}</a>
                    <span style="padding-left:5px;font-size:11px"> {{ date('(G:i - d/m/Y)', strtotime($comment->created_at)) }} </span>
                </div>
                <div class="left cc" style="width:100%;">
                    <div class="forum-user-avatar left">
                        <a href="/users/{{ $comment->user->id }}"><span class="noavatarname">{{ firstCharacterOfName($comment->user->name) }}</span></a>

                        <div class="clear"></div>
                    </div>
                    <div style="position:relative;top:5px;float:left">
                        <a href="/users/{{ $comment->user->id }}">{{ $comment->user->name }}</a>
                    </div>
                </div>
            </li>
            @endforeach
            <div class="clear"></div>
        </ul>
        <div class="clear"></div>
    </div>
    <style>
        ul.g li {
            margin-bottom: 0 !important
        }

        .cc .noavatarname {
            top: 1px;
            padding: 3px 7px;
            margin-bottom: 2px;
            display: block;
            text-align: center;
        }

        .content-forum a {
            padding-bottom: 1px !important
        }

    </style>
</div>
