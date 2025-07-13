"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    name: "Interest & Talent Test",
    description:
      "Recognize your unique potential and find the right career path.",
    longDescription:
      "This test is designed to help you understand your natural strengths, hidden interests, and areas you could explore in the future.",
    image:
      "https://plus.unsplash.com/premium_photo-1665990294874-36ff13d2b66d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    name: "Counseling Session",
    description:
      "Tell your worries to a trusted psychologist. A safe space for everyone.",
    longDescription:
      "We provide empathetic and professional counseling sessions so you can express yourself, heal your inner wounds, and find a way out.",
    image:
      "https://plus.unsplash.com/premium_photo-1664372145617-e81a4374c3df?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    name: "Online IQ Test",
    description: "Test your logic skills with a quick and accurate IQ test.",
    longDescription:
      "Our IQ test is digital and fast, providing a clear picture of your logical, problem-solving, and reasoning abilities.",
    image:
      "https://images.unsplash.com/photo-1516553250341-748edab67bc6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
];

const testimonials = [
  {
    name: "Ayu P.",
    quote:
      "The counseling session was so relieving. I felt heard and understood.",
  },
  {
    name: "Raka S.",
    quote:
      "The aptitude test helped me choose the right major for my studies. Thanks Hello Life!",
  },
  {
    name: "Sinta L.",
    quote: "The IQ test is quick and the results are insightful!",
  },
  {
    name: "Dimas R.",
    quote:
      "At first I was hesitant to join online counseling, but it turned out to be very professional and reassuring.",
  },
  {
    name: "Lia M.",
    quote:
      "I became more confident after knowing my potential through the Hello Life test!",
  },
  {
    name: "Fajar N.",
    quote:
      "Fast service, clear test results, and the counseling is reassuring. Recommended!",
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
          🌱 Our Services
        </h2>
        <p className="text-gray-600 mt-3 text-base sm:text-lg max-w-xl mx-auto">
          Support your mental health journey together{" "}
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
                  📞 Contact Us
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center mt-20">
        <h3 className="text-3xl sm:text-4xl font-bold text-[#B17F59] font-cherry mb-6">
          💬 Customer Testimonials
        </h3>

        <div className="bg-white rounded-xl shadow p-6 border border-[#D5E2B6] transition-all duration-300">
          <p className="text-gray-800 italic mb-4">
            &quot;{testimonials[current].quote}&quot;
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
