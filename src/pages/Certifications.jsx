import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import { certifications } from '../data/profile.js';

const Certifications = () => (
  <div className="space-y-18">
    <Seo
      title="Certifications"
      description="Explore certifications, publications, hackathon wins, and other milestones that back Harsh Kumawat’s work in AI and engineering."
      url="https://harshk.is-a.dev/harsh-certifications"
    />

    {/* Hero */}
    <section>
      <Container className="grid gap-8 rounded-3xl border border-slate-200 bg-white/80 p-8 text-left shadow-soft dark:border-white/10 dark:bg-white/10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-5">
          <SectionTitle
            eyebrow="Credentials"
            title="Proof points that complement the projects."
            description="I care most about experiences that sharpen my judgment, but formal credentials help you understand where that experience comes from."
          />
          <div className="flex flex-wrap gap-3">
            <Button as="a" to="/harsh-resume" variant="secondary">
              View resume-style overview
            </Button>
          </div>
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white/90 p-5 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-200">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            What you’ll find here
          </p>
          <ul className="mt-2 space-y-2">
            <li>• Research publications and patents in applied AI.</li>
            <li>• Cloud and AI platform certifications from major providers.</li>
            <li>• Hackathon recognitions and programmes that emphasise leadership.</li>
          </ul>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Together, they show the breadth of topics I’ve invested in—from infrastructure and security to
            data science, ML, and communication.
          </p>
        </div>
      </Container>
    </section>

    {/* Grid */}
    <section>
      <Container className="space-y-8">
        <h3 className="mt-4 text-sm font-heading font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
          Complete list
        </h3>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certificate) => (
            <article
              key={certificate.title}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="certification-image w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6 text-left">
                <h4 className="text-base font-heading font-semibold text-slate-900 dark:text-white">
                  {certificate.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">{certificate.description}</p>
                {certificate.link && (
                  <Button
                    as="a"
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    className="mt-auto w-max"
                  >
                    View credential
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  </div>
);

export default Certifications;
