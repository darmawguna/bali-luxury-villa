// ============================================================
// VILLA SOUL COMPONENT - IMPROVED VERSION
// Analisis: Meningkatkan visual hierarchy, interaktivity, dan luxury feel
// ============================================================

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import soulMain from "../assets/pictures/villa-souls.jpg";
import soulMaterials from '../assets/pictures/souls.jpg';
import soulLiving from '../assets/pictures/souls3.jpg';
import soulHeritage from '../assets/pictures/souls4.jpg';

const soulContent = [
    {
        title: "Crafted from Nature",
        description: "Every corner of Villa Soul is built with locally sourced teak wood, natural stone, and sustainable bamboo—materials that breathe in harmony with the lush tropical surroundings.",
        imageUrl: soulMaterials,
        icon: "🌿", // Menambahkan icon untuk visual hierarchy
        highlights: ["Locally sourced teak", "Natural stone", "Sustainable bamboo"] // Detail highlights
    },
    {
        title: "Seamless Indoor-Outdoor Living",
        description: "Our design philosophy dissolves boundaries. Expansive glass doors open to private gardens and pools, welcoming the serene jungle into the heart of your sanctuary.",
        imageUrl: soulLiving,
        icon: "🏡",
        highlights: ["Expansive glass doors", "Private gardens", "Pool integration"]
    },
    {
        title: "A Tribute to Heritage",
        description: "Intricate Balinese carvings and traditional alang-alang thatched roofs are not mere details, but a living homage to the island's artistic legacy, lovingly crafted by local artisans.",
        imageUrl: soulHeritage,
        icon: "🎨",
        highlights: ["Balinese carvings", "Traditional roofs", "Local artisans"]
    },
];

const VillaSoul = () => {
    const [activeFeatureIndex, setActiveFeatureIndex] = useState(0); // Default ke 0 bukan -1
    const [isHovered, setIsHovered] = useState(false);
    const sectionRef = useRef(null);

    // Parallax effect untuk header
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const headerY = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    const images = [soulMain, ...soulContent.map(item => item.imageUrl)];
    const activeImage = images[activeFeatureIndex + 1];

    // Auto-advance feature untuk demo purposes (optional)
    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setActiveFeatureIndex((prev) => (prev + 1) % soulContent.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isHovered]);

    return (
        <section
            ref={sectionRef}
            className="relative bg-gradient-to-br from-stone-50 via-white to-amber-50 py-32 px-4 md:px-8 lg:px-16 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-100/30 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-stone-100/40 to-transparent rounded-full blur-3xl"></div>

            <div className="container mx-auto relative z-10">
                {/* Enhanced Header Section */}
                <motion.div
                    className="text-center mb-32"
                    style={{ y: headerY, opacity: headerOpacity }}
                >
                    <motion.span
                        className="inline-block text-amber-600 text-sm font-medium tracking-[0.2em] uppercase mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Philosophy & Design
                    </motion.span>

                    <motion.h2
                        className="text-5xl md:text-6xl lg:text-7xl font-extralight text-stone-800 mb-8 leading-[1.1]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        A SANCTUARY
                        <span className="block text-transparent bg-gradient-to-r from-amber-600 to-stone-600 bg-clip-text">
                            WOVEN FROM NATURE
                        </span>
                    </motion.h2>

                    <motion.div
                        className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Enhanced Image Section */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="sticky top-24 h-[70vh] lg:h-[calc(100vh-12rem)]">
                            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                                {/* Image container with enhanced styling */}
                                <div className="relative h-full bg-stone-100">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={activeImage}
                                            src={activeImage}
                                            alt="Villa Soul Details"
                                            className="absolute inset-0 w-full h-full object-cover"
                                            initial={{ opacity: 0, scale: 1.05 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{
                                                duration: 0.8,
                                                ease: [0.4, 0, 0.2, 1] // Custom cubic-bezier untuk smooth transition
                                            }}
                                        />
                                    </AnimatePresence>

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                                    {/* Feature indicator dots */}
                                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                        {soulContent.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setActiveFeatureIndex(index)}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${ activeFeatureIndex === index
                                                    ? 'bg-white scale-125'
                                                    : 'bg-white/50 hover:bg-white/75'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Enhanced Content Section */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Introduction paragraph with better styling */}
                        <motion.div
                            className="mb-20"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <p className="text-xl text-stone-600 leading-relaxed font-light">
                                More than a place to stay,
                                <span className="font-medium text-stone-800"> Villa Bali </span>
                                is a testament to mindful luxury. Our philosophy is simple: to create a
                                <span className="italic text-amber-700"> serene sanctuary </span>
                                that deeply connects our guests with the profound beauty and tranquil spirit of Bali.
                            </p>
                        </motion.div>

                        {/* Enhanced Feature Cards */}
                        <div className="space-y-12">
                            {soulContent.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`group relative cursor-pointer transition-all duration-500 ${ activeFeatureIndex === index ? 'scale-105' : ''
                                        }`}
                                    onViewportEnter={() => setActiveFeatureIndex(index)}
                                    onClick={() => setActiveFeatureIndex(index)}
                                    whileHover={{ x: 10 }}
                                >
                                    {/* Background card */}
                                    <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${ activeFeatureIndex === index
                                        ? 'bg-gradient-to-r from-amber-50 to-stone-50 shadow-lg'
                                        : 'bg-transparent'
                                        }`}></div>

                                    <div className="relative p-8">
                                        {/* Icon and Title */}
                                        <div className="flex items-start space-x-4 mb-4">
                                            <motion.span
                                                className="text-3xl"
                                                animate={{
                                                    scale: activeFeatureIndex === index ? 1.2 : 1,
                                                    rotate: activeFeatureIndex === index ? 5 : 0
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {item.icon}
                                            </motion.span>
                                            <motion.h3
                                                className="text-2xl lg:text-3xl font-light text-stone-800"
                                                animate={{
                                                    opacity: activeFeatureIndex === index ? 1 : 0.6,
                                                    color: activeFeatureIndex === index ? '#1c1917' : '#57534e'
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {item.title}
                                            </motion.h3>
                                        </div>

                                        {/* Description */}
                                        <motion.p
                                            className="text-stone-600 leading-relaxed mb-6 text-lg"
                                            animate={{
                                                opacity: activeFeatureIndex === index ? 1 : 0.5
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {item.description}
                                        </motion.p>

                                        {/* Highlights */}
                                        <AnimatePresence>
                                            {activeFeatureIndex === index && (
                                                <motion.div
                                                    className="flex flex-wrap gap-2"
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.4 }}
                                                >
                                                    {item.highlights.map((highlight, hIndex) => (
                                                        <motion.span
                                                            key={hIndex}
                                                            className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full"
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: hIndex * 0.1 }}
                                                        >
                                                            ✓ {highlight}
                                                        </motion.span>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Active indicator line */}
                                        <motion.div
                                            className="absolute left-0 top-8 w-1 bg-gradient-to-b from-amber-400 to-stone-400 rounded-full"
                                            animate={{
                                                height: activeFeatureIndex === index ? '80%' : '0%',
                                                opacity: activeFeatureIndex === index ? 1 : 0
                                            }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Call to action */}
                        <motion.div
                            className="mt-16 pt-8 border-t border-stone-200"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <motion.button
                                className="group inline-flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-stone-600 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>Explore Our Villas</span>
                                <motion.span
                                    className="text-lg"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    →
                                </motion.span>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VillaSoul;