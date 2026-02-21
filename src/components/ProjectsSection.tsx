import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ShoppingCart, BookOpen } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'SellersPoint',
    githubUrl: 'https://github.com/assani3/sellerspoint',
    liveUrl: 'https://sellerspoint-ii0qb031y-assani3s-projects.vercel.app/',
    subtitle: 'E-commerce Platform',
    description:
      'A comprehensive e-commerce platform developed for local South African craftsmen, enabling year-round sales with image uploads, user authentication, and buyer/seller role logic.',
    tech: ['React', 'PHP', 'MySQL', 'Bootstrap'],
    icon: ShoppingCart,
    date: 'May 2025 – Sep 2025',
    highlights: [
      'React frontend with PHP/MySQL backend',
      'Image uploads & authentication',
      'Buyer/seller role management',
    ],
    gradient: 'from-cyan-500 via-blue-500 to-purple-500',
  },
  {
    title: 'EduLite',
    githubUrl: 'https://github.com/assani3/edulite',
    liveUrl: 'https://github.com/assani3/edulite',
    subtitle: 'E-Learning Platform',
    description:
      'An accessible e-learning platform designed for rural South African learners, optimized for low-bandwidth environments with user-centric design and accessibility features.',
    tech: ['React', 'UI/UX Design', 'Accessibility'],
    icon: BookOpen,
    date: 'Sep 2025 – Nov 2025',
    highlights: [
      'Low-bandwidth optimization',
      'Accessibility-first design',
      'Dashboards, quizzes & tutorials',
    ],
    gradient: 'from-purple-500 via-pink-500 to-orange-500',
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-glow-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-heading">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Recent <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-24 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.3 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Visual */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.5 }}
                className={`relative aspect-video rounded-2xl overflow-hidden preserve-3d ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                <div className="absolute inset-0 glass-card flex items-center justify-center">
                  <project.icon size={80} className="text-primary/50" />
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
              </motion.div>

              {/* Project Info */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="text-sm text-primary font-medium">{project.date}</span>
                <h3 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-1">
                  {project.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-4">{project.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:bg-primary/10"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </Button>
                  <Button 
                  size="sm" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
