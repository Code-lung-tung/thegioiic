<div class="report-product js-commentsContainer" style="position: relative">

    <div class="rp-user">
        <div class="title-rp">
            <div class="tt-rp">
                <b class="blue">Phản hồi ({{ count($commentable_object->comments) }})</b>
            </div>
        </div>
        @foreach ($commentable_object->comments as $comment)
        <div class="rplist">
            <div class="list-rp">
                <div class="cm-rp">
                    <div class="content-rp" style="color:#252525 !important;">
                        {!!html_entity_decode($comment->content)!!}
                    </div>
                </div>
                <div class="img-rp" style="width: 100%;">
                    <div class="avatar-report">
                        <a href="#">
                            <span class="noavatarname">{{ firstCharacterOfName($comment->user->name) }}</span>
                        </a>

                    </div>
                    <div class="name-rp" style="line-height: 2.2;">
                        <b>
                            <a href="#">
                                <em class="Highlight"
                                    style="padding: 1px; box-shadow: rgb(229, 229, 229) 1px 1px; border-radius: 3px; -webkit-print-color-adjust: exact; background-color: rgb(255, 255, 102); color: rgb(0, 0, 0); font-style: inherit;">
                                    {{ $comment->user->name }}
                                </em>
                            </a>
                        </b>
                        {{ date('(G:i - d/m/Y)', strtotime($comment->created_at)) }}
                    </div>

                    <div class="reply" style="float: right; padding-right: 5px; line-height: 2.2;">
                        <a href="javascript:" class="btn-reply-report {{ Auth::user() ? 'js-replyBtn' : 'js-openLoginDialog' }}" data-target="#js-replyBox-{{ $comment->id }}" data-comment-id="{{ $comment->id }}">Trả
                            lời</a>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="reply-box" id="js-replyBox-{{ $comment->id }}">
                    
                </div>
                <div class="reply-container" style="width: 90%; float: right;" data-start="2" data-url="/comments/get/?parent_id=984" data-count="1">
                    @foreach ($comment->replies as $reply)
                    <div id="reply-container-984" class="reply-item">
                        <div class="list-rp">
                            <div class="cm-rp">
                                <div class="content-rp" style="color:#252525 !important;">
                                {!!html_entity_decode($reply->content)!!}
                                </div>
                            </div>
                            <div class="img-rp" style="width: 100%;">
                                <div class="avatar-report">
                                    <a href="#">
                                        <span class="noavatarname">{{ firstCharacterOfName($reply->user->name) }}</span>
                                    </a>

                                </div>
                                <div class="name-rp" style="line-height: 2.2;">
                                    <b>
                                        <a href="#">
                                            <em class="Highlight"
                                                style="padding: 1px; box-shadow: rgb(229, 229, 229) 1px 1px; border-radius: 3px; -webkit-print-color-adjust: exact; background-color: rgb(255, 255, 102); color: rgb(0, 0, 0); font-style: inherit;">
                                                {{ $comment->user->name }}
                                            </em>
                                        </a>
                                    </b>
                                    {{ date('(G:i - d/m/Y)', strtotime($reply->created_at)) }}
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                    @endforeach
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <div class="clear"></div>
        @endforeach
    </div>
    <form class="form-comment" id="new_comment" action="{{ route('comments.store') }}" accept-charset="UTF-8"
        method="post">
        @csrf
        <input name="utf8" type="hidden" value="✓">
        <input value="{{ $commentable_type }}" type="hidden" name="commentable_type" id="commentable_type">
        <input value="{{ $commentable_object->id }}" type="hidden" name="commentable_id" id="commentable_id">
        <div class="form-report-product">
            <textarea class="text-change {{ $errors && count($errors->get('content')) > 0 ? 'input-errors' : '' }}" 
                placeholder="Nhập nội dung" name="content"
                id="content" style="width: 98%;">{{ old('content') }}</textarea>
            <div id="captcha">
                <p style="position:relative;">
                    <input type="text" placeholder="Mã xác nhận" class="captcha-inputs {{ $errors && count($errors->get('captcha')) > 0 ? 'input-errors' : '' }}" name="captcha"
                        id="input_captcha_valid" value="" style="width: 84px; float: left; margin-top: 2px; margin-right: 10px;">
                    {!! captcha_img('flat') !!}
                </p>
            </div>
            @if(Auth::user())
            <div style="padding-top: 8px">
                <input type="submit" value="Đăng" class="btn btn-primary">
            </div>
            @else
            <div style="padding-top: 8px">
                <a class="hover" href="{{ route('login') }}"><b>Đăng Nhập</b></a>  hoặc  <a class="hover" href="{{ route('register') }}"><b>Đăng ký</b></a> để chia sẻ.
        </div>
            @endif
        </div>
    </form>

    @if(Auth::user())
    <div class="js-formReply" style="display: none;">
        <form class="form-reply" action="{{ route('comments.reply') }}" accept-charset="UTF-8" method="post">
            @csrf
            <textarea name="content" placeholder="Nhập nội dung" style="width: 87%; padding: 1%; float: left; font-size: 13px; font-family: inherit;"></textarea>
            <input type="hidden" name="comment_id">
            <button type="submit" class="js-reply-submitBtn" style="width: 10%; float: right; height: 42px;">
                Trả lời
            </button>
        </form>
    </div>
    @endif
</div>
