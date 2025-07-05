'use client';

import Link from 'next/link';
import ProductCard from './ProductCard';
import { ArrowRight, PackageX } from 'lucide-react'; // Impor ikon baru
import { useState } from 'react';

const allProducts = [
  // Electronics
  { category: 'Electronics', imageUrl: 'https://dummyimage.com/400x400/f0f0f0/aaa&text=Macbook', name: 'Macbook Air 13 256GB', brand: 'Apple', price: 935.90, slug: 'macbook-air-13' },
  { category: 'Electronics', imageUrl: 'https://dummyimage.com/400x400/f0f0f0/aaa&text=Earbuds', name: 'Buds 4 Lite Black', brand: 'Xiaomi', price: 41.25, originalPrice: 55.90, slug: 'buds-4-lite' },
  { category: 'Electronics', imageUrl: 'https://dummyimage.com/400x400/f0f0f0/aaa&text=PS5', name: 'PlayStation 5 825GB', brand: 'Sony', price: 684.60, slug: 'playstation-5' },
  { category: 'Electronics', imageUrl: 'https://dummyimage.com/400x400/f0f0f0/aaa&text=Watch', name: 'Galaxy Watch4 40mm', brand: 'Samsung', price: 168.50, slug: 'galaxy-watch-4' },
  // Clothes and shoes
  { category: 'Clothes and shoes', imageUrl: 'https://dummyimage.com/400x400/f0f0f0/aaa&text=Shoes', name: 'Running Shoes X-Pro', brand: 'Nike', price: 120.00, slug: 'running-shoes-x-pro' },
  { category: 'Clothes and shoes', imageUrl: 'https://dummyimage.com/400x400/f0f0f0/aaa&text=Jacket', name: 'Denim Jacket', brand: 'Levi\'s', price: 95.50, slug: 'denim-jacket' },
  // Sports goods
  { category: 'Sports goods', imageUrl: 'https://dummyimage.com/400x400/f0f0f0/aaa&text=Racket', name: 'Tennis Racket Pro', brand: 'Wilson', price: 150.00, slug: 'tennis-racket-pro' },
];

const categories = ["Clothes and shoes", "Electronics", "Sports goods", "Children's goods", "Beauty", "Furniture"];

export default function PopularProducts() {
  const [activeCategory, setActiveCategory] = useState('Electronics');
  const filteredProducts = allProducts.filter(product => product.category === activeCategory);

  return (
    <section className="my-12">
      {/* Baris Judul dan Filter Kategori */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h2 className="text-3xl font-bold">Popular products</h2>
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full border whitespace-nowrap transition-colors duration-200 ${
                activeCategory === category
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* ====================================================== */}
      {/* PERUBAHAN DI SINI: Grid Produk atau Pesan Kosong */}
      {/* ====================================================== */}
      {filteredProducts.length > 0 ? (
        // JIKA PRODUK ADA, tampilkan grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      ) : (
        // JIKA PRODUK TIDAK ADA, tampilkan pesan ini
        <div className="text-center py-20 bg-gray-50 rounded-lg">
          <PackageX className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-semibold text-gray-900">Produk tidak ditemukan</h3>
          <p className="mt-1 text-sm text-gray-500">
            Oops! Produk untuk kategori ini belum tersedia.
          </p>
        </div>
      )}

      {/* Baris Info Tambahan dan Tombol "See All" */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-12">
        <div>
          <p className="font-semibold text-gray-700">1604 trending products</p>
          <p className="text-sm text-gray-500">in 19 categories</p>
        </div>
        <Link href="/produk">
          <button className="bg-orange-500 text-white font-semibold rounded-full px-6 py-3 flex items-center gap-2 hover:bg-orange-600 transition-colors">
            See all
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>
    </section>
  );
}