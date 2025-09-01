// src/components/ScrollingHero.jsx - OPTIMIZED VERSION

import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

// Impor aset Anda
import villaVideo from '../assets/video/Hero-vid.mp4';
import villaPanorama from '../assets/pictures/gallery-1.jpg';

const ScrollingHero = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    // PERBAIKAN: Animasi yang lebih cepat dan responsif
    const videoScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]); // Lebih cepat scale down
    const videoX = useTransform(scrollYProgress, [0, 0.4], ['0%', '70%']); // Bergerak lebih jauh ke kanan
    const videoY = useTransform(scrollYProgress, [0, 0.4], ['0%', '-60%']); // Bergerak lebih tinggi

    // Teks awal fade out lebih cepat
    const initialTextOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    // Konten muncul lebih cepat dan lebih smooth
    const lookTextOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
    const lookTextY = useTransform(scrollYProgress, [0.15, 0.35], ['50px', '0px']);

    const panoramaImageOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
    const panoramaImageY = useTransform(scrollYProgress, [0.35, 0.55], ['50px', '0px']);

    const perfectionTextOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
    const perfectionTextY = useTransform(scrollYProgress, [0.55, 0.75], ['50px', '0px']);

    // PERBAIKAN: Fade out semua elemen di akhir untuk transisi yang smooth ke section berikutnya
    const allElementsOpacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

    return (
        // PERBAIKAN: Tinggi dikurangi dari 300vh ke 200vh
        <section ref={targetRef} className="relative h-[200vh] bg-stone-100">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Konten Teks */}
                <motion.div
                    style={{ opacity: allElementsOpacity }}
                    className="absolute w-full max-w-5xl mx-auto px-8 z-10"
                >
                    {/* LOOK Section */}
                    <motion.div
                        style={{ opacity: lookTextOpacity, y: lookTextY }}
                        className="flex justify-between items-center mb-8"
                    >
                        <div className="text-stone-400">
                            <span className="text-6xl md:text-8xl font-thin tracking-wider">LOOK</span>
                            <p className="ml-2 text-lg md:text-xl">BEYOND LIMITS.</p>
                        </div>
                    </motion.div>

                    {/* FIND Section dengan Image */}
                    <motion.div
                        style={{ opacity: panoramaImageOpacity, y: panoramaImageY }}
                        className="flex flex-col md:flex-row justify-center items-center my-8 gap-8"
                    >
                        <motion.img
                            src={villaPanorama}
                            className="w-full md:w-2/3 h-32 md:h-40 object-cover rounded-lg shadow-lg"
                            alt="Villa Panorama"
                            // Tambahan: Image juga memiliki subtle animation
                            style={{
                                scale: useTransform(scrollYProgress, [0.35, 0.55], [0.9, 1])
                            }}
                        />
                        <span className="text-6xl md:text-8xl font-thin text-stone-400">FIND</span>
                    </motion.div>

                    {/* PERFECTION Section */}
                    <motion.div
                        style={{ opacity: perfectionTextOpacity, y: perfectionTextY }}
                        className="text-center"
                    >
                        <h2 className="text-5xl md:text-7xl font-thin text-stone-600 tracking-widest">
                            TRUE PERFECTION.
                        </h2>
                    </motion.div>
                </motion.div>

                {/* Video Background */}
                <motion.video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{
                        scale: videoScale,
                        x: videoX,
                        y: videoY,
                        opacity: useTransform(scrollYProgress, [0.9, 1], [1, 0.3]) // Video fade out di akhir
                    }}
                    src={villaVideo}
                    autoPlay
                    loop
                    muted
                />

                {/* Hero Title */}
                <motion.h1
                    style={{ opacity: initialTextOpacity }}
                    className="absolute text-5xl md:text-6xl lg:text-8xl font-serif text-white z-20 text-center px-4"
                >
                    Villa Bali
                </motion.h1>

                {/* TAMBAHAN: Overlay gradient untuk transisi yang lebih smooth */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-100 pointer-events-none z-5"
                    style={{
                        opacity: useTransform(scrollYProgress, [0.7, 1], [0, 0.8])
                    }}
                />
            </div>
        </section>
    );
};

export default ScrollingHero;