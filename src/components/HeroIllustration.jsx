import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// slower, four distinct screens that fully replace each other (not stacked
// inputs sitting on top of every later step) — results hold almost to the
// very end so it crossfades straight into the restart, no dead blank frame
const CYCLE = 18;

const T = {
  // step 1: requirement & url — only shown here, nowhere else in the loop
  urlType: [0.02, 0.08],
  reqType: [0.09, 0.15],
  btnClick: 0.17,
  step1Show: 0,
  step1Hide: 0.205,

  // step 2: AI creates test cases
  step2Show: 0.215,
  step2Hide: 0.42,

  // step 3: test execution, in a real (bigger, slower) browser view
  step3Show: 0.435,
  step3Hide: 0.75,

  // step 4: results — held right up to the loop wrap, then crossfades
  step4Show: 0.765,
  step4Hide: 0.994,
};

function fade(showAt, hideAt) {
  return {
    animate: { opacity: [0, 0, 1, 1, 0, 0] },
    transition: {
      duration: CYCLE,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, showAt, showAt + 0.004, hideAt, hideAt + 0.004, 1],
    },
  };
}

// widths are in `ch` (character units), not %, so the reveal genuinely
// tracks the text length instead of animating against a circularly-sized
// auto-width parent (which is why it wasn't reading as "typing" before)
function typeWidth(text, [start, end]) {
  return {
    animate: { width: ["0ch", "0ch", `${text.length}ch`, `${text.length}ch`] },
    transition: {
      duration: CYCLE,
      repeat: Infinity,
      ease: ["easeInOut", "linear", "easeInOut"],
      times: [0, start, end, 1],
    },
  };
}

const testCases = [
  { id: "TC001", name: "Login with valid credentials", tint: "var(--color-teal-500)" },
  { id: "TC002", name: "Apply coupon SAVE20, verify -20% discount", tint: "var(--color-indigo-500)" },
  { id: "TC003", name: "Reject an invalid coupon code", tint: "var(--color-amber-500)" },
  { id: "TC004", name: "Reject payment with an expired card", tint: "var(--color-coral-500)" },
  { id: "TC005", name: "Session expires after checkout", tint: "var(--color-teal-500)" },
];

const scenes = [
  {
    step: "Logging in with test credentials",
    render: () => (
      <>
        <div className="h-2.5 w-20 rounded bg-[var(--color-canvas-alt)]" />
        <div className="mt-2.5 h-6 w-full rounded border border-black/10 bg-white" />
        <div className="mt-2 h-6 w-full rounded border border-black/10 bg-white" />
        <motion.div
          className="mt-2.5 h-6 w-20 rounded"
          style={{ background: "var(--color-teal-500)" }}
          animate={{ scale: [1, 0.94, 1] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        />
      </>
    ),
  },
  {
    step: "Applying coupon SAVE20",
    render: () => (
      <>
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-24 rounded bg-[var(--color-canvas-alt)]" />
          <div className="h-2.5 w-10 rounded bg-[var(--color-canvas-alt)]" />
        </div>
        <div className="mt-2.5 flex items-center gap-2">
          <div className="h-6 flex-1 rounded border border-black/10 bg-white" />
          <motion.div
            className="h-6 w-12 rounded"
            style={{ background: "var(--color-indigo-500)" }}
            animate={{ scale: [1, 0.94, 1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="mt-2.5 flex items-center justify-between">
          <div className="h-2.5 w-12 rounded bg-[var(--color-canvas-alt)]" />
          <motion.p
            className="text-sm font-bold"
            style={{ color: "var(--color-teal-500)" }}
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          >
            -20%
          </motion.p>
        </div>
      </>
    ),
  },
  {
    step: "Trying an invalid coupon code",
    render: () => (
      <>
        <div className="flex items-center gap-2">
          <div className="h-6 flex-1 rounded border border-red-300 bg-red-50" />
          <motion.div
            className="h-6 w-12 rounded"
            style={{ background: "var(--color-indigo-500)" }}
            animate={{ scale: [1, 0.94, 1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <motion.p
          className="mt-2.5 text-xs font-semibold text-red-500"
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        >
          ✗ Bug: invalid code still applied -10%
        </motion.p>
      </>
    ),
  },
  {
    step: "Submitting an expired test card",
    render: () => (
      <>
        <div className="h-6 w-full rounded border border-black/10 bg-white" />
        <div className="mt-2 flex gap-2">
          <div className="h-6 w-1/2 rounded border border-black/10 bg-white" />
          <div className="h-6 w-1/2 rounded border border-red-400 bg-red-50" />
        </div>
        <motion.p
          className="mt-2.5 text-xs font-semibold"
          style={{ color: "var(--color-teal-500)" }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        >
          ✓ Card expired — correctly rejected
        </motion.p>
      </>
    ),
  },
  {
    step: "Verifying session expires after checkout",
    render: () => (
      <>
        <div className="flex items-center gap-2">
          <motion.span
            className="h-4 w-4 rounded-full"
            style={{ background: "var(--color-teal-500)" }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="h-2.5 w-28 rounded bg-[var(--color-canvas-alt)]" />
        </div>
        <div className="mt-2.5 h-2.5 w-full rounded bg-[var(--color-canvas-alt)]" />
        <div className="mt-2 h-2.5 w-2/3 rounded bg-[var(--color-canvas-alt)]" />
        <motion.p
          className="mt-2.5 text-xs font-semibold"
          style={{ color: "var(--color-indigo-500)" }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        >
          ✓ Session cleared on expiry
        </motion.p>
      </>
    ),
  },
];

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4">
      <path
        d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function HeroIllustration() {
  const ref = useRef(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    ry.set((px - 0.5) * 10);
    rx.set((0.5 - py) * 8);
  };

  const handleLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div className="relative mx-auto w-full max-w-md md:mx-0 md:ml-auto" style={{ perspective: 1000 }}>
      <motion.div
        className="pointer-events-none absolute -inset-6 rounded-[32px] blur-2xl"
        style={{ background: "radial-gradient(circle, var(--color-teal-400) 0%, transparent 70%)", opacity: 0.35 }}
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="relative overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      >
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-black/5 bg-[var(--color-canvas-alt)] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="ml-3 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-[var(--color-ink-soft)] ring-1 ring-black/5">
            app.testdart.ai
          </span>
        </div>

        <div className="relative min-h-[330px] p-5">
          {/* step 1: requirement & url — its own screen, shown once per loop */}
          <motion.div className="absolute inset-x-5 top-5" {...fade(T.step1Show, T.step1Hide)}>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
              1 · Requirement &amp; target
            </p>

            <div className="relative flex items-center rounded-xl border border-black/10 bg-[var(--color-canvas-alt)]/40 px-3 py-2.5">
              <span className="mr-2 shrink-0 text-[12px] text-[var(--color-ink-soft)]">🔗</span>
              <motion.p
                className="min-w-0 max-w-full overflow-hidden whitespace-nowrap border-r-2 border-[var(--color-indigo-500)] text-[12.5px] font-medium text-[var(--color-ink)]"
                {...typeWidth("account.yourapp.com", T.urlType)}
              >
                account.yourapp.com
              </motion.p>
            </div>

            <div className="relative mt-2.5 flex items-center rounded-xl border border-black/10 bg-[var(--color-canvas-alt)]/40 px-3 py-2.5">
              <span className="mr-2 shrink-0 text-[12px] text-[var(--color-ink-soft)]">📝</span>
              <motion.p
                className="min-w-0 max-w-full overflow-hidden whitespace-nowrap border-r-2 border-[var(--color-indigo-500)] text-[12.5px] font-medium text-[var(--color-ink)]"
                {...typeWidth("Users can log in, apply a coupon, and pay at checkout.", T.reqType)}
              >
                Users can log in, apply a coupon, and pay at checkout.
              </motion.p>
            </div>

            <motion.button
              className="pointer-events-none relative mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white shadow-lg"
              style={{
                background: "linear-gradient(135deg, var(--color-indigo-500), var(--color-indigo-700))",
                boxShadow: "0 8px 20px -6px color-mix(in oklch, var(--color-indigo-500) 55%, transparent)",
              }}
              animate={{ scale: [1, 1, 0.96, 1, 1] }}
              transition={{
                duration: CYCLE,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, T.btnClick - 0.008, T.btnClick, T.btnClick + 0.015, 1],
              }}
            >
              <SparkleIcon />
              Generate tests
            </motion.button>

            {/* click ripple, right under where the cursor lands */}
            <motion.span
              className="pointer-events-none absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ left: 195, top: 142, background: "white" }}
              animate={{ scale: [0, 0, 1.6, 1.6], opacity: [0, 0.5, 0, 0] }}
              transition={{
                duration: CYCLE,
                repeat: Infinity,
                ease: "easeOut",
                times: [0, T.btnClick, T.btnClick + 0.03, 1],
              }}
            />

            {/* cursor: click url field, type, click requirement field, type, land on the button */}
            <motion.div
              className="pointer-events-none absolute left-0 top-0 z-10 h-4 w-4"
              animate={{
                x: [30, 30, 30, 30, 30, 30, 30, 30, 30, 195, 195, 195, 30],
                y: [46, 46, 46, 46, 46, 92, 92, 92, 92, 142, 142, 142, 46],
                opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                scale: [1, 1, 0.75, 1, 1, 1, 0.75, 1, 1, 1, 0.65, 1.1, 1],
              }}
              transition={{
                duration: CYCLE,
                repeat: Infinity,
                ease: "easeInOut",
                times: [
                  0,
                  T.urlType[0] - 0.01,
                  T.urlType[0],
                  T.urlType[0] + 0.008,
                  T.urlType[1],
                  T.reqType[0] - 0.005,
                  T.reqType[0],
                  T.reqType[0] + 0.008,
                  T.reqType[1],
                  T.btnClick - 0.005,
                  T.btnClick,
                  T.btnClick + 0.015,
                  T.step1Hide,
                ],
              }}
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4 drop-shadow-md">
                <path d="M1 1 L1 13 L4.5 10.2 L6.8 15 L9 14 L6.7 9.2 L11 9.2 Z" fill="var(--color-ink)" />
              </svg>
            </motion.div>
          </motion.div>

          {/* step 2: AI creates the test cases */}
          <motion.div className="absolute inset-x-5 top-5 space-y-2" {...fade(T.step2Show, T.step2Hide)}>
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
              2 · AI creating test cases
            </p>
            {testCases.map((tc, i) => {
              const span = (T.step2Hide - 0.02 - T.step2Show) / testCases.length;
              const enter = T.step2Show + 0.02 + i * span;
              return (
                <motion.div
                  key={tc.id}
                  className="flex items-center gap-2 rounded-xl bg-[var(--color-canvas-alt)]/60 px-3 py-2.5"
                  animate={{ opacity: [0, 0, 1, 1], x: [10, 10, 0, 0] }}
                  transition={{
                    duration: CYCLE,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, enter, enter + 0.015, 1],
                  }}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: tc.tint }} />
                  <p className="text-[12px] font-medium text-[var(--color-ink)]">
                    <span className="font-semibold" style={{ color: tc.tint }}>
                      {tc.id}
                    </span>{" "}
                    {tc.name}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* step 3: test execution, a real (bigger, slower) browser run */}
          <motion.div className="absolute inset-x-5 top-5" {...fade(T.step3Show, T.step3Hide)}>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
                3 · Running in Chrome, headed
              </p>
              <span className="flex items-center gap-1 text-[10px] font-medium text-[var(--color-ink-soft)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-teal-500)]" />
                live
              </span>
            </div>

            <div className="mb-2.5 h-1 w-full overflow-hidden rounded-full bg-[var(--color-canvas-alt)]">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "var(--color-teal-500)" }}
                animate={{ width: ["0%", "0%", "100%", "100%"] }}
                transition={{
                  duration: CYCLE,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, T.step3Show, T.step3Hide - 0.015, 1],
                }}
              />
            </div>

            <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
              <div className="flex items-center gap-1.5 border-b border-black/5 bg-[var(--color-canvas-alt)] px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-black/10" />
                <span className="h-2 w-2 rounded-full bg-black/10" />
                <span className="h-2 w-2 rounded-full bg-black/10" />
                <span className="ml-2 rounded bg-white px-2 py-0.5 text-[9px] text-[var(--color-ink-soft)] ring-1 ring-black/5">
                  account.yourapp.com
                </span>
                <span className="ml-auto flex items-center gap-1 text-[9px] font-medium text-[var(--color-ink-soft)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-teal-500)]" />
                  live
                </span>
              </div>
              <div className="relative h-[130px] p-4">
                {scenes.map((scene, i) => {
                  const span = (T.step3Hide - 0.02 - T.step3Show) / scenes.length;
                  const show = T.step3Show + 0.01 + i * span;
                  const hide = show + span;
                  return (
                    <motion.div
                      key={scene.step}
                      className="absolute inset-4 flex flex-col justify-center"
                      animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
                      transition={{
                        duration: CYCLE,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, show, show + 0.008, hide - 0.008, hide, 1],
                      }}
                    >
                      {scene.render()}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="relative mt-2 h-[16px]">
              {scenes.map((scene, i) => {
                const span = (T.step3Hide - 0.02 - T.step3Show) / scenes.length;
                const show = T.step3Show + 0.01 + i * span;
                const hide = show + span;
                return (
                  <motion.p
                    key={scene.step}
                    className="absolute inset-x-0 flex items-center gap-1.5 text-[11px] font-medium text-[var(--color-ink-soft)]"
                    animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
                    transition={{
                      duration: CYCLE,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, show, show + 0.008, hide - 0.008, hide, 1],
                    }}
                  >
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                      style={{ display: "inline-block", color: "var(--color-teal-500)" }}
                    >
                      ⟳
                    </motion.span>
                    {scene.step}
                  </motion.p>
                );
              })}
            </div>
          </motion.div>

          {/* step 4: results */}
          <motion.div className="absolute inset-x-5 top-5" {...fade(T.step4Show, T.step4Hide)}>
            <motion.div
              className="mb-4 flex items-center gap-2.5 rounded-xl px-3 py-2.5"
              style={{ background: "color-mix(in oklch, var(--color-teal-500) 12%, white)" }}
              animate={{ opacity: [0, 0, 1, 1], scale: [0.9, 0.9, 1, 1] }}
              transition={{
                duration: CYCLE,
                repeat: Infinity,
                ease: [0.16, 1, 0.3, 1],
                times: [0, T.step4Show, T.step4Show + 0.015, 1],
              }}
            >
              <motion.span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white"
                style={{ background: "var(--color-teal-500)" }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: T.step4Show * CYCLE,
                }}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4">
                  <path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.span>
              <p className="text-[12.5px] font-semibold text-[var(--color-ink)]">Test suite complete</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-2.5">
              {[
                { label: "Total", value: "5" },
                { label: "Passed", value: "4" },
                { label: "Failed", value: "1" },
                { label: "Scripts generated", value: "5" },
              ].map((stat, i) => {
                const enter = T.step4Show + 0.02 + i * 0.012;
                return (
                  <motion.div
                    key={stat.label}
                    className="rounded-xl bg-[var(--color-canvas-alt)]/60 px-3 py-3.5 text-center"
                    animate={{ opacity: [0, 0, 1, 1], scale: [0.75, 0.75, 1.08, 1] }}
                    transition={{
                      duration: CYCLE,
                      repeat: Infinity,
                      ease: [0.16, 1, 0.3, 1],
                      times: [0, enter, enter + 0.02, enter + 0.035],
                    }}
                  >
                    <p
                      className="text-xl font-bold"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-indigo-500)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-[10px] font-medium text-[var(--color-ink-soft)]">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
