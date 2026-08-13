import { motion } from "framer-motion";
import Reveal from "./Reveal";

const benefits = [
  {
    title: "One click, full coverage",
    body: "Point testdart at a feature and it plans, generates and runs the tests behind it.",
    tint: "var(--color-indigo-500)",
    bg: "var(--color-indigo-50)",
    Visual: OneClickVisual,
  },
  {
    title: "Every part of QA, one place",
    body: "Execution, your test library, reports and requirements live together instead of across five tools.",
    tint: "var(--color-teal-500)",
    bg: "oklch(94% 0.04 150)",
    Visual: OnePlaceVisual,
  },
  {
    title: "Never the bottleneck again",
    body: "Testing runs as fast as your team ships, so releases stop waiting on QA.",
    tint: "var(--color-coral-500)",
    bg: "oklch(94% 0.035 172)",
    Visual: NeverBottleneckVisual,
  },
];

function VisualFrame({ bg, children }) {
  return (
    <div
      className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-3xl"
      style={{ background: bg }}
    >
      {children}
    </div>
  );
}

function OneClickVisual({ tint }) {
  return (
    <VisualFrame bg="white">
      <div className="relative flex flex-col items-center gap-2">
        <motion.button
          className="pointer-events-none rounded-full px-5 py-2.5 text-xs font-semibold text-white shadow-md"
          style={{ background: tint }}
          animate={{ scale: [1, 1, 0.94, 1, 1] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.25, 0.28, 0.32, 1], ease: "easeInOut" }}
        >
          ✨ Run tests
        </motion.button>

        <motion.div
          className="pointer-events-none absolute h-3 w-3"
          animate={{
            x: [0, 0, 0, 0],
            y: [-46, -46, 0, -46],
            opacity: [1, 1, 1, 0],
            scale: [1, 1, 0.75, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.15, 0.28, 0.32], ease: "easeInOut" }}
        >
          <svg viewBox="0 0 16 16" className="h-3 w-3 drop-shadow">
            <path d="M1 1 L1 13 L4.5 10.2 L6.8 15 L9 14 L6.7 9.2 L11 9.2 Z" fill="var(--color-ink)" />
          </svg>
        </motion.div>

        <div className="mt-4 flex flex-col gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="flex items-center gap-1.5 rounded-full bg-[var(--color-canvas-alt)] px-3 py-1"
              animate={{
                opacity: [0, 0, 1, 1, 0],
                x: [-8, -8, 0, 0, -8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.34 + i * 0.06, 0.36 + i * 0.06, 0.9, 1],
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: tint }} />
              <span className="text-[10px] font-medium text-[var(--color-ink)]">Test case {i + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}

function OnePlaceVisual({ tint }) {
  const chips = [
    { label: "Requirements", icon: "📋", angle: -135 },
    { label: "TestGen", icon: "✨", angle: -45 },
    { label: "Execution", icon: "▶", angle: 135 },
    { label: "Reports", icon: "📊", angle: 45 },
  ];
  const dist = 70;

  return (
    <VisualFrame bg="white">
      <div className="relative h-40 w-40">
        <motion.div
          className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl text-[10px] font-bold text-white shadow-lg"
          style={{ background: tint }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        >
          testdart
        </motion.div>

        {chips.map((chip, i) => {
          const rad = (chip.angle * Math.PI) / 180;
          const x = Math.cos(rad) * dist;
          const y = Math.sin(rad) * dist;
          return (
            <motion.div
              key={chip.label}
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
              animate={{ x: [x, x, 0, x], y: [y, y, 0, y], opacity: [1, 1, 0.4, 1] }}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
                times: [0, 0.5, 0.7, 1],
              }}
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-canvas-alt)] text-sm ring-1 ring-black/5"
              >
                {chip.icon}
              </span>
              <span className="text-[8.5px] font-semibold text-[var(--color-ink-soft)]">{chip.label}</span>
            </motion.div>
          );
        })}
      </div>
    </VisualFrame>
  );
}

function NeverBottleneckVisual({ tint }) {
  return (
    <VisualFrame bg="white">
      <div className="w-full px-8">
        <div className="flex items-center justify-between text-[10px] font-semibold text-[var(--color-ink-soft)]">
          <span>Dev ships</span>
          <span>Live</span>
        </div>
        <div className="relative mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-canvas-alt)]">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ background: tint }}
            animate={{ width: ["0%", "100%", "100%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.7, 1] }}
          />
          <motion.div
            className="absolute -top-1.5 h-4 w-4 rounded-full shadow-md"
            style={{ background: tint }}
            animate={{ left: ["0%", "97%", "97%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.7, 1] }}
          />
        </div>
        <motion.p
          className="mt-4 text-center text-xs font-semibold"
          style={{ color: tint }}
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.65, 0.75, 0.95, 1] }}
        >
          Tests kept pace — shipped on time
        </motion.p>
      </div>
    </VisualFrame>
  );
}

export default function WhyTestDart() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold md:text-4xl">Why teams switch to testdart</h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <div
                className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="mx-auto w-full max-w-sm">
                  <b.Visual tint={b.tint} />
                </div>

                <div>
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
                    style={{ background: b.tint }}
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-2xl font-bold">{b.title}</h3>
                  <p className="mt-3 max-w-md text-[var(--color-ink-soft)]">{b.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-16 flex justify-center">
          <button
            type="button"
            className="inline-block rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
            style={{ background: "var(--color-indigo-500)" }}
          >
            CTA
          </button>
        </Reveal>
      </div>
    </section>
  );
}
