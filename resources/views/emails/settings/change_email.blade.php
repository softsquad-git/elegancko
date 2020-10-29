Cześć, {{$data['name']}}.
@if($data['type'] == 'new')
    Właśnie ten adres e-mail został podany jako nowy adres do zmiany, jeśli potwierdzasz że ten adres
    należy do Ciebie poniżej podajemy kod potwierdzający
@else
    Właśnie rozpocząłeś zmianę adresu e-mail, kod poniżej
@endif

{{$data['key']}}
