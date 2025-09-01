// src/components/Footer.jsx

import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-stone-900 text-stone-300 py-16 px-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* About Section */}
                <div>
                    <h3 className="font-serif text-2xl text-white mb-4">Villa Bali</h3>
                    <p className="text-sm font-light">
                        A sanctuary woven from nature, offering an unparalleled experience of mindful luxury in the heart of the island.
                    </p>
                </div>

                {/* Links Section */}
                <div>
                    <h4 className="font-semibold text-white mb-4">Explore</h4>
                    <ul className="space-y-2 text-sm font-light">
                        <li><a href="#" className="hover:text-white transition-colors">Experiences</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Social & Contact Section */}
                <div>
                    <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                    <div className="flex justify-center md:justify-start gap-6 mb-4">
                        <a href="#" className="hover:text-white transition-colors"><FiInstagram size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><FiFacebook size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><FiYoutube size={20} /></a>
                    </div>
                    <p className="text-sm font-light">info@villabali.com</p>
                </div>
            </div>
            <div className="text-center text-stone-500 text-xs mt-12 pt-8 border-t border-stone-700">
                © {new Date().getFullYear()} Villa Bali. A Front-End Portfolio Project.
            </div>
        </footer>
    );
};

export default Footer;