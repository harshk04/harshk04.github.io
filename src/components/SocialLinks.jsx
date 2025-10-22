import { Github, Instagram, Linkedin, Mail, Send, Twitter } from 'lucide-react';
import clsx from 'clsx';

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  email: Mail,
  twitter: Twitter,
  telegram: Send,
  instagram: Instagram,
};

const SocialLinks = ({ links, className, iconClassName }) => (
  <div className={clsx('flex flex-wrap items-center gap-3', className)}>
    {links.map((social) => {
      const Icon = iconMap[social.id];
      return (
        <a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 dark:border-white/10 dark:bg-white/10 dark:text-white"
        >
          {Icon ? (
            <Icon className={clsx('h-5 w-5', iconClassName)} />
          ) : (
            <span className="text-xs font-semibold uppercase">{social.label.slice(0, 2)}</span>
          )}
        </a>
      );
    })}
  </div>
);

export default SocialLinks;
