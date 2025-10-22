import { Github, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';

import Button from './Button.jsx';

const ProjectCard = ({ project }) => (
  <motion.article
    whileHover={{ y: -12 }}
    transition={{ duration: 0.25, ease: 'easeOut' }}
    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-soft backdrop-blur transition duration-300 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
  >
    <span className="pointer-events-none absolute inset-0 -z-10 rounded-3xl border border-transparent bg-gradient-to-br from-white/0 via-primary/5 to-primary/10 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-white/0 dark:via-primary/10 dark:to-primary/20" />
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent opacity-0 transition group-hover:opacity-100" />
    </div>
    <div className="flex flex-1 flex-col gap-4 p-6">
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-heading font-semibold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.description}
        </p>
      </div>
      <div className="mt-auto flex flex-wrap gap-3">
        {project.links.demo && project.links.demo !== '#' && (
          <Button
            as="a"
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            icon={LinkIcon}
          >
            Live demo
          </Button>
        )}
        {project.links.github && project.links.github !== '#' && (
          <Button
            as="a"
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            icon={Github}
          >
            Source
          </Button>
        )}
      </div>
    </div>
  </motion.article>
);

export default ProjectCard;
