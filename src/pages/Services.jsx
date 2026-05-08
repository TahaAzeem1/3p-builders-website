import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Home, Paintbrush, DoorOpen, ClipboardList, MessageSquare, Ruler, HardHat, ThumbsUp, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

const services = [
  {
    icon: Home,
    title: 'Custom Homes',
    desc: 'We specialize in building fully custom homes from the ground up. Every project starts with your vision — and we don\'t rest until that vision becomes a beautifully crafted reality. From architectural planning to the final coat of paint, our team brings unmatched precision and care to every square foot.',
  },
  {
    icon: Paintbrush,
    title: 'Custom Renovations',
    desc: 'Whether you\'re reimagining a single bathroom or completely transforming your home\'s interior, our renovation specialists deliver results that blend seamlessly with your home\'s character. We excel at kitchen remodels, bathroom upgrades, basement conversions, and whole-home makeovers.',
  },
  {
    icon: DoorOpen,
    title: 'Home Additions',
    desc: 'Need more space? Our home addition experts design and build expansions that look and feel like they\'ve always been part of your home. We handle everything from structural engineering coordination to interior finishing — ensuring your addition is both beautiful and sound.',
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    desc: 'Great construction requires great coordination. We manage every aspect of your project — scheduling subcontractors, sourcing materials, managing timelines, and maintaining quality control — so you can focus on the excitement of seeing your home come to life.',
  },
];

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Consultation',
    desc: 'We begin every project with a thorough consultation to understand your vision, budget, and timeline. No detail is too small.',
  },
  {
    icon: Ruler,
    step: '02',
    title: 'Planning',
    desc: 'Our team develops detailed project plans, material selections, and precise timelines — giving you full visibility before a single nail is driven.',
  },
  {
    icon: HardHat,
    step: '03',
    title: 'Construction',
    desc: 'Execution with precision. Our skilled craftsmen bring decades of experience to every project, with rigorous quality checks at every phase.',
  },
  {
    icon: ThumbsUp,
    step: '04',
    title: 'Completion',
    desc: 'We walk through every inch of the finished project with you. We\'re not done until you\'re completely satisfied with the result.',
  },
];

const differentiators = [
  'Licensed, bonded, and insured for your peace of mind',
  'Transparent pricing with no hidden costs or surprises',
  'Regular progress updates and open communication',
  'Dedicated project manager for every build',
  'Premium materials sourced from trusted suppliers',
  'Post-project support and follow-through',
  'Proven track record across 13+ Atlanta projects',
  'Respect for your home, timeline, and budget',
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | 3P Builders</title>
        <meta name="description" content="3P Builders offers custom homes, renovations, home additions, and project management in Atlanta, GA." />
      </Helmet>

      <PageHero
        title="Our Services"
        subtitle="We offer a range of services to meet your every construction need"
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* ─── SERVICE CARDS ───────────────────────────────────────────────────── */}
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
              What We Do
            </p>
            <h2 className="section-heading">Comprehensive Construction Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-700 bg-[#f0ebe3] dark:bg-brand-dark-card hover:border-accent/40 transition-all duration-300 shadow-card hover:shadow-card-hover hover:-translate-y-1 p-10"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />
                <div className="relative">
                  <div className="w-16 h-16 bg-primary dark:bg-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <svc.icon size={30} className="text-white dark:text-accent group-hover:text-primary" />
                  </div>
                  <h3 className="font-inter text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3">
                    {svc.title}
                  </h3>
                  <h4 className="font-playfair text-2xl font-bold text-primary dark:text-brand-dark-text mb-4">
                    {svc.title}
                  </h4>
                  <p className="text-brand-muted dark:text-brand-dark-muted text-base leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR PROCESS ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-primary dark:bg-[#0a1929] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-accent font-inter text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              How We Work
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold">Our Process</h2>
            <p className="text-white/60 mt-4 text-lg max-w-2xl mx-auto">
              From first conversation to final walkthrough, we keep you informed every step of the way
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-accent/20" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="relative text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6 shadow-lg">
                    <step.icon size={24} className="text-primary" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary border-2 border-accent text-accent text-xs font-bold rounded-full flex items-center justify-center font-inter">
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-accent font-inter text-xs font-bold tracking-widest uppercase mb-2">
                    Step {step.step}
                  </p>
                  <h3 className="font-playfair text-xl text-white font-bold mb-3">{step.title}</h3>
                  <p className="text-white/60 text-base leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT SETS US APART ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-brand-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-accent font-inter text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Our Commitment
              </p>
              <h2 className="section-heading mb-6">What Sets Us Apart</h2>
              <p className="text-brand-muted dark:text-brand-dark-muted leading-relaxed mb-8">
                At 3P Builders, we don't just construct buildings — we build lasting relationships. Here's what you can always count on when you choose us:
              </p>
              <ul className="space-y-3">
                {differentiators.map((item, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex items-start gap-3 text-brand-muted dark:text-brand-dark-muted"
                  >
                    <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: '13+', label: 'Projects Completed' },
                { num: '10+', label: 'Years of Experience' },
                { num: '100%', label: 'Client Satisfaction' },
                { num: '24/7', label: 'Client Support' },
              ].map(stat => (
                <div key={stat.label} className="bg-brand-bg dark:bg-brand-dark-bg rounded-2xl p-8 text-center border border-gray-100 dark:border-gray-700">
                  <p className="font-playfair text-4xl font-bold text-accent">{stat.num}</p>
                  <p className="font-inter text-xs text-brand-muted dark:text-brand-dark-muted uppercase tracking-wide mt-2">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
