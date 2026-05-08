import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Sun, Moon, Phone, Mail, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FacebookIcon, InstagramIcon } from './SocialIcons';
import { useScrolled } from '../hooks/useScrolled';
import logo from '../assets/logos/logo-main.png';

function PortfolioDropdown({ mobile, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: mobile ? 0 : -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: mobile ? 0 : -8 }}
      transition={{ duration: 0.2 }}
      className={mobile
        ? 'pl-4 flex flex-col gap-1 mt-1'
        : 'absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-brand-dark-card shadow-premium rounded-xl overflow-hidden min-w-[200px] border border-gray-100 dark:border-gray-700 z-50'
      }
    >
      <NavLink
        to="/portfolio/new-construction"
        onClick={onClose}
        className={({ isActive }) =>
          mobile
            ? `block py-2 px-3 text-sm font-medium rounded-lg ${isActive ? 'text-accent' : 'text-brand-text dark:text-brand-dark-text hover:text-accent'}`
            : `block px-5 py-3 text-sm font-medium text-brand-text dark:text-brand-dark-text hover:bg-brand-bg dark:hover:bg-primary hover:text-accent transition-colors ${isActive ? 'text-accent' : ''}`
        }
      >
        New Construction
      </NavLink>
      <NavLink
        to="/portfolio/renovation"
        onClick={onClose}
        className={({ isActive }) =>
          mobile
            ? `block py-2 px-3 text-sm font-medium rounded-lg ${isActive ? 'text-accent' : 'text-brand-text dark:text-brand-dark-text hover:text-accent'}`
            : `block px-5 py-3 text-sm font-medium text-brand-text dark:text-brand-dark-text hover:bg-brand-bg dark:hover:bg-primary hover:text-accent transition-colors ${isActive ? 'text-accent' : ''}`
        }
      >
        Renovation
      </NavLink>
    </motion.div>
  );
}

export default function Header() {
  const { dark, toggle } = useTheme();
  const scrolled = useScrolled(60);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const dropdownRef = useRef();

  const transparent = isHome && !scrolled;

  useEffect(() => {
    setMobileOpen(false);
    setPortfolioOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setPortfolioOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `nav-link py-1 ${isActive ? 'text-accent after:w-full' : ''} ${transparent ? 'text-white dark:text-white hover:text-accent after:bg-accent' : ''}`;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white/95 dark:bg-brand-dark-bg/95 backdrop-blur-md shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CSS Grid: 1fr | auto | 1fr — guarantees nav is perfectly centered */}
          <div className="h-24 hidden lg:grid lg:grid-cols-[1fr_auto_1fr] items-center">

            {/* LEFT: Logo — 2-3x larger */}
            <Link to="/" className="flex-shrink-0 justify-self-start">
              <img src={logo} alt="3P Builders" className="h-20 w-auto object-contain" />
            </Link>

            {/* CENTER: Nav — larger font */}
            <nav className="flex items-center gap-10">
              <NavLink to="/about" className={navLinkClass}>About Us</NavLink>

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setPortfolioOpen(o => !o)}
                  className={`nav-link py-1 flex items-center gap-1.5 ${transparent ? 'text-white hover:text-accent' : ''}`}
                >
                  Portfolio
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${portfolioOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {portfolioOpen && (
                    <PortfolioDropdown onClose={() => setPortfolioOpen(false)} />
                  )}
                </AnimatePresence>
              </div>

              <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            </nav>

            {/* RIGHT: 3 vertical groups with dividers */}
            <div className="justify-self-end flex items-center gap-5">

              {/* Group 1: Phone + Email stacked */}
              <div className="flex flex-col gap-1.5">
                <Link
                  to="/contact"
                  className={`flex items-center gap-2 text-base font-medium hover:text-accent transition-colors duration-300 ${transparent ? 'text-white' : 'text-brand-text dark:text-brand-dark-text'}`}
                >
                  <Phone size={20} />
                  <span>678.606.6516</span>
                </Link>
                <Link
                  to="/contact"
                  className={`flex items-center gap-2 text-base font-medium hover:text-accent transition-colors duration-300 ${transparent ? 'text-white' : 'text-brand-text dark:text-brand-dark-text'}`}
                >
                  <Mail size={20} />
                  <span>info@3pbuilders.net</span>
                </Link>
              </div>

              {/* Divider */}
              <div className="h-12 w-px bg-gray-400/40 dark:bg-gray-500/40" />

              {/* Group 2: Facebook + Instagram stacked */}
              <div className="flex flex-col gap-2.5">
                <a
                  href="https://www.facebook.com/share/1Co6qRGxqu/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-accent transition-colors duration-300 ${transparent ? 'text-white' : 'text-brand-text dark:text-brand-dark-text'}`}
                >
                  <FacebookIcon size={25} />
                </a>
                <a
                  href="https://www.instagram.com/3p.builders?igsh=am94a2dlN3RxczFk&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-accent transition-colors duration-300 ${transparent ? 'text-white' : 'text-brand-text dark:text-brand-dark-text'}`}
                >
                  <InstagramIcon size={25} />
                </a>
              </div>

              {/* Divider */}
              <div className="h-12 w-px bg-gray-400/40 dark:bg-gray-500/40" />

              {/* Group 3: Theme toggle */}
              <button
                onClick={toggle}
                aria-label="Toggle theme"
                className={`hover:text-accent transition-colors duration-300 p-1 ${transparent ? 'text-white' : 'text-brand-text dark:text-brand-dark-text'}`}
              >
                {dark ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile row */}
          <div className="flex lg:hidden items-center justify-between h-20">
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="3P Builders" className="h-14 w-auto object-contain" />
            </Link>
            <div className="flex items-center gap-3">
              <button onClick={toggle} aria-label="Toggle theme"
                className={`hover:text-accent transition-colors ${transparent ? 'text-white' : 'text-brand-text dark:text-brand-dark-text'}`}>
                {dark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setMobileOpen(o => !o)}
                aria-label="Toggle menu"
                className={`p-1 ${transparent ? 'text-white' : 'text-brand-text dark:text-brand-dark-text'}`}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-white dark:bg-brand-dark-bg flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
          >
            <nav className="flex flex-col gap-2 text-lg">
              <NavLink to="/about" onClick={() => setMobileOpen(false)}
                className={({ isActive }) => `py-3 px-4 font-medium rounded-lg transition-colors ${isActive ? 'bg-primary/10 text-accent' : 'text-brand-text dark:text-brand-dark-text hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                About Us
              </NavLink>

              <div>
                <button
                  onClick={() => setMobilePortfolioOpen(o => !o)}
                  className="w-full flex items-center justify-between py-3 px-4 font-medium rounded-lg text-brand-text dark:text-brand-dark-text hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <span>Portfolio</span>
                  <ChevronDown size={18} className={`transition-transform ${mobilePortfolioOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobilePortfolioOpen && (
                    <PortfolioDropdown mobile onClose={() => setMobileOpen(false)} />
                  )}
                </AnimatePresence>
              </div>

              <NavLink to="/services" onClick={() => setMobileOpen(false)}
                className={({ isActive }) => `py-3 px-4 font-medium rounded-lg transition-colors ${isActive ? 'bg-primary/10 text-accent' : 'text-brand-text dark:text-brand-dark-text hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                Services
              </NavLink>

              <NavLink to="/contact" onClick={() => setMobileOpen(false)}
                className={({ isActive }) => `py-3 px-4 font-medium rounded-lg transition-colors ${isActive ? 'bg-primary/10 text-accent' : 'text-brand-text dark:text-brand-dark-text hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                Contact Us
              </NavLink>
            </nav>

            <div className="mt-8 flex flex-col gap-4 border-t border-gray-200 dark:border-gray-700 pt-6">
              <a href="tel:6786066516" className="flex items-center gap-3 text-brand-text dark:text-brand-dark-text hover:text-accent transition-colors">
                <Phone size={18} /> <span className="font-medium">678.606.6516</span>
              </a>
              <a href="mailto:info@3pbuilders.net" className="flex items-center gap-3 text-brand-text dark:text-brand-dark-text hover:text-accent transition-colors">
                <Mail size={18} /> <span className="font-medium">info@3pbuilders.net</span>
              </a>
              <div className="flex items-center gap-4 mt-2">
                <a href="https://www.facebook.com/share/1Co6qRGxqu/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-brand-text dark:text-brand-dark-text hover:text-accent transition-colors"><FacebookIcon size={22} /></a>
                <a href="https://www.instagram.com/3p.builders?igsh=am94a2dlN3RxczFk&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-brand-text dark:text-brand-dark-text hover:text-accent transition-colors"><InstagramIcon size={22} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
