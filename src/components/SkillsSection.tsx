import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Backend',
    skills: ['PHP', 'MySQL', 'Node.js', 'Express'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Linux', 'Windows', 'VS Code'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Other Skills',
    skills: ['Java', 'Data Structures', 'Algorithms', 'Problem Solving'],
    color: 'from-green-500 to-emerald-500',
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-heading">Technical Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.15 }}
              className="perspective-1000"
            >
              <div className="glass-card rounded-2xl p-6 h-full preserve-3d hover:-translate-y-2 transition-all duration-500 group glow-border">
                <div className={`h-1 rounded-full bg-gradient-to-r ${category.color} mb-6`} />
                <h3 className="text-lg font-semibold mb-4 font-display text-foreground">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.15 + skillIndex * 0.1,
                      }}
                      className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-6 font-display text-muted-foreground">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {['Problem Solving', 'Teamwork', 'Communication', 'Attention to Detail', 'Adaptability'].map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="px-5 py-2 rounded-full border border-primary/30 text-foreground bg-primary/5 hover:bg-primary/10 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
