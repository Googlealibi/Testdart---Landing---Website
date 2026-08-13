import { motion } from "framer-motion";
import Reveal from "./Reveal";

const message = "Your team finishes testing before the deadline moves, and you can see it happening in real time.";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035 } },
};

const word = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function HowItWorks() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-teal-600)" }}>
            Built around you
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Whatever seat you sit in, testdart already fits</h2>
        </Reveal>

        <motion.p
          className="mx-auto mt-10 max-w-2xl text-2xl font-medium leading-snug text-[var(--color-ink)] md:text-3xl"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          {message.split(" ").map((w, i) => (
            <motion.span key={i} variants={word} className="inline-block">
              {w}
              {i < message.split(" ").length - 1 ? " " : ""}
            </motion.span>
          ))}
        </motion.p>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-4 max-w-lg text-[var(--color-ink-soft)]">
            No status meeting required, no chasing updates. Just an accurate, always-on view of where testing stands.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <button
            type="button"
            className="mt-8 inline-block rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
            style={{ background: "var(--color-coral-500)" }}
          >
            CTA
          </button>
        </Reveal>
      </div>
    </section>
  );
}
