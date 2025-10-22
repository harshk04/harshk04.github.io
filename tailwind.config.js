import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
      },
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        background: {
          DEFAULT: '#0f172a',
          muted: '#111c34',
          inverted: '#f8fafc',
        },
        surface: {
          DEFAULT: '#10172f',
          alt: '#1e293b',
        },
        primary: {
          DEFAULT: '#6366f1',
          foreground: '#f8fafc',
        },
        accent: {
          DEFAULT: '#14b8a6',
          foreground: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 18px 42px -15px rgba(15, 23, 42, 0.45)',
        soft: '0 10px 25px -15px rgba(15, 23, 42, 0.35)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top left, rgba(99,102,241,0.25), transparent 55%), radial-gradient(circle at 20% 80%, rgba(20,184,166,0.2), transparent 55%)',
      },
    },
  },
  plugins: [typography],
};

export default config;
