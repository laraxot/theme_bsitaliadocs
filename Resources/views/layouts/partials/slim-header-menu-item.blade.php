<li>
    @php
    //if(!isset($item['text'])){
    //dddx($item);
    //}
    @endphp
    <a href="{{ $item['href'] }}"
        {{ $item['target'] ?? false ? 'target="' . $item['target'] . '"' : '' }}>{{ $item['text'] ?? 'no-set' }}
    </a>
</li>
