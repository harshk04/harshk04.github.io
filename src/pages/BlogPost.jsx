import { useMemo, useState } from 'react';
import { ArrowLeft, CalendarDays, Clock, Link as LinkIcon, Linkedin, Twitter } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import Container from '../components/Container.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import { blogPosts } from '../data/profile.js';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((entry) => entry.slug === slug);
  const [copied, setCopied] = useState(false);

  const shareUrl = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return `https://harshk.is-a.dev/blog/${slug}`;
  }, [slug]);

  const twitterShare = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post?.title ?? '')}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      setCopied(false);
    }
  };

  if (!post) {
    return (
      <Container className="py-16 text-center">
        <Seo title="Blog post not found" description="The requested blog entry could not be located." />
        <SectionTitle
          align="center"
          title="Hmm, this story is missing"
          description="The blog post you’re trying to read isn’t available. Head back to explore other articles."
        />
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          <ArrowLeft className="h-4 w-4" />
          Return to blog
        </Link>
      </Container>
    );
  }

  return (
    <div className="space-y-12">
      <Seo
        title={post.title}
        description={post.description}
        url={`https://harshk.is-a.dev/blog/${post.slug}`}
        image={post.heroImage}
      />
      <section className="border-b border-slate-200 bg-white py-12 dark:border-white/10 dark:bg-white/5">
        <Container className="space-y-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3 hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all articles
          </Link>
          <SectionTitle
            eyebrow="Blog"
            title={post.title}
            description={post.description}
          />
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-2 text-primary">
              <CalendarDays className="h-4 w-4" /> {post.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-semibold tracking-[0.3em] text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {post.heroImage && (
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-soft dark:border-white/10">
              <img src={post.heroImage} alt={post.title} className="h-full w-full object-cover" />
            </div>
          )}
        </Container>
      </section>

      <section>
        <Container className="max-w-3xl space-y-10">
          <div className="prose prose-slate dark:prose-invert">
            {post.content?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="not-prose flex flex-wrap items-center gap-4 rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-soft dark:border-white/10 dark:bg-white/5">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Share this article:</span>
            <div className="flex items-center gap-3">
              <a
                href={twitterShare}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-white"
              >
                <Twitter className="h-4 w-4" /> Twitter
              </a>
              <a
                href={linkedinShare}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-white"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-white"
              >
                <LinkIcon className="h-4 w-4" /> {copied ? 'Copied' : 'Copy link'}
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default BlogPost;
