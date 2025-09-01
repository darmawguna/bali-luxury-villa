import { useRef } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiExternalLink, FiNavigation, FiMapPin } from 'react-icons/fi';

const Invitation = () => {
    const sectionRef = useRef(null);
    const position = [-8.783784448552293, 115.15396401221429];
    const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${ position[0] },${ position[1] }`;

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);

    const customIcon = new Icon({
        iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNGNTlFMEIiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTIiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjYiIGZpbGw9IiNGNTlFMEIiLz4KPC9zdmc+',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
    });

    return (
        <motion.section
            ref={sectionRef}
            className="relative bg-gradient-to-br from-stone-50 via-white to-amber-50 py-32 overflow-hidden"
            style={{ y: backgroundY }}
        >
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-100/40 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-stone-100/50 to-transparent rounded-full blur-3xl" />

            <motion.div
                className="container mx-auto text-center px-4 relative z-10"
                style={{ y: contentY }}
            >
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div className="inline-flex items-center gap-2 text-amber-600 text-sm font-sans font-medium tracking-[0.2em] uppercase mb-4">
                        <FiMapPin className="w-4 h-4" />
                        <span>Location</span>
                    </motion.div>

                    <motion.h2
                        className="text-5xl md:text-6xl lg:text-7xl font-serif font-extralight text-transparent bg-gradient-to-r from-stone-700 via-stone-600 to-amber-700 bg-clip-text mb-8 leading-[1.1]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        YOUR INVITATION
                        <span className="block text-4xl md:text-5xl font-sans font-light text-stone-500 mt-4">
                            to Paradise
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-stone-600 font-sans font-light max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Discover our sanctuary nestled in the heart of Bali,
                        where luxury meets tranquility in perfect harmony.
                    </motion.p>

                    <motion.div
                        className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-8"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <motion.div
                    className="relative group"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/50">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10 pointer-events-none rounded-3xl" />
                        <MapContainer
                            center={position}
                            zoom={14}
                            scrollWheelZoom={false}
                            style={{ height: '100%', width: '100%' }}
                            className="rounded-3xl"
                        >
                            <TileLayer
                                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker
                                position={position}
                                icon={customIcon}
                                eventHandlers={{
                                    click: () => {
                                        window.open(gmapsUrl, "_blank");
                                    },
                                }}
                            />
                        </MapContainer>
                        <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                            <motion.button
                                className="bg-white/90 backdrop-blur-md text-stone-700 p-3 rounded-xl shadow-lg border border-white/50 hover:bg-white hover:shadow-xl transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiNavigation className="w-5 h-5" />
                            </motion.button>
                        </div>
                        <motion.a
                            href={gmapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-6 right-6 bg-gradient-to-r from-amber-600 to-stone-600 text-white font-sans font-medium text-sm px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 z-20 group/link"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiExternalLink className="w-4 h-4 group-hover/link:rotate-45 transition-transform duration-300" />
                            <span>View on Google Maps</span>
                        </motion.a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        {[
                            { icon: "🏖️", title: "Beach Access", detail: "5 minutes walk" },
                            { icon: "🌺", title: "Cultural Sites", detail: "Ancient temples nearby" },
                            { icon: "🍃", title: "Natural Beauty", detail: "Rice terraces & jungle" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h3 className="text-lg font-serif font-semibold text-stone-800 mb-2">{item.title}</h3>
                                <p className="text-stone-600 text-sm font-sans font-light">{item.detail}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-stone-600 text-white font-sans font-semibold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-400 overflow-hidden"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-stone-600 to-amber-600"
                            initial={{ x: "100%" }}
                            whileHover={{ x: "0%" }}
                            transition={{ duration: 0.4 }}
                        />
                        <span className="relative z-10">Begin Your Story</span>
                        <motion.span
                            className="relative z-10 text-xl"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            →
                        </motion.span>
                    </motion.button>
                    <motion.p
                        className="text-stone-500 text-sm font-sans font-light mt-4 tracking-wide"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        viewport={{ once: true }}
                    >
                        Experience luxury like never before
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Invitation;