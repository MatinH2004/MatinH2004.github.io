"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for open/close

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-[#0a0a0a] text-white font-sans">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Matin Hassan Pour</h1>

        {/* Desktop Menu (Hidden on Mobile) */}
        <ul className="hidden md:flex gap-8">
          <li>
            <Link href="#projects" className="text-white hover:text-[#0070f3]">Projects</Link>
          </li>
          <li>
            <Link href="#contact" className="text-white hover:text-[#0070f3]">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button (Visible on Small Screens) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu (Only Shows When isOpen is True) */}
      {isOpen && (
        <ul className="md:hidden mt-4 bg-black p-4 rounded-lg flex flex-col gap-4">
          <li><Link href="#projects" onClick={() => setIsOpen(false)} className="text-white hover:text-[#0070f3]">Projects</Link></li>
          <li><Link href="#contact" onClick={() => setIsOpen(false)} className="text-white hover:text-[#0070f3]">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
