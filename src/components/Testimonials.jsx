/* eslint-disable no-unused-vars */
// src/components/Testimonials.jsx - STYLED TO MATCH
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import your testimonial background images
import testimonial1 from '../assets/pictures/gallery-3.jpg';
import testimonial2 from '../assets/pictures/gallery-5.jpg';

// Enhanced data structure with ratings and locations
const testimonialsData = [
    {
        id: 1,
        quote: "An experience that transcends luxury; it's a sanctuary for the soul where every moment feels like poetry written in paradise.",
        author: "Amelia & Liam",
        location: "London, UK",
        rating: 5,
        imageUrl: testimonial1,
        stay: "7 nights in Villa Soul"
    },
    {
        id: 2,
        quote: "Every detail was a masterpiece of design and nature. We left a part of our hearts in this villa and found a piece of heaven we never knew existed.",
        author: "Kenji & Hana",
        location: "Tokyo, Japan",
        rating: 5,
        imageUrl: testimonial2,
        stay: "10 nights in Villa Heritage"
    },
];

// Enhanced testimonial card with luxury styling
const TestimonialCard = ({ quote, author, location, rating, imageUrl, stay }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Parallax effects
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

    // Text animation variants
    const textContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: 0.3,
                duration: 0.8
            }
        }
    };

    const textWordVariants = {
        hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y, scale }}
            >
                <img
                    src={imageUrl}
                    alt={`Background for testimonial by ${ author }`}
                    className="w-full h-full object-cover"
                />

                {/* Gradient Overlays for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            </motion.div>

            {/* Content Container */}
            <motion.div
                className="relative z-10 text-white text-center max-w-5xl mx-auto px-8 md:px-16"
                style={{ opacity }}
            >
                {/* Rating Stars */}
                <motion.div
                    className="flex justify-center mb-8"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {[...Array(rating)].map((_, i) => (
                        <motion.span
                            key={i}
                            className="text-amber-400 text-2xl mx-1"
                            initial={{ opacity: 0, rotate: -180 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                            viewport={{ once: true }}
                        >
                            ★
                        </motion.span>
                    ))}
                </motion.div>

                {/* Quote with word-by-word animation */}
                <motion.blockquote
                    className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight mb-12"
                    variants={textContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <span className="text-amber-400 text-6xl leading-none">"</span>
                    {quote.split(" ").map((word, index) => (
                        <motion.span
                            key={index}
                            variants={textWordVariants}
                            className="inline-block mr-[0.25em]"
                        >
                            {word}
                        </motion.span>
                    ))}
                    <span className="text-amber-400 text-6xl leading-none">"</span>
                </motion.blockquote>

                {/* Author Information */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    viewport={{ once: true }}
                >
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>

                    <p className="text-xl md:text-2xl font-medium tracking-wider">
                        — {author}
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-stone-300">
                        <span className="text-sm tracking-[0.2em] uppercase">
                            {location}
                        </span>
                        <span className="hidden md:block text-amber-400">•</span>
                        <span className="text-sm italic">
                            {stay}
                        </span>
                    </div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                    className="absolute -top-8 -left-8 w-16 h-16 border border-amber-400/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute -bottom-8 -right-8 w-12 h-12 border border-stone-400/30 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>
        </section>
    );
};

// Main Testimonials Component
const Testimonials = () => {
    return (
        <div className="bg-gradient-to-br from-stone-50 via-white to-amber-50">
            {/* Header Section - matching other components */}
            <motion.div
                className="py-24 md:py-32 text-center relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-100/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-stone-100/30 to-transparent rounded-full blur-3xl"></div>

                <div className="relative z-10">
                    <motion.span
                        className="inline-block text-amber-600 text-sm font-medium tracking-[0.2em] uppercase mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Guest Testimonials
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-6xl lg:text-7xl font-extralight text-stone-800 mb-8 leading-[1.1]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        VOICES OF
                        <span className="block text-transparent bg-gradient-to-r from-amber-600 to-stone-600 bg-clip-text">
                            CHERISHED GUESTS
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
                        Every story is a testament to the transformative power of mindful luxury,
                        where exceptional experiences create lasting memories and profound connections.
                    </motion.p>
                </div>
            </motion.div>

            {/* Testimonial Cards */}
            <div>
                {testimonialsData.map(testimonial => (
                    <TestimonialCard
                        key={testimonial.id}
                        quote={testimonial.quote}
                        author={testimonial.author}
                        location={testimonial.location}
                        rating={testimonial.rating}
                        imageUrl={testimonial.imageUrl}
                        stay={testimonial.stay}
                    />
                ))}
            </div>

            {/* Call to Action Section */}
            <motion.div
                className="py-24 text-center bg-gradient-to-b from-transparent to-stone-100/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.h3
                    className="text-2xl md:text-3xl font-light text-stone-700 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Ready to create your own unforgettable story?
                </motion.h3>

                <motion.button
                    className="group inline-flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-stone-600 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <span>Begin Your Journey</span>
                    <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        →
                    </motion.span>
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Testimonials;