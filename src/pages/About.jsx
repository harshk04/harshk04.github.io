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
    <div className="space-y-20">
      <Seo
        title="About"
        description="Learn about Harsh Kumawat’s journey across AI communities, internships, and human-centred product builds."
        url="https://harshk.is-a.dev/about"
      />
      <section>
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:items-center">
          <div className="space-y-6">
            <SectionTitle
              eyebrow="About"
              title="Human-first engineer with a love for AI craftsmanship."
              description={aboutContent.description}
            />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  Focus areas
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {aboutContent.focusAreas.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  Strengths
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {aboutContent.traits.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-5 rounded-3xl border border-primary/20 bg-primary/5 p-6">
            <h3 className="text-lg font-heading font-semibold text-primary">Quick facts</h3>
            <dl className="grid gap-4 text-sm text-slate-700 dark:text-slate-200">
              <div className="flex justify-between border-b border-white/20 pb-2">
                <dt className="font-medium">Location</dt>
                <dd>{personalInfo.location}</dd>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <dt className="font-medium">Email</dt>
                <dd>
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-primary">
                    {personalInfo.email}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <dt className="font-medium">Phone</dt>
                <dd>
                  <a href="tel:+919928967278" className="hover:text-primary">
                    {personalInfo.phone}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Availability</dt>
                <dd className="text-right">{personalInfo.availability}</dd>
              </div>
            </dl>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/20 dark:bg-white/10">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 dark:text-white">
                Snapshot
              </h4>
              <ul className="mt-3 grid gap-2 text-sm text-slate-700 dark:text-white/90">
                {overviewStats.map((stat) => (
                  <li key={stat.label} className="flex justify-between">
                    <span className="font-medium">{stat.label}</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{stat.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button as="a" href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
              View resume
            </Button>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow="Experience"
            title="Connecting leadership, research, and hands-on engineering."
            description="Two complementary tracks: professional internships where I solved real product problems, and community roles that sharpened leadership, storytelling, and empathy."
          />
          <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-slate-900 dark:text-white">
              Professional work experience
            </h3>
            <Timeline items={professionalExperience} collapsible />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-slate-900 dark:text-white">
              Other leadership & impact
            </h3>
            <Timeline items={otherExperience} collapsible />
          </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow="Education"
            title="Learning that blends hardware roots with software ambition."
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
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    {item.status}
                  </p>
                  <h3 className="text-lg font-heading font-semibold text-slate-900 dark:text-white">
                    {item.program}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{item.school}</p>
                  <p className="mt-auto text-xs font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    {item.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-10 shadow-soft dark:border-white/10 dark:bg-white/5 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <SectionTitle
              eyebrow="How I work"
              title="Bringing clarity to complex, technical problems."
              description="Every collaboration starts with discovery, clear metrics, and accessible storytelling — ensuring teammates and stakeholders stay aligned."
            />
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <p className="rounded-3xl border border-slate-200 bg-white/80 p-5 leading-relaxed shadow-soft dark:border-white/10 dark:bg-white/10">
                Discovery sessions help me translate goals into measurable outcomes and surface constraints early. I document assumptions, data requirements, and success metrics so every partner knows what we are solving and why it matters.
              </p>
              <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-5 leading-relaxed shadow-soft dark:border-white/10 dark:bg-white/10">
                <p>
                  From there I run quick experiments—mixing scrappy prototypes, evaluation notebooks, and narrative updates. Frequent checkpoints keep leadership aligned while engineering teams get the clarity and autonomy they need to ship.
                </p>
                <div className="flex justify-center">
                  <Button as="a" href="/contact" variant="secondary">
                    Let’s design your workflow
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <h4 className="text-base font-heading font-semibold text-primary">{service.title}</h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
                <ul className="mt-3 grid gap-1 text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
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
