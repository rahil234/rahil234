import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    icon: "◇",
    skills: ["React", "Next.js", "Tailwind CSS", "Shadcn/UI", "Redux", "Zustand", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: "◆",
    skills: ["Node.js", "Express.js", "NestJS", "Fastify", "MongoDB", "PostgreSQL", "Redis", "Kafka"],
  },
  {
    title: "Cloud & DevOps",
    icon: "▲",
    skills: ["Docker", "Kubernetes", "AWS", "GCP", "Skaffold", "NGINX", "Traefik", "GitHub Actions"],
  },
  {
    title: "Tooling",
    icon: "⬡",
    skills: ["Git", "PNPM", "Firebase", "Buf", "Protobuf", "Dev Containers", "WebSockets", "JWT"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary">// skills</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Tech Stack</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-primary text-lg">{cat.icon}</span>
                <h3 className="font-semibold text-lg">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono rounded-md bg-secondary text-muted-foreground border border-border group-hover:border-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
