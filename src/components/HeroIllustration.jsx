import { motion } from "framer-motion";

const steps = [
  { label: "Requirement", tint: "var(--color-indigo-500)", y: 18 },
  { label: "AI generates tests", tint: "var(--color-teal-500)", y: 108 },
  { label: "Runs in browser", tint: "var(--color-amber-500)", y: 198 },
  { label: "Passed", tint: "var(--color-coral-500)", y: 288 },
];

export default function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md aspect-[4/5]">
      <motion.div
        className="absolute inset-0 rounded-[28px]"
        style={{ background: "linear-gradient(160deg, var(--color-indigo-50), var(--color-canvas-alt))" }}
        animate={{ scale: [1, 1.015, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg viewBox="0 0 20 380" className="absolute left-10 top-0 h-full w-6" fill="none">
        <motion.path
          d="M10 20 C 10 100, 10 260, 10 350"
          stroke="var(--color-indigo-100)"
          strokeWidth="2"
          strokeDasharray="1 8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col justify-between px-6 py-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 * i + 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white text-xs font-semibold shadow-lg"
              style={{ background: step.tint }}
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
            >
              {i + 1}
            </motion.span>
            <div className="rounded-2xl bg-white/90 px-4 py-3 shadow-sm ring-1 ring-black/5 backdrop-blur">
              <p className="text-sm font-semibold text-[var(--color-ink)]">{step.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute -right-4 top-6 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{ opacity: { duration: 0.6, delay: 1 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
      >
        <p className="text-xs font-medium text-[var(--color-ink-soft)]">Coverage</p>
        <p className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>98%</p>
      </motion.div>
    </div>
  );
}
