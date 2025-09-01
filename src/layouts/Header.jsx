/* eslint-disable no-unused-vars */
// src/components/Header.jsx

import { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons for menu and close

const Header = ({ setIsBookingOpen }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
    const { scrollY } = useScroll();

    // Effect to track scroll position
    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    const navLinks = [
        { title: "The Villa", href: "#villa" },
        { title: "Experiences", href: "#experiences" },
        { title: "Gallery", href: "#gallery" },
    ];

    const headerTextColor = isScrolled ? 'text-stone-800' : 'text-white';

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${ isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
                    }`}
            >
                <div className="container mx-auto flex justify-between items-center p-4 md:p-6">
                    {/* Logo */}
                    <div className={`font-serif text-2xl transition-colors duration-300 ${ headerTextColor }`}>
                        Villa Bali
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a key={link.title} href={link.href} className={`text-sm font-light transition-colors duration-300 ${ headerTextColor } hover:opacity-70`}>
                                {link.title}
                            </a>
                        ))}
                        <button
                            onClick={() => setIsBookingOpen(true)} // <-- THIS IS THE CHANGE
                            className={`border px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${ isScrolled
                                ? 'border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white'
                                : 'border-white text-white hover:bg-white hover:text-black'
                            }`}>
                            Book Now
                        </button>
                    </nav>

                    {/* Mobile Hamburger Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(true)} className={`transition-colors duration-300 ${ headerTextColor }`}>
                            <FiMenu size={28} />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-stone-900/95 backdrop-blur-lg z-50 p-8"
                    >
                        <div className="flex justify-between items-center">
                            <div className="font-serif text-2xl text-white">Villa Bali</div>
                            <button onClick={() => setIsMenuOpen(false)} className="text-white">
                                <FiX size={28} />
                            </button>
                        </div>
                        <nav className="mt-24 flex flex-col items-center gap-10">
                            {navLinks.map((link) => (
                                <a key={link.title} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif text-white hover:opacity-70">
                                    {link.title}
                                </a>
                            ))}
                            <button
                                onClick={() => {
                                    setIsBookingOpen(true);
                                    setIsMenuOpen(false); // Close mobile menu when opening booking
                                }}
                                className="mt-8 border border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300">
                                Book Now
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;