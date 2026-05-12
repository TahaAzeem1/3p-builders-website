import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Home as HomeIcon, Hammer, PlusSquare, ClipboardList, CheckCircle, ChevronDown, ArrowRight, Star } from 'lucide-react';

import heroImg from '../assets/projects/new-construction/meldon/after_1.jpg';
import newConstImg from '../assets/projects/new-construction/meldon/new_construction_card.jpg';
import renvImg from '../assets/projects/renovation/turman/renovation_card.jpg';
import CTABanner from '../components/CTABanner';

const services = [
  {
    icon: HomeIcon,
    title: 'Custom Homes',
    desc: 'Building custom homes is our passion. We collaborate with you to bring your vision to life with the highest standards of craftsmanship.',
  },
  {
    icon: Hammer,
    title: 'Custom Renovations',
    desc: 'Transforming bathrooms, kitchens, and entire homes with innovative problem-solving and exceptional craftsmanship.',
  },
  {
    icon: PlusSquare,
    title: 'Home Additions',
    desc: "Thoughtful planning ensures every addition integrates seamlessly with your existing home's architecture and style.",
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    desc: 'We coordinate every detail — from scheduling to quality control — keeping your project on track and on budget.',
  },
];

const testimonials = [
  {
    quote: '3P Builders transformed our vision into reality. Their attention to detail is absolutely unmatched. Every room exceeded our expectations.',
    name: 'Sarah M.',
    location: 'Atlanta, GA',
  },
  {
    quote: 'From start to finish, the team was professional, responsive, and exceeded our expectations. They treated our home like their own.',
    name: 'David L.',
    location: 'Dunwoody, GA',
  },
  {
    quote: 'Best decision we made for our home renovation. Truly partnership, precision, and performance — exactly what they promise.',
    name: 'Jennifer K.',
    location: 'Sandy Springs, GA',
  },
];

const reasons = [
  {
    icon: CheckCircle,
    title: 'Expert Craftsmanship',
    desc: 'Years of expertise in Atlanta\'s construction industry, delivering homes built to last a lifetime.',
  },
  {
    icon: CheckCircle,
    title: 'Successful Projects',
    desc: 'From grand custom homes to full-scale renovations, our portfolio speaks for itself.',
  },
  {
    icon: CheckCircle,
    title: 'Client-First Approach',
    desc: 'We don\'t consider a project finished until you\'re completely satisfied with every detail.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>3P Builders | Atlanta's Premier Custom Home Builder</title>
        <meta name="description" content="3P Builders — Atlanta's premier custom home builder and renovation specialist. Partnership. Precision. Performance." />
      </Helmet>

      {/* ─── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="3P Builders custom home"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent font-inter text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6"
          >
            Atlanta's Premier Builder
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-6"
          >
            Building Your Vision With{' '}
            <span className="text-accent italic">Precision</span>{' '}
            &amp; Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-playfair text-xl md:text-2xl text-white/80 italic mb-3"
          >
            Partnership. Precision. Performance.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-inter text-white/60 text-sm md:text-base mb-10 tracking-wide"
          >
            Atlanta's Premier Custom Home Builder &amp; Renovation Specialists
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/portfolio/new-construction" className="btn-primary">
              View Our Work
            </Link>
            <Link to="/contact" className="btn-outline">
              Get a Free Consultation
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs tracking-widest uppercase font-inter">Scroll</span>
          <ChevronDown size={20} className="scroll-indicator" />
        </motion.div>
      </section>

      {/* ─── WHAT WE OFFER ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-bg dark:bg-brand-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-accent font-inter text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Our Expertise
            </p>
            <h2 className="section-heading">What We Offer</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Comprehensive construction services tailored to your vision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card p-8 border border-transparent hover:border-accent/30 group cursor-default"
              >
                <div className="w-14 h-14 bg-primary/10 dark:bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <svc.icon size={28} className="text-accent" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-primary dark:text-brand-dark-text mb-3">
                  {svc.title}
                </h3>
                <p className="text-brand-muted dark:text-brand-dark-muted text-base leading-relaxed">
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR WORK ────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-brand-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-accent font-inter text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Portfolio
            </p>
            <h2 className="section-heading">Our Work</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Explore our portfolio of completed projects across Atlanta
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                img: newConstImg,
                label: 'New Construction',
                to: '/portfolio/new-construction',
                count: '10 Projects',
              },
              {
                img: renvImg,
                label: 'Renovation',
                to: '/portfolio/renovation',
                count: '3 Projects',
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
                style={{ height: '420px' }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center">
                  <h3 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-6">
                    {item.label}
                  </h3>
                  <Link
                    to={item.to}
                    className="btn-primary group-hover:translate-x-1 transition-transform"
                  >
                    Explore Projects <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-primary dark:bg-[#0a1929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-accent font-inter text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Our Advantage
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold leading-tight">
              Why Choose 3P Builders?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <r.icon size={32} className="text-accent" />
                </div>
                <h3 className="font-playfair text-2xl text-white font-bold mb-4">{r.title}</h3>
                <p className="text-white/60 leading-relaxed text-base">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-bg dark:bg-brand-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-accent font-inter text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Testimonials
            </p>
            <h2 className="section-heading">What Our Clients Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card p-8 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="font-cormorant text-xl text-brand-text dark:text-brand-dark-text leading-relaxed italic mb-6">
                  "{t.quote}"
                </blockquote>
                <div className="border-t border-gray-100 dark:border-gray-700 pt-5">
                  <p className="font-inter font-semibold text-primary dark:text-accent text-base">{t.name}</p>
                  <p className="text-brand-muted dark:text-brand-dark-muted text-sm mt-1">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────────────────────────────── */}
      <CTABanner />
    </>
  );
}
