import { motion } from "framer-motion";
import Reveal from "./Reveal";

// color psychology: indigo = decisive/trustworthy action (single click),
// teal = calm/unified (everything living in one place), amber = energy/urgency (speed)
const features = [
  {
    title: "Test your product with a single click",
    body: "Point testdart at a feature and it plans, generates and runs the tests behind it. No scripting, no setup.",
    tint: "var(--color-indigo-500)",
    Visual: OneClickVisual,
  },
  {
    title: "Manage your whole QA in one platform",
    body: "Execution, your test library, requirements and reports live together instead of scattered across five tools.",
    tint: "var(--color-teal-500)",
    Visual: OnePlaceVisual,
  },
  {
    title: "Catch up with dev speed",
    body: "Testing runs as fast as your team ships, so releases stop waiting on QA to catch up.",
    tint: "var(--color-amber-500)",
    Visual: SpeedVisual,
  },
];

function BrowserFrame({ children }) {
  return (
    <div className="flex aspect-[4/3] w-full flex-col overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
      <div className="flex items-center gap-1.5 border-b border-black/5 bg-[var(--color-canvas-alt)] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-black/10" />
        <span className="h-2 w-2 rounded-full bg-black/10" />
        <span className="h-2 w-2 rounded-full bg-black/10" />
      </div>
      <div className="flex flex-1 items-center justify-center p-6">{children}</div>
    </div>
  );
}

function OneClickVisual({ tint }) {
  return (
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
        animate={{ y: [-46, -46, 0, -46], opacity: [1, 1, 1, 0], scale: [1, 1, 0.75, 1] }}
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
            animate={{ opacity: [0, 0, 1, 1, 0], x: [-8, -8, 0, 0, -8] }}
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
  );
}

function OnePlaceVisual({ tint }) {
  const chips = [
    { label: "Requirements", icon: "📋", angle: -135, tint: "var(--color-indigo-500)" },
    { label: "Library", icon: "📁", angle: -45, tint: "var(--color-amber-500)" },
    { label: "Execution", icon: "▶", angle: 135, tint: "var(--color-coral-500)" },
    { label: "Reports", icon: "📊", angle: 45, tint: "var(--color-teal-500)" },
  ];
  const dist = 68;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-40 w-40">
        <svg viewBox="-80 -80 160 160" className="absolute inset-0 h-full w-full">
          {chips.map((chip, i) => {
            const rad = (chip.angle * Math.PI) / 180;
            const x = Math.cos(rad) * dist;
            const y = Math.sin(rad) * dist;
            return (
              <motion.line
                key={chip.label}
                x1="0"
                y1="0"
                x2={x}
                y2={y}
                stroke={chip.tint}
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                  times: [0, 0.3, 0.7, 1],
                }}
              />
            );
          })}
        </svg>

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
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.15, times: [0, 0.5, 0.7, 1] }}
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm shadow-sm ring-1 ring-black/5"
              >
                {chip.icon}
              </span>
              <span className="text-[8.5px] font-semibold text-[var(--color-ink-soft)]">{chip.label}</span>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        className="text-xs font-semibold"
        style={{ color: tint }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", times: [0, 0.65, 0.85, 1] }}
      >
        4 tools, 1 workspace
      </motion.p>
    </div>
  );
}

function SpeedVisual({ tint }) {
  return (
    <div className="w-full px-4">
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
          {features.map((f, i) => (
            <Reveal key={f.title} delay={0.1}>
              <div className="grid items-center gap-10 md:grid-cols-2">
                <div className="mx-auto w-full max-w-sm">
                  <BrowserFrame>
                    <f.Visual tint={f.tint} />
                  </BrowserFrame>
                </div>

                <div>
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
                    style={{ background: f.tint }}
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-2xl font-bold">{f.title}</h3>
                  <p className="mt-3 max-w-md text-[var(--color-ink-soft)]">{f.body}</p>
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
