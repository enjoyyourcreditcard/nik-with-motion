<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use Illuminate\Support\Facades\Auth;

class BerandaController extends Controller
{
    public function beranda() {
        $auth = Auth::user();

        if ($auth != null) {
            if ($auth->aktif == 5) {
                Auth::logout();
            }
        }

        $produk = Produk::with('gambarproduk','kategori_produk')->get();

        foreach ($produk as $item) {
            $item->asset_gambar_produk = asset('storage/image/'.$item->gambarproduk[0]->gambar);
        }

        return view('welcome',compact('produk'));
    }
}
