import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const BookingModal = ({ isBookingOpen, setIsBookingOpen }) => {
    // State untuk setiap form field
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // ID hotel ini adalah contoh, di dunia nyata didapat dari API
        const VILLA_BALI_TRAVELOKA_ID = '123456789';

        // Membuat URL redirect ke mesin booking pihak ketiga
        const redirectUrl = `http://googleusercontent.com/en-id/hotel/1-star-villa-bali-123456789?spec=${ checkIn }.${ checkOut }.${ rooms }.${ adults }.${ children }`;

        console.log("Redirecting to:", redirectUrl);

        // Buka halaman booking di tab baru
        window.open(redirectUrl, '_blank');
    };

    // Style yang bisa dipakai ulang untuk input
    const inputStyle = "bg-transparent border-b border-stone-500 py-2 w-full text-white placeholder-stone-400 focus:outline-none focus:border-white transition-colors";

    return (
        <AnimatePresence>
            {isBookingOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="relative bg-stone-800 text-stone-300 p-8 md:p-12 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                    >
                        {/* Tombol Close */}
                        <button onClick={() => setIsBookingOpen(false)} className="absolute top-4 right-4 text-stone-400 hover:text-white">
                            <FiX size={28} />
                        </button>

                        <h2 className="text-3xl font-serif text-white mb-8">Book at Villa Bali</h2>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            {/* Kolom Kiri */}
                            <div>
                                <label className="text-sm text-stone-400">Arrival</label>
                                <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className={inputStyle} required />
                            </div>
                            <div>
                                <label className="text-sm text-stone-400">Departure</label>
                                <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className={inputStyle} required />
                            </div>
                            <div>
                                <label className="text-sm text-stone-400">Rooms</label>
                                <select value={rooms} onChange={(e) => setRooms(e.target.value)} className={inputStyle}>
                                    {[1, 2, 3, 4].map(n => <option key={n} value={n} className="bg-stone-800">{n}</option>)}
                                </select>
                            </div>

                            {/* Kolom Kanan */}
                            <div>
                                <label className="text-sm text-stone-400">Adults</label>
                                <select value={adults} onChange={(e) => setAdults(e.target.value)} className={inputStyle}>
                                    {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n} className="bg-stone-800">{n}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="text-sm text-stone-400">Children</label>
                                <select value={children} onChange={(e) => setChildren(e.target.value)} className={inputStyle}>
                                    {[0, 1, 2, 3, 4].map(n => <option key={n} value={n} className="bg-stone-800">{n}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="text-sm text-stone-400">Promo Code</label>
                                <input type="text" placeholder="Enter Code" className={inputStyle} />
                            </div>

                            {/* Tombol Submit */}
                            <div className="md:col-span-2 flex justify-end mt-4">
                                <button type="submit" className="bg-amber-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-amber-700 transition-colors w-full md:w-auto">
                                    Check Availability
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;