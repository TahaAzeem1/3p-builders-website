import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import aboutImg from '../assets/projects/new-construction/two-story-oak/about_us_picture.jpg';

const values = [
  {
    letter: 'P',
    title: 'Partnership',
    desc: 'We work alongside our clients every step of the way, treating their vision as our own. From the first consultation to the final walkthrough, your input shapes every decision we make.',
  },
  {
    letter: 'P',
    title: 'Precision',
    desc: 'Every detail matters. We measure twice, build once, and never compromise on quality. Our craftsmen bring decades of combined experience to every joint, fixture, and finish.',
  },
  {
    letter: 'P',
    title: 'Performance',
    desc: 'We deliver results that exceed expectations, on time and on budget. Our track record speaks for itself — satisfied clients, stunning homes, and enduring quality.',
  },
];

const stats = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 1, suffix: '', label: 'Atlanta Location' },
];

function CountUp({ to, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return controls.stop;
  }, [inView, to]);

  return (
    <span ref={ref} className="font-playfair text-5xl md:text-6xl font-bold text-accent">
      {count}{suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | 3P Builders</title>
        <meta name="description" content="Learn about 3P Builders — Atlanta's trusted custom home builder. Partnership, Precision, and Performance in every project." />
      </Helmet>

      <PageHero
        title="About 3P Builders"
        subtitle="The story behind Atlanta's most trusted construction partner"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* ─── OUR STORY ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-bg dark:bg-brand-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-accent font-inter text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Our Story
              </p>
              <h2 className="section-heading mb-8">
                Built on Trust,<br />Driven by Excellence
              </h2>
              <div className="space-y-5 text-brand-muted dark:text-brand-dark-muted leading-relaxed">
                <p>
                  3P Builders was founded on a simple but powerful belief: that building a home should be a partnership. Based in Atlanta, Georgia, we've spent years mastering the craft of custom home construction and whole-home renovation — earning the trust of families across the metro area one project at a time.
                </p>
                <p>
                  What sets us apart isn't just the quality of our work — it's how we work. We listen deeply, plan meticulously, and execute with precision. Our clients aren't just customers; they're collaborators. From the initial consultation to the final walkthrough, we treat every home as if it were our own.
                </p>
                <p>
                  With 13+ completed projects and a portfolio spanning elegant single-story residences to grand two-story custom builds, we've proven that exceptional construction is achievable at any scale. Our name says it all: Partnership. Precision. Performance.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {['Licensed & Insured', 'Atlanta-Based', 'Client Focused', 'Quality Guaranteed'].map(tag => (
                  <span key={tag} className="inline-flex items-center gap-2 text-sm font-medium text-primary dark:text-brand-dark-text bg-primary/10 dark:bg-accent/10 px-4 py-2 rounded-full">
                    <CheckCircle size={14} className="text-accent" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-premium">
                <img
                  src={aboutImg}
                  alt="3P Builders construction excellence"
                  loading="lazy"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              {/* Accent box */}
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-xl shadow-premium">
                <p className="font-playfair text-primary text-3xl font-bold">10+</p>
                <p className="font-inter text-primary/80 text-xs font-semibold tracking-wide uppercase mt-1">Years of<br />Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── OUR VALUES ──────────────────────────────────────────────────────── */}
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
              Core Principles
            </p>
            <h2 className="section-heading">Our Values</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Three words that define everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative card p-10 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <span className="absolute top-6 right-8 font-playfair text-8xl font-bold text-primary/5 dark:text-white/5 leading-none select-none">
                  {v.letter}
                </span>
                <div className="relative">
                  <div className="w-12 h-1 bg-accent mb-6" />
                  <h3 className="font-playfair text-3xl font-bold text-primary dark:text-brand-dark-text mb-4">
                    {v.title}
                  </h3>
                  <p className="text-brand-muted dark:text-brand-dark-muted leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-primary dark:bg-[#0a1929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6"
              >
                <CountUp to={s.value} suffix={s.suffix} />
                <p className="font-inter text-white/60 text-base mt-3 tracking-wide uppercase">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
