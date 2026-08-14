import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const tint = "var(--color-teal-400)";

function Counter({ value, duration = 1.4 }) {
  const match = value.match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  const handleEnter = () => {
    if (started.current) return;
    started.current = true;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(target * eased);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <motion.p
      className="mt-2 text-3xl font-bold"
      style={{ fontFamily: "var(--font-display)", color: tint }}
      onViewportEnter={handleEnter}
      viewport={{ once: true, amount: 0.6 }}
    >
      {display.toFixed(decimals)}
      {suffix}
    </motion.p>
  );
}

const indicators = [
  {
    label: "Faster Test Creation",
    value: "5x",
    icon: (
      <path d="M3 17l6-6 4 4 8-8M15 7h6v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    label: "Accuracy Rate",
    value: "98%",
    icon: <path d="M4 12l5 5L20 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  },
  {
    label: "Requirement Coverage",
    value: "100%",
    icon: (
      <path
        d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Demo() {
  return (
    <section id="demo" className="px-6 py-24" style={{ background: "var(--color-canvas-alt)" }}>
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-teal-400)" }}>
            See it in action
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-mist)] md:text-4xl">Watch a short walkthrough before you dive in yourself.</h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[220px_1fr] md:items-center">
          <motion.div
            className="flex flex-row gap-6 divide-x divide-[var(--color-hairline)] md:flex-col md:gap-0 md:divide-x-0 md:divide-y"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            {indicators.map((ind, i) => (
              <motion.div
                key={ind.label}
                variants={item}
                className={`flex flex-1 flex-col gap-1 md:flex-none ${i === 0 ? "" : "pl-6 md:pl-0 md:pt-5"} ${i === indicators.length - 1 ? "" : "md:pb-5"}`}
              >
                <motion.svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  style={{ color: tint }}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                >
                  {ind.icon}
                </motion.svg>
                <Counter value={ind.value} duration={1.2 + i * 0.2} />
                <p className="text-sm font-medium text-[var(--color-mist-soft)]">{ind.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <Reveal delay={0.2}>
            <div className="group relative aspect-video overflow-hidden rounded-2xl bg-[var(--color-ink)] shadow-2xl">
              <div
                className="absolute inset-0 opacity-40"
                style={{ background: "linear-gradient(135deg, var(--color-indigo-700), var(--color-ink))" }}
              />
              <button
                aria-label="Play demo video"
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-xl transition-transform group-hover:scale-110"
              >
                <span className="ml-1 border-y-8 border-l-[14px] border-y-transparent border-l-[var(--color-indigo-600)]" />
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="mt-8 flex justify-center">
          <button
            type="button"
            className="inline-block rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
            style={{ background: "var(--color-teal-500)" }}
          >
            CTA
          </button>
        </Reveal>
      </div>
    </section>
  );
}
