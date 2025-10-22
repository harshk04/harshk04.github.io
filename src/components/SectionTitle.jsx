import { motion } from 'framer-motion';

const SectionTitle = ({ eyebrow, title, description, align = 'left' }) => (
  <div
    className={`flex flex-col gap-3 ${
      align === 'center' ? 'items-center text-center' : 'items-start'
    }`}
  >
    {eyebrow && (
      <motion.span
        initial={{ y: 12, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="text-sm font-semibold uppercase tracking-[0.3em] text-primary"
      >
        {eyebrow}
      </motion.span>
    )}
    <motion.h2
      initial={{ y: 18, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="font-heading text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white"
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p
        initial={{ y: 18, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        className="max-w-2xl text-base text-slate-600 dark:text-slate-300"
      >
        {description}
      </motion.p>
    )}
  </div>
);

export default SectionTitle;
