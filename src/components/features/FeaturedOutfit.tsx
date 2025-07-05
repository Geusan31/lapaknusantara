'use client'; // WAJIB: Menandakan ini adalah Client Component karena menggunakan state dan interaksi

import Image from 'next/image';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// 1. Struktur data baru untuk setiap "look" atau "outfit"
// Setiap objek berisi gambar model dan 2 produk yang berkaitan
const outfits = [
    {
        modelImageUrl: 'https://dummyimage.com/600x800/e0e0e0/aaa&text=Model+1',
        products: [
            { imageUrl: 'https://dummyimage.com/400x400/f0f0f0/aaa&text=Jacket', name: 'Half zip pannel windbreaker', brand: 'Mahagrid', price: 71.30, slug: 'windbreaker-1' },
            { imageUrl: 'https://dummyimage.com/400x400/f0f0f0/aaa&text=Pants', name: 'Utility pants', brand: 'Mahagrid', price: 75.80, slug: 'utility-pants-1' },
        ]
    },
    {
        modelImageUrl: 'https://dummyimage.com/600x800/d9d9d9/999&text=Model+2',
        products: [
            { imageUrl: 'https://dummyimage.com/400x400/f0f0f0/aaa&text=Shirt', name: 'Linen Oversized Shirt', brand: 'Casual Co.', price: 55.00, slug: 'shirt-2' },
            { imageUrl: 'https://dummyimage.com/400x400/f0f0f0/aaa&text=Shorts', name: 'Cargo Tech Shorts', brand: 'Casual Co.', price: 45.50, slug: 'shorts-2' },
        ]
    },
    {
        modelImageUrl: 'https://dummyimage.com/600x800/cccccc/888&text=Model+3',
        products: [
            { imageUrl: 'https://dummyimage.com/400x400/f0f0f0/aaa&text=Hoodie', name: 'Heavyweight Hoodie', brand: 'Urban Threads', price: 89.90, slug: 'hoodie-3' },
            { imageUrl: 'https://dummyimage.com/400x400/f0f0f0/aaa&text=Jeans', name: 'Relaxed Fit Jeans', brand: 'Urban Threads', price: 79.00, slug: 'jeans-3' },
        ]
    },
];

export default function FeaturedOutfit() {
    // 2. State untuk melacak slide mana yang sedang aktif (dimulai dari indeks 0)
    const [currentIndex, setCurrentIndex] = useState(0);

    // 3. Fungsi untuk navigasi ke slide berikutnya
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % outfits.length);
    };

    // 4. Fungsi untuk navigasi ke slide sebelumnya
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + outfits.length) % outfits.length);
    };

    return (
        <section className="my-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Banner Kiri (Model) */}
                <div className="relative w-full h-[800px] rounded-2xl overflow-hidden bg-gray-100">
                    {/* 5. Hubungkan gambar model dengan data dinamis berdasarkan state */}
                    <Image
                        src={outfits[currentIndex].modelImageUrl}
                        alt="Featured Outfit Model"
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out"
                        key={currentIndex} // Menambahkan key agar Next.js me-render ulang gambar saat src berubah
                    />
                </div>

                {/* Kolom Kanan */}
                <div className="flex flex-col gap-8">
                    {/* Grid untuk 2 Produk */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* 6. Hubungkan ProductCard dengan data dinamis berdasarkan state */}
                        <ProductCard {...outfits[currentIndex].products[0]} />
                        <ProductCard {...outfits[currentIndex].products[1]} />
                    </div>

                    {/* Info Koleksi & Tombol Navigasi */}
                    <div className="flex-grow flex flex-col justify-center items-center text-center lg:text-left lg:items-start p-8 rounded-2xl bg-gray-100">
                        <h2 className="text-4xl font-bold mb-4">S/S 2024 collection</h2>
                        <p className="text-gray-600 max-w-md mx-auto lg:mx-0 mb-8">
                            Elevate your look with relaxed yet fashionable pieces designed for ultimate freedom of movement and individuality.
                        </p>
                        <div className="flex items-center justify-center lg:justify-start gap-4">
                            {/* 7. Hubungkan tombol dengan fungsi navigasi */}
                            <button onClick={handlePrev} className="p-3 rounded-full border border-gray-300 hover:bg-gray-200">
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            {/* Tampilkan nomor slide dinamis */}
                            <span>{currentIndex + 1}/{outfits.length}</span>
                            <button onClick={handleNext} className="p-3 rounded-full border border-gray-300 hover:bg-gray-200">
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}