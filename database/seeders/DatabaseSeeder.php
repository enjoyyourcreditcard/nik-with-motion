<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Produk;
use App\Models\KategoriProduk;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        KategoriProduk::create([
            'kategori' => 'Laptop',
        ]);

        KategoriProduk::create([
            'kategori' => 'Camera',
        ]);

        Produk::create([
            'nama' => 'DELL XPS 15',
            'kategori_produk_id' => 1,
            'deskripsi' => 'An office laptop',
        ]);

        Produk::create([
            'nama' => 'Sony DSC-WX500',
            'kategori_produk_id' => 1,
            'deskripsi' => 'An office laptop',
        ]);
    }
}
