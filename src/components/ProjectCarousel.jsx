import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Lightbox from './Lightbox';

export default function ProjectCarousel({ project, index }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const isOpen = lightboxIndex !== null;

  function openLightbox(i) { setLightboxIndex(i); }
  function closeLightbox() { setLightboxIndex(null); }
  function prevImage() { setLightboxIndex(i => (i - 1 + project.images.length) % project.images.length); }
  function nextImage() { setLightboxIndex(i => (i + 1) % project.images.length); }

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project heading — name only, no generic numbering */}
          <div className="mb-8">
            <h2 className="font-playfair text-3xl md:text-4xl text-primary dark:text-brand-dark-text font-bold mb-2">
              {project.name}
            </h2>
            <p className="text-sm text-brand-muted dark:text-brand-dark-muted italic">
              {project.images.length} photos · Click any image to enlarge
            </p>
          </div>

          {/* Carousel */}
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            className="pb-12"
          >
            {project.images.map((img, i) => (
              <SwiperSlide key={i}>
                <div
                  className="relative overflow-hidden rounded-xl cursor-pointer group"
                  style={{ aspectRatio: '4/3' }}
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={img}
                    alt={`${project.name} — ${i + 1} of ${project.images.length}`}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 px-4 py-2 rounded-full">
                      View Full Size
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 dark:border-gray-700" />
        </div>
      </motion.section>

      {isOpen && (
        <Lightbox
          images={project.images}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
