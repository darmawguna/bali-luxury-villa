/* eslint-disable no-unused-vars */
// src/components/Experiences.jsx - STYLED TO MATCH
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiPlay } from 'react-icons/fi';

// Impor gambar-gambar Anda
import diningImg from '../assets/pictures/istockphoto-1048574332-1024x1024.jpg';
import wellnessImg from '../assets/pictures/istockphoto-1048574332-1024x1024.jpg';
import cultureImg from '../assets/pictures/gallery-5.jpg';

// Enhanced data structure matching VillaSoul style
const experiencesData = [
    {
        id: 1,
        title: "Private Dining",
        subtitle: "Culinary Excellence",
        description: "Indulge in a bespoke culinary journey under the stars, where our private chef crafts an intimate dining experience that marries international sophistication with authentic Balinese flavors.",
        imageUrl: diningImg,
        icon: "🍽️",
        highlights: ["Private Chef", "Starlight Setting", "Bespoke Menu"]
    },
    {
        id: 2,
        title: "Wellness & Spa",
        subtitle: "Ancient Healing Arts",
        description: "Rejuvenate your body and soul with time-honored Balinese healing rituals and holistic spa treatments, performed by skilled therapists in our serene sanctuary of wellness.",
        imageUrl: wellnessImg,
        icon: "🧘‍♀️",
        highlights: ["Balinese Rituals", "Holistic Treatments", "Expert Therapists"]
    },
    {
        id: 3,
        title: "Cultural Journey",
        subtitle: "Heritage Experience",
        description: "Immerse yourself in the profound beauty of Balinese culture through curated temple visits, traditional artisan workshops, and authentic cultural encounters that unveil the island's spiritual essence.",
        imageUrl: cultureImg,
        icon: "🏛️",
        highlights: ["Temple Visits", "Artisan Workshops", "Cultural Immersion"]
    },
];

const Experiences = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-advance slides when not hovered
    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % experiencesData.length);
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [isHovered]);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? experiencesData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === experiencesData.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const currentExperience = experiencesData[currentIndex];

    return (
        <section
            className="relative min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background decorative elements - matching VillaSoul */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-100/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-stone-100/30 to-transparent rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 lg:py-24 relative z-10">
                {/* Header Section - matching ScrollingHero style */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="inline-block text-amber-600 text-sm font-medium tracking-[0.2em] uppercase mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Curated Experiences
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-6xl lg:text-7xl font-extralight text-stone-800 leading-[1.1]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        MOMENTS THAT
                        <span className="block text-transparent bg-gradient-to-r from-amber-600 to-stone-600 bg-clip-text">
                            TRANSCEND TIME
                        </span>
                    </motion.h2>

                    <motion.div
                        className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-8"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                </motion.div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 min-h-[70vh]">
                    {/* Image Section */}
                    <motion.div
                        className="w-full lg:w-3/5"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative h-[50vh] lg:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    className="absolute inset-0"
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                                >
                                    <img
                                        src={currentExperience.imageUrl}
                                        alt={currentExperience.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Arrows */}
                            <div className="absolute top-1/2 -translate-y-1/2 z-20 w-full flex justify-between px-6">
                                <motion.button
                                    onClick={goToPrevious}
                                    className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FiChevronLeft size={20} />
                                </motion.button>
                                <motion.button
                                    onClick={goToNext}
                                    className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FiChevronRight size={20} />
                                </motion.button>
                            </div>

                            {/* Slide Indicators */}
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {experiencesData.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${ currentIndex === index
                                            ? 'bg-white scale-125'
                                            : 'bg-white/50 hover:bg-white/75'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section - matching VillaSoul style */}
                    <motion.div
                        className="w-full lg:w-2/5 flex flex-col justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-8"
                            >
                                {/* Icon and Subtitle */}
                                <div className="flex items-center space-x-4">
                                    <motion.span
                                        className="text-4xl"
                                        animate={{ rotate: [0, 5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        {currentExperience.icon}
                                    </motion.span>
                                    <span className="text-amber-600 text-sm font-medium tracking-[0.2em] uppercase">
                                        {currentExperience.subtitle}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-4xl lg:text-5xl font-extralight text-stone-800 leading-tight">
                                    {currentExperience.title}
                                </h3>

                                {/* Description */}
                                <p className="text-lg text-stone-600 leading-relaxed font-light">
                                    {currentExperience.description}
                                </p>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2">
                                    {currentExperience.highlights.map((highlight, index) => (
                                        <motion.span
                                            key={index}
                                            className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            ✓ {highlight}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <motion.button
                                    className="group inline-flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-stone-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FiPlay size={16} />
                                    <span>Discover More</span>
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                    >
                                        →
                                    </motion.span>
                                </motion.button>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-stone-200">
                <motion.div
                    className="h-full bg-gradient-to-r from-amber-400 to-stone-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: (currentIndex + 1) / experiencesData.length }}
                    transition={{ duration: 0.5 }}
                    style={{ transformOrigin: "0%" }}
                />
            </div>
        </section>
    );
};

export default Experiences;