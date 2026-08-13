import Reveal from "./Reveal";

const benefits = [
  {
    title: "One click, full coverage",
    body: "Point testdart at a feature and it plans, generates and runs the tests behind it.",
    tint: "var(--color-indigo-500)",
    bg: "var(--color-indigo-50)",
  },
  {
    title: "Every part of QA, one place",
    body: "Execution, your test library, reports and requirements live together instead of across five tools.",
    tint: "var(--color-teal-500)",
    bg: "oklch(94% 0.04 150)",
  },
  {
    title: "Never the bottleneck again",
    body: "Testing runs as fast as your team ships, so releases stop waiting on QA.",
    tint: "var(--color-coral-500)",
    bg: "oklch(94% 0.035 172)",
  },
];

export default function WhyTestDart() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">Why teams switch to testdart</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.12}>
              <div
                className="h-full rounded-3xl p-8 transition-transform hover:-translate-y-1"
                style={{ background: b.bg }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl text-white font-bold" style={{ background: b.tint }}>
                  {i + 1}
                </span>
                <h3 className="mt-6 text-xl font-bold">{b.title}</h3>
                <p className="mt-3 text-[var(--color-ink-soft)]">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12 flex justify-center">
          <a
            href="#pricing"
            className="inline-block rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
            style={{ background: "var(--color-indigo-500)" }}
          >
            CTA
          </a>
        </Reveal>
      </div>
    </section>
  );
}
