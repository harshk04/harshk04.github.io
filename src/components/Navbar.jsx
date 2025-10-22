import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, Menu, X } from 'lucide-react';

import { navLinks } from '../data/navigation.js';
import { personalInfo } from '../data/profile.js';
import ThemeToggle from './ThemeToggle.jsx';

const linkClasses = ({ isActive }) =>
  `relative text-sm font-medium tracking-wide transition-colors ${
    isActive
      ? 'text-primary'
      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
  }`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);
  const handleLogoClick = (event) => {
    if (location.pathname === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur border-b border-white/10 bg-white/70 shadow-sm transition-colors dark:bg-background/80 dark:border-white/5">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <NavLink
          to="/"
          className="relative flex flex-1 items-center justify-center gap-2 pl-14 sm:flex-none sm:justify-start sm:gap-2 sm:pl-0"
          onClick={handleLogoClick}
        >
          <span className="absolute left-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-soft sm:hidden">
            {personalInfo.name.slice(0, 1)}
          </span>
          <span className="hidden h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-soft sm:inline-flex">
            {personalInfo.name.slice(0, 1)}
          </span>
          <span className="sm:hidden text-xl font-semibold tracking-[0.55em] text-slate-700 drop-shadow-[0_1px_4px_rgba(15,23,42,0.5)] dark:text-slate-100 dark:drop-shadow-[0_1px_4px_rgba(15,23,42,0.85)]">
            HARSH
          </span>
         <div className="hidden flex-col sm:flex">
           <span className="font-heading text-lg font-semibold text-slate-900 dark:text-white">
             Harsh Kumawat
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Portfolio
            </span>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:-translate-y-1 hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" />
            Contact
          </NavLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 md:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden"
          >
            <div className="space-y-4 px-6 pb-6 pt-2">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={linkClasses}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </NavLink>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
