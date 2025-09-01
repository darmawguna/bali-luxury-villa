// src/components/BookingModal.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import bookingImage from '../assets/pictures/gallery-2.jpg';

const BookingModal = ({ isBookingOpen, setIsBookingOpen }) => {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const VILLA_BALI_TRAVELOKA_ID = '123456789';
        const redirectUrl = `http://googleusercontent.com/en-id/hotel/1-star-villa-bali-123456789?spec=${ checkIn }.${ checkOut }.${ rooms }.${ adults }.${ children }`;
        window.open(redirectUrl, '_blank');
    };

    const inputStyle =
        'bg-stone-100/50 border border-stone-200 py-3 px-4 w-full rounded-lg text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300';

    return (
        <AnimatePresence>
            {isBookingOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 50, opacity: 0, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="relative bg-gradient-to-br from-stone-50 via-white to-amber-50 w-full max-w-5xl max-h-[90vh] h-full sm:h-auto rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                    >
                        {/* Background decorative elements */}
                        <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-amber-100/50 to-transparent rounded-full blur-3xl" />
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-tl from-stone-100/50 to-transparent rounded-full blur-3xl" />

                        {/* Scrollable Content */}
                        <div className="relative z-10 flex-grow overflow-y-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                                {/* Left Column: Image */}
                                <div className="hidden lg:block relative">
                                    <img
                                        src={bookingImage}
                                        alt="Villa Interior"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>

                                {/* Right Column: Form */}
                                <div className="flex flex-col h-full">
                                    {/* Close button */}
                                    <button
                                        onClick={() => setIsBookingOpen(false)}
                                        className="absolute top-6 right-6 text-stone-500 hover:text-stone-800 transition-colors z-20"
                                    >
                                        <FiX size={24} />
                                    </button>

                                    {/* Header */}
                                    <div className="flex-shrink-0 p-6 md:p-12">
                                        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-2">
                                            Book Your Stay
                                        </h2>
                                        <p className="font-sans text-stone-500">
                                            Select your dates to begin a memorable journey.
                                        </p>
                                    </div>

                                    {/* Form */}
                                    <div className="flex-grow overflow-y-auto px-6 md:px-12 pb-6">
                                        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                                            <div>
                                                <label className="text-sm font-sans text-stone-500 mb-2 block">
                                                    Arrival
                                                </label>
                                                <input
                                                    type="date"
                                                    value={checkIn}
                                                    onChange={(e) => setCheckIn(e.target.value)}
                                                    className={inputStyle}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="text-sm font-sans text-stone-500 mb-2 block">
                                                    Departure
                                                </label>
                                                <input
                                                    type="date"
                                                    value={checkOut}
                                                    onChange={(e) => setCheckOut(e.target.value)}
                                                    className={inputStyle}
                                                    required
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="text-sm font-sans text-stone-500 mb-2 block">
                                                    Rooms
                                                </label>
                                                <select
                                                    value={rooms}
                                                    onChange={(e) => setRooms(e.target.value)}
                                                    className={inputStyle}
                                                >
                                                    {[1, 2, 3, 4].map((n) => (
                                                        <option key={n} value={n}>
                                                            {n}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-sm font-sans text-stone-500 mb-2 block">
                                                    Adults
                                                </label>
                                                <select
                                                    value={adults}
                                                    onChange={(e) => setAdults(e.target.value)}
                                                    className={inputStyle}
                                                >
                                                    {[1, 2, 3, 4, 5, 6].map((n) => (
                                                        <option key={n} value={n}>
                                                            {n}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-sm font-sans text-stone-500 mb-2 block">
                                                    Children
                                                </label>
                                                <select
                                                    value={children}
                                                    onChange={(e) => setChildren(e.target.value)}
                                                    className={inputStyle}
                                                >
                                                    {[0, 1, 2, 3, 4].map((n) => (
                                                        <option key={n} value={n}>
                                                            {n}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </form>
                                    </div>

                                    {/* Sticky Footer Button */}
                                    <div className="flex-shrink-0 p-6 md:p-12 bg-gradient-to-t from-white to-transparent">
                                        <motion.button
                                            onClick={handleSubmit}
                                            type="submit"
                                            className="w-full md:w-auto group relative inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-stone-600 text-white font-sans font-semibold text-base px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-400 overflow-hidden"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-stone-600 to-amber-600"
                                                initial={{ x: '100%' }}
                                                whileHover={{ x: '0%' }}
                                                transition={{ duration: 0.4 }}
                                            />
                                            <span className="relative z-10">Check Availability</span>
                                            <motion.span
                                                className="relative z-10 text-xl"
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ repeat: Infinity, duration: 2 }}
                                            >
                                                →
                                            </motion.span>
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
