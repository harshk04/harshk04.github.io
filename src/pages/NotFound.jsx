import { Link } from 'react-router-dom';

import Container from '../components/Container.jsx';
import Seo from '../components/Seo.jsx';

const NotFound = () => (
  <Container className="flex flex-col items-center justify-center gap-4 py-20 text-center">
    <Seo title="Page not found" description="Sorry, this page could not be located." />
    <span className="rounded-full border border-primary/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
      404
    </span>
    <h1 className="text-4xl font-heading font-semibold">Page not found</h1>
    <p className="max-w-md text-slate-600 dark:text-slate-300">
      The page you are looking for has moved or no longer exists. Let’s get you back on track.
    </p>
    <Link
      to="/"
      className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
    >
      Go back home
    </Link>
  </Container>
);

export default NotFound;
