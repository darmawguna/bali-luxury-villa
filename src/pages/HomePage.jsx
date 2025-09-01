// src/pages/HomePage.jsx

import { useState, useEffect } from 'react';
import Preloader from '../components/Preloader';
import ScrollingHero from '../components/ScrollingHero';
import VillaSoul from '../components/VillaSoul';
import AsymmetricGallery from '../components/AsymmetricGallery';
// import Experiences from '../components/Experiences';
import Experiences from '../components/Expreriences';
import Testimonials from '../components/Testimonials';
import Invitation from '../components/Invitation';

const HomePage = () => {
    // Simple state for controlling the preloader
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate asset loading
        const timer = setTimeout(() => setLoading(false), 2000); // Hide preloader after 2 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <Preloader />}
            <main className={loading ? 'hidden' : 'block'}>
                <ScrollingHero />
                <VillaSoul />
                <AsymmetricGallery />
                <Experiences />
                <Testimonials />
                <Invitation />
            </main>
        </>
    );
};

export default HomePage;