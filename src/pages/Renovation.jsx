import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import ProjectCarousel from '../components/ProjectCarousel';
import CTABanner from '../components/CTABanner';
import { renovationProjects } from '../data/projectImages';

// Custom sort: numbered prefix (01_) first → before_ → after_ → alphabetical within each group
const sortRenovationPhotos = (photos) => {
  return [...photos].sort((a, b) => {
    const getName = (p) => {
      if (typeof p === 'string') return p.split('/').pop().toLowerCase();
      if (p && p.src) return p.src.split('/').pop().toLowerCase();
      if (p && p.default) return p.default.split('/').pop().toLowerCase();
      return String(p).toLowerCase();
    };

    const nameA = getName(a);
    const nameB = getName(b);

    const aStartsWithNumber = /^\d+_/.test(nameA);
    const bStartsWithNumber = /^\d+_/.test(nameB);
    if (aStartsWithNumber && !bStartsWithNumber) return -1;
    if (!aStartsWithNumber && bStartsWithNumber) return 1;

    const aIsBefore = nameA.includes('before');
    const bIsBefore = nameB.includes('before');
    if (aIsBefore && !bIsBefore) return -1;
    if (!aIsBefore && bIsBefore) return 1;

    return nameA.localeCompare(nameB, undefined, { numeric: true });
  });
};

const sortedRenovationProjects = renovationProjects.map(project => ({
  ...project,
  images: sortRenovationPhotos(project.images),
}));

export default function Renovation() {
  return (
    <>
      <Helmet>
        <title>Renovation Portfolio | 3P Builders</title>
        <meta name="description" content="Explore 3P Builders' renovation projects — transforming Atlanta homes with expert craftsmanship." />
      </Helmet>

      <PageHero
        title="Renovation"
        subtitle="Transforming existing homes into extraordinary living spaces"
        breadcrumbs={[{ label: 'Portfolio', to: '/portfolio/renovation' }, { label: 'Renovation' }]}
      />

      {/* Intro */}
      <section className="py-16 bg-brand-bg dark:bg-brand-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-accent font-inter text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Renovation Portfolio
            </p>
            <p className="text-brand-muted dark:text-brand-dark-muted text-lg leading-relaxed">
              Our renovation work breathes new life into existing homes — preserving what's loved while transforming what's needed. From comprehensive whole-home overhauls to targeted room renovations, each project showcases our ability to blend old character with new craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project carousels — sorted before → after */}
      <div className="bg-brand-bg dark:bg-brand-dark-bg">
        {sortedRenovationProjects.map((project, i) => (
          <ProjectCarousel key={project.id} project={project} index={i} />
        ))}
      </div>

      <CTABanner />
    </>
  );
}
