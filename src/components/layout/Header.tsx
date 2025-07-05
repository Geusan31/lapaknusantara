import Link from 'next/link';
import { Heart, Search, ShoppingCart, User } from 'lucide-react';

export default function Header() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600">
                            LAPAK NUSANTARA
                        </Link>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex flex-1 justify-center px-8 lg:px-16">
                        <div className="relative w-full max-w-lg">
                            <input
                                type="text"
                                placeholder="Cari produk di Lapak Nusantara..."
                                className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    {/* Ikon Aksi (di kanan) */}
                    <div className="flex items-center space-x-4">
                        <Link href="/akun/favorite" className="text-gray-600 hover:text-blue-600">
                            <Heart className="h-6 w-6" />
                        </Link>
                        <Link href="/keranjang" className="relative text-gray-600 hover:text-blue-600">
                            <ShoppingCart className="h-6 w-6" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                3
                            </span>
                        </Link>
                        <Link href="/akun/profil" className="text-gray-600 hover:text-blue-600">
                            <User className="h-6 w-6" />
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}