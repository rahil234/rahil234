import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-sm text-primary">// contact</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Let's Build Something</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            I'm open to full-time roles, freelance projects, and collaborations.
            If you're building something ambitious, let's talk.
          </p>
          <a
            href="mailto:rahilsardar@email.com"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow"
          >
            Say Hello →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
