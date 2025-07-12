"use client";

import { assets } from "@/assets/assets";
import { ArrowUpRight, Menu, SunSnow, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const mobileMenuRef = useRef(null);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/30 border-b border-white/20 shadow-sm px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between ">
        <a href="#top ">
          <Image src={assets.logo} alt="logo" className="w-32" />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-4 bg-white/50 shadow-sm">
          <li>
            <a href="#top" className="font-ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo">
              About
            </a>
          </li>
          <li>
            <a href="#stack" className="font-ovo">
              Tech Stack
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex gap-4">
          {/* light mode toggle */}
          <button>
            <SunSnow width={24} />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-3 border border-gray-500 rounded-full ml-4 font-ovo"
          >
            Contact
            <ArrowUpRight width={24} />
          </a>
          {/* mobile menu open */}
          <button onClick={toggleIsOpen} className="block md:hidden ml-3">
            <Menu width={24} />
          </button>
        </div>
        {/* mobile navbar */}
        <ul
          ref={mobileMenuRef}
          className={`fixed top-0 right-0 w-2/5 h-screen z-50  backdrop-blur-xl bg-white/30 border-b border-white/20 shadow-sm flex md:hidden flex-col gap-6 px-10 py-20  text-end text-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* mobile menu close */}

          <button
            onClick={toggleIsOpen}
            className="absolute top-[16px] right-[20px]"
          >
            <X width={24} />
          </button>
          <li onClick={toggleIsOpen}>
            <a href="#top" className="font-ovo">
              Home
            </a>
          </li>
          <li onClick={toggleIsOpen}>
            <a href="#about" className="font-ovo">
              About
            </a>
          </li>
          <li onClick={toggleIsOpen}>
            <a href="#stack" className="font-ovo">
              Tech Stack
            </a>
          </li>
          <li onClick={toggleIsOpen}>
            <a href="#work" className="font-ovo">
              My Work
            </a>
          </li>
          <li onClick={toggleIsOpen}>
            <a href="#contact" className="font-ovo">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
