'use client'

import React, { useState } from 'react';

interface NavbarProps {
    scrollY: number;
}

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // const navbarClass = scrollY > 100 ? 'bg-neutral-950' : 'bg-transparent';

    const menuItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];
    const svgPaths = {
        menu: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                />
            </svg>
        ),
        close: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        ),
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-50 `}>
            <div className="px-6 py-5 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <a href="#">
                        <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-600">
                            Novanectar
                        </span>
                    </a>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="block md:hidden text-gray-300  hover:text-gray-600 focus:outline-none focus:text-gray-600 "
                            aria-label="toggle menu">
                            {isOpen ? svgPaths.close : svgPaths.menu}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center font-medium ${isOpen
                        ? "translate-x-0 opacity-100"
                        : "opacity-0 -translate-x-full"
                        }`}>
                    <div className="flex flex-col md:flex-row md:mx-6">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                className="my-2 text-gray-300 transition-colors duration-300 transform  hover:text-yellow-400 md:mx-4 md:my-0"
                                href={item.href}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
