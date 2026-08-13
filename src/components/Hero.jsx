import { motion } from "framer-motion";
import HeroIllustration from "./HeroIllustration";

const bullets = [
  { text: "No credit card required", color: "var(--color-amber-500)" },
  { text: "Setup in 2 minutes", color: "var(--color-amber-500)" },
  { text: "Cancel anytime", color: "var(--color-amber-500)" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-16 pb-24 md:pt-24 md:pb-32">
      <div
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--color-teal-400)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--color-amber-400)" }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.3fr_1fr] md:gap-8">
        <div>
          <motion.h1
            className="text-4xl font-bold leading-[1.1] text-[var(--color-ink)] md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Ship Quality Software{" "}
            <span style={{ color: "var(--color-indigo-500)" }}>at the Speed</span> of AI
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-ink-soft)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            TestDart handles your entire QA lifecycle, from test creation to execution, so your
            team ships faster without compromising quality.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              type="button"
              className="rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-transform hover:scale-105"
              style={{ background: "var(--color-indigo-500)" }}
            >
              CTA
            </button>
            <button
              type="button"
              className="rounded-full px-7 py-3.5 text-sm font-semibold text-[var(--color-ink)] ring-1 ring-black/10 transition-colors hover:bg-white"
            >
              CTA 2
            </button>
          </motion.div>

          <motion.ul
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {bullets.map((b) => (
              <li key={b.text} className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-ink-soft)]">
                <span style={{ color: b.color }}>&#9733;</span>
                {b.text}
              </li>
            ))}
          </motion.ul>
        </div>

        <HeroIllustration />
      </div>
    </section>
  );
}
