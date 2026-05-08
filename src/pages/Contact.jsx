/**
 * ─── EMAILJS SETUP ────────────────────────────────────────────────────────────
 *
 * 1. Go to https://www.emailjs.com and create a free account
 * 2. Click "Add New Service" → connect your Gmail account
 * 3. Click "Email Templates" → create a new template with these variables:
 *      Subject: "New Contact Form Submission from {{first_name}} {{last_name}}"
 *      Body:    Name: {{first_name}} {{last_name}}
 *               Email: {{email}}
 *               Phone: {{phone}}
 *               Message: {{message}}
 * 4. Copy your Service ID, Template ID, and Public Key
 * 5. Create a .env file in the project root with:
 *      REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
 *      REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
 *      REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
 * 6. Restart the dev server (npm start) after editing .env
 * ──────────────────────────────────────────────────────────────────────────────
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Clock, Send, AlertCircle } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from '../components/SocialIcons';
import PageHero from '../components/PageHero';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const initialForm = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  message: '',
};

function validate(form) {
  const errors = {};
  if (!form.first_name.trim()) errors.first_name = 'First name is required';
  if (!form.last_name.trim()) errors.last_name = 'Last name is required';
  if (!form.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address';
  }
  if (!form.phone.trim()) errors.phone = 'Phone number is required';
  if (!form.message.trim()) {
    errors.message = 'Message is required';
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  return errors;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setApiError('');
    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY });
      console.log('EmailJS success:', result);
      navigate('/success');
    } catch (err) {
      console.error('EmailJS error:', err);
      const msg = err?.text || err?.message || JSON.stringify(err);
      setApiError(`Error: ${msg}`);
    } finally {
      setLoading(false);
    }
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border font-inter text-sm bg-brand-bg dark:bg-brand-dark-bg text-brand-text dark:text-brand-dark-text placeholder-brand-muted dark:placeholder-brand-dark-muted
    focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors
    ${errors[field] ? 'border-red-500 dark:border-red-400' : 'border-gray-200 dark:border-gray-600'}`;

  return (
    <>
      <Helmet>
        <title>Contact Us | 3P Builders</title>
        <meta name="description" content="Get in touch with 3P Builders for a free consultation. Custom homes and renovations in Atlanta, GA." />
      </Helmet>

      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear about your project"
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-24 bg-brand-bg dark:bg-brand-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* ── LEFT: Contact Info ── */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              <div className="card p-8 md:p-10 h-full border border-gray-100 dark:border-gray-700">
                <p className="text-accent font-inter text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                  Reach Out
                </p>
                <h2 className="font-playfair text-3xl font-bold text-primary dark:text-brand-dark-text mb-2">
                  Let's Build Something Great
                </h2>
                <p className="text-brand-muted dark:text-brand-dark-muted text-base mb-8">
                  Ready to start your project? Fill out the form and we'll get back to you within 24 hours.
                </p>

                <ul className="space-y-6 mb-8">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-primary dark:text-brand-dark-text mb-1">Address</p>
                      <a
                        href="https://maps.google.com/?q=8735+Dunwoody+Pl+Suite+7347+Atlanta+GA+30350"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-muted dark:text-brand-dark-muted text-sm hover:text-accent transition-colors"
                      >
                        8735 Dunwoody Pl Suite 7347<br />Atlanta, GA 30350
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-primary dark:text-brand-dark-text mb-1">Phone</p>
                      <a href="tel:6786066516" className="text-brand-muted dark:text-brand-dark-muted text-sm hover:text-accent transition-colors">
                        678.606.6516
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-primary dark:text-brand-dark-text mb-1">Email</p>
                      <a href="mailto:info@3pbuilders.net" className="text-brand-muted dark:text-brand-dark-muted text-sm hover:text-accent transition-colors">
                        info@3pbuilders.net
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-primary dark:text-brand-dark-text mb-1">Business Hours</p>
                      <p className="text-brand-muted dark:text-brand-dark-muted text-sm">Monday – Friday: 8:00 AM – 5:00 PM</p>
                    </div>
                  </li>
                </ul>

                <div className="flex items-center gap-3 mb-8">
                  <span className="text-sm text-brand-muted dark:text-brand-dark-muted font-medium">Follow Us:</span>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 bg-primary dark:bg-accent/20 hover:bg-accent rounded-full flex items-center justify-center text-white transition-all duration-200">
                    <FacebookIcon size={16} />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 bg-primary dark:bg-accent/20 hover:bg-accent rounded-full flex items-center justify-center text-white transition-all duration-200">
                    <InstagramIcon size={16} />
                  </a>
                </div>

                {/* Google Maps embed */}
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  <iframe
                    title="3P Builders Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.9!2d-84.3246!3d33.9734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f510a7df6a8c7d%3A0x1234567890abcdef!2s8735+Dunwoody+Pl%2C+Atlanta%2C+GA+30350!5e0!3m2!1sen!2sus!4v1699999999999"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT: Contact Form ── */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              <div className="card p-8 md:p-10 border border-gray-100 dark:border-gray-700">
                <p className="text-accent font-inter text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                  Free Consultation
                </p>
                <h2 className="font-playfair text-3xl font-bold text-primary dark:text-brand-dark-text mb-8">
                  Send Us a Message
                </h2>

                {apiError && (
                  <div className="flex items-start gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-6">
                    <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-red-600 dark:text-red-400 text-sm">{apiError}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-base font-medium text-brand-text dark:text-brand-dark-text mb-1.5" htmlFor="first_name">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="first_name"
                        name="first_name"
                        type="text"
                        placeholder="John"
                        value={form.first_name}
                        onChange={handleChange}
                        className={inputClass('first_name')}
                      />
                      {errors.first_name && (
                        <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-base font-medium text-brand-text dark:text-brand-dark-text mb-1.5" htmlFor="last_name">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="last_name"
                        name="last_name"
                        type="text"
                        placeholder="Smith"
                        value={form.last_name}
                        onChange={handleChange}
                        className={inputClass('last_name')}
                      />
                      {errors.last_name && (
                        <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-base font-medium text-brand-text dark:text-brand-dark-text mb-1.5" htmlFor="email">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass('email')}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-base font-medium text-brand-text dark:text-brand-dark-text mb-1.5" htmlFor="phone">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(404) 555-0123"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass('phone')}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-base font-medium text-brand-text dark:text-brand-dark-text mb-1.5" htmlFor="message">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project — what you have in mind, your timeline, and any details that would help us understand your vision..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-brand-muted dark:text-brand-dark-muted text-center">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
