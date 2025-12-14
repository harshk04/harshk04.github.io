import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import { certifications, personalInfo, professionalExperience, education } from '../data/profile.js';
import { skills } from '../data/skills.js';

const Resume = () => (
  <div className="space-y-20">
    <Seo
      title="Resume"
      description="A concise, resume-style view of Harsh Kumawat’s skills, experience, education, and selected credentials."
      url="https://harshk.is-a.dev/harsh-resume"
    />

    {/* Skills */}
    <section>
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Skills"
          title="Tooling and themes I’m comfortable with."
          description="Grouped by areas so you can quickly scan where I’m strongest."
        />
        <div className="flex flex-wrap gap-3">
          <Button
            as="a"
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download full resume (PDF)
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                {group.category}
              </h3>
              <ul className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-3">
                    <img src={item.icon} alt={item.name} className="h-7 w-7" loading="lazy" />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>

    {/* Experience snapshot */}
    <section>
      <Container className="space-y-6">
        <SectionTitle
          eyebrow="Experience"
          title="Recent roles and internships."
          description="A quick view of the most relevant positions. See the About page for a richer narrative."
        />
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5">
          {professionalExperience.slice(0, 5).map((item) => (
            <div
              key={`${item.company}-${item.role}-${item.period}`}
              className="border-b border-slate-100 pb-6 pt-2 last:border-b-0 last:pb-0 dark:border-white/10"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {item.role} · {item.company}
                </p>
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  {item.period}
                </p>
              </div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                {item.tag}
              </p>
              {item.description && (
                <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  {item.description.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>

    {/* Education & certifications */}
    <section>
      <Container className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <SectionTitle
            eyebrow="Education"
            title="Formal programmes."
            description="The foundations that shaped how I think about systems, data, and communication."
          />
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5">
            {education.map((item) => (
              <div
                key={item.school}
                className="flex items-center gap-3 border-b border-slate-100 pb-4 last:border-b-0 last:pb-0 dark:border-white/10"
              >
                <div className="h-10 w-10 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.school}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {item.program}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{item.school}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    {item.period} · {item.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <SectionTitle
          // Hellos
            eyebrow="Certifications"
            title="Highlights from continued learning."
            description="A small subset of credentials that align closely with AI, cloud, and product work."
          />
          <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-6 text-sm shadow-soft dark:border-white/10 dark:bg-white/5">
            {certifications.slice(0, 3).map((certificate) => (
              <div
                key={certificate.title}
                className="flex items-center gap-3 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0 dark:border-white/10"
              >
                <div className="h-10 w-14 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-900">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">
                    {certificate.title}
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300">
                    {certificate.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  </div>
);

export default Resume;
