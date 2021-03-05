<div class="right-ad">
    @if ($right = getBanner(App\Enums\BannerType::Right))
        <a href="{{ $right->link }}" target="_blank">
            <img alt="{{ $right->alt }}" class="" src="{{ URL::to('/') }}/images/{{ $right->image }}" />
        </a>
    @endif
</div>