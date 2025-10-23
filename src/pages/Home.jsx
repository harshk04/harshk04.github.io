import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import SocialLinks from '../components/SocialLinks.jsx';
import Timeline from '../components/Timeline.jsx';
import {
  heroContent,
  overviewStats,
  personalInfo,
  socialLinks,
  professionalExperience,
  education,
  featuredCertificates,
  services,
} from '../data/profile.js';
import { featuredProjects } from '../data/projects.js';

const Home = () => {
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % heroContent.highlights.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const activeHighlight = heroContent.highlights[highlightIndex];
  const topServices = services.slice(0, 3);
  const featuredExperience = professionalExperience.slice(0, 3);

  return (
    <div className="space-y-24">
      <Seo
        title="Home"
        description="Explore the work of Harsh Kumawat — AI/ML engineer and ECE undergraduate blending data research, product strategy, and deployment-ready engineering."
        url="https://harshk.is-a.dev/"
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-gradient opacity-60 dark:opacity-80" />
        <Container className="grid gap-12 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:items-center">
          <div className="space-y-6 sm:space-y-7">
            <motion.span
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="inline-flex max-w-max items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white"
            >
              {heroContent.eyebrow}
            </motion.span>
            <motion.h1
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl font-heading font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
            >
              {heroContent.heading}
            </motion.h1>
            <motion.p
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="max-w-2xl text-base text-slate-700 sm:text-lg dark:text-slate-100/80"
            >
              {heroContent.subheading}
            </motion.p>
            <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:items-center sm:justify-start sm:gap-6 sm:text-left">
              <div className="flex flex-col items-center gap-2 sm:items-start">
                <span className="text-xs font-medium uppercase tracking-[0.38em] text-slate-600 dark:text-slate-200">
                  Currently exploring
                </span>
                <div className="relative mx-auto h-10 min-w-[240px] overflow-hidden sm:mx-0">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeHighlight}
                      initial={{ y: 16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -16, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="absolute inset-0 inline-flex items-center justify-center rounded-full border border-primary/40 bg-white px-6 py-2 text-sm font-semibold text-primary shadow-lg backdrop-blur transition duration-300 dark:border-white/20 dark:bg-white/10 dark:text-white"
                    >
                      {activeHighlight}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button as="a" href={heroContent.primaryCta.href} iconPosition="right">
                {heroContent.primaryCta.label}
              </Button>
              <Button
                as="a"
                href={heroContent.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                {heroContent.secondaryCta.label}
              </Button>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-100">
                {personalInfo.availability}
              </p>
              <SocialLinks links={socialLinks} className="gap-2" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/30 blur-2xl transition duration-500 group-hover:bg-primary/40" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/30 bg-white/10 p-2 shadow-soft backdrop-blur transition duration-500 group-hover:border-primary/60">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="/images/profile2.jpeg"
                  alt={personalInfo.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-slate-950/30 via-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/5 md:grid-cols-4">
            {overviewStats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <span className="text-3xl font-heading font-semibold text-primary">{stat.value}</span>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow="Professional Experience"
            title="Internships that sharpened my applied AI & engineering craft."
            description="Each stop pushed me deeper into shipping models, analytics, and product-ready automation."
          />
          <Timeline items={featuredExperience} />
          <div className="flex flex-wrap justify-start gap-4">
            <Button as="a" href="/about" variant="secondary">
              View complete journey
            </Button>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <SectionTitle
            eyebrow="Education"
            title="Learning foundations across engineering and data science."
            description="Formal programmes that shaped my analytical thinking and systems understanding."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {education.map((item) => (
              <div
                key={item.school}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="h-40 overflow-hidden">
                  <img src={item.image} alt={item.school} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="space-y-2 p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    {item.status}
                  </span>
                  <h3 className="text-lg font-heading font-semibold text-slate-900 dark:text-white">
                    {item.program}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{item.school}</p>
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    {item.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow="Featured work"
            title="Projects that blend product sense with applied AI."
            description="From hackathon wins to production pilots, each project focuses on real problems, measurable impact, and thoughtful engineering."
          />
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="flex justify-center">
            <Button as="a" href="/projects" variant="secondary">
              View all projects
            </Button>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-6 rounded-3xl border border-primary/20 bg-primary/5 p-10 shadow-soft">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-3">
              <h3 className="text-2xl font-heading font-semibold text-primary">How we can collaborate</h3>
              <p className="text-sm text-slate-700 dark:text-slate-200">
                I love partnering on AI/ML experiments, product discovery sprints, and analytics platforms.
                Here are a few ways we can work together.
              </p>
            </div>
            <Button as="a" href="/contact" variant="secondary" className="self-start lg:self-auto">
              Start a project
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {topServices.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/30 bg-white/20 p-6 transition duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-lg"
              >
                <h4 className="text-base font-heading font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h4>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{service.description}</p>
                <ul className="mt-3 space-y-1 text-xs uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">
                  {service.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-200">{personalInfo.availability}</p>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <SectionTitle
            eyebrow="Featured Certifications"
            title="Proof points that back my research and engineering depth."
            description="A few recognitions that mean the most to me. Explore all credentials on the dedicated certifications page."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {featuredCertificates
              .filter(
                (certificate) =>
                  certificate.title !==
                  'Oracle Cloud Infrastructure 2024 · Generative AI Certified Professional',
              )
              .map((certificate) => (
                <div
                  key={certificate.title}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-6">
                    <h3 className="text-lg font-heading font-semibold text-slate-900 dark:text-white">
                      {certificate.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{certificate.description}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-center">
            <Button as="a" href="/certifications" variant="secondary">
              Browse all certifications
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
