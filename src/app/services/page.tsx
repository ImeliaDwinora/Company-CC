"use client"

import Image from "next/image";
import { useState } from "react";


const services = [
  {
    name: "Tes Minat & Bakat",
    description: "Kenali potensi unikmu dan temukan arah karier yang sesuai.",
    longDescription:
      "Tes ini dirancang untuk membantu kamu memahami kekuatan alami, minat tersembunyi, dan bidang yang bisa kamu eksplorasi untuk masa depan.",
    image:
      "https://plus.unsplash.com/premium_photo-1665990294874-36ff13d2b66d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    name: "Sesi Konseling",
    description:
      "Ceritakan bebanmu pada psikolog terpercaya. Ruang aman untuk semua.",
    longDescription:
      "Kami menyediakan sesi konseling yang empatik dan profesional agar kamu dapat mengekspresikan diri, menyembuhkan luka batin, dan menemukan jalan keluar.",
    image:
      "https://plus.unsplash.com/premium_photo-1664372145617-e81a4374c3df?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    name: "Tes IQ Online",
    description: "Uji kemampuan logikamu dengan tes IQ cepat dan akurat.",
    longDescription:
      "Tes IQ kami berbasis digital dan cepat, memberikan gambaran jelas mengenai kemampuan logika, pemecahan masalah, dan daya nalar kamu.",
    image:
      "https://images.unsplash.com/photo-1516553250341-748edab67bc6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
];

const testimonials = [
  {
    name: "Ayu P.",
    quote:
      "Sesi konselingnya bikin lega banget. Aku merasa didengar dan dipahami.",
  },
  {
    name: "Raka S.",
    quote:
      "Tes minat bakatnya membantu aku memilih jurusan kuliah yang cocok. Thanks Hello Life!",
  },
  {
    name: "Sinta L.",
    quote:
      "Website-nya simpel tapi informatif. Tes IQ-nya cepat dan hasilnya insightful!",
  },
  {
    name: "Dimas R.",
    quote:
      "Awalnya ragu ikut konseling online, tapi ternyata sangat profesional dan menenangkan.",
  },
  {
    name: "Lia M.",
    quote:
      "Saya jadi lebih percaya diri setelah tahu potensi diri lewat tes Hello Life!",
  },
  {
    name: "Fajar N.",
    quote:
      "Pelayanan cepat, hasil tes jelas, dan konselingnya bikin hati lebih tenang. Recommended!",
  },
];


export default function Services() {
   const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  return (
    <section className="py-16 px-6 bg-amber-50 min-h-screen">
      {/* Judul Layanan */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#B17F59] font-cherry">
          🌱 Layanan Kami
        </h2>
        <p className="text-gray-600 mt-3 text-base sm:text-lg max-w-xl mx-auto">
          Dukung perjalanan kesehatan mentalmu bersama{" "}
          <strong>Hello Life</strong>.
        </p>
      </div>

      {/* Card Layanan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-30">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col"
          >
            <div className="relative w-full h-56">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#56776C] mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  {service.description}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {service.longDescription}
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="https://wa.me/08117892303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#B17F59] hover:bg-[#a36f48] text-white text-sm font-medium py-2 px-4 rounded-lg transition duration-300"
                >
                  📞 Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center mt-20">
        <h3 className="text-3xl sm:text-4xl font-bold text-[#B17F59] font-cherry mb-6">
          💬 Testimoni Pelanggan
        </h3>

        <div className="bg-white rounded-xl shadow p-6 border border-[#D5E2B6] transition-all duration-300">
          <p className="text-gray-800 italic mb-4">
            "{testimonials[current].quote}"
          </p>
          <p className="text-[#56776C] font-semibold">
            — {testimonials[current].name}
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={handlePrev}
            className="bg-[#D9C5A0] hover:bg-[#c9b08a] text-white py-2 px-4 rounded-lg"
          >
            ← Prev
          </button>
          <button
            onClick={handleNext}
            className="bg-[#D9C5A0] hover:bg-[#c9b08a] text-white py-2 px-4 rounded-lg"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
