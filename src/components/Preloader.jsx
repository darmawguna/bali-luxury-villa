// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <motion.div
            className="fixed inset-0 bg-stone-900 z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // Fade-out effect when preloader is removed
            transition={{ duration: 0.5 }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                {/* This will now use 'Playfair Display' */}
                <h1 className="text-4xl font-serif text-white mb-4">Villa Bali</h1>

                {/* This will now explicitly use 'Inter' */}
                <p className="text-stone-400 font-sans">Experience Serenity</p>
            </motion.div>

            {/* Container for the progress bar */}
            <div className="absolute bottom-16 w-64 h-1 bg-stone-700 rounded-full overflow-hidden">
                {/* The animated bar */}
                <motion.div
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-600"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.8, ease: 'easeInOut' }} // Duration of the bar animation
                />
            </div>
        </motion.div>
    );
};

export default Preloader;