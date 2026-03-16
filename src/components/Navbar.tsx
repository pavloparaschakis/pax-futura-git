import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Regulatory Compliance', to: '/regulatory-compliance' },
  { label: 'About', to: '/about' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 h-16 flex items-center transition-all duration-200 ${scrolled ? 'nav-blur' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] w-full mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Wordmark */}
        <Link to="/" className="font-geist font-semibold text-lg text-pax-text tracking-tight">
          Pax Inovitae
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm transition-colors duration-150 ${
                  isActive
                    ? 'text-pax-text border-b border-pax-text pb-0.5'
                    : 'text-pax-secondary hover:text-pax-text'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/about" className="btn-ghost text-xs py-2 px-4">Contact</Link>
          <Link to="/about" className="btn-solid text-xs py-2 px-4">Get Started</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-pax-text"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 bg-pax-alt border-b border-pax-border overflow-hidden md:hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm ${location.pathname === link.to ? 'text-pax-text' : 'text-pax-secondary'}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-4 border-t border-pax-border">
                <Link to="/about" className="btn-ghost text-xs py-2 px-4 flex-1 text-center">Contact</Link>
                <Link to="/about" className="btn-solid text-xs py-2 px-4 flex-1 text-center">Get Started</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
