// src/pages/HomePage.jsx

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'; // 1. Impor AnimatePresence
import Preloader from '../components/Preloader';
import ScrollingHero from '../components/ScrollingHero';
import VillaSoul from '../components/VillaSoul';
import AsymmetricGallery from '../components/AsymmetricGallery';
import Experiences from '../components/Expreriences'; // 2. Perbaiki typo di sini
import Testimonials from '../components/Testimonials';
import Invitation from '../components/Invitation';

const HomePage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* 3. Bungkus Preloader dengan AnimatePresence */}
            <AnimatePresence>
                {loading && <Preloader />}
            </AnimatePresence>

            {/* 4. Hapus class 'hidden' dan tampilkan main content saat loading selesai */}
            {!loading && (
                <main>
                    <ScrollingHero />
                    <VillaSoul />
                    <AsymmetricGallery />
                    <Experiences />
                    <Testimonials />
                    <Invitation />
                </main>
            )}
        </>
    );
};

export default HomePage;