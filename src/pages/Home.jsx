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
  const featuredExperience = professionalExperience.filter((item) =>
    ['IndusLabs AI', 'Ravviolabs Technologies'].includes(item.company),
  );
  const topServices = services.slice(0, 3);

  return (
    <div className="space-y-24">
      <Seo
        title="Home"
        description="Harsh Kumawat · AI/ML engineer and engineering undergraduate designing human-centred AI systems, data products, and graduation-ready engineering projects."
        url="https://harshk.is-a.dev/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.18),transparent_55%)]" />
        <Container className="grid gap-12 py-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-900 shadow-sm backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-slate-100">
              {heroContent.eyebrow}
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-heading font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] dark:text-white">
                Hi, I’m{' '}
                <span className="bg-gradient-to-r from-primary via-emerald-400 to-sky-400 bg-clip-text text-transparent animated-gradient-text">
                  {personalInfo.name}
                </span>
                .
                <br className="hidden sm:block" />
                I design AI experiences that feel practical, calm, and human.
              </h1>
              <p className="max-w-2xl text-base text-slate-700 sm:text-lg dark:text-slate-200">
                I blend applied machine learning, product thinking, and community leadership to ship
                tools from RAG assistants and analytics dashboards to education-focused experiments that
                people actually enjoy using.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button as="a" to={heroContent.primaryCta.href} iconPosition="right">
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
              <Button as="a" to="/harsh-contact" variant="ghost">
                Say hi about a project
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">
                Find me on
              </span>
              <SocialLinks links={socialLinks} className="gap-2" />
            </div>
          </div>

          <div className="relative mx-auto max-w-sm">
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.75rem] bg-gradient-to-tr from-primary/30 via-emerald-400/20 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/40 bg-white/10 p-2 shadow-soft backdrop-blur dark:border-white/20">
              <div className="overflow-hidden rounded-[1.75rem]">
                <img
                  src="/images/profile2.jpeg"
                  alt={personalInfo.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center border-t border-white/10 px-5 py-4 text-xs text-slate-700 dark:text-slate-100">
                <div>
                  <p className="font-semibold uppercase tracking-[0.3em] text-primary">
                    AI / ML · Data
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-300">
                    {personalInfo.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section>
        <Container>
          <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-soft dark:border-white/10 dark:bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
            {overviewStats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-3xl font-heading font-semibold text-primary">{stat.value}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Work preview */}
      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow="Featured projects"
            title="A small sample of assistants, data products, and prototypes."
            description="I enjoy shipping opinionated tools that feel thoughtfully scoped rather than overbuilt. Most start as scrappy experiments and graduate into polished, documented projects."
          />
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Button as="a" to="/harsh-projects" variant="secondary">
              Explore the full project gallery
            </Button>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Curious about the architecture or trade-offs behind any build? I’m happy to walk through the decisions.
            </p>
          </div>
        </Container>
      </section>

      {/* Experience & services */}
      <section>
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft dark:border-white/10 dark:bg-white/5">
            <SectionTitle
              eyebrow="Experience"
              title="Internships and roles that taught me to ship."
              description="A quick timeline of recent work across AI startups, product labs, and community leadership."
            />
            <Timeline items={featuredExperience} maxPoints={2} />
            <Button as="a" to="/harsh-about" variant="secondary">
              See the full journey
            </Button>
          </div>

          <div className="space-y-5 rounded-3xl border border-primary/20 bg-primary/5 p-6 shadow-soft">
            <h3 className="text-base font-heading font-semibold text-primary">
              How I usually collaborate
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-100">
              I work best when we blend sharp problem statements, small experiments, and clear success
              metrics. Most of my projects fall into one of these buckets:
            </p>
            <div className="space-y-4">
              {topServices.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-white/40 bg-white/40 p-4 text-sm shadow-sm dark:border-white/20 dark:bg-white/10"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                    {service.title}
                  </p>
                  <p className="mt-2 text-slate-700 dark:text-slate-200">{service.description}</p>
                </div>
              ))}
            </div>
            <Button as="a" to="/harsh-services" variant="secondary">
              View detailed service areas
            </Button>
          </div>
        </Container>
      </section>

      {/* Education & credentials */}
      <section>
        <Container className="space-y-8">
          <SectionTitle
            eyebrow="Learning & credentials"
            title="Building reliable foundations in engineering, data, and AI."
            description="Formal education and selected certifications that ground how I think about systems, statistics, and responsible AI."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {education.map((item) => (
              <div
                key={item.school}
                className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
              >
                <div className="h-40 overflow-hidden">
                  <img src={item.image} alt={item.school} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                    {item.status}
                  </span>
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

          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-soft dark:border-white/10 dark:bg-white/5 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-3">
              <h3 className="text-lg font-heading font-semibold text-slate-900 dark:text-white">
                A few credentials that matter most
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Beyond grades, I lean on research publications, patents, and cloud certifications to stay
                honest about my depth in AI and infrastructure.
              </p>
              <Button as="a" to="/harsh-certifications" variant="secondary">
                View all certifications
              </Button>
            </div>
            <div className="mt-4 grid flex-1 gap-3 sm:grid-cols-2 lg:mt-0">
              {featuredCertificates.map((certificate) => (
                <div
                  key={certificate.title}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs shadow-sm dark:border-white/10 dark:bg-white/5"
                >
                  <div className="h-9 w-9 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-900">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="font-medium text-slate-800 dark:text-slate-100">{certificate.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section>
        <Container className="space-y-6 rounded-3xl border border-primary/25 bg-gradient-to-r from-primary/5 via-sky-100/40 to-emerald-50/60 p-8 text-center shadow-soft dark:border-primary/30 dark:from-primary/10 dark:via-sky-900/40 dark:to-emerald-900/40">
          <h3 className="text-2xl font-heading font-semibold text-slate-900 dark:text-white">
            Building something where thoughtful AI could help?
          </h3>
          <p className="mx-auto max-w-2xl text-sm text-slate-700 dark:text-slate-200">
            I’d love to help you scope, prototype, or ship it—whether it’s a portfolio-ready student project,
            a startup experiment, or a new internal tool at work.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button as="a" to="/harsh-contact">
              Start a conversation
            </Button>
            <Button as="a" to="/harsh-resume" variant="secondary">
              Skim my resume-style overview
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
