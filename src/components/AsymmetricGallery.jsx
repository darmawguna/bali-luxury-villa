import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// --- Import your gallery images ---
import gallery1 from '../assets/pictures/gallery-1.jpg';
import gallery2 from '../assets/pictures/gallery-2.jpg';
import gallery3 from '../assets/pictures/gallery-3.jpg';
import gallery4 from '../assets/pictures/gallery-4.jpg';
import gallery5 from '../assets/pictures/gallery-5.jpg';

const galleryData = [
    { id: 1, src: gallery1, alt: "Villa Sanctuary Pool" },
    { id: 2, src: gallery2, alt: "Interior Living Space" },
    { id: 3, src: gallery3, alt: "Bedroom Sanctuary" },
    { id: 4, src: gallery4, alt: "Dining Experience" },
    { id: 5, src: gallery5, alt: "Wellness Space" },
];

const AsymmetricGallery = () => {
    // State for the mobile carousel
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        const isLastSlide = currentIndex === galleryData.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? galleryData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    return (
        <section className="bg-stone-100 py-24 px-4 md:px-8">
            <div className="container mx-auto">
                {/* ======================= PERUBAHAN DI SINI ======================= */}
                <h2 className="text-center text-5xl font-serif text-stone-800 mb-16">
                    OUR SANCTUARY
                </h2>
                {/* =================================================================== */}

                {/* ======================= MOBILE VIEW: CAROUSEL ======================= */}
                <div className="md:hidden">
                    <div className="relative h-[60vh] rounded-lg overflow-hidden shadow-lg">
                        <AnimatePresence initial={false}>
                            <motion.img
                                key={currentIndex}
                                src={galleryData[currentIndex].src}
                                alt={galleryData[currentIndex].alt}
                                className="absolute w-full h-full object-cover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button onClick={goToPrevious} className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/50 p-2 rounded-full text-stone-800">
                            <FiChevronLeft size={24} />
                        </button>
                        <button onClick={goToNext} className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/50 p-2 rounded-full text-stone-800">
                            <FiChevronRight size={24} />
                        </button>
                    </div>
                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-4">
                        {galleryData.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full ${ currentIndex === index ? 'bg-stone-800' : 'bg-stone-300' }`}
                            />
                        ))}
                    </div>
                </div>

                {/* ======================= DESKTOP VIEW: ASYMMETRIC GRID ======================= */}
                <div className="hidden md:grid grid-cols-12 auto-rows-[200px] gap-4 h-[90vh]">
                    <div className="col-span-5 row-span-2 relative rounded-lg overflow-hidden shadow-lg">
                        <img src={galleryData[0].src} alt={galleryData[0].alt} className="w-full h-full object-cover" />
                    </div>
                    <div className="col-span-3 row-span-3 relative rounded-lg overflow-hidden shadow-lg">
                        <img src={galleryData[1].src} alt={galleryData[1].alt} className="w-full h-full object-cover" />
                    </div>
                    <div className="col-span-4 row-span-2 relative rounded-lg overflow-hidden shadow-lg">
                        <img src={galleryData[2].src} alt={galleryData[2].alt} className="w-full h-full object-cover" />
                    </div>
                    <div className="col-span-4 row-span-2 relative rounded-lg overflow-hidden shadow-lg md:col-start-6">
                        <img src={galleryData[3].src} alt={galleryData[3].alt} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AsymmetricGallery;