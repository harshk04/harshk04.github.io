import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

import Container from '../components/Container.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import { projectFilters, projects } from '../data/projects.js';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((project) => project.filter?.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="space-y-16">
      <Seo
        title="Projects"
        description="Browse AI assistants, RAG workflows, data products, and experiments designed and built by Harsh Kumawat."
        url="https://harshk.is-a.dev/harsh-projects"
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.16),transparent_55%),radial-gradient(circle_at_bottom,rgba(45,212,191,0.18),transparent_55%)]" />
        <Container className="grid gap-10 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-4 text-left">
            <SectionTitle
              eyebrow="Project gallery"
              title="A living archive of things I’ve shipped and iterated on."
              description="Most of these projects started from a sharp question: “who does this actually help?” From there I layered in architecture, UX, and documentation so they could stand on their own."
            />
          </div>
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white/90 p-5 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-200">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              How to explore this gallery
            </p>
            <p>
              Use the filters to jump between assistants, data products, and other experiments. Each card
              briefly calls out the problem, the approach, and—where available—a demo or repository link.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              If you’re short on time, start with the AI assistants and RAG projects; they’re the most recent
              and representative of my applied ML work.
            </p>
          </div>
        </Container>
      </section>

      {/* Filters + grid */}
      <section>
        <Container className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5 lg:sticky lg:top-24 lg:self-start">
            <h3 className="text-sm font-heading font-semibold text-slate-900 dark:text-white">
              Filter by focus
            </h3>
            <div className="space-y-2">
              {projectFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex w-full items-center justify-between rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                    activeFilter === filter.id
                      ? 'border-primary bg-primary text-primary-foreground shadow-soft'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-primary/40 hover:text-primary dark:border-white/10 dark:bg-transparent dark:text-slate-300'
                  }`}
                >
                  <span>{filter.label}</span>
                  {activeFilter === filter.id && (
                    <span className="text-[10px] uppercase tracking-[0.2em]">Active</span>
                  )}
                </button>
              ))}
            </div>
          </aside>

          <motion.div
            key={activeFilter}
            layout
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default Projects;
