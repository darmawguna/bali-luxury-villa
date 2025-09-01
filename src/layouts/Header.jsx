// src/components/Header.jsx

import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = ({ setIsBookingOpen }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll();

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

    // Animation variants for the mobile menu links
    const mobileLinkContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };
    const mobileLinkVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${ isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent' }`}
            >
                <div className="container mx-auto flex justify-between items-center p-4 md:p-6">
                    {/* Logo */}
                    <div className={`font-serif text-2xl font-medium transition-colors duration-300 ${ headerTextColor }`}>
                        Villa Bali
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.title}
                                href={link.href}
                                className={`relative text-sm font-sans font-light transition-colors duration-300 ${ headerTextColor }`}
                                whileHover="hover"
                            >
                                {link.title}
                                <motion.div
                                    className={`absolute -bottom-1 left-0 h-[1px] w-full ${ isScrolled ? 'bg-amber-600' : 'bg-white' }`}
                                    variants={{
                                        initial: { scaleX: 0 },
                                        hover: { scaleX: 1 }
                                    }}
                                    initial="initial"
                                    transition={{ duration: 0.3 }}
                                    style={{ transformOrigin: 'left' }}
                                />
                            </motion.a>
                        ))}
                        <motion.button
                            onClick={() => setIsBookingOpen(true)}
                            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-stone-600 text-white font-sans font-semibold text-sm px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-400 overflow-hidden"
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div className="absolute inset-0 bg-gradient-to-r from-stone-600 to-amber-600" initial={{ x: "100%" }} whileHover={{ x: "0%" }} transition={{ duration: 0.4 }} />
                            <span className="relative z-10">Book Now</span>
                        </motion.button>
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
                        className="fixed inset-0 bg-gradient-to-br from-stone-50 via-white to-amber-50 z-50 p-8"
                    >
                        <div className="flex justify-between items-center">
                            <div className="font-serif text-2xl text-stone-800">Villa Bali</div>
                            <button onClick={() => setIsMenuOpen(false)} className="text-stone-800">
                                <FiX size={28} />
                            </button>
                        </div>
                        <motion.nav
                            variants={mobileLinkContainerVariants}
                            initial="hidden"
                            animate="visible"
                            className="mt-24 flex flex-col items-center gap-10"
                        >
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.title}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-4xl font-serif text-stone-800 hover:text-amber-600 transition-colors"
                                    variants={mobileLinkVariants}
                                >
                                    {link.title}
                                </motion.a>
                            ))}
                            <motion.button
                                onClick={() => {
                                    setIsBookingOpen(true);
                                    setIsMenuOpen(false);
                                }}
                                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-stone-600 text-white font-sans font-semibold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-400 overflow-hidden mt-8"
                                variants={mobileLinkVariants}
                            >
                                <motion.div className="absolute inset-0 bg-gradient-to-r from-stone-600 to-amber-600" initial={{ x: "100%" }} whileHover={{ x: "0%" }} transition={{ duration: 0.4 }} />
                                <span className="relative z-10">Book Now</span>
                            </motion.button>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;