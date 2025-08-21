import React, { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const NavbarLinks = [
        { id: 1, name: 'Home', link: '#home' },
        { id: 2, name: 'Skills', link: '#skills' },
        { id: 3, name: 'Experience', link: '#experience' },
        { id: 4, name: 'My Projects', link: '#projects' },
        { id: 5, name: 'Contact', link: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md">
            <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold tracking-widest text-white">
                    Portfolio
                </a>

                {/* Mobile Menu Toggle */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="md:hidden text-white focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Nav Links */}
                <nav className={`w-full md:w-auto ${isOpen ? "block" : "hidden"} md:flex md:items-center`}>
                    <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 text-sm md:text-base">
                        {NavbarLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.link}
                                    className="block py-2 md:py-0 px-2 hover:text-blue-400 transition"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Contact Button */}
                <div className="hidden md:block">
                    <a
                        href="#contact"
                        className="ml-4 bg-white text-gray-900 font-semibold py-2 px-4 rounded-full hover:bg-blue-300 transition"
                    >
                        Contact
                    </a>
                </div>
            </div>

            {/* Mobile Contact Button */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4">
                    <a
                        href="#contact"
                        className="block w-full text-center bg-white text-gray-900 font-semibold py-2 rounded-full hover:bg-blue-300 transition"
                    >
                        Contact
                    </a>
                </div>
            )}
        </header>
    );
}
