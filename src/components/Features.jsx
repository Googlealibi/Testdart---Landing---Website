import Reveal from "./Reveal";

const features = [
  {
    name: "Project Brain",
    tag: "Context",
    body: "Feed it your specs and docs once. testdart remembers your product and grounds every test it writes in real project context.",
    tint: "var(--color-indigo-500)",
  },
  {
    name: "AI",
    tag: "Generation",
    body: "Turn a requirement into a full set of test cases, or hand off an entire flow for testdart to script, run and verify on its own.",
    tint: "var(--color-teal-500)",
  },
  {
    name: "Report",
    tag: "Visibility",
    body: "Live graphs on execution, status and suite health, so the whole team sees where coverage stands without asking.",
    tint: "var(--color-amber-500)",
  },
  {
    name: "Requirement",
    tag: "Traceability",
    body: "Keep every requirement linked straight to the tests that cover it, so nothing ships untested and nothing untested ships.",
    tint: "var(--color-coral-500)",
  },
];

export default function Features() {
  return (
    <section id="agentic-qa" className="px-6 py-24" style={{ background: "var(--color-canvas-alt)" }}>
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-indigo-600)" }}>
            Inside testdart
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Four capabilities, one workspace</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {features.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1}>
              <div className="h-full rounded-3xl bg-white p-8 ring-1 ring-black/5">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    {f.name}
                  </h3>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                    style={{ background: f.tint }}
                  >
                    {f.tag}
                  </span>
                </div>
                <p className="mt-4 text-[var(--color-ink-soft)]">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

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
