// src/pages/HomePage.jsx

import ScrollingHero from '../components/ScrollingHero';

const HomePage = () => {
    return (
        // Gunakan <main> untuk konten utama halaman
        <main>
            <ScrollingHero />

            {/* Section selanjutnya akan dimulai tepat setelah animasi ScrollingHero selesai */}
            <section className="relative bg-white p-12 z-10">
                {/* Tambahkan 'relative z-10' untuk memastikan section ini tampil di atas elemen sticky jika terjadi overlap */}
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-800">
                        Unforgettable Experiences
                    </h2>
                    <p className="text-center mt-4 max-w-2xl mx-auto text-gray-600">
                        Setelah Anda memulai perjalanan, temukan pengalaman tak terlupakan yang telah kami siapkan.
                    </p>
                    {/* Di sini Anda bisa menambahkan komponen lain seperti ExperienceCard, dll. */}
                </div>
            </section>

            <section className="h-screen bg-gray-100 p-12">
                <h2 className="text-4xl font-bold text-center text-gray-800">Section Lainnya</h2>
            </section>

        </main>
    );
};

export default HomePage;