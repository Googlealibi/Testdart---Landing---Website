import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const personas = [
  { role: "QA Lead", hook: "Stop writing test cases by hand. Start reviewing the ones AI already wrote." },
  { role: "QA Manager", hook: "See every assignee, every run, every status, without chasing a single update." },
  { role: "VP", hook: "Release readiness in one glance, not a status meeting." },
  { role: "CTO", hook: "QA that scales with engineering headcount you never have to hire." },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-teal-600)" }}>
            Built around you
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Whatever seat you sit in, testdart already fits</h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
          {personas.map((p, i) => (
            <button
              key={p.role}
              onClick={() => setActive(i)}
              className="rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
              style={{
                background: active === i ? "var(--color-indigo-500)" : "white",
                color: active === i ? "white" : "var(--color-ink)",
                boxShadow: active === i ? "none" : "0 0 0 1px rgba(0,0,0,0.08)",
              }}
            >
              {p.role}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 flex min-h-[110px] items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl text-2xl font-medium leading-snug text-[var(--color-ink)]"
            >
              {personas[active].hook}
            </motion.p>
          </AnimatePresence>
        </div>

        <Reveal delay={0.2}>
          <a
            href="#pricing"
            className="mt-8 inline-block rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
            style={{ background: "var(--color-coral-500)" }}
          >
            CTA
          </a>
        </Reveal>
      </div>
    </section>
  );
}
