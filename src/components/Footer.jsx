import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from './SocialIcons';
import mainLogo from '../assets/logos/logo-main.png';

export default function Footer() {
  return (
    <footer className="bg-brand-footer text-brand-dark-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1 — Logo & Tagline */}
          <div>
            <img src={mainLogo} alt="3P Builders" className="h-14 w-auto mb-5 object-contain" />
            <p className="font-playfair text-accent text-lg italic mb-3">
              Partnership. Precision. Performance.
            </p>
            <p className="text-base text-gray-400 leading-relaxed">
              Atlanta's premier custom home builder and renovation specialist, delivering exceptional craftsmanship since day one.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-inter font-semibold text-white uppercase tracking-widest text-sm mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Services', to: '/services' },
                { label: 'New Construction', to: '/portfolio/new-construction' },
                { label: 'Renovation', to: '/portfolio/renovation' },
                { label: 'Contact', to: '/contact' },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-base text-gray-400 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="font-inter font-semibold text-white uppercase tracking-widest text-sm mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {['Custom Homes', 'Custom Renovations', 'Home Additions', 'Project Management'].map(s => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-base text-gray-400 hover:text-accent transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="font-inter font-semibold text-white uppercase tracking-widest text-sm mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=8735+Dunwoody+Pl+Suite+7347+Atlanta+GA+30350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-base text-gray-400 hover:text-accent transition-colors"
                >
                  <MapPin size={18} className="mt-0.5 flex-shrink-0 text-accent" />
                  <span>8735 Dunwoody Pl Suite 7347<br />Atlanta, GA 30350</span>
                </a>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-3 text-base text-gray-400 hover:text-accent transition-colors">
                  <Phone size={18} className="flex-shrink-0 text-accent" />
                  <span>678.606.6516</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-3 text-base text-gray-400 hover:text-accent transition-colors">
                  <Mail size={18} className="flex-shrink-0 text-accent" />
                  <span>info@3pbuilders.net</span>
                </Link>
              </li>
              <li className="flex items-center gap-3 pt-1">
                <a href="https://www.facebook.com/share/1Co6qRGxqu/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-accent hover:text-primary rounded-full flex items-center justify-center transition-all duration-200 text-gray-400">
                  <FacebookIcon size={17} />
                </a>
                <a href="https://www.instagram.com/3p.builders?igsh=am94a2dlN3RxczFk&utm_source=qr" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-accent hover:text-primary rounded-full flex items-center justify-center transition-all duration-200 text-gray-400">
                  <InstagramIcon size={17} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            © 2025 3P Builders. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-500 italic">
            Designed with care | Built with precision
          </p>
        </div>
      </div>
    </footer>
  );
}
