/* eslint-disable no-unused-vars */
// src/components/Preloader.jsx
import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <motion.div className="fixed inset-0 bg-stone-100 z-50 flex items-center justify-center">
            {/* TODO: Add SVG Logo Animation Here */}
            <p className="text-2xl font-serif">Villa Bali</p>
        </motion.div>
    );
};

export default Preloader;