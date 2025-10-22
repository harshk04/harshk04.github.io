import { useState } from 'react';
import { motion } from 'framer-motion';

import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import SocialLinks from '../components/SocialLinks.jsx';
import { contactChannels, personalInfo, socialLinks } from '../data/profile.js';

const CONTACT_ENDPOINT = 'https://formsubmit.co/ajax/kumawatharsh2004@gmail.com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ state: 'error', message: 'Please fill in the required fields.' });
      return;
    }

    try {
      setStatus({ state: 'loading', message: 'Sending your message…' });
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          _subject: 'New message from harshk.is-a.dev',
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setStatus({ state: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        throw new Error('Unable to submit form.');
      }
    } catch {
      setStatus({
        state: 'error',
        message: 'Something went wrong. Please reach out via email instead.',
      });
    }
  };

  return (
    <div className="space-y-16">
      <Seo
        title="Contact"
        description="Contact Harsh Kumawat for AI/ML projects, collaborations, and speaking opportunities."
        url="https://harshk.is-a.dev/contact"
      />
      <section>
        <Container className="space-y-6 text-center">
          <SectionTitle
            align="center"
            eyebrow="Contact"
            title="Let’s collaborate on something meaningful."
            description="Whether it’s a hackathon sprint, a product idea, or community mentoring, I’d love to hear what you’re building."
          />
        </Container>
      </section>

      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_55%),radial-gradient(circle_at_bottom,rgba(20,184,166,0.15),transparent_55%)]" />
        <Container className="grid gap-12 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-heading font-semibold text-slate-900 dark:text-white">
                Reach out directly
              </h3>
              <ul className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                {contactChannels.map((channel) => (
                  <li key={channel.label} className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                      {channel.label}
                    </span>
                    <a href={channel.href} className="mt-1 text-base font-medium text-slate-800 hover:text-primary dark:text-slate-200">
                      {channel.value}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Socials
                </p>
                <SocialLinks links={socialLinks} className="mt-3" />
              </div>
            </div>
            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="text-base font-heading font-semibold text-primary">Availability</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                {personalInfo.availability}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Typical response time: under 24 hours
              </p>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft dark:border-white/10 dark:bg-white/5"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Name*
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-xl border border-slate-200 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-white/10 dark:text-white"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-xl border border-slate-200 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-white/10 dark:text-white"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Organisation / context
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="rounded-xl border border-slate-200 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-white/10 dark:text-white"
                placeholder="Startup, community, or team name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Project details*
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="rounded-xl border border-slate-200 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-white/10 dark:text-white"
                placeholder="Tell me about the challenge, timeline, and what success looks like."
              />
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit" disabled={status.state === 'loading'}>
                {status.state === 'loading' ? 'Sending…' : 'Send message'}
              </Button>
              {status.message && (
                <p
                  className={`text-sm ${
                    status.state === 'success'
                      ? 'text-green-500'
                      : status.state === 'error'
                      ? 'text-red-500'
                      : 'text-slate-500'
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </motion.form>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
