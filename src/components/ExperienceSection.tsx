import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary">// experience</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Experience & Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-l-2 border-primary/30 pl-6 space-y-8">
              <div>
                <span className="font-mono text-xs text-primary">2024 – Present</span>
                <h3 className="text-lg font-bold mt-1">Full Stack Developer</h3>
                <p className="text-sm text-muted-foreground mt-1">Brototype</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-0.5">▹</span>
                    Built scalable full-stack apps using MERN stack & Next.js
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-0.5">▹</span>
                    Designed microservices architecture with Docker & AWS ECS
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-0.5">▹</span>
                    Implemented real-time features with WebRTC & Socket.IO
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-0.5">▹</span>
                    Led team coordination, communication & progress tracking
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="border-l-2 border-border pl-6 space-y-8">
              <div>
                <span className="font-mono text-xs text-muted-foreground">2025 – Present</span>
                <h3 className="text-lg font-bold mt-1">Full Stack Web Development</h3>
                <p className="text-sm text-muted-foreground mt-1">Brototype</p>
              </div>
              <div>
                <span className="font-mono text-xs text-muted-foreground">Completed</span>
                <h3 className="text-lg font-bold mt-1">Diploma in Computer Hardware Engineering</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  JDT Polytechnic College · CGPA: 8.04
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
