<?php

use Illuminate\Database\Seeder;

class MailContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $form_data = array(
            'content' =>   "<p><strong>Linhkieniotvn</strong> &nbsp;xin ch&acirc;n th&agrave;nh cảm ơn Qu&yacute; kh&aacute;ch đ&atilde; lựa chọn sản phẩm của ch&uacute;ng t&ocirc;i.<br />
Qu&yacute; kh&aacute;ch c&oacute; thể lựa chọn h&igrave;nh thức thanh to&aacute;n chuyển khoản hoặc h&igrave;nh thức giao h&agrave;ng thanh to&aacute;n(COD).<br />
Nếu chọn h&igrave;nh thức thanh to&aacute;n chuyển khoản, sau khi chuyển khoản Qu&yacute; kh&aacute;ch li&ecirc;n hệ lại với &nbsp;nh&acirc;n vi&ecirc;n Linhkieniotvn, ch&uacute;ng t&ocirc;i sẽ gửi h&agrave;ng ngay cho Qu&yacute; kh&aacute;ch.<br />
C&uacute; ph&aacute;p thanh to&aacute;n:&nbsp;<strong>Họ T&ecirc;n_M&atilde; đơn h&agrave;ng_Ng&agrave;y đặt h&agrave;ng.</strong><br />
&nbsp;</p>",
            'payment' => "<p><strong>Th&ocirc;ng tin thanh to&aacute;n:</strong><br />
T&ecirc;n t&agrave;i khoản: C&ocirc;ng ty cổ phần Esystech.<br />
Số t&agrave;i khoản: 0491000106298<br />
Ng&acirc;n h&agrave;ng Vietcombank &ndash; Chi nh&aacute;nh Thăng Long.<br />
&nbsp;</p>"
  
        );
        DB::table('mails')->where('id', 1)->update($form_data);
    }
}
