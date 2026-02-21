import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Prompt Engineering',
    issuer: 'SoloLearn',
    date: 'Dec 2025',
    color: 'from-cyan-500 to-blue-500',
    credentialUrl: 'https://www.sololearn.com/en/certificates/CC-JNLSIFCA',
  },
  {
    title: 'JavaScript Intermediate',
    issuer: 'SoloLearn',
    date: 'Jan 2025',
    color: 'from-yellow-500 to-orange-500',
    credentialUrl: 'https://www.sololearn.com/en/certificates/CC-59ZPOTLC',
  },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-heading">Achievements</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full glow-border relative overflow-hidden">
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`} />
                
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white shadow-lg`}>
                    <Award size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold font-display text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">Issued {cert.date}</p>
                  </div>
                </div>
                
<a href={cert.credentialUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
>
  <ExternalLink size={14} />
  Show credential
</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
