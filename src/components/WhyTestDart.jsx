import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

// color psychology: indigo = decisive/trustworthy action (single click),
// teal = calm/unified (everything living in one place), amber = energy/urgency (speed)
const features = [
  {
    title: "Test any product or feature with a single click",
    body: "Give testdart a requirement and it plans, writes and runs the tests for you, with no scripting and no separate tools.",
    tint: "var(--color-indigo-500)",
    Visual: OneClickVisual,
    Icon: ClickIcon,
  },
  {
    title: "Manage your whole QA process in one platform",
    body: "Execution, your test library and results all live in a single application, instead of being scattered across separate tools.",
    tint: "var(--color-teal-500)",
    Visual: OnePlaceVisual,
    Icon: LayersIcon,
  },
  {
    title: "Testing that moves as fast as your releases",
    body: "Runs kick off the moment code ships, so QA is never the reason a release is waiting.",
    tint: "var(--color-amber-500)",
    Visual: SpeedVisual,
    Icon: GaugeIcon,
  },
];

function ClickIcon({ tint }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" style={{ color: tint }}>
      <path
        d="M9 4v3M4 9h3M6 6l2 2M13 5l-2.2 12.8a.6.6 0 0 0 1 .55l2.4-2.2 2 4.3a1 1 0 0 0 1.32.48l1.2-.55a1 1 0 0 0 .48-1.33l-2-4.3 3.2-.5a.6.6 0 0 0 .25-1.08L13 5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LayersIcon({ tint }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" style={{ color: tint }}>
      <path
        d="M12 3l8 4.5-8 4.5-8-4.5L12 3zM4 12l8 4.5 8-4.5M4 16.5L12 21l8-4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GaugeIcon({ tint }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" style={{ color: tint }}>
      <path
        d="M4 15a8 8 0 1 1 16 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M12 15l4.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="15" r="1.4" fill="currentColor" />
    </svg>
  );
}

function BrowserFrame({ tint, children }) {
  return (
    <div
      className="flex aspect-[4/3] w-full flex-col overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5"
      style={{
        background: `linear-gradient(160deg, color-mix(in oklch, ${tint} 14%, var(--color-canvas)) 0%, var(--color-canvas-alt) 100%)`,
      }}
    >
      <div className="flex items-center gap-1.5 border-b border-black/5 px-3 py-2" style={{ background: `color-mix(in oklch, ${tint} 8%, white)` }}>
        <span className="h-2 w-2 rounded-full bg-black/10" />
        <span className="h-2 w-2 rounded-full bg-black/10" />
        <span className="h-2 w-2 rounded-full bg-black/10" />
      </div>
      <div className="flex flex-1 items-center justify-center p-6">{children}</div>
    </div>
  );
}

// one click really means: a requirement goes in, and a full pass/fail run
// comes out — so the visual shows that whole trip, not just a button pulsing
const CLICK_CYCLE = 5.5;
const CLICK_T = { click: 0.16, rowsShow: 0.2, rowsHide: 0.78, doneShow: 0.86, doneHide: 0.98 };
const clickRows = [
  { name: "Login flow", tint: "var(--color-teal-500)" },
  { name: "Checkout flow", tint: "var(--color-indigo-500)" },
  { name: "Payment API", tint: "var(--color-coral-500)" },
];

function OneClickVisual({ tint }) {
  return (
    <div className="w-full max-w-[220px]">
      <div className="flex items-center gap-2 rounded-lg border border-black/10 bg-white px-2.5 py-2">
        <span className="text-[11px]">📝</span>
        <span className="truncate text-[11px] font-medium text-[var(--color-ink)]">Checkout must accept coupons</span>
      </div>

      <div className="relative mt-2.5">
        <motion.button
          className="pointer-events-none flex w-full items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold text-white shadow-sm"
          style={{ background: tint }}
          animate={{ scale: [1, 1, 0.95, 1, 1] }}
          transition={{
            duration: CLICK_CYCLE,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, CLICK_T.click - 0.015, CLICK_T.click, CLICK_T.click + 0.02, 1],
          }}
        >
          Generate &amp; run
        </motion.button>

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2"
          animate={{
            y: [-16, -16, -16, 0, 0],
            opacity: [0, 1, 1, 1, 0],
            scale: [1, 1, 1, 0.7, 1],
          }}
          transition={{
            duration: CLICK_CYCLE,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, CLICK_T.click - 0.08, CLICK_T.click - 0.02, CLICK_T.click, CLICK_T.click + 0.04],
          }}
        >
          <svg viewBox="0 0 16 16" className="h-3 w-3 drop-shadow">
            <path d="M1 1 L1 13 L4.5 10.2 L6.8 15 L9 14 L6.7 9.2 L11 9.2 Z" fill="var(--color-ink)" />
          </svg>
        </motion.div>
      </div>

      <div className="relative mt-3 min-h-[104px]">
        <motion.div
          className="absolute inset-x-0 top-0 space-y-1.5"
          animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
          transition={{
            duration: CLICK_CYCLE,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, CLICK_T.rowsShow, CLICK_T.rowsShow + 0.02, CLICK_T.rowsHide, CLICK_T.rowsHide + 0.03, 1],
          }}
        >
          {clickRows.map((row, i) => {
            const span = (CLICK_T.rowsHide - CLICK_T.rowsShow) / clickRows.length;
            const runAt = CLICK_T.rowsShow + i * span + span * 0.25;
            const doneAt = runAt + span * 0.5;
            return (
              <div key={row.name} className="flex items-center justify-between rounded-md bg-[var(--color-canvas-alt)]/70 px-2 py-1.5">
                <span className="text-[10.5px] font-medium text-[var(--color-ink)]">{row.name}</span>
                <span className="relative h-3 w-3">
                  <motion.span
                    className="absolute inset-0"
                    animate={{ rotate: 360, opacity: [0, 1, 1, 0] }}
                    transition={{
                      rotate: { duration: 0.5, repeat: Infinity, ease: "linear" },
                      opacity: {
                        duration: CLICK_CYCLE,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, runAt, doneAt - 0.01, doneAt],
                      },
                    }}
                    style={{ color: row.tint, fontSize: 11, lineHeight: "12px" }}
                  >
                    ⟳
                  </motion.span>
                  <motion.svg
                    viewBox="0 0 24 24"
                    className="absolute inset-0 h-3 w-3"
                    style={{ color: row.tint }}
                    animate={{ opacity: [0, 0, 1, 1] }}
                    transition={{
                      duration: CLICK_CYCLE,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, doneAt - 0.01, doneAt, 1],
                    }}
                  >
                    <path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </span>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          className="absolute inset-x-0 top-0 flex flex-col items-center justify-center gap-1.5 pt-3"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{
            duration: CLICK_CYCLE,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, CLICK_T.doneShow, CLICK_T.doneShow + 0.03, CLICK_T.doneHide, 1],
          }}
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full text-white"
            style={{ background: "var(--color-teal-500)" }}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <p className="text-xs font-semibold" style={{ color: tint }}>
            3/3 passed
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// logical story, not an orbit: 4 separate tools start scattered outside the
// workspace, then dock into it one at a time in sequence — showing them
// actually becoming "one place" instead of oscillating in and out forever
const PLACE_CYCLE = 6.5;
const placeItems = [
  { label: "Requirements", icon: "📋", tint: "var(--color-indigo-500)", from: { x: -46, y: -30, rotate: -8 } },
  { label: "Library", icon: "📁", tint: "var(--color-amber-500)", from: { x: 46, y: -30, rotate: 7 } },
  { label: "Execution", icon: "▶", tint: "var(--color-coral-500)", from: { x: -46, y: 30, rotate: 6 } },
  { label: "Reports", icon: "📊", tint: "var(--color-teal-500)", from: { x: 46, y: 30, rotate: -6 } },
];
const PLACE_START = 0.08;
const PLACE_STEP = 0.11;
const PLACE_TRAVEL = 0.05;

function OnePlaceVisual({ tint }) {
  const lastArrive = PLACE_START + (placeItems.length - 1) * PLACE_STEP + PLACE_TRAVEL;

  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div
        className="w-[168px] space-y-1.5 rounded-xl border-2 bg-white p-2"
        animate={{ borderColor: ["var(--color-canvas-alt)", "var(--color-canvas-alt)", tint, "var(--color-canvas-alt)"] }}
        transition={{
          duration: PLACE_CYCLE,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, lastArrive, lastArrive + 0.06, 1],
        }}
      >
        {placeItems.map((item, i) => {
          const arrive = PLACE_START + i * PLACE_STEP;
          return (
            <motion.div
              key={item.label}
              className="flex items-center gap-1.5 rounded-md bg-[var(--color-canvas-alt)]/60 px-2 py-1.5"
              animate={{
                x: [item.from.x, item.from.x, 0],
                y: [item.from.y, item.from.y, 0],
                rotate: [item.from.rotate, item.from.rotate, 0],
                opacity: [0, 0.9, 1],
              }}
              transition={{
                duration: PLACE_CYCLE,
                repeat: Infinity,
                ease: [0.16, 1, 0.3, 1],
                times: [0, arrive, arrive + PLACE_TRAVEL],
              }}
            >
              <span className="text-[11px]">{item.icon}</span>
              <span className="text-[10px] font-semibold text-[var(--color-ink)]">{item.label}</span>
              <span className="ml-auto h-1.5 w-1.5 rounded-full" style={{ background: item.tint }} />
            </motion.div>
          );
        })}
      </motion.div>

      <motion.p
        className="text-xs font-semibold"
        style={{ color: tint }}
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{
          duration: PLACE_CYCLE,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, lastArrive + 0.02, lastArrive + 0.06, 0.95, 1],
        }}
      >
        4 tools, 1 workspace
      </motion.p>
    </div>
  );
}

// two tracks racing in sync, not one lagging behind the other — that's the
// actual claim: QA runs alongside the release, never after it
const SPEED_CYCLE = 3;
const tracks = [
  { label: "Code deploy" },
  { label: "Tests running" },
];

function SpeedVisual({ tint }) {
  return (
    <div className="w-full max-w-[210px]">
      <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
        <span>Commit</span>
        <span>Live</span>
      </div>

      <div className="mt-2.5 space-y-2.5">
        {tracks.map((t, i) => (
          <div key={t.label}>
            <p className="mb-1 text-[9.5px] font-medium text-[var(--color-ink)]">{t.label}</p>
            <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-canvas-alt)]">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ background: tint }}
                animate={{ width: ["0%", "0%", "100%", "100%"] }}
                transition={{
                  duration: SPEED_CYCLE,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.05 + i * 0.03, 0.72 + i * 0.03, 1],
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <motion.div
        className="mt-3 flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-1.5"
        style={{ background: `color-mix(in oklch, ${tint} 12%, white)` }}
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: SPEED_CYCLE, repeat: Infinity, ease: "easeInOut", times: [0, 0.72, 0.8, 0.96, 1] }}
      >
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" style={{ color: tint }}>
          <path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="text-xs font-semibold" style={{ color: tint }}>Shipped, fully tested</p>
      </motion.div>
    </div>
  );
}

function FeatureRow({ f, i }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "start 0.4"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [i % 2 === 0 ? -28 : 28, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, x }}
      className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
    >
      <div className="mx-auto w-full max-w-sm">
        <BrowserFrame tint={f.tint}>
          <f.Visual tint={f.tint} />
        </BrowserFrame>
      </div>

      <div>
        <span
          className="flex h-11 w-11 items-center justify-center rounded-xl"
          style={{ background: `color-mix(in oklch, ${f.tint} 14%, white)` }}
        >
          <f.Icon tint={f.tint} />
        </span>
        <h3 className="mt-5 text-2xl font-bold">{f.title}</h3>
        <p className="mt-3 max-w-md text-[var(--color-ink-soft)]">{f.body}</p>
      </div>
    </motion.div>
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
            <FeatureRow key={f.title} f={f} i={i} />
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
