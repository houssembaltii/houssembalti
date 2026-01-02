import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

export const Hero = () => {
  return (
    <section className="container mx-auto flex min-h-[80vh] max-w-xl flex-col items-center justify-center space-y-8 py-20 text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-4"
      >
        <div className="relative h-40 w-40 md:h-48 md:w-48">
          <img
            src="/houssem.png"
            alt="Houssem Balti"
            className="h-full w-full object-contain transition-all duration-700 ease-in-out filter grayscale hover:grayscale-0 hover:scale-110 active:grayscale-0 active:scale-110"
          />
        </div>
      </motion.div>
      <div className="space-y-6">
        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Houssem Balti
        </motion.h1>
        <motion.p
          className="mx-auto max-w-150 text-muted-foreground text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full-stack Developer at CamelStudio
        </motion.p>
      </div>

      <motion.div
        className="flex gap-6 items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-6 h-6" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="w-6 h-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Instagram className="w-6 h-6" />
          <span className="sr-only">Instagram</span>
        </a>
      </motion.div>
    </section>
  );
};
