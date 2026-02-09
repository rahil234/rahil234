import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-sm text-primary">// about</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a full-stack developer focused on building scalable, production-grade
              web applications with strong expertise across frontend, backend, and DevOps.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I have a deep interest in backend architecture, real-time systems,
              event-driven design, CI/CD, and cloud deployments. I enjoy working on
              complex systems, microservices, and real-world product engineering.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I also have experience leading teams, coordinating development, and
              improving collaboration and communication across projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-6 font-mono text-sm glow"
          >
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <span className="text-primary">location</span>: <span className="text-foreground">"Kerala, India"</span>
              </p>
              <p className="text-muted-foreground">
                <span className="text-primary">focus</span>: <span className="text-foreground">"Backend Architecture"</span>
              </p>
              <p className="text-muted-foreground">
                <span className="text-primary">interests</span>: [
              </p>
              {["Microservices", "Real-time Systems", "Event-driven Design", "CI/CD", "Cloud Deployments"].map((item) => (
                <p key={item} className="text-foreground pl-4">"{item}",</p>
              ))}
              <p className="text-muted-foreground">]</p>
              <p className="text-muted-foreground">
                <span className="text-primary">open_to</span>: <span className="text-foreground">"Opportunities"</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
