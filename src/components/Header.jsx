'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, UserRound, ShoppingCart, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const isActive = (path) =>
    pathname === path ? 'roboto-semibold' : 'roboto-regular';

  return (
    <header className="p-4 relative">
      <nav className="container mx-auto flex justify-between items-center">
        <div
          className={`inter-font mr-4 text-2xl font-bold transition-colors ${
            isOpen ? 'text-white z-50' : 'text-black'
          }`}>
          Logo Here
        </div>

        <div className="hidden md:flex items-center space-x-6 font-normal">
          <ul className="flex gap-[25px] lg:gap-[47px] mr-[20px] lg:mr-[60px] font-normal">
            <li>
              <Link href="/" className={isActive('/')}>
                Home
              </Link>
            </li>
            <li className="flex cursor-pointer">
              <Link href="/features" className={isActive('/features')}>
                Features
              </Link>
              <ChevronDown />
            </li>
            <li>
              <Link href="/blog" className={isActive('/blog')}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/shop" className={isActive('/shop')}>
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className={isActive('/about')}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={isActive('/contact')}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex flex-wrap space-x-4 lg:space-x-8">
            <Link href="/">
              <div className="border rounded-full p-1">
                <UserRound strokeWidth={1} className="w-6 h-6 cursor-pointer" />
              </div>
            </Link>
            <Link href="/">
              <div className="border rounded-full p-1">
                <ShoppingCart
                  strokeWidth={1}
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </Link>
          </div>
        </div>

        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="w-8 h-8 text-white" />
          ) : (
            <svg
              width="24"
              height="16"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 12H10C9.44771 12 9 11.5523 9 11C9 10.4477 9.44771 10 10 10H18V12ZM18 7H1C0.447716 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H18V7ZM18 2H1C0.447716 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H18V2Z"
                fill="black"
              />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={`fixed inset-0 pl-[23px] pr-[23px] pt-[109px] bg-black text-white flex flex-col transform transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <ul className="space-y-6 text-sm">
          <li>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={isActive('/')}>
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href="/features"
              onClick={() => setIsOpen(false)}
              className={isActive('/features')}>
              Features
            </Link>
            <ChevronDown />
          </li>
          <li>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className={isActive('/blog')}>
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              onClick={() => setIsOpen(false)}
              className={isActive('/shop')}>
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={isActive('/about')}>
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={isActive('/contact')}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="w-full flex items-center justify-center space-x-6 mt-6">
          <Link href="/">
            <div className="border border-white rounded-full p-1">
              <UserRound
                strokeWidth={1}
                className="w-8 h-8 cursor-pointer text-white"
              />
            </div>
          </Link>
          <Link href="/">
            <div className="border border-white rounded-full p-1">
              <ShoppingCart
                strokeWidth={1}
                className="w-8 h-8 cursor-pointer text-white"
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
