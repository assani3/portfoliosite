import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award, Users } from 'lucide-react';

const experiences = [
  {
    type: 'education',
    title: 'BSc Information Technology (Software Engineering)',
    organization: 'Eduvos',
    location: 'Pretoria, Gauteng',
    date: '2025',
    description: 'Software Engineering concentration with coursework in Java, OOP, Computer Networks, Mobile Development, and Web Development.',
    icon: GraduationCap,
  },
  {
    type: 'work',
    title: 'Assistant',
    organization: 'Internet Café',
    location: 'Pretoria, Gauteng',
    date: 'Nov 2023 – Jan 2024',
    description: 'Assisted customers with technical issues, reviewed documents for accuracy, and delivered quality customer service in a fast-paced environment.',
    icon: Briefcase,
  },
  {
    type: 'activity',
    title: 'Member',
    organization: 'EduDev – Coding Club',
    location: 'Pretoria, Gauteng',
    date: 'Aug 2024 – Current',
    description: 'Collaborative web development, peer-led learning sessions, and building group projects using HTML, CSS, JavaScript, and Git.',
    icon: Users,
  },
  {
    type: 'activity',
    title: 'Self-Paced Learning',
    organization: 'The Odin Project',
    location: 'Online',
    date: 'Jan 2025 – Dec 2025',
    description: 'Full-stack development with Node.js, Express, React, and industry-standard workflows through project-based learning.',
    icon: Award,
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-heading">Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.5)]" />

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] glass-card rounded-2xl p-6 glow-border ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <exp.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {exp.date}
                    </span>
                    <h3 className="text-xl font-bold font-display mt-1">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground">{exp.organization}</p>
                    <p className="text-xs text-muted-foreground/70">{exp.location}</p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
