import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import { certifications, publications } from '../data/profile.js';

const Certifications = () => (
  <div className="space-y-18">
    <Seo
      title="Certifications"
      description="Explore certifications, publications, hackathon wins, and other milestones that back Harsh Kumawat’s work in AI and engineering."
      url="https://harshk.is-a.dev/harsh-certifications"
    />

    {/* Hero */}
  

    <section>
      <Container className="space-y-6">
        <SectionTitle
          eyebrow="Publications & learning"
          title="Research on natural-language systems and continued AI learning."
          description="Selected work exploring how language models can make complex data and domain knowledge easier to use."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {publications.map((publication) => (
            <a
              key={publication.title}
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-slate-200 bg-white p-6 text-sm font-medium text-slate-800 shadow-soft transition hover:-translate-y-1 hover:border-primary/40 hover:text-primary dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
            >
              {publication.title}
            </a>
          ))}
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
