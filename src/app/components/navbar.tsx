"use client";
import Image from "next/image";
import Link from "next/link"; 
import { useState } from "react";

// Images
import user from "@/images/Vector (12).png";
import search from "@/images/icn settings icn-xs (6).png";
import cart from "@/images/icn settings icn-xs (7).png";
import mail from "@/images/icn settings icn-xs (8).png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); 
  };

  return (
    <div className="relative lg:w-full lg:h-[58px] w-full h-auto lg:absolute lg:top-[70px] bg-white z-50 shadow-md">
      {/* Logo and Brand */}
      <div className="flex justify-between items-center px-4 lg:px-16 py-4 lg:py-0">
        <h3 className="font-Montserrat font-semibold text-[24px] leading-[32px] text-[#252B42]">
          Bandage
        </h3>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <div className="w-[24px] h-[2px] bg-black mb-[5px]"></div>
          <div className="w-[24px] h-[2px] bg-black mb-[5px]"></div>
          <div className="w-[24px] h-[2px] bg-black"></div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-between items-center px-[38px]">
        {/* Menu Links */}
        <ul className="flex gap-[20px] font-Montserrat font-semibold text-[14px] text-[#737373] leading-[24px]">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/pages">Pages</Link></li>
        </ul>

        {/* Login and Icons */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={user} alt="User Icon" width={16} height={16} />
            <span className="font-Montserrat font-semibold text-[14px] text-[#23A6F0]">
              Login / Register
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <Image src={search} alt="Search Icon" width={16} height={16} />
            <Image src={cart} alt="Cart Icon" width={16} height={16} />
            <Image src={mail} alt="Mail Icon" width={16} height={16} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-[#252B42] text-white py-6 px-4 lg:hidden z-50">
          <ul className="flex flex-col items-center gap-4 font-Montserrat font-semibold text-[16px]">
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/shop" onClick={toggleMenu}>Shop</Link></li>
            <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link href="/blog" onClick={toggleMenu}>Blog</Link></li>
            <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
            <li><Link href="/pages" onClick={toggleMenu}>Pages</Link></li>
          </ul>
          <div className="flex justify-center mt-6 gap-6">
            <button
              onClick={toggleMenu}
              className="px-4 py-2 bg-[#23A6F0] rounded-md text-white w-[160px]"
            >
              Close Menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
