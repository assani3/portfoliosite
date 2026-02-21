import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p className="font-display text-lg font-bold text-gradient">AGS</p>
          <p className="flex items-center gap-1">
            Built by Assani G. Shabani
          </p>
          <p>© {new Date().getFullYear()} All rights reserved</p>
        </motion.div>
      </div>
    </footer>
  );
}
