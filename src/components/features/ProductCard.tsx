import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';

// Menentukan tipe data untuk props agar lebih rapi
type ProductCardProps = {
  imageUrl: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  slug: string;
};

export default function ProductCard({ imageUrl, name, brand, price, originalPrice, slug }: ProductCardProps) {
  return (
    <div className="group">
      <Link href={`/produk/${slug}`}>
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
          {/* Tombol Wishlist */}
          <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
            <Heart className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </Link>
      <div className="mt-4">
        <div className="flex items-baseline gap-2">
          <p className="text-lg font-semibold text-gray-900">${price.toFixed(2)}</p>
          {originalPrice && (
            <p className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</p>
          )}
        </div>
        <h3 className="text-md font-medium text-gray-700 mt-1">{name}</h3>
        <p className="text-sm text-gray-500">{brand}</p>
      </div>
    </div>
  );
}