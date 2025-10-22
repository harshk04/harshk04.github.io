import { motion } from 'framer-motion';
import clsx from 'clsx';

const buttonVariants = {
  primary:
    'bg-primary text-primary-foreground shadow-soft hover:shadow-glass hover:-translate-y-0.5',
  secondary:
    'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-white',
  outline:
    'border border-white/20 bg-transparent text-white hover:bg-white/10 dark:border-slate-700 dark:text-slate-200',
};

const MotionButton = motion.button;

const Button = ({
  as = 'button',
  href,
  variant = 'primary',
  className,
  children,
  icon: Icon,
  iconPosition = 'right',
  ...props
}) => {
  const Component = as === 'a' ? motion.a : MotionButton;

  return (
    <Component
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        'group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-60',
        buttonVariants[variant],
        className,
      )}
      href={href}
      {...props}
    >
      {iconPosition === 'left' && Icon && <Icon className="h-4 w-4" />}
      <span>{children}</span>
      {iconPosition === 'right' && Icon && <Icon className="h-4 w-4" />}
    </Component>
  );
};

export default Button;
