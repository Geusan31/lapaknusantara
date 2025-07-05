import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { name: 'Clothes and shoes', items: '23k items', imageUrl: 'https://dummyimage.com/600x400/f0f0f0/aaa&text=Shoes', colSpan: 'col-span-2', rowSpan: 'row-span-1', imageClass: 'w-4/5 right-0 bottom-0' },
  { name: 'Electronics', items: '17k items', imageUrl: 'https://dummyimage.com/400x400/f0f0f0/aaa&text=Laptop', colSpan: 'col-span-1', rowSpan: 'row-span-1', imageClass: 'w-4/5 -right-4 bottom-0' },
  { name: 'Sports goods', items: '12k items', imageUrl: 'https://dummyimage.com/400x400/f0f0f0/aaa&text=Racket', colSpan: 'col-span-1', rowSpan: 'row-span-1', imageClass: 'w-2/3 -right-6 -top-6' },
  { name: 'Children\'s goods', items: '8k items', imageUrl: 'https://dummyimage.com/400x400/f0f0f0/aaa&text=Dino', colSpan: 'col-span-1', rowSpan: 'row-span-1', imageClass: 'w-full right-0 bottom-0' },
  { name: 'Beauty', items: '32k items', imageUrl: 'https://dummyimage.com/400x400/f0f0f0/aaa&text=Mask', colSpan: 'col-span-1', rowSpan: 'row-span-1', imageClass: 'w-4/5 right-0 bottom-0' },
  { name: 'Furniture', items: '12k items', imageUrl: 'https://dummyimage.com/600x400/f0f0f0/aaa&text=Sofa', colSpan: 'col-span-2', rowSpan: 'row-span-1', imageClass: 'w-full right-0 bottom-0' },
];

export default function PopularCategories() {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8">Popular categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-6 h-[600px]">
        {categories.map((category) => (
          <Link href="#" key={category.name} className={`${category.colSpan} ${category.rowSpan}`}>
            <div className="relative w-full h-full bg-gray-100 rounded-2xl p-6 overflow-hidden group">
              <div>
                <h3 className="font-semibold text-lg">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.items}</p>
              </div>
              <div className={`absolute transition-transform duration-300 group-hover:scale-105 ${category.imageClass}`}>
                <Image src={category.imageUrl} alt={category.name} width={400} height={400} className="object-contain" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}