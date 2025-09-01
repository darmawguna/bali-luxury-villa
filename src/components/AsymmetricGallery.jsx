import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// --- Import your gallery images ---
import gallery1 from "../assets/pictures/gallery-1.jpg";
import gallery2 from "../assets/pictures/gallery-2.jpg";
import gallery3 from "../assets/pictures/gallery-3.jpg";
import gallery4 from "../assets/pictures/gallery-4.jpg";
import gallery5 from "../assets/pictures/gallery-5.jpg";

const galleryData = [
    { id: 1, src: gallery1, alt: "Villa Sanctuary Pool" },
    { id: 2, src: gallery2, alt: "Interior Living Space" },
    { id: 3, src: gallery3, alt: "Bedroom Sanctuary" },
    { id: 4, src: gallery4, alt: "Dining Experience" },
    { id: 5, src: gallery5, alt: "Wellness Space" },
];

const AsymmetricGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prev) =>
            prev === galleryData.length - 1 ? 0 : prev + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? galleryData.length - 1 : prev - 1
        );
    };

    return (
        <section className="bg-stone-100 py-24 px-4 md:px-8">
            <div className="container mx-auto">
                <h2 className="text-center text-4xl md:text-5xl font-serif text-stone-800 mb-12 md:mb-20">
                    OUR SANCTUARY
                </h2>

                {/* ======================= MOBILE VIEW: CAROUSEL ======================= */}
                <div className="md:hidden">
                    <div className="relative h-[60vh] rounded-xl overflow-hidden shadow-lg">
                        <AnimatePresence initial={false}>
                            <motion.img
                                key={currentIndex}
                                src={galleryData[currentIndex].src}
                                alt={galleryData[currentIndex].alt}
                                className="absolute w-full h-full object-cover"
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.6 }}
                            />
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button
                            onClick={goToPrevious}
                            className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/60 hover:bg-white/80 p-2 rounded-full text-stone-800 transition"
                        >
                            <FiChevronLeft size={26} />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/60 hover:bg-white/80 p-2 rounded-full text-stone-800 transition"
                        >
                            <FiChevronRight size={26} />
                        </button>
                    </div>
                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-4">
                        {galleryData.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2.5 h-2.5 rounded-full transition ${ currentIndex === index
                                    ? "bg-stone-800 scale-110"
                                    : "bg-stone-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* ======================= DESKTOP VIEW: ASYMMETRIC GRID ======================= */}
                <div className="hidden md:grid grid-cols-12 auto-rows-[200px] gap-4 h-[100vh]">
                    <div className="col-span-6 row-span-3 relative rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={galleryData[0].src}
                            alt={galleryData[0].alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="col-span-3 row-span-2 relative rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={galleryData[1].src}
                            alt={galleryData[1].alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="col-span-3 row-span-2 relative rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={galleryData[2].src}
                            alt={galleryData[2].alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="col-span-4 row-span-2 relative rounded-xl overflow-hidden shadow-lg col-start-3">
                        <img
                            src={galleryData[3].src}
                            alt={galleryData[3].alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="col-span-5 row-span-2 relative rounded-xl overflow-hidden shadow-lg col-start-8">
                        <img
                            src={galleryData[4].src}
                            alt={galleryData[4].alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AsymmetricGallery;
