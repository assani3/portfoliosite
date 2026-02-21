import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Code2 } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-glow-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.span variants={itemVariants} className="section-heading block text-center">
            About Me
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-12 font-display"
          >
            Crafting <span className="text-gradient">Digital Experiences</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground text-center leading-relaxed mb-16"
          >
            I'm a passionate Software Engineer, specializing in building 
            real-world web applications. With expertise in React, JavaScript, PHP, and MySQL, 
            I create solutions that make a difference—from e-commerce platforms for local 
            craftsmen to accessible e-learning systems for underserved communities.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: MapPin,
                title: 'Location',
                value: 'Pretoria, Gauteng',
                subtitle: 'South Africa',
              },
              {
                icon: GraduationCap,
                title: 'Education',
                value: 'BSc Information Technology (Software Engineering)',
                subtitle: '2025',
              },
              {
                icon: Code2,
                title: 'Focus',
                value: 'Full-Stack Development',
                subtitle: 'React • PHP • MySQL',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card rounded-2xl p-8 text-center glow-border group hover:border-primary/30 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon size={28} />
                </div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">{item.title}</h3>
                <p className="text-xl font-semibold text-foreground mb-1 font-display">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
