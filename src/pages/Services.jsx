import { BrainCircuit, Cloud, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import { services, personalInfo } from '../data/profile.js';

const iconComponents = {
  'brain-circuit': BrainCircuit,
  layers: Layers,
  cloud: Cloud,
};

const Services = () => (
  <div className="space-y-20">
    <Seo
      title="Services"
      description="How I can partner with you on AI/ML projects, data products, and lightweight MLOps foundations."
      url="https://harshk.is-a.dev/harsh-services"
    />

    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_55%),radial-gradient(circle_at_bottom,rgba(129,140,248,0.18),transparent_55%)]" />
      <Container className="grid gap-10 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="space-y-5 text-left">
          <SectionTitle
            eyebrow="Services"
            title="Let’s design AI work that feels responsible and useful."
            description="I join teams as a hands-on engineer who can also think in narratives, roadmaps, and measurable outcomes not just models and metrics."
          />
          <div className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
            <p>
              Whether you are validating a new idea, improving an existing workflow, or building an internal
              tool, I focus on shaping projects that are small, testable, and easy to maintain.
            </p>
            <p>
              Engagements typically start with a short discovery call where we sketch the problem, constraints,
              and the first experiment we can run together.
            </p>
          </div>
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white/90 p-6 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-200">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            What I look for
          </p>
          <ul className="mt-3 space-y-2">
            <li>• A real user or teammate whose life we are making easier.</li>
            <li>• A small slice of the problem we can solve in weeks, not months.</li>
            <li>• Willingness to iterate on prompts, UX, and evaluation—together.</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button as="a" to="/harsh-contact">
              Book a 20-min discovery call
            </Button>
            <Button as="a" href={`mailto:${personalInfo.email}`} variant="secondary">
              Email a quick brief
            </Button>
          </div>
        </div>
      </Container>
    </section>

    {/* Service tracks */}
    <section>
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Ways we can work together"
          title="Pick the track that matches where you are."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconComponents[service.icon] ?? BrainCircuit;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-heading font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
                <ul className="mt-auto space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>

    {/* Process */}
    <section>
      <Container className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft dark:border-white/10 dark:bg-white/5 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-lg font-heading font-semibold text-slate-900 dark:text-white">
            A simple, three-step process
          </h3>
          <ol className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
            <li>
              <span className="font-semibold text-primary">1. Scope</span> – we define the user, the
              problem, and a clear “definition of done”.
            </li>
            <li>
              <span className="font-semibold text-primary">2. Prototype</span> – I build a thin slice of
              the solution so we can test assumptions quickly.
            </li>
            <li>
              <span className="font-semibold text-primary">3. Stabilise</span> – we smooth edges, add
              observability, and document the system so your team can own it.
            </li>
          </ol>
        </div>
        <div className="space-y-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-sm text-slate-700 dark:text-slate-200">
          <h4 className="font-heading text-sm font-semibold text-primary">
            Ideal for internships, freelance work, and hackathons
          </h4>
          <p>
            I especially enjoy joining early-stage projects where we can move quickly, iterate in public,
            and treat the work as a shared learning experience.
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            If you are unsure which track fits, send a short description of the challenge. I’m happy to
            suggest a starting point or point you to a better fit.
          </p>
        </div>
      </Container>
    </section>

    {/* Closing CTA */}
    <section>
      <Container className="rounded-3xl border border-primary/25 bg-primary/5 p-8 text-center shadow-soft">
        <h3 className="text-2xl font-heading font-semibold text-primary">
          Have an idea, hackathon, or product sprint in mind?
        </h3>
        <p className="mt-4 text-base text-slate-700 dark:text-slate-200">
          Share a few lines about the context and constraints, and I’ll reply with concrete next steps—no
          pressure, no long sales pitch.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button as="a" to="/harsh-contact">
            Book a discovery call
          </Button>
          <Button as="a" href={`mailto:${personalInfo.email}`} variant="secondary">
            Email a brief
          </Button>
        </div>
      </Container>
    </section>
  </div>
);

export default Services;
