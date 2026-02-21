import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('sending');

  try {
    await emailjs.send(
      'service_g6ft24j',
      'template_rst4vbk',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'HxHM4GttKTGxkco-V'
    );

    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    console.error('EmailJS error:', error);
    setStatus('error');
  }
};

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'assanishabani51@gmail.com',
      href: 'mailto:assanishabani51@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '067 169 1049',
      href: 'tel:+27671691049',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pretoria, Gauteng, South Africa',
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/assani3', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/assani-shabani-g', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-heading">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-display mb-6">
              Ready to work together?
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always excited to connect with fellow developers, potential collaborators, 
              and anyone interested in building impactful digital solutions. Feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="bg-secondary border-border focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="bg-secondary border-border focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-secondary border-border focus:border-primary resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={status === 'sending'}
                 className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              >
                 <Send size={18} className="mr-2" />
                 {status === 'sending' ? 'Sending...' : 'Send Message'}
                </Button>

                {status === 'success' && (
                 <p className="text-green-500 text-sm text-center">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
