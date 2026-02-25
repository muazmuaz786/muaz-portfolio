import { motion } from 'motion/react';
import { useInView } from '../hooks/use-in-view';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const { ref, isInView } = useInView();
  const CONTACT_EMAIL = 'koreanmuaz@gmail.com';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });
  const [status, setStatus] = useState<'idle' | 'opening' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject details:\n${formData.project}`
    );

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${subject}&body=${body}`;
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setStatus('opening');
    const openedGmail = window.open(gmailLink, '_blank');
    const openedMailto = openedGmail ? openedGmail : window.open(mailtoLink, '_blank');
    if (!openedGmail && !openedMailto) {
      window.location.href = mailtoLink;
    }

    // Reset UI state after handing off to the mail client
    setTimeout(() => setStatus('sent'), 500);
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', project: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#2C3444]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div>
            <div className="w-12 h-1 bg-white mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Interested in<br />working together?<br />
              <span className="flex items-center gap-3">
                Let's talk
                <ArrowRight size={48} className="text-[#0066FF]" />
              </span>
            </h2>
          </div>

          {/* Right Side - Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-3">
                Enter your name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-3">
                Your email address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="project" className="block text-white font-semibold mb-3">
                Describe your project
              </label>
              <textarea
                id="project"
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                required
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'opening'}
              className="inline-flex items-center gap-2 text-white font-semibold border-b-2 border-white pb-1 hover:border-[#0066FF] hover:text-[#0066FF] transition-all group"
            >
              {status === 'opening' ? 'Opening email...' : status === 'sent' ? 'Sent!' : 'Contact me'}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-xs text-gray-400" aria-live="polite">
              Opens Gmail compose (or your default mail app) and sends to {CONTACT_EMAIL}.
            </p>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
