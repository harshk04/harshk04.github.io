import { Link } from 'react-router-dom';

import Container from '../components/Container.jsx';
import Seo from '../components/Seo.jsx';

const NotFound = () => (
  <Container className="flex flex-col items-center justify-center gap-6 py-20 text-center">
    <Seo title="Page not found" description="Sorry, this page could not be located." />
    <span className="rounded-full border border-primary/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
      404
    </span>
    <h1 className="text-3xl font-heading font-semibold text-slate-900 dark:text-white">
      This page has moved or never existed.
    </h1>
    <p className="max-w-md text-sm text-slate-600 dark:text-slate-300">
      You might be looking for one of the redesigned sections of my site. Use the quick links below or
      head back to the homepage.
    </p>
    <div className="flex flex-wrap justify-center gap-3">
      <Link
        to="/"
        className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
      >
        Go home
      </Link>
      <Link
        to="/harsh-projects"
        className="rounded-full border border-primary/30 px-5 py-2.5 text-sm font-medium text-primary transition hover:border-primary hover:bg-primary/5"
      >
        View projects
      </Link>
      <Link
        to="/harsh-resume"
        className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-primary/40 hover:text-primary dark:border-white/10 dark:text-slate-200"
      >
        View resume overview
      </Link>
    </div>
  </Container>
);

export default NotFound;
