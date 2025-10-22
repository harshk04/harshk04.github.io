import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import { certifications, personalInfo } from '../data/profile.js';
import { skills } from '../data/skills.js';

const Resume = () => (
  <div className="space-y-16">
    <Seo
      title="Resume"
      description="Access Harsh Kumawat’s resume, skills overview, and certifications in one place."
      url="https://harshk.is-a.dev/resume"
    />
    <section>
      <Container className="space-y-6 text-center">
        <SectionTitle
          align="center"
          eyebrow="Resume"
          title="A snapshot of my skills, experience, and impact."
          description="Download a polished PDF resume or explore the sections below for a quick overview of technical strengths and recent work."
        />
        <div className="flex flex-wrap justify-center gap-4">
          <Button as="a" href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
            Download PDF
          </Button>
          <Button as="a" href="/contact" variant="secondary">
            Request tailored resume
          </Button>
        </div>
      </Container>
    </section>

    <section>
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Core toolkit"
          title="Tools and technologies I lean on."
          description="Grouped by themes so you can quickly scan technical depth and breadth."
        />
        {/* <p className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-6 text-base leading-relaxed text-slate-600 shadow-soft dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
          From rapid experimentation in notebooks to deploying resilient pipelines, this stack represents
          the tools I reach for most when bringing AI ideas to life. I pair them with clear documentation and
          evaluation frameworks so teams can maintain velocity long after handover.
        </p> */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                {group.category}
              </h3>
              <ul className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-3">
                    <img src={item.icon} alt={item.name} className="h-8 w-8" loading="lazy" />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>

    <section>
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Certifications"
          title="Highlights from continued learning."
          description="A few selected credentials that reinforce my focus on AI, cloud, and product strategy."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {certifications.slice(0, 6).map((certificate) => (
            <div
              key={certificate.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="text-base font-heading font-semibold text-slate-900 dark:text-white">
                  {certificate.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {certificate.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  </div>
);

export default Resume;
