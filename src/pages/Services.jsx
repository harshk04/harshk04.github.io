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
  <div className="space-y-16">
    <Seo
      title="Services"
      description="AI/ML engineering, data products, and modern deployment practices offered by Harsh Kumawat."
      url="https://harshk.is-a.dev/services"
    />
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero-gradient opacity-40" />
      <Container className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-8 text-center shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/10">
        <SectionTitle
          align="center"
          eyebrow="Services"
          title="Let’s craft intelligent experiences end-to-end."
          description="From strategy and experimentation to deployment and observability, I help teams bring AI-powered ideas to life with clarity and speed."
        />
        <div className="mx-auto max-w-2xl space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          <p className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-soft dark:border-white/10 dark:bg-white/10">
            Whether you need a rapid prototype, a production-ready analytics assistant, or guidance on
            responsible AI adoption, I plug into your team as a hands-on partner. I combine research-backed
            experimentation with practical engineering so you can move quickly without sacrificing rigour.
          </p>
          {/* <p className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-soft dark:border-white/10 dark:bg-white/10">
            We’ll collaborate through weekly demos, async updates, and crisp documentation—keeping leaders
            aligned while engineers get the clarity they need to ship confidently.
          </p> */}
        </div>
      </Container>
    </section>

    <section>
      <Container className="grid gap-8 lg:grid-cols-3">
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
      </Container>
    </section>

    <section>
      <Container className="rounded-3xl border border-primary/20 bg-primary/5 p-10 text-center shadow-soft">
        <h3 className="text-2xl font-heading font-semibold text-primary">
          Have an idea, hackathon, or product sprint in mind?
        </h3>
        <p className="mt-4 text-base text-slate-700 dark:text-slate-200">
          I love partnering with teams who are eager to experiment and ship. Tell me about the
          challenge, and we’ll shape the roadmap together.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button as="a" href="/contact">
            Book a discovery call
          </Button>
          <Button as="a" href={`mailto:${personalInfo.email}`} variant="secondary">
            Email a brief
          </Button>
        </div>
        <div className="mt-6 grid gap-2 text-sm text-slate-700 dark:text-slate-200 md:grid-cols-2">
          <div className="rounded-2xl border border-white/30 bg-white/20 p-4">
            <h4 className="font-heading text-sm font-semibold text-primary">Discovery & Strategy</h4>
            <p className="mt-1">
              Alignment workshops, opportunity mapping, and success metrics that anchor every build.
            </p>
          </div>
          <div className="rounded-2xl border border-white/30 bg-white/20 p-4">
            <h4 className="font-heading text-sm font-semibold text-primary">Build & Launch</h4>
            <p className="mt-1">
              Rapid prototyping, iteration cycles, and launch support with observability baked in from day one.
            </p>
          </div>
        </div>
      </Container>
    </section>
  </div>
);

export default Services;
