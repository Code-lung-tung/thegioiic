<div id="footer-info" style="position:relative;">
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td valign="top">
                    <div id="mnf-phone">
                        @if ($tel = getSetting(App\Enums\SettingType::Tel))
                        {!!strip_tags($tel->value)!!}
                        @endif
                    </div>
                    {{-- <div class="textbody_black mnf-contact">
                        <a class="textbody_black" href="https://thegioiic.com/lien-he">
                            <b>
								<span style="background:transparent url('/images/pointer.png') no-repeat scroll 0 7px; padding-left:25px;display:block">
									Bản đồ
								</span>
							</b>
                        </a>
                    </div> --}}
                    {{-- <div class="textbody_black mnf-help">
                        <a class="textbody_black" href="https://thegioiic.com/information/chinh-sach-quy-dinh">
                            <b>
								<span style="background:transparent url('/images/help.png') no-repeat scroll 0 7px; padding-left:25px;display:block">
									Trợ giúp
								</span>
							</b>
                        </a>
                    </div>
                    <div class="textbody_black mnf-bh">
                        <a class="textbody_black" href="https://thegioiic.com/pages/quy-dinh-bao-hanh">
                            <b>
								<span style="background:transparent url('/images/warn.png') no-repeat scroll 0 7px; padding-left:25px;display:block">
									Bảo hành
								</span>
							</b>
                        </a>
                    </div>
                    <div class="textbody_black mnf-mail">
                        <a class="textbody_black" href="mailto:info@thegioiic.com">
                            <b>
								<span style="background:transparent url('/images/mail.png') no-repeat scroll 0 0; padding-left:25px;">
									Email
								</span>
							</b>
                        </a>
                    </div>
                    <div class="mnf-social">
                        <div class="left">
                            <a target="_blank" href="https://www.facebook.com/Thegioiic/">
                                <img width="24" height="24" border="0" style="margin:6px 0 0 5px;" alt="" src="/images/facebook-s.png">
                            </a>
                        </div>
                        <div class="left">
                            <a target="_blank" href="https://twitter.com/#!/thegioiic">
                                <img width="24" height="24" border="0" style="margin:6px 0 0 5px;" alt="" src="/images/twitter-s.png">
                            </a>
                        </div>
                        <div class="left">
                            <a target="_blank" href="https://www.youtube.com/user/Thegioiic">
                                <img width="24" height="24" border="0" style="margin:6px 0 0 5px;" alt="" src="/images/youtube-s.png">
                            </a>
                        </div>
                        <div class="left view-device">
                            <a href="https://thegioiic.com?mobile=1">
                                <span class="view-desktop"><img src="/images/phone-24.png" style="margin: 10px 0 0 10px;"></span>
                            </a>
                        </div>
                        <div class="clear"></div>
                    </div> --}}
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div id="footer-new">
    <div class="info-com first-com">
        @if ($address = getSetting(App\Enums\SettingType::Address))
        {!!html_entity_decode($address->value)!!}
        @endif
    </div>
    <div class="info-com two-com f-com">
        <ul>
            <li class="title">
                @if ( $category = getInformationCategory(1) )
                    {{ $category->name }}
                @else
                    Thông tin công ty
                @endif
            </li>
            @foreach ( getInformations(1) as $information)
            <li>
                <a href="{{ route('informations.show', ['information' => $information->slug]) }}">{{ $information->title }}</a>
            </li>
            @endforeach
        </ul>
    </div>
    <div class="info-com two-com f-com">
        <ul>
            <li class="title">
                @if ( $category = getInformationCategory(2) )
                    {{ $category->name }}
                @else
                    Dịch vụ bán hàng
                @endif
            </li>
            @foreach ( getInformations(2) as $information)
            <li>
                <a href="{{ route('informations.show', ['information' => $information->slug]) }}">{{ $information->title }}</a>
            </li>
            @endforeach
        </ul>
    </div>
    <div class="info-com two-com f-com">
        <ul>
            <li class="title">
                @if ( $category = getInformationCategory(3) )
                    {{ $category->name }}
                @else
                    Chính sách công ty
                @endif
            </li>
            @foreach ( getInformations(3) as $information)
            <li>
                <a href="{{ route('informations.show', ['information' => $information->slug]) }}">{{ $information->title }}</a>
            </li>
            @endforeach
        </ul>
    </div>
    {{--
    <div class="info-com two-com f-com">
        <ul>
            <li class="title">
                @if ( $category = getInformationCategory(3) )
                    {{ $category->name }}
                @else
                    Hỗ trợ Khách hàng
                @endif
            </li>
            @foreach ( getInformations(4) as $information)
            <li>
                <a href="{{ route('informations.show', ['information' => $information->slug]) }}">{{ $information->title }}</a>
            </li>
            @endforeach
        </ul>
    </div> --}}

    <div class="clear"></div>
</div>

