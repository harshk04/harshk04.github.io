import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import Timeline from '../components/Timeline.jsx';
import {
  aboutContent,
  education,
  personalInfo,
  services,
  overviewStats,
  professionalExperience,
  otherExperience,
} from '../data/profile.js';

const About = () => {
  return (
    <div className="space-y-24">
      <Seo
        title="About"
        description="Learn about the person behind the projects — how Harsh thinks, works, and learns across AI, data, and community leadership."
        url="https://harshk.is-a.dev/harsh-about"
      />

      {/* Hero / intro */}
      <section>
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-6">
            <SectionTitle
              eyebrow="About Me"
              title={aboutContent.title}
              description={aboutContent.description}
            />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-soft dark:border-white/10 dark:bg-white/5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Focus areas
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {aboutContent.focusAreas.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-soft dark:border-white/10 dark:bg-white/5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Strengths people notice
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {aboutContent.traits.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="space-y-5 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft dark:border-white/10 dark:bg-white/5">
            <h3 className="text-sm font-heading font-semibold text-slate-900 dark:text-white">
              Quick facts
            </h3>
            <dl className="grid gap-3 text-sm text-slate-700 dark:text-slate-200">
              <div className="flex justify-between gap-4">
                <dt className="font-medium text-slate-600 dark:text-slate-300">Location</dt>
                <dd className="text-right">{personalInfo.location}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="font-medium text-slate-600 dark:text-slate-300">Email</dt>
                <dd className="text-right">
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-primary">
                    {personalInfo.email}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="font-medium text-slate-600 dark:text-slate-300">Phone</dt>
                <dd className="text-right">
                  <a href="tel:+919928967278" className="hover:text-primary">
                    {personalInfo.phone}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="font-medium text-slate-600 dark:text-slate-300">Availability</dt>
                <dd className="text-right">{personalInfo.availability}</dd>
              </div>
            </dl>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
              <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 dark:text-white">
                Snapshot
              </h4>
              <ul className="mt-3 grid gap-2 text-sm text-slate-700 dark:text-white/90">
                {overviewStats.map((stat) => (
                  <li key={stat.label} className="flex justify-between gap-4">
                    <span className="font-medium">{stat.label}</span>
                    <span className="font-semibold text-primary">{stat.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button as="a" href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
              Open resume folder
            </Button>
          </aside>
        </Container>
      </section>

      {/* Experience */}
      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow="Experience"
            title="Tracks that shaped my approach to AI and product."
            description="I split my time between professional internships and community roles. Both taught me how to ship reliable work while staying empathetic to the people using it."
          />
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-sm font-heading font-semibold uppercase tracking-[0.3em] text-slate-700 dark:text-slate-200">
                Professional work experience
              </h3>
              <Timeline items={professionalExperience} collapsible />
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-heading font-semibold uppercase tracking-[0.3em] text-slate-700 dark:text-slate-200">
                Community leadership & impact
              </h3>
              <Timeline items={otherExperience} collapsible />
            </div>
          </div>
        </Container>
      </section>

      {/* Education */}
      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow="Education"
            title="Blending hardware roots with software and data depth."
            description="Engineering gave me systems thinking; additional programmes and self-driven work layered in data science, machine learning, and product storytelling."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {education.map((item) => (
              <div
                key={item.school}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
              >
                <div className="h-40 overflow-hidden">
                  <img src={item.image} alt={item.school} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                    {item.status}
                  </p>
                  <h3 className="text-base font-heading font-semibold text-slate-900 dark:text-white">
                    {item.program}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{item.school}</p>
                  <p className="mt-auto text-[11px] font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    {item.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How I work */}
      <section>
        <Container className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft dark:border-white/10 dark:bg-white/5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <SectionTitle
              eyebrow="How I work"
              title="Clarity first, then experiments, then polish."
              description="Every project for me starts with understanding the humans, not the models. Once we know what “better” looks like, I design experiments that move us there step by step."
            />
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <p className="rounded-3xl border border-slate-200 bg-white/80 p-5 leading-relaxed shadow-soft dark:border-white/10 dark:bg-white/10">
                In early discovery, I document constraints, data access, and success metrics so everyone is
                aligned. This reduces last-minute surprises and lets us move faster later.
              </p>
              <p className="rounded-3xl border border-slate-200 bg-white/80 p-5 leading-relaxed shadow-soft dark:border-white/10 dark:bg-white/10">
                From there, I mix notebooks, quick prototypes, and clear written updates. I over-index on
                naming, docs, and small demos so teammates can understand the system long after the initial
                build.
              </p>
              <div className="flex justify-start">
                <Button as="a" to="/harsh-contact" variant="secondary">
                  Let’s design your workflow
                </Button>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <h4 className="text-base font-heading font-semibold text-primary">{service.title}</h4>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                  {service.description}
                </p>
                <ul className="mt-3 grid gap-1 text-[11px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  {service.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
