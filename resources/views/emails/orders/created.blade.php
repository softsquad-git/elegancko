@extends('layouts.email')
@section('content')
    <div class="email-container">
        <div class="card">
            <div class="card-header">
                {{ trans('mail.welcome') }}, {{ $content['order']->getFullName() }}
            </div>
            <div class="card-body">
                <p>{{ trans('mail.orders.content') }}</p>
                <h3>{{ trans('mail.orders.products') }}</h3>
                <div class="mail-order-products">
                    <table class="table">
                        <thead>
                        <tr>
                            <th class="text-left" scope="col">L.p</th>
                            <th class="text-left" scope="col">Zdjęcie</th>
                            <th class="text-left" scope="col">Tytuł</th>
                            <th class="text-left" scope="col">Rozmiar</th>
                            <th class="text-left" scope="col">Color</th>
                            <th class="text-left" scope="col">Ilość</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($content['order']->products as $key => $product)
                            <tr>
                                <th scope="row">{{ $key + 1 }}</th>
                                <td><img src="{{ Images::find($product->product_id, \App\Services\Products\ProductService::RESOURCE_TYPE) }}" alt="{{ $product->product->title }}" width="100"/> </td>
                                <td>{{ $product->product->title }}</td>
                                <td>{{ $product->size->name }}</td>
                                <td>{{ $product->color->name }}</td>
                                <td>{{ $product->quantity }}</td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
                <div style="margin: 20px auto 20px" class="text-center">
                    <a href="{{ config('app.url') }}/order/pay/{{ $content['order']->token }}" target="_blank">{{ trans('mail.orders.select_payment') }}</a>
                    <p class="p-info">
                        {{ trans('mail.orders.no_selected_payment_i') }}
                    </p>
                </div>
                <h3>{{ trans('mail.orders.details') }}</h3>
                <div class="info">
                    <table class="table">
                        <thead>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{{ trans('mail.orders.info.price') }}</td>
                            <td>{{ number_format($content['order']->total_price, 2)  }}</td>
                        </tr>
                        <tr>
                            <td>{{ trans('mail.orders.info.shipment') }}</td>
                            <td>{{ $content['order']->shipment->name }}</td>
                        </tr>
                        <tr>
                            <td>{{ trans('mail.orders.info.address') }}</td>
                            <td>{{ $content['order']->getAddress() }}</td>
                        </tr>
                        <tr>
                            <td>{{ trans('mail.orders.info.phone') }}</td>
                            <td>{{ $content['order']->number_phone }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection
