import { Github, Instagram, Linkedin, Mail, Send, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

import { navLinks } from '../data/navigation.js';
import { personalInfo, socialLinks } from '../data/profile.js';
import Container from './Container.jsx';
import FooterParticles from './FooterParticles.jsx';

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  email: Mail,
  twitter: Twitter,
  telegram: Send,
  instagram: Instagram,
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer relative overflow-hidden rounded-t-3xl border-t border-white/10 bg-slate-900 text-slate-200 dark:bg-background/80">
      <FooterParticles />
      <Container className="footer-content relative grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <a
            href="https://www.linkedin.com/in/harsh-k04/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-2xl font-semibold text-primary transition hover:text-primary/80"
          >
            {personalInfo.name}
          </a>
          <p className="max-w-xl text-sm text-slate-300">
            Building empathetic AI and web experiences that empower communities, students, and teams
            to do their best work. From hackathon demos to production pilots, I focus on pairing sharp
            engineering with storytelling so everyone understands the “why” behind the technology.
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.id];
              return (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-primary/50 hover:text-primary"
                >
                  {Icon ? <Icon className="h-5 w-5" /> : social.label.slice(0, 2)}
                </a>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Quick links</p>
          <ul className="space-y-2 text-sm text-slate-300">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="transition hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Contact</p>
          <div className="space-y-2 text-sm text-slate-300">
            <p>
              <span className="font-medium text-white">Email:</span>{' '}
              <a href={`mailto:${personalInfo.email}`} className="hover:text-primary">
                {personalInfo.email}
              </a>
            </p>
            <p>
              <span className="font-medium text-white">Phone:</span>{' '}
              <a href="tel:+919928967278" className="hover:text-primary">
                {personalInfo.phone}
              </a>
            </p>
            <p>
              <span className="font-medium text-white">Location:</span> {personalInfo.location}
            </p>
          </div>
          <Link
            to="/harsh-contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:-translate-y-1 hover:bg-primary/90"
          >
            Contact
          </Link>
        </div>
      </Container>
      <div className="footer-content border-t border-white/5 py-6 text-center text-xs text-slate-400">
        © {year} {personalInfo.name}. Crafted with curiosity.
      </div>
    </footer>
  );
};

export default Footer;
