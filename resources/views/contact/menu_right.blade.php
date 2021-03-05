<div class="middle-page">
    <div class="texttitle sitemaps">
        <a href="/">Trang Chủ</a>
        <a href="javascript:">Liên hệ</a>
    </div>
    <div style="border: 1px solid #DDD;-moz-border-radius: 8px;-webkit-border-radius: 8px; background-color:#fff; padding:18px 6px 8px 6px;">
        <div>
            © THEGIOIIC.COM


            <p>939/1A Kha Vạn Cân, Linh Tây, Thủ Đức, HCM</p>

            <p>
                Điện thoại: (28)3896.8699
            </p>

            <p>Email: info@thegioiic.com. Skype ID: giaolo, thegioiic</p>
        </div>
        <div style="width:100%">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.3570058945597!2d106.75837111428763!3d10.860427660608556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175277068982597%3A0xaa699df27cfcdee4!2sThegioiic!5e0!3m2!1svi!2s!4v1571234729782!5m2!1svi!2s"
                width="520" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
    </div>

</div>
<div class="right-page">
    <div class="right-forums-item">
        <div class="rdetails">
            <div id="form-search-forum">
                <form action="/news" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="✓">
                    <input type="text" name="q" placeholder="Tìm kiếm tin tức" class="input-forum-search">
                    <input type="submit" name="commit" value="" class="btn-forum-search" data-disable-with="">
                </form>
            </div>
        </div>
    </div>
    <div class="right-menu">
        <div class="title">Dịch vụ</div>
        <ul class="ul-left-page">
            <li>
                <a class="tip-service" href="/services/gia-cong-cac-loai-day-bus-va-day-cap">Gia công các loại dây bus và dây cáp</a>
            </li>
            <li>
                <a class="tip-service" href="/services/gia-cong-pcb-va-pcba-voi-cong-nghe-smt-tien-tien">Gia công PCB và PCBA với công nghệ SMT tiên tiến</a>
            </li>
            <li>
                <a class="tip-service" href="/services/phan-phoi-linh-kien-dien-tu-va-thiet-bi-dien-tu">Phân phối linh kiện điện tử và thiết bị điện tử</a>
            </li>
            <li>
                <a class="tip-service" href="/services/thiet-ke-mach-dien-tu-he-thong-nhung-hardware-development-for-embedded-systems">Thiết kế mạch điện tử</a>
            </li>
        </ul>
    </div>

    @include('right_banner')

</div>
<script type="text/javascript">
    function checkForm(event) {
        var capt_value = $("#captcha_valid").val().toUpperCase();
        if (trim($("#comment_name").val()) == "") {
            $("#comment_name").addClass('input-errors');
            event.preventDefault();
            return false;
        } else if (echeck(trim($("#comment_email").val())) == "") {
            $("#comment_email").addClass('input-errors');
            event.preventDefault();
            return false;
        } else if (trim($("#comment_title").val()) == "" || trim($("#comment_title").val()) == "Tiêu đề") {
            $("#comment_title").addClass('input-errors');
            event.preventDefault();
            return false;
        } else if (trim($("#comment_content").val()) == "" || trim($("#comment_content").val()) == "ý kiến của bạn") {
            $("#comment_content").addClass('input-errors');
            event.preventDefault();
            return false;
        } else if (trim($("#input_captcha_valid").val()).toUpperCase() != trim(capt_value)) {
            $("#input_captcha_valid").addClass('input-errors');
            event.preventDefault();
            return false;
        } else {
            return true;
        }
    }
</script>