import Reveal from "./Reveal";

const indicators = [
  {
    label: "Faster Test Creation",
    value: "10x",
    badge: "vs. manual authoring",
    tint: "var(--color-teal-500)",
    icon: (
      <path d="M3 17l6-6 4 4 8-8M15 7h6v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    label: "Accuracy Rate",
    value: "99.2%",
    badge: "AI-generated test cases",
    tint: "var(--color-indigo-500)",
    icon: <path d="M4 12l5 5L20 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  },
  {
    label: "Requirement Coverage",
    value: "100%",
    badge: "end-to-end traceability",
    tint: "var(--color-amber-500)",
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

export default function Demo() {
  return (
    <section id="demo" className="px-6 py-24" style={{ background: "var(--color-canvas-alt)" }}>
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Watch the demo to see testdart in action</h2>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-8 md:grid-cols-[280px_1fr]">
          <div className="flex h-full flex-col gap-4">
            {indicators.map((item, i) => (
              <Reveal key={item.label} delay={0.1 + i * 0.08}>
                <div
                  className="rounded-2xl bg-white p-5 ring-1 ring-black/5"
                  style={{ borderLeft: `4px solid ${item.tint}` }}
                >
                  <div className="flex items-center justify-between">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" style={{ color: item.tint }}>
                      {item.icon}
                    </svg>
                    <span className="text-xs font-semibold" style={{ color: item.tint }}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="mt-4 text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[var(--color-ink-soft)]">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col">
            <Reveal delay={0.15}>
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

            <Reveal delay={0.25} className="mt-8 flex justify-center">
              <a
                href="#pricing"
                className="inline-block rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
                style={{ background: "var(--color-teal-500)" }}
              >
                CTA
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
