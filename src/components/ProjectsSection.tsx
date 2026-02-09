import { motion } from "framer-motion";

const projects = [
  {
    title: "I4You",
    subtitle: "Dating App",
    description:
      "A modern dating platform built with microservices architecture and real-time communication. SEO-optimized frontend with smooth animations and Kubernetes deployment.",
    tech: ["Next.js", "NestJS", "Fastify", "Docker", "GKE", "Protobuf", "Turborepo"],
  },
  {
    title: "SnapCart",
    subtitle: "Quick-Delivery E-Commerce",
    description:
      "Full-stack grocery and food delivery platform with secure Razorpay payments, role-based dashboards, invoices, and sales reporting.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay"],
  },
  {
    title: "Inker",
    subtitle: "Blogging Platform",
    description:
      "Open-source, community-driven blogging platform with upvotes, comments, follow system, and secure JWT authentication.",
    tech: ["React", "Node.js", "MongoDB", "Zustand", "Tailwind CSS", "JWT"],
  },
];

const miniProjects = [
  { title: "Netflix Clone", tech: "React, Tailwind CSS, Firebase, TMDB API" },
  { title: "OLX Clone", tech: "React" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary">// projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Work</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/40 transition-colors duration-300 cursor-default"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-primary">
                      0{i + 1}
                    </span>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      — {project.subtitle}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-mono rounded-md bg-secondary text-muted-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mini Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <h3 className="font-mono text-sm text-muted-foreground mb-4">
            // mini projects
          </h3>
          <div className="flex flex-wrap gap-4">
            {miniProjects.map((p) => (
              <div
                key={p.title}
                className="px-5 py-3 rounded-lg border border-border bg-card text-sm"
              >
                <span className="font-medium">{p.title}</span>
                <span className="text-muted-foreground ml-2 font-mono text-xs">
                  {p.tech}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
