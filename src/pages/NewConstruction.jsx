import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import ProjectCarousel from '../components/ProjectCarousel';
import CTABanner from '../components/CTABanner';
import { newConstructionProjects } from '../data/projectImages';

// before_ photos first, then after_ photos, numeric order within each group
const sortPhotos = (photos) => {
  return [...photos].sort((a, b) => {
    const getName = (p) => {
      if (typeof p === 'string') return p.split('/').pop().toLowerCase();
      if (p && p.src) return p.src.split('/').pop().toLowerCase();
      if (p && p.default) return p.default.split('/').pop().toLowerCase();
      return String(p).toLowerCase();
    };
    const nameA = getName(a);
    const nameB = getName(b);
    const aIsBefore = nameA.includes('before');
    const bIsBefore = nameB.includes('before');
    if (aIsBefore && !bIsBefore) return -1;
    if (!aIsBefore && bIsBefore) return 1;
    return nameA.localeCompare(nameB, undefined, { numeric: true });
  });
};

const sortedProjects = newConstructionProjects.map(project => ({
  ...project,
  images: sortPhotos(project.images),
}));

export default function NewConstruction() {
  return (
    <>
      <Helmet>
        <title>New Construction Portfolio | 3P Builders</title>
        <meta name="description" content="Explore 3P Builders' portfolio of custom new construction homes across Atlanta, Georgia." />
      </Helmet>

      <PageHero
        title="New Construction"
        subtitle="Ten landmark projects that define our commitment to custom homebuilding"
        breadcrumbs={[{ label: 'Portfolio', to: '/portfolio/new-construction' }, { label: 'New Construction' }]}
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
              Our Portfolio
            </p>
            <p className="text-brand-muted dark:text-brand-dark-muted text-lg leading-relaxed">
              From elegant one-story ranch homes to grand two-story residences, each project in our new construction portfolio reflects the same commitment — your vision, executed with precision. Browse our completed homes below and click any photo to view it full size.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project carousels — before photos first, then after */}
      <div className="bg-brand-bg dark:bg-brand-dark-bg">
        {sortedProjects.map((project, i) => (
          <ProjectCarousel key={project.id} project={project} index={i} />
        ))}
      </div>

      <CTABanner />
    </>
  );
}
