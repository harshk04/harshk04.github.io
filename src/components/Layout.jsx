import { motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';

import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import ScrollUpButton from './ScrollUpButton.jsx';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 transition-colors dark:bg-background dark:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="py-12 sm:py-16"
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
      <ScrollUpButton />
    </div>
  );
};

export default Layout;
