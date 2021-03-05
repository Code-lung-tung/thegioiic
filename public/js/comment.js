$(function () {
    $('.js-commentsContainer').on('click', '.js-replyBtn', function(e) {
        e.preventDefault()
        const target = $(this).data('target')
        const commentId = $(this).data('comment-id')
        if ($(target).children().length === 0) {
            const $replyForm = $('.js-formReply form').clone()
            $replyForm.find('input[name=comment_id]').val(commentId)
            $(target).append($replyForm);
        }
    })

    $('.js-commentsContainer').on('click', '.js-reply-submitBtn', function (e) {
        e.preventDefault()
        $content = $(this).parent().find('[name="content"]')
        if ($content.val().trim() === '') {
            $content.addClass('input-errors')
        } else {
            $(this).parent().submit()
        }
    })

    $('.js-commentsContainer').on('click', '.js-openLoginDialog', function (e) {
        e.preventDefault()
        $('#login_dialog').show()
    })
})