<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\model\Comment;
use App\model\Reply;

class CommentController extends Controller
{
    public function store(Request $request)
    {   
        $request->validate([
            'content' => 'required',
            'commentable_id' => 'required',
            'commentable_type' => 'required',
            'captcha' => 'required|captcha'
        ]);

        $comment = new Comment;
        $comment->content = $request->content;
        $comment->commentable_id = $request->commentable_id;
        $comment->commentable_type = $request->commentable_type;
        $comment->user_id = Auth::user()->id;
        $comment->save();

        return redirect()->back();
    }

    public function reply(Request $request)
    {
        $request->validate([
            'content' => 'required',
            'comment_id' => 'required'
        ]);

        $reply = new Reply;
        $reply->content = $request->content;
        $reply->comment_id = $request->comment_id;
        $reply->user_id = Auth::user()->id;
        $reply->save();

        return redirect()->back();
    }
}
