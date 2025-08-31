// src/components/ScrollingHero.jsx

import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

// Impor aset Anda
import villaVideo from '../assets/video/Hero-vid.mp4';
import villaPanorama from '../assets/pictures/hero-pic.jpg';

const ScrollingHero = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    // Animasi untuk Video
    const videoScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.4]);
    const videoX = useTransform(scrollYProgress, [0, 0.2], ['0%', '65%']);
    const videoY = useTransform(scrollYProgress, [0, 0.2], ['0%', '-50%']);

    // Animasi untuk Teks Awal ("Villa Bali")
    const initialTextOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

    // Animasi untuk Konten yang Muncul Saat Scroll
    const lookTextOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
    const lookTextY = useTransform(scrollYProgress, [0.2, 0.3], ['30px', '0px']);
    const panoramaImageOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
    const panoramaImageY = useTransform(scrollYProgress, [0.4, 0.5], ['30px', '0px']);
    const perfectionTextOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
    const perfectionTextY = useTransform(scrollYProgress, [0.6, 0.7], ['30px', '0px']);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-stone-100">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute w-full max-w-4xl mx-auto px-8 z-10"> {/* Tambahkan z-10 agar di atas video */}
                    <motion.div style={{ opacity: lookTextOpacity, y: lookTextY }} className="flex justify-between items-center">
                        <div className="text-stone-400">
                            <span className="text-8xl font-thin tracking-wider">LOOK</span>
                            <p className="ml-2">BEYOND LIMITS.</p>
                        </div>
                    </motion.div>
                    <motion.div style={{ opacity: panoramaImageOpacity, y: panoramaImageY }} className="flex justify-center items-center my-8 gap-8">
                        <img src={villaPanorama} className="w-2/3 h-40 object-cover" alt="Villa Panorama" />
                        <span className="text-8xl font-thin text-stone-400">FIND</span>
                    </motion.div>
                    <motion.div style={{ opacity: perfectionTextOpacity, y: perfectionTextY }} className="text-center">
                        <h2 className="text-7xl font-thin text-stone-600 tracking-widest">TRUE PERFECTION.</h2>
                    </motion.div>
                </div>

                {/* ======================= PERUBAHAN DI SINI ======================= */}
                <motion.video
                    className="absolute top-0 left-0 w-full h-full object-cover" // <-- DIUBAH
                    style={{
                        scale: videoScale,
                        x: videoX,
                        y: videoY,
                    }}
                    src={villaVideo} autoPlay loop muted
                />
                <motion.h1
                    style={{ opacity: initialTextOpacity }}
                    className="absolute text-6xl md:text-8xl font-serif text-white z-20" // <-- DIUBAH: Tambah z-20
                >
                    Villa Bali
                </motion.h1>
                {/* =================================================================== */}

            </div>
        </section>
    );
};

export default ScrollingHero;