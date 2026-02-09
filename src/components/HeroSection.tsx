import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      
      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="font-mono text-sm text-primary tracking-wider">
            Full Stack Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="text-gradient">Rahil Sardar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build scalable, production-grade web applications with strong expertise
          across frontend, backend, and DevOps. Based in Kerala, India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Terminal snippet */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 mx-auto max-w-lg"
        >
          <div className="bg-card border border-border rounded-xl p-5 text-left font-mono text-sm glow">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-destructive/60" />
              <span className="w-3 h-3 rounded-full bg-[hsl(45,80%,50%)]" />
              <span className="w-3 h-3 rounded-full bg-primary/60" />
            </div>
            <p className="text-muted-foreground">
              <span className="text-primary">const</span>{" "}
              <span className="text-foreground">developer</span> = {"{"}
            </p>
            <p className="text-muted-foreground pl-4">
              name: <span className="text-primary">"Rahil Sardar"</span>,
            </p>
            <p className="text-muted-foreground pl-4">
              focus: <span className="text-primary">"Backend Architecture"</span>,
            </p>
            <p className="text-muted-foreground pl-4">
              loves: <span className="text-primary">["Microservices", "DevOps"]</span>,
            </p>
            <p className="text-muted-foreground">
              {"}"};
              <span className="inline-block w-2 h-4 bg-primary ml-1 animate-blink" />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
