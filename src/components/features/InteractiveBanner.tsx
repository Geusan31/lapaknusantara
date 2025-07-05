'use client'; // Komponen ini interaktif

import Image from 'next/image';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// 1. Data untuk carousel produk di banner kiri
const bannerProducts = [
  { 
    name: 'Minimal Chair', 
    brand: 'Yoell', 
    imageUrl: 'https://dummyimage.com/80x80/e0e0e0/000&text=Chair',
    backgroundImageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    name: 'Modern Sofa', 
    brand: 'Comfy', 
    imageUrl: 'https://dummyimage.com/80x80/cccccc/000&text=Sofa',
    backgroundImageUrl: 'https://images.unsplash.com/photo-1540574163024-58846247c343?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    name: 'Pampas Grass', 
    brand: 'Decorly', 
    imageUrl: 'https://dummyimage.com/80x80/dddddd/000&text=Vase',
    backgroundImageUrl: 'https://images.unsplash.com/photo-1617994392185-3d75285e6e33?q=80&w=2070&auto=format&fit=crop'
  },
];

// 2. Data untuk produk di kanan, termasuk variasi warna dan gambar
const mainProduct = {
  name: 'Cast Lights',
  store: 'GlowGalore Store',
  price: 45.90,
  colors: [
    { name: 'Stone', hex: 'bg-gray-400', imageUrl: 'https://dummyimage.com/400x400/e9e9e9/000&text=Lamp+Stone' },
    { name: 'Graphite', hex: 'bg-gray-800', imageUrl: 'https://dummyimage.com/400x400/333333/fff&text=Lamp+Graphite' },
    { name: 'Terracotta', hex: 'bg-orange-900', imageUrl: 'https://dummyimage.com/400x400/8c4f3a/fff&text=Lamp+Terra' },
  ]
};

export default function InteractiveBanner() {
  const [currentBannerProduct, setCurrentBannerProduct] = useState(0);
  const [selectedColor, setSelectedColor] = useState(mainProduct.colors[1]); // Default ke warna kedua (Graphite)

  const handleNextProduct = () => setCurrentBannerProduct((prev) => (prev + 1) % bannerProducts.length);
  const handlePrevProduct = () => setCurrentBannerProduct((prev) => (prev - 1 + bannerProducts.length) % bannerProducts.length);

  return (
    <section className="container mx-auto my-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

        {/* Kolom Kiri (Banner Interaktif) */}
        <div className="lg:col-span-2 relative h-[538px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={bannerProducts[currentBannerProduct].backgroundImageUrl}
            alt="Interior ruang tamu"
            fill
            className="object-cover transition-opacity duration-500"
            key={currentBannerProduct}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm p-3 rounded-lg max-w-sm">
              <Sparkles className="h-6 w-6 text-yellow-300 flex-shrink-0" />
              <p className="font-medium">Complete your interior with a minimalist designer chandelier</p>
            </div>
            <div className="bg-black/50 backdrop-blur-md p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={bannerProducts[currentBannerProduct].imageUrl}
                  alt={bannerProducts[currentBannerProduct].name}
                  width={60} height={60} className="rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{bannerProducts[currentBannerProduct].name}</h3>
                  <p className="text-sm text-gray-300">{bannerProducts[currentBannerProduct].brand}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={handlePrevProduct} className="p-2 rounded-full bg-white/20 hover:bg-white/40"><ChevronLeft className="h-5 w-5" /></button>
                <span>{currentBannerProduct + 1}/{bannerProducts.length}</span>
                <button onClick={handleNextProduct} className="p-2 rounded-full bg-white/20 hover:bg-white/40"><ChevronRight className="h-5 w-5" /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan (Kartu Produk Interaktif) */}
        <div className="lg:col-span-1 bg-gray-50 p-6 rounded-2xl shadow-lg flex flex-col h-[538px]">
          <div className="w-full aspect-square relative mb-4">
            <Image
              src={selectedColor.imageUrl}
              alt={mainProduct.name}
              fill
              className="object-contain rounded-lg"
              key={selectedColor.name}
            />
            <div className="absolute top-4 left-4 flex gap-2">
              {mainProduct.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full border-2 border-white shadow transition-all ${color.hex} ${
                    selectedColor.name === color.name ? 'ring-2 ring-offset-1 ring-gray-800' : ''
                  }`}
                  aria-label={`Select color ${color.name}`}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-auto">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{mainProduct.name}</h2>
              <p className="text-sm text-gray-500">{mainProduct.store}</p>
            </div>
            <button className="bg-gray-900 text-white font-semibold rounded-full px-5 py-2.5 flex items-center gap-3 hover:bg-gray-700 transition-colors">
              <span className="text-sm">Add to cart</span>
              <span className="text-sm text-gray-400">${mainProduct.price.toFixed(2)}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}