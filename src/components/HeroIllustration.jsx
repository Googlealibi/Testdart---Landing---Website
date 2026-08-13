import { motion } from "framer-motion";

const CYCLE = 13;

// one continuous story, matching the real pipeline:
// target URL + requirement typed -> generate clicked -> AI creates test cases
// -> executed step by step in Chrome (headed) -> results
const T = {
  cursorIn: 0.02,
  urlClick: 0.04,
  urlType: [0.06, 0.13],
  reqType: [0.14, 0.24],
  btnMove: 0.26,
  btnClick: 0.29,
  genShow: 0.32,
  genHide: 0.48,
  execShow: 0.5,
  execHide: 0.8,
  resultShow: 0.82,
  resultHide: 0.97,
};

function fade(showAt, hideAt) {
  return {
    animate: { opacity: [0, 0, 1, 1, 0, 0] },
    transition: {
      duration: CYCLE,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, showAt, showAt + 0.015, hideAt, hideAt + 0.02, 1],
    },
  };
}

function typeWidth([start, end]) {
  return {
    animate: { width: ["0%", "0%", "100%", "100%", "0%"] },
    transition: {
      duration: CYCLE,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, start, end, 0.98, 1],
    },
  };
}

// every test case below is derived straight from the requirement typed
// above (login, coupon, payment) — nothing unrelated gets generated
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
        <div className="h-2 w-16 rounded bg-[var(--color-canvas-alt)]" />
        <div className="mt-2 h-5 w-full rounded border border-black/10 bg-white" />
        <div className="mt-1.5 h-5 w-full rounded border border-black/10 bg-white" />
        <motion.div
          className="mt-2 h-5 w-16 rounded"
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
          <div className="h-2 w-20 rounded bg-[var(--color-canvas-alt)]" />
          <div className="h-2 w-8 rounded bg-[var(--color-canvas-alt)]" />
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <div className="h-5 flex-1 rounded border border-black/10 bg-white" />
          <motion.div
            className="h-5 w-10 rounded"
            style={{ background: "var(--color-indigo-500)" }}
            animate={{ scale: [1, 0.94, 1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="h-2 w-10 rounded bg-[var(--color-canvas-alt)]" />
          <motion.p
            className="text-[11px] font-bold"
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
    fail: true,
    render: () => (
      <>
        <div className="flex items-center gap-1.5">
          <div className="h-5 flex-1 rounded border border-red-300 bg-red-50" />
          <motion.div
            className="h-5 w-10 rounded"
            style={{ background: "var(--color-indigo-500)" }}
            animate={{ scale: [1, 0.94, 1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <motion.p
          className="mt-1.5 text-[10px] font-semibold text-red-500"
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
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
        <div className="h-5 w-full rounded border border-black/10 bg-white" />
        <div className="mt-1.5 flex gap-1.5">
          <div className="h-5 w-1/2 rounded border border-black/10 bg-white" />
          <div className="h-5 w-1/2 rounded border border-red-400 bg-red-50" />
        </div>
        <motion.p
          className="mt-1.5 text-[10px] font-semibold text-teal-500"
          style={{ color: "var(--color-teal-500)" }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
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
        <div className="flex items-center gap-1.5">
          <motion.span
            className="h-3.5 w-3.5 rounded-full"
            style={{ background: "var(--color-teal-500)" }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="h-2 w-24 rounded bg-[var(--color-canvas-alt)]" />
        </div>
        <div className="mt-2 h-2 w-full rounded bg-[var(--color-canvas-alt)]" />
        <div className="mt-1.5 h-2 w-2/3 rounded bg-[var(--color-canvas-alt)]" />
        <motion.p
          className="mt-1.5 text-[10px] font-semibold"
          style={{ color: "var(--color-indigo-500)" }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          ✓ Session cleared on expiry
        </motion.p>
      </>
    ),
  },
];

export default function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <motion.div
        className="pointer-events-none absolute -inset-6 rounded-[32px] blur-2xl"
        style={{ background: "radial-gradient(circle, var(--color-teal-400) 0%, transparent 70%)", opacity: 0.35 }}
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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

        <div className="relative p-5">
          {/* target URL */}
          <div className="relative flex items-center rounded-xl border border-black/10 bg-[var(--color-canvas-alt)]/40 px-3 py-2">
            <span className="mr-2 text-[12px] text-[var(--color-ink-soft)]">🔗</span>
            <div className="overflow-hidden">
              <motion.p className="whitespace-nowrap text-[12.5px] font-medium text-[var(--color-ink)]" {...typeWidth(T.urlType)}>
                account.yourapp.com
              </motion.p>
            </div>
          </div>

          {/* requirement */}
          <div className="relative mt-2 flex items-center rounded-xl border border-black/10 bg-[var(--color-canvas-alt)]/40 px-3 py-2">
            <span className="mr-2 text-[12px] text-[var(--color-ink-soft)]">📝</span>
            <div className="overflow-hidden">
              <motion.p className="whitespace-nowrap text-[12.5px] font-medium text-[var(--color-ink)]" {...typeWidth(T.reqType)}>
                Users can log in, apply a coupon, and pay at checkout.
              </motion.p>
            </div>
          </div>

          {/* generate button */}
          <motion.button
            className="pointer-events-none relative mt-3 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white"
            style={{ background: "var(--color-indigo-500)" }}
            animate={{ scale: [1, 1, 0.96, 1, 1] }}
            transition={{
              duration: CYCLE,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, T.btnClick - 0.01, T.btnClick, T.btnClick + 0.02, 1],
            }}
          >
            ✨ Generate tests
          </motion.button>

          {/* animated cursor: click url, type, click requirement, type, click generate */}
          <motion.div
            className="pointer-events-none absolute left-0 top-0 z-10 h-4 w-4"
            animate={{
              x: [24, 24, 24, 24, 24, 190, 190, 24],
              y: [14, 14, 14, 14, 14, 118, 118, 14],
              opacity: [0, 1, 1, 1, 1, 1, 0, 0],
              scale: [1, 1, 0.75, 1, 1, 1, 0.75, 1],
            }}
            transition={{
              duration: CYCLE,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, T.cursorIn, T.urlClick, T.urlClick + 0.02, T.btnMove, T.btnClick, T.btnClick + 0.03, 1],
            }}
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4 drop-shadow-md">
              <path d="M1 1 L1 13 L4.5 10.2 L6.8 15 L9 14 L6.7 9.2 L11 9.2 Z" fill="var(--color-ink)" />
            </svg>
          </motion.div>

          {/* dynamic story area: test creation -> execution in chrome -> results */}
          <div className="relative mt-4 min-h-[196px]">
            <motion.div className="absolute inset-x-0 top-0 space-y-1.5" {...fade(T.genShow, T.genHide)}>
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
                AI creating test cases
              </p>
              {testCases.map((tc, i) => {
                const enter = T.genShow + 0.015 + i * 0.025;
                return (
                  <motion.div
                    key={tc.id}
                    className="flex items-center gap-2 rounded-xl bg-[var(--color-canvas-alt)]/60 px-3 py-2"
                    animate={{ opacity: [0, 0, 1, 1], x: [10, 10, 0, 0] }}
                    transition={{
                      duration: CYCLE,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, enter, enter + 0.015, 1],
                    }}
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: tc.tint }} />
                    <p className="text-[11.5px] font-medium text-[var(--color-ink)]">
                      <span className="font-semibold" style={{ color: tc.tint }}>
                        {tc.id}
                      </span>{" "}
                      {tc.name}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div className="absolute inset-x-0 top-0" {...fade(T.execShow, T.execHide)}>
              <div className="mb-1.5 flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
                  Running in Chrome, headed
                </p>
                <span className="flex items-center gap-1 text-[10px] font-medium text-[var(--color-ink-soft)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-teal-500)]" />
                  live
                </span>
              </div>
              <div className="rounded-xl bg-[var(--color-canvas-alt)]/60 p-2">
                <div className="mb-2 h-1 w-full overflow-hidden rounded-full bg-white">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "var(--color-teal-500)" }}
                    animate={{ width: ["0%", "0%", "100%", "100%", "0%"] }}
                    transition={{
                      duration: CYCLE,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, T.execShow, T.execHide - 0.02, T.execHide, 1],
                    }}
                  />
                </div>

                {/* mini browser window actually playing each scenario */}
                <div className="overflow-hidden rounded-lg border border-black/10 bg-white">
                  <div className="flex items-center gap-1 border-b border-black/5 bg-[var(--color-canvas-alt)] px-2 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/10" />
                    <span className="h-1.5 w-1.5 rounded-full bg-black/10" />
                    <span className="h-1.5 w-1.5 rounded-full bg-black/10" />
                    <span className="ml-1.5 rounded bg-white px-1.5 py-0.5 text-[8.5px] text-[var(--color-ink-soft)] ring-1 ring-black/5">
                      account.yourapp.com
                    </span>
                    <span className="ml-auto flex items-center gap-1 text-[8.5px] font-medium text-[var(--color-ink-soft)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-teal-500)]" />
                      live
                    </span>
                  </div>
                  <div className="relative h-[78px] p-2.5">
                    {scenes.map((scene, i) => {
                      const span = (T.execHide - 0.03 - T.execShow) / scenes.length;
                      const show = T.execShow + 0.02 + i * span;
                      const hide = show + span;
                      return (
                        <motion.div
                          key={scene.step}
                          className="absolute inset-2.5"
                          animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
                          transition={{
                            duration: CYCLE,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, show, show + 0.01, hide - 0.01, hide, 1],
                          }}
                        >
                          {scene.render()}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* current step caption, synced to the scene playing above */}
                <div className="relative mt-1.5 h-[14px]">
                  {scenes.map((scene, i) => {
                    const span = (T.execHide - 0.03 - T.execShow) / scenes.length;
                    const show = T.execShow + 0.02 + i * span;
                    const hide = show + span;
                    return (
                      <motion.p
                        key={scene.step}
                        className="absolute inset-x-0 flex items-center gap-1.5 text-[10.5px] font-medium text-[var(--color-ink-soft)]"
                        animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
                        transition={{
                          duration: CYCLE,
                          repeat: Infinity,
                          ease: "easeInOut",
                          times: [0, show, show + 0.01, hide - 0.01, hide, 1],
                        }}
                      >
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                          style={{ display: "inline-block", color: "var(--color-teal-500)" }}
                        >
                          ⟳
                        </motion.span>
                        {scene.step}
                      </motion.p>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div className="absolute inset-x-0 top-0" {...fade(T.resultShow, T.resultHide)}>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
                Results
              </p>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: "Tests", value: "4/5" },
                  { label: "Bugs found", value: "1" },
                  { label: "Coverage", value: "94%" },
                  { label: "Time", value: "8s" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-[var(--color-canvas-alt)]/60 px-2 py-2.5 text-center">
                    <p
                      className="text-[15px] font-bold"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-indigo-500)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-[9px] font-medium text-[var(--color-ink-soft)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
