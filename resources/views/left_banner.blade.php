<div class="left-menu">
    @if ($left = getBanner(App\Enums\BannerType::Left))
        <a href="{{ $left->link }}" target="_blank">
            <img alt="{{ $left->alt }}" class="" src="{{ URL::to('/') }}/images/{{ $left->image }}" />
        </a>
    @endif
</div>
