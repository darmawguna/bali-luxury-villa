// src/components/AsymmetricGallery.jsx - ENHANCED LUXURY VERSION

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMaximize2, FiX } from 'react-icons/fi';

// Import gallery images
import gallery1 from '../assets/pictures/gallery-1.jpg';
import gallery2 from '../assets/pictures/gallery-2.jpg';
import gallery3 from '../assets/pictures/gallery-3.jpg';
import gallery4 from '../assets/pictures/gallery-4.jpg';
import gallery5 from '../assets/pictures/gallery-5.jpg';

// Enhanced gallery data with descriptions
const galleryData = [
    {
        id: 1,
        src: gallery1,
        alt: "Villa Sanctuary Pool",
        description: "Infinity pool overlooking tropical paradise",
        category: "Architecture"
    },
    {
        id: 2,
        src: gallery2,
        alt: "Interior Living Space",
        description: "Open-concept living with natural materials",
        category: "Interiors"
    },
    {
        id: 3,
        src: gallery3,
        alt: "Bedroom Sanctuary",
        description: "Master suite with garden views",
        category: "Accommodations"
    },
    {
        id: 4,
        src: gallery4,
        alt: "Dining Experience",
        description: "Private dining under the stars",
        category: "Experiences"
    },
    {
        id: 5,
        src: gallery5,
        alt: "Wellness Space",
        description: "Spa pavilion for holistic rejuvenation",
        category: "Wellness"
    },
];

// Enhanced animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 60,
        scale: 0.8,
        filter: "blur(10px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1]
        }
    },
};

const GalleryItem = ({ item, className, }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const itemRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <>
            <motion.div
                ref={itemRef}
                variants={itemVariants}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${ className }`}
                style={{ y }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.02 }}
            >
                {/* Image */}
                <motion.img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content Overlay */}
                <motion.div
                    className="absolute inset-0 flex flex-col justify-end p-6 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <span className="text-xs font-medium tracking-wider uppercase text-amber-300 mb-2">
                        {item.category}
                    </span>
                    <h3 className="text-lg font-light mb-2">{item.alt}</h3>
                    <p className="text-sm text-stone-300 font-light leading-relaxed">
                        {item.description}
                    </p>
                </motion.div>

                {/* Expand Icon */}
                <motion.div
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FiMaximize2 className="w-4 h-4 text-white" />
                </motion.div>
            </motion.div>

            {/* Modal */}
            {isModalOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsModalOpen(false)}
                >
                    <motion.div
                        className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img src={item.src} alt={item.alt} className="w-full h-auto" />
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                        >
                            <FiX className="w-5 h-5" />
                        </button>
                        <div className="p-6">
                            <span className="text-xs font-medium tracking-wider uppercase text-amber-600 mb-2 block">
                                {item.category}
                            </span>
                            <h3 className="text-2xl font-light text-stone-800 mb-2">{item.alt}</h3>
                            <p className="text-stone-600 font-light">{item.description}</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

const AsymmetricGallery = () => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const headerY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section
            ref={sectionRef}
            className="relative bg-gradient-to-br from-stone-50 via-white to-amber-50 py-32 px-4 md:px-8 lg:px-16 overflow-hidden"
        >
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-100/30 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-stone-100/40 to-transparent rounded-full blur-3xl"></div>

            <div className="container mx-auto relative z-10">
                {/* Enhanced Header */}
                <motion.div
                    className="text-center mb-20"
                    style={{ y: headerY, opacity: headerOpacity }}
                >
                    <motion.span
                        className="inline-block text-amber-600 text-sm font-medium tracking-[0.2em] uppercase mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Visual Journey
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-6xl lg:text-7xl font-extralight text-stone-800 mb-8 leading-[1.1]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        OUR SANCTUARY
                        <span className="block text-transparent bg-gradient-to-r from-amber-600 to-stone-600 bg-clip-text">
                            IN MOMENTS
                        </span>
                    </motion.h2>

                    <motion.div
                        className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />

                    <motion.p
                        className="text-lg text-stone-600 max-w-2xl mx-auto mt-8 leading-relaxed font-light"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        Each frame tells a story of luxury intertwined with nature,
                        where architectural beauty meets the profound serenity of Bali.
                    </motion.p>
                </motion.div>

                {/* Enhanced Asymmetric Grid */}
                <motion.div
                    className="grid grid-cols-12 auto-rows-[200px] gap-4 min-h-[120vh]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <GalleryItem
                        item={galleryData[0]}
                        className="col-span-12 md:col-span-5 row-span-3"
                        index={0}
                    />

                    <GalleryItem
                        item={galleryData[1]}
                        className="col-span-6 md:col-span-3 row-span-2"
                        index={1}
                    />

                    <GalleryItem
                        item={galleryData[2]}
                        className="col-span-6 md:col-span-4 row-span-4"
                        index={2}
                    />

                    <GalleryItem
                        item={galleryData[3]}
                        className="col-span-8 md:col-span-5 row-span-2"
                        index={3}
                    />

                    <GalleryItem
                        item={galleryData[4]}
                        className="col-span-4 md:col-span-4 row-span-3"
                        index={4}
                    />
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <motion.button
                        className="group inline-flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-stone-600 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>View Full Gallery</span>
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            →
                        </motion.span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default AsymmetricGallery;