import React from 'react';
import { StarFilled } from '@ant-design/icons';
import './AboutEl.css';
import ServicesSection from '../AboutServicesEl';

const TestimonialsSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-purple-800 to-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-600 blur-lg"></div> {/* Glow background */}
      <div className="text-center px-6 max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl font-extrabold text-white mb-12 tracking-wide neon-text">
          What Our Clients Say
        </h2>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-stretch">
          
          {/* Testimonial 1 */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-10 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl duration-300 flex flex-col justify-between max-w-sm neon-card">
            <div>
              <div className="flex justify-center mb-6 text-yellow-400">
                <StarFilled className="text-3xl neon-star" />
                <StarFilled className="text-3xl neon-star" />
                <StarFilled className="text-3xl neon-star" />
                <StarFilled className="text-3xl neon-star" />
                <StarFilled className="text-3xl neon-star" />
              </div>
              <p className="text-lg text-white mb-6 leading-relaxed font-medium italic">
                "Webitya has been crucial in expanding our online reach. Their approach to digital marketing is innovative and effective."
              </p>
            </div>
            <p className="text-xl text-pink-400 font-semibold text-right">- Aditya Kumar</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-10 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl duration-300 flex flex-col justify-between max-w-sm neon-card">
            <div>
              <div className="flex justify-center mb-6 text-yellow-400">
                <StarFilled className="text-3xl neon-star" />
                <StarFilled className="text-3xl neon-star" />
                <StarFilled className="text-3xl neon-star" />
                <StarFilled className="text-3xl neon-star" />
                <StarFilled className="text-3xl neon-star" />
              </div>
              <p className="text-lg text-white mb-6 leading-relaxed font-medium italic">
                "Their team transformed our brand's online presence, especially through SEO and social media. Excellent service!"
              </p>
            </div>
            <p className="text-xl text-pink-400 font-semibold text-right">- Anjali Kumari</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

const AboutEl = () => {
  return (
    <>
      <div className="text-center flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 py-16 relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <h1 className="text-white text-5xl font-extrabold relative z-10">About Us</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 px-6 py-16">
        {/* About Us Section */}
        <div className="bg-white shadow-xl rounded-lg p-8 border border-gray-300">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            At Webitya, we are committed to empowering businesses through tailored digital solutions. Our expert team specializes in website design, SEO, social media, and more to ensure your brand shines. By combining creativity and data-driven strategies, we help you achieve lasting impact and growth. With years of experience, we’re here to elevate your brand and turn your vision into reality. Join us in shaping a digital future that stands out!
          </p>

          <div className="services-grid">
            <div className="service-item">Website Design</div>
            <div className="service-item">SEO</div>
            <div className="service-item">Social Media Marketing</div>
            <div className="service-item">Content Marketing</div>
            <div className="service-item">PPC Advertising</div>
            <div className="service-item">Email Marketing</div>
            <div className="service-item">Local SEO</div>
          </div>
        </div>

        {/* Image Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-xl">
          <div className="flex justify-center">
            <img src="/img512.svg" alt="Webitya" className="w-full h-auto max-w-lg rounded-lg shadow-lg border border-gray-200" />
          </div>
        </div>
      </div>

      <ServicesSection />
      <TestimonialsSection />
    </>
  );
};

export default AboutEl;
