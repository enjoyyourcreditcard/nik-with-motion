@extends('layouts.guest.app')

@push('styles')
    <link href="{{ asset('css/guest/beranda/style.css') }}" rel="stylesheet">
@endpush

@section('content')
    <div
        id="beranda-component"
        data-image-kapal="{{ asset('images/kapal.png') }}"
        data-image-antena="{{ asset('images/antena.png') }}"
    ></div>
@endSection
