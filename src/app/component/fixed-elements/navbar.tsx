"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <nav className="bg-black py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <Image src="/earth_logo.png" alt="logo" width={70} height={32} />
          <h1 className="text-6xl font-bebas text-white">ASTROS</h1>
        </div>
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Pesquise aqui..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-48 md:w-64 lg:w-80 px-3 py-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:outline-none"
          />
        </div>
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image src="/burger-bar.png" alt="menu" width={32} height={32} />
        </button>
        <ul
          className={`absolute lg:static bg-black lg:bg-transparent w-full lg:w-auto left-0 top-24 lg:top-0 p-4 lg:p-0 transition-all duration-300
          ${menuOpen ? "block" : "hidden lg:flex"}
          flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8`}
        >
          {menuOpen && (
            <div className="block md:hidden mb-4">
              <input
                type="text"
                placeholder="Pesquise aqui..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-violet-500 focus:outline-none"
              />
            </div>
          )}
          <li>
            <Link className="text-white font-oswald text-lg lg:text-xl hover:text-violet-500 transition" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white font-oswald text-lg lg:text-xl hover:text-violet-500 transition" href="/planets">
              Planets
            </Link>
          </li>
          <li>
            <Link className="text-white font-oswald text-lg lg:text-xl hover:text-violet-500 transition" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-white font-oswald text-lg lg:text-xl hover:text-violet-500 transition" href="/contact">
              Contat
            </Link>
          </li>
          <li className={`${menuOpen ? "block" : "hidden"} lg:hidden`}>
            <Link className="text-white font-oswald text-lg lg:text-xl hover:text-violet-500 transition" href="/cart">
              Cart
            </Link>
          </li>
        </ul>

        <div className="relative hidden lg:block">
          <Image
            src="/cart.png"
            alt="Carrinho"
            className="cursor-pointer"
            width={32}
            height={32}
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4">
              <h2 className="text-lg font-semibold">Carrinho</h2>
              <p className="text-gray-500">Seu carrinho está vazio</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
