"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Mock profile images (replace with your actual image imports)
const profile1 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face";
const profile2 = "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop&crop=face";
const profile3 = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face";

const testimonials = [
  {
    id: 1,
    name: "Aravind",
    feedback: "Sri Balaji Homes made the entire land-buying journey easy and transparent. Highly recommended!",
    image: profile1,
  },
  {
    id: 2,
    name: "Priya Ramesh",
    feedback: "Invested in a plot near Kundrathur. Excellent connectivity and great future value",
    image: profile2,
  },
  {
    id: 3,
    name: "Karthik",
    feedback: "They helped with Patta, fencing, and follow-up documentation without any extra charges",
    image: profile3,
  },
  {
    id: 4,
    name: "Rajesh",
    feedback: "Professional service with complete transparency. Got my plot registered without any hassle.",
    image: profile1,
  },
  {
    id: 5,
    name: "Sneha",
    feedback: "Good investment opportunity with clear titles. Appreciate their customer support.",
    image: profile2,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
              What Client Say
            </h2>
            <p className="text-gray-600 max-w-md text-lg">
              Trusted by thousands of happy plot buyers across Chennai.
            </p>
          </div>
          {/* Navigation buttons */}
          <div className="hidden md:flex gap-3 mt-6 md:mt-0">
            <button className="testimonial-nav-prev border border-gray-300 rounded-full p-3 hover:bg-gray-100 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button className="testimonial-nav-next border border-gray-300 rounded-full p-3 hover:bg-gray-100 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".testimonial-pagination",
            bulletClass: "testimonial-bullet",
            bulletActiveClass: "testimonial-bullet-active",
          }}
          navigation={{
            nextEl: ".testimonial-nav-next",
            prevEl: ".testimonial-nav-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-4 h-full border border-gray-100 mb-10">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  
                </div>
                <p className="text-gray-700 text-md leading-relaxed mt-2 line-clamp-2 ">"{t.feedback}"</p>
                <span className="font-semibold text-gray-800">- &nbsp;{t.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom pagination */}
        <div className="testimonial-pagination flex justify-center gap-2 mt-2 md:hidden" />
      </div>

      <style jsx global>{`
        .testimonial-pagination {
          display: flex;
          justify-content: center;
          margin-top: 1.5rem;
        }
        
        .testimonial-bullet {
          width: 10px;
          height: 10px;
          background-color: #D1D5DB;
          border-radius: 50%;
          margin: 0 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .testimonial-bullet-active {
          background-color: #4F46E5;
          width: 30px;
          border-radius: 10px;
        }
        
        @media (min-width: 768px) {
          .testimonial-pagination {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}