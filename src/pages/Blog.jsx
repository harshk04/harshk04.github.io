import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Container from '../components/Container.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import { blogPosts } from '../data/profile.js';

const Blog = () => (
  <div className="space-y-16">
    <Seo
      title="Blog"
      description="Essays and field notes from Harsh Kumawat’s AI projects, community work, and product experiments."
      url="https://harshk.is-a.dev/harsh-blog"
    />

    {/* Hero */}
    <section>
      <Container className="grid gap-8 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-soft dark:border-white/10 dark:bg-white/10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-5">
          <SectionTitle
            eyebrow="Blog"
            title="Stories from the build logs."
            description="I write when a project, community sprint, or conversation teaches me something I don’t want to forget. Expect honest reflections more than perfect playbooks."
          />
        </div>
        <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-200">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            What I write about
          </p>
          <ul className="mt-2 space-y-1">
            <li>• Applied AI and RAG workflows.</li>
            <li>• Leading and scaling student communities.</li>
            <li>• Designing side projects with real users in mind.</li>
          </ul>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            If you’d like me to cover something specific, you can always suggest a topic at the bottom of
            this page.
          </p>
        </div>
      </Container>
    </section>

    {/* Posts */}
    <section>
      <Container className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
          >
            {post.heroImage && (
              <div className="h-40 overflow-hidden">
                <img
                  src={post.heroImage}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col gap-4 p-8">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-2 text-primary">
                  <CalendarDays className="h-4 w-4" /> {post.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" /> {post.readTime}
                </span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 dark:text-white">
                {post.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to={`/harsh-blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3 hover:text-primary/80"
              >
                Read article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </Container>
    </section>

    {/* CTA */}
    <section>
      <Container className="flex justify-center">
        <div className="max-w-3xl space-y-4 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft dark:border-white/10 dark:bg-white/5">
          <h3 className="text-2xl font-heading font-semibold text-slate-900 dark:text-white">
            Want me to write about something specific?
          </h3>
          <p className="text-base text-slate-600 dark:text-slate-300">
            I love swapping ideas around AI strategy, community building, and rapid prototyping. Drop a
            message and let’s co-create a story that serves the communities you care about.
          </p>
          <div className="flex justify-center">
            <Link
              to="/harsh-contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Suggest a topic
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  </div>
);

export default Blog;
