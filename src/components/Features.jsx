import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const AUTOPLAY_MS = 4200;

function BrainIcon({ tint }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" style={{ color: tint }}>
      <path
        d="M9 4a3 3 0 0 0-3 3v.3A3 3 0 0 0 4 10v1a3 3 0 0 0 1.5 2.6A3 3 0 0 0 8 18h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M15 4a3 3 0 0 1 3 3v.3A3 3 0 0 1 20 10v1a3 3 0 0 1-1.5 2.6A3 3 0 0 1 16 18h-1a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleIcon({ tint }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" style={{ color: tint }}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" fill="currentColor" />
    </svg>
  );
}

function ChartIcon({ tint }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" style={{ color: tint }}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkIcon({ tint }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" style={{ color: tint }}>
      <path
        d="M9.5 14.5l5-5M8 10.5 6.6 12a3.5 3.5 0 0 0 5 5L13 15.5M16 13.5l1.4-1.4a3.5 3.5 0 0 0-5-5L11 8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Project Brain is the shared context: it feeds the same knowledge into
// both the requirement being understood and the run actually executing
function BrainVisual({ tint }) {
  return (
    <div className="w-full max-w-[210px]">
      <p className="text-center text-[9.5px] font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
        One brain, feeds everything
      </p>

      <div className="relative mx-auto mt-3 h-[110px] w-full">
        <svg viewBox="0 0 210 110" className="absolute inset-0 h-full w-full">
          <motion.path
            d="M105 34 C 80 55, 55 65, 40 78"
            stroke={tint}
            strokeWidth="1.6"
            strokeDasharray="4 5"
            strokeLinecap="round"
            fill="none"
            animate={{ strokeDashoffset: [0, -18] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M105 34 C 130 55, 155 65, 170 78"
            stroke={tint}
            strokeWidth="1.6"
            strokeDasharray="4 5"
            strokeLinecap="round"
            fill="none"
            animate={{ strokeDashoffset: [0, -18] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        <motion.div
          className="absolute left-1/2 top-0 flex -translate-x-1/2 items-center gap-1.5 rounded-xl px-3 py-1.5 text-[10px] font-bold text-white shadow-md"
          style={{ background: tint }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
            <path
              d="M9 4a3 3 0 0 0-3 3v.3A3 3 0 0 0 4 10v1a3 3 0 0 0 1.5 2.6A3 3 0 0 0 8 18h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <path
              d="M15 4a3 3 0 0 1 3 3v.3A3 3 0 0 1 20 10v1a3 3 0 0 1-1.5 2.6A3 3 0 0 1 16 18h-1a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
          Project Brain
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 w-[92px] rounded-lg bg-white px-2 py-1.5 shadow-sm"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-[8.5px] font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">Requirement</p>
          <p className="mt-0.5 text-[9.5px] font-medium text-[var(--color-ink)]">Checkout flow</p>
        </motion.div>

        <motion.div
          className="absolute bottom-0 right-0 w-[92px] rounded-lg bg-white px-2 py-1.5 shadow-sm"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <p className="text-[8.5px] font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">Running</p>
          <div className="mt-1 flex items-center gap-1">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
              style={{ display: "inline-block", fontSize: 9, color: tint }}
            >
              ⟳
            </motion.span>
            <span className="text-[9.5px] font-medium text-[var(--color-ink)]">in Chrome</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// AI Genie's full lifecycle in one loop: create, run, result — not just
// the generation step in isolation
const GEN_T = { genShow: 0.06, genHide: 0.42, runShow: 0.44, runHide: 0.78, doneShow: 0.8, doneHide: 0.97 };
const genRows = ["Add item to cart", "Apply coupon code", "Confirm payment"];

function GenVisual({ tint }) {
  return (
    <div className="relative h-[120px] w-full max-w-[210px]">
      <motion.div
        className="absolute inset-x-0 top-0"
        animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
        transition={{
          duration: 4.6,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, GEN_T.genShow, GEN_T.genShow + 0.02, GEN_T.genHide, GEN_T.genHide + 0.02, 1],
        }}
      >
        <div className="rounded-lg border border-dashed px-2.5 py-2 text-[9.5px] font-medium text-[var(--color-ink)]" style={{ borderColor: tint }}>
          "Test the checkout flow"
        </div>
        <p className="mt-1.5 text-center text-[9px] font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
          becomes 3 test cases
        </p>
        <div className="mt-1.5 space-y-1.5">
          {genRows.map((label, i) => (
            <motion.div
              key={label}
              className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-1.5 shadow-sm"
              animate={{ opacity: [0, 1], x: [-8, 0] }}
              transition={{
                duration: 4.6,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, GEN_T.genShow + 0.06 + i * 0.08],
              }}
            >
              <span
                className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[8px] font-bold text-white"
                style={{ background: tint }}
              >
                {i + 1}
              </span>
              <span className="text-[10px] font-medium text-[var(--color-ink)]">{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-x-0 top-0"
        animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
        transition={{
          duration: 4.6,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, GEN_T.runShow, GEN_T.runShow + 0.02, GEN_T.runHide, GEN_T.runHide + 0.02, 1],
        }}
      >
        <p className="text-center text-[9px] font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
          runs them in Chrome
        </p>
        <div className="mt-1.5 space-y-1.5">
          {genRows.map((label, i) => {
            const span = (GEN_T.runHide - GEN_T.runShow) / genRows.length;
            const runAt = GEN_T.runShow + i * span;
            const doneAt = runAt + span * 0.6;
            return (
              <div key={label} className="flex items-center justify-between rounded-lg bg-white px-2.5 py-1.5 shadow-sm">
                <span className="text-[10px] font-medium text-[var(--color-ink)]">{label}</span>
                <span className="relative h-3 w-3">
                  <motion.span
                    className="absolute inset-0"
                    animate={{ rotate: 360, opacity: [0, 1, 1, 0] }}
                    transition={{
                      rotate: { duration: 0.5, repeat: Infinity, ease: "linear" },
                      opacity: { duration: 4.6, repeat: Infinity, ease: "easeInOut", times: [0, runAt, doneAt - 0.01, doneAt] },
                    }}
                    style={{ color: tint, fontSize: 10 }}
                  >
                    ⟳
                  </motion.span>
                  <motion.svg
                    viewBox="0 0 24 24"
                    className="absolute inset-0 h-3 w-3"
                    style={{ color: tint }}
                    animate={{ opacity: [0, 0, 1, 1] }}
                    transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", times: [0, doneAt - 0.01, doneAt, 1] }}
                  >
                    <path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-x-0 top-0 flex flex-col items-center justify-center gap-1.5 pt-6"
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{
          duration: 4.6,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, GEN_T.doneShow, GEN_T.doneShow + 0.03, GEN_T.doneHide, 1],
        }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full text-white" style={{ background: tint }}>
          <svg viewBox="0 0 24 24" className="h-5 w-5">
            <path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <p className="text-xs font-semibold" style={{ color: tint }}>3/3 passed</p>
      </motion.div>
    </div>
  );
}

function ReportVisual({ tint }) {
  const bars = [40, 70, 55, 90, 65];
  return (
    <div className="w-full max-w-[210px]">
      <p className="text-center text-[9.5px] font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
        Suite health, live
      </p>
      <div className="mt-2 flex h-16 items-end gap-2">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-md"
            style={{ background: tint, opacity: 0.4 + (i / bars.length) * 0.6 }}
            animate={{ height: ["8%", `${h}%`, `${h}%`, "8%"] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", times: [0, 0.35 + i * 0.06, 0.8, 1] }}
          />
        ))}
      </div>
      <div className="mt-2.5 grid grid-cols-4 gap-1.5 rounded-lg bg-white px-2 py-2 shadow-sm">
        {[
          { label: "Total", value: "5" },
          { label: "Passed", value: "4" },
          { label: "Failed", value: "1" },
          { label: "Scripts", value: "5" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-sm font-bold" style={{ color: tint }}>{stat.value}</p>
            <p className="text-[7.5px] font-medium text-[var(--color-ink-soft)]">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function LinkVisual({ tint }) {
  const tests = ["TC001 · Login", "TC002 · Coupon", "TC003 · Payment"];
  return (
    <div className="flex w-full max-w-[210px] items-center gap-3">
      <div className="shrink-0 rounded-lg bg-white px-2.5 py-3 text-center shadow-sm">
        <p className="text-[9px] font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">Requirement</p>
        <p className="mt-1 text-[10px] font-semibold text-[var(--color-ink)]">REQ-104</p>
        <p className="text-[8.5px] text-[var(--color-ink-soft)]">Checkout flow</p>
      </div>

      <div className="flex flex-1 flex-col gap-1.5">
        {tests.map((label, i) => (
          <motion.div
            key={label}
            className="flex items-center gap-1.5 rounded-md bg-white px-2 py-1 shadow-sm"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          >
            <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" style={{ color: tint }}>
              <path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[9px] font-medium text-[var(--color-ink)]">{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// these are examples, not the full list — the title never claims a fixed
// count so adding a fifth or sixth thing later doesn't contradict the copy
const items = [
  {
    name: "Project Brain",
    tag: "Context",
    body: "Upload a spec or doc once. testdart reads it, learns your product from it, and grounds every test it writes in what it found.",
    Icon: BrainIcon,
    Visual: BrainVisual,
  },
  {
    name: "AI Genie",
    tag: "Generation",
    body: "Turn a requirement into a full set of test cases, or hand off an entire flow for testdart to script, run and verify on its own.",
    Icon: SparkleIcon,
    Visual: GenVisual,
  },
  {
    name: "Reports",
    tag: "Visibility",
    body: "Total, passed, failed and scripts generated, all part of the same run report the whole team sees, updated live.",
    Icon: ChartIcon,
    Visual: ReportVisual,
  },
  {
    name: "Requirements",
    tag: "Traceability",
    body: "Keep every requirement linked straight to the tests that cover it, so nothing ships untested and nothing untested ships.",
    Icon: LinkIcon,
    Visual: LinkVisual,
  },
];

const tint = "var(--color-indigo-500)";

export default function Features() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % items.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const current = items[active];

  return (
    <section id="agentic-qa" className="px-6 py-24" style={{ background: "var(--color-canvas-alt)" }}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-indigo-600)" }}>
            Inside testdart
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Features that power every test run</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="mt-14 grid gap-10 md:grid-cols-2 md:items-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="flex flex-col divide-y divide-black/5 md:order-2">
              {items.map((item, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="relative overflow-hidden py-4 pl-5 pr-3 text-left transition-colors first:pt-1 last:pb-1"
                    style={{
                      background: isActive ? "color-mix(in oklch, var(--color-indigo-500) 6%, transparent)" : "transparent",
                    }}
                  >
                    <span
                      className="absolute inset-y-2 left-0 w-[3px] rounded-full transition-opacity"
                      style={{ background: tint, opacity: isActive ? 1 : 0 }}
                    />
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors"
                        style={{ background: isActive ? "white" : "var(--color-canvas-alt)" }}
                      >
                        <item.Icon tint={tint} />
                      </span>
                      <div>
                        <p
                          className="text-sm font-bold transition-colors"
                          style={{ color: isActive ? "var(--color-ink)" : "var(--color-ink-soft)" }}
                        >
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs text-[var(--color-ink-soft)]">{item.body}</p>
                      </div>
                    </div>
                    {isActive && (
                      <div className="ml-12 mt-2.5 h-0.5 w-[calc(100%-3.5rem)] overflow-hidden rounded-full bg-black/5">
                        <motion.div
                          key={active}
                          className="h-full rounded-full"
                          style={{ background: tint }}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mx-auto flex w-full max-w-sm aspect-[4/3] flex-col overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
              <div className="relative flex items-center gap-1.5 overflow-hidden border-b border-black/5 bg-[var(--color-canvas-alt)] px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-black/10" />
                <span className="h-2 w-2 rounded-full bg-black/10" />
                <span className="h-2 w-2 rounded-full bg-black/10" />
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={active}
                    initial={{ y: 14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -14, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className="ml-2 rounded-full bg-white px-2 py-0.5 text-[9px] font-medium text-[var(--color-ink-soft)] ring-1 ring-black/5"
                  >
                    {current.tag}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* teleprompter-style roll: next item scrolls up into place, like a news ticker */}
              <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[var(--color-canvas-alt)]/40 p-6">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={active}
                    initial={{ y: 36, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -36, opacity: 0 }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className="flex w-full items-center justify-center"
                  >
                    <current.Visual tint={tint} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-12 flex justify-center">
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
