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
        description="Browse AI assistants, RAG systems, and developer tools built by Harsh Kumawat."
        url="https://harshk.is-a.dev/projects"
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-gradient opacity-40" />
        <Container className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-8 text-center shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/10">
          <SectionTitle
            align="center"
            eyebrow="Projects"
            title="A collection of experiments, products, and community-led builds."
            description="Each project represents a problem-first approach — from AI assistants and data apps to cloud-native tooling and educational platforms."
          />
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <div className="flex flex-wrap justify-center gap-3">
            {projectFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                  activeFilter === filter.id
                    ? 'border-primary bg-primary text-primary-foreground shadow-soft'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-primary/40 hover:text-primary dark:border-white/10 dark:bg-white/5 dark:text-slate-300'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
            transition={{ duration: 0.3, ease: 'easeOut' }}
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
