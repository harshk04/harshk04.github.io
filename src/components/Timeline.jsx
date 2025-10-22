import { useState } from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
  initial: { opacity: 0, x: -12 },
  animate: { opacity: 1, x: 0 },
};

const Timeline = ({ items, collapsible = false }) => {
  const [openIndex, setOpenIndex] = useState(collapsible ? -1 : null);

  const handleToggle = (index) => {
    if (!collapsible) return;
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="relative space-y-8 border-l border-slate-200 pl-8 dark:border-white/10">
      {items.map((item, index) => {
        const hasDescription = Array.isArray(item.description) && item.description.length > 0;
        const isOpen = !collapsible || !hasDescription || openIndex === index;
        return (
          <motion.div
            key={`${item.company}-${item.period}-${index}`}
            variants={itemVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-[38px] top-2 flex h-3 w-3 items-center justify-center rounded-full border-2 border-primary bg-white dark:bg-background" />
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-primary/40 dark:border-white/10 dark:bg-white/5">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                {item.company}
              </span>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-heading font-semibold text-slate-900 dark:text-white">
                  {item.role}
                </h3>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  {item.period}
                </p>
              </div>
              {(item.tag || item.type) && (
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                  {item.tag || item.type}
                </p>
              )}
              {hasDescription && isOpen && (
                <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.description.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-primary/60" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              {hasDescription && collapsible && (
                <div className="mt-auto flex justify-end">
                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary transition hover:bg-primary hover:text-white"
                  >
                    {isOpen ? 'Hide details' : 'View details'}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Timeline;
