// src/components/Footer.jsx

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="relative bg-stone-900 text-stone-300 pt-24 pb-12 px-4 md:px-8 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-900/10 to-transparent rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-stone-800/20 to-transparent rounded-full blur-3xl opacity-50"></div>

            <div className="container mx-auto relative z-10">
                {/* Newsletter CTA */}
                <div className="text-center mb-20">
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">Stay Connected</h3>
                    <p className="font-sans font-light text-stone-400 max-w-xl mx-auto mb-8">
                        Be the first to receive exclusive offers, travel inspiration, and updates from our sanctuary.
                    </p>
                    <form className="flex flex-col md:flex-row max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-stone-800/50 text-white placeholder-stone-500 px-6 py-3 rounded-full md:rounded-l-full md:rounded-r-none focus:outline-none focus:ring-2 focus:ring-amber-500 border border-stone-700 transition-all"
                        />
                        <button
                            type="submit"
                            className="mt-4 md:mt-0 bg-amber-600 text-white font-sans font-semibold px-8 py-3 rounded-full md:rounded-r-full md:rounded-l-none hover:bg-amber-700 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* About Section */}
                    <div>
                        <h3 className="font-serif text-2xl text-white mb-4">Villa Bali</h3>
                        <p className="text-sm font-sans font-light text-stone-400">
                            A sanctuary woven from nature, offering an unparalleled experience of mindful luxury.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h4 className="font-sans font-semibold text-white mb-4">Explore</h4>
                        <ul className="space-y-2 text-sm font-sans font-light">
                            <li><a href="#villa" className="text-stone-400 hover:text-white transition-colors">The Villa</a></li>
                            <li><a href="#experiences" className="text-stone-400 hover:text-white transition-colors">Experiences</a></li>
                            <li><a href="#gallery" className="text-stone-400 hover:text-white transition-colors">Gallery</a></li>
                        </ul>
                    </div>

                    {/* Social & Contact Section */}
                    <div>
                        <h4 className="font-sans font-semibold text-white mb-4">Follow Us</h4>
                        <div className="flex justify-center md:justify-start gap-6 mb-4">
                            <motion.a href="#" className="text-stone-400 hover:text-white transition-colors" whileHover={{ y: -2, scale: 1.1 }}><FiInstagram size={20} /></motion.a>
                            <motion.a href="#" className="text-stone-400 hover:text-white transition-colors" whileHover={{ y: -2, scale: 1.1 }}><FiFacebook size={20} /></motion.a>
                            <motion.a href="#" className="text-stone-400 hover:text-white transition-colors" whileHover={{ y: -2, scale: 1.1 }}><FiYoutube size={20} /></motion.a>
                        </div>
                        <p className="text-sm font-sans font-light text-stone-400">info@villabali.com</p>
                    </div>
                </div>

                <div className="text-center text-stone-500 text-xs font-sans mt-20 pt-8 border-t border-stone-700">
                    © {new Date().getFullYear()} Villa Bali. A Front-End Portfolio Project.
                </div>
            </div>
        </footer>
    );
};

export default Footer;