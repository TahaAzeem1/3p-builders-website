import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export default function Success() {
  return (
    <>
      <Helmet>
        <title>Message Sent | 3P Builders</title>
      </Helmet>

      <div className="min-h-screen bg-brand-bg dark:bg-brand-dark-bg flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <CheckCircle size={56} className="text-green-600 dark:text-green-400" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-playfair text-4xl md:text-5xl font-bold text-primary dark:text-brand-dark-text mb-4"
          >
            Message Sent Successfully!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-brand-muted dark:text-brand-dark-muted text-lg mb-10 leading-relaxed"
          >
            Thank you for reaching out to 3P Builders. We've received your message and will get back to you within <strong className="text-primary dark:text-accent">24 hours</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-sm text-brand-muted dark:text-brand-dark-muted"
          >
            Need immediate assistance?{' '}
            <a href="tel:6786066516" className="text-accent hover:underline font-medium">
              Call us at 678.606.6516
            </a>
          </motion.p>
        </div>
      </div>
    </>
  );
}
