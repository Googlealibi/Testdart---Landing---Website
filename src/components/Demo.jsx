import Reveal from "./Reveal";

const indicators = [
  {
    label: "Faster Test Creation",
    value: "10x",
    tint: "var(--color-teal-500)",
    icon: (
      <path d="M3 17l6-6 4 4 8-8M15 7h6v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    label: "Accuracy Rate",
    value: "99.2%",
    tint: "var(--color-indigo-500)",
    icon: <path d="M4 12l5 5L20 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  },
  {
    label: "Requirement Coverage",
    value: "100%",
    tint: "var(--color-teal-500)",
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
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Watch a short walkthrough before you dive in yourself.</h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[220px_1fr] md:items-center">
          <Reveal delay={0.1}>
            <div className="flex flex-row gap-6 divide-x divide-black/10 md:flex-col md:gap-0 md:divide-x-0 md:divide-y">
              {indicators.map((item, i) => (
                <div key={item.label} className={`flex flex-1 flex-col gap-1 md:flex-none ${i === 0 ? "" : "pl-6 md:pl-0 md:pt-5"} ${i === indicators.length - 1 ? "" : "md:pb-5"}`}>
                  <svg viewBox="0 0 24 24" className="h-5 w-5" style={{ color: item.tint }}>
                    {item.icon}
                  </svg>
                  <p className="mt-2 text-3xl font-bold" style={{ fontFamily: "var(--font-display)", color: item.tint }}>
                    {item.value}
                  </p>
                  <p className="text-sm font-medium text-[var(--color-ink-soft)]">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

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
