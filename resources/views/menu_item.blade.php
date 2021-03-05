<ul>
    @foreach ( getTypes() as $type )
        <li class="root">
            <a href="/product/{{$type->slug}}">{{ $type->name }}</a>
            <ul class="ddsubmenustyle blackwhite" style="min-height: 545px; top: -1000px; left: -500px; visibility: hidden; z-index: -1;">
                <span class="titleul">{{ $type->name }}</span>
                @foreach ($type->categories as $category)
                <li class="click">
                    <span class="spana">{{ $category->name }}</span>
                    <ul style="min-height: 545px; top: -1000px; left: -500px; visibility: hidden; z-index: -1;">
                        <span class="titleul crumb">
                                <span class="background-crumb-menu">{{ $type->name }}</span>
                        <span>{{ $category->name }}</span>
                        </span>
                        <span class="close"></span>
                        <li>
                            <a href="/product/{{ $category->slug }}" class="a3"> {{ $category->name }}
                                    <span class="n3">({{ count($category->products) }})</span>
                                    </a>
                        </li>
                    </ul>
                </li>
                @endforeach
            </ul>
        </li>
    @endforeach
</ul>
