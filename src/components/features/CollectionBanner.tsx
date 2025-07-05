import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CollectionBanner() {
    return (
        <section className="my-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Gambar Kiri */}
                <div className="relative w-full h-[600px] rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                        src="https://dummyimage.com/600x800/f0f0f0/aaa&text=Pants+Model"
                        alt="S/S 2024 Collection"
                        fill
                        className="object-cover"
                    />
                </div>
                {/* Info Kanan */}
                <div className="text-center lg:text-left lg:p-8">
                    <h2 className="text-4xl font-bold mb-4">S/S 2024 collection</h2>
                    <p className="text-gray-600 max-w-md mx-auto lg:mx-0 mb-8">
                        Elevate your look with relaxed yet fashionable pieces designed for ultimate freedom of movement and individuality.
                    </p>
                    <div className="flex items-center justify-center lg:justify-start gap-4">
                        <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-100">
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <span>1/6</span>
                        <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-100">
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}