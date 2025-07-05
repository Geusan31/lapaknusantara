import Link from 'next/link';
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

// Data untuk link agar mudah dikelola
const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/career', label: 'Career' },
  { href: '/media', label: 'Media about us' },
  { href: '/delivery-points', label: 'Points of delivery' },
  { href: '/contacts', label: 'Contacts' },
];

const customerLinks = [
  { href: '/contact-us', label: 'Contact us' },
  { href: '/return', label: 'Return' },
  { href: '/how-to-pay', label: 'How to pay?' },
  { href: '/delivery', label: 'Delivery' },
  { href: '/faq', label: 'FAQ' },
];

const partnerLinks = [
  { href: '/partners/sign-in', label: 'Sign in' },
  { href: '/partners/become-a-partner', label: 'Become a partner' },
  { href: '/partners/turnkey-brand', label: 'Turnkey brand' },
  { href: '/partners/delivery-point', label: 'Open a delivery point' },
  { href: '/partners/logistics', label: 'Logistics' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Bagian Atas: Kolom Link */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Kolom Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-base text-gray-500 hover:text-gray-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom For Customers */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">For customers</h3>
            <ul className="mt-4 space-y-4">
              {customerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-base text-gray-500 hover:text-gray-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Partners */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Partners</h3>
            <ul className="mt-4 space-y-4">
              {partnerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-base text-gray-500 hover:text-gray-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Garis Pemisah */}
        <div className="border-t border-gray-200"></div>

        {/* Bagian Bawah: Copyright & Social Media */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-base text-gray-400 order-3 md:order-1">&copy; {new Date().getFullYear()} LAPAK NUSANTARA</p>

          <div className="flex space-x-6 order-1 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-500"><Facebook /></a>
            <a href="#" className="text-gray-400 hover:text-gray-500"><Instagram /></a>
            <a href="#" className="text-gray-400 hover:text-gray-500"><Youtube /></a>
            <a href="#" className="text-gray-400 hover:text-gray-500"><Twitter /></a>
            <a href="#" className="text-gray-400 hover:text-gray-500"><Linkedin /></a>
          </div>

          <div className="flex space-x-6 text-base text-gray-400 order-2 md:order-3">
            <Link href="/privacy-policy" className="hover:text-gray-900">Privacy policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}