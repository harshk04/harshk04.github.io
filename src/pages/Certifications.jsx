import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import { certifications } from '../data/profile.js';

const Certifications = () => (
  <div className="space-y-16">
    <Seo
      title="Certifications"
      description="Explore every certification, award, and publication earned by Harsh Kumawat."
      url="https://harshk.is-a.dev/certifications"
    />

    <section>
      <Container className="space-y-6 text-center">
        <SectionTitle
          align="center"
          eyebrow="Credentials"
          title="A catalogue of certificates, publications, and recognitions."
          description="From academic programmes to hackathon wins and research publications, this list captures the milestones that shaped my AI and engineering practice."
        />
        <div className="flex justify-center">
          <Button as="a" href="/resume" variant="secondary">
            Download resume summary
          </Button>
        </div>
      </Container>
    </section>

    <section>
      <Container className="space-y-8">
        <h3 className="text-lg font-heading font-semibold text-slate-900 dark:text-white">
          Complete list
        </h3>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certificate) => (
            <article
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
