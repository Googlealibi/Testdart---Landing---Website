import Reveal from "./Reveal";
import BadToGoodAnimation from "./BadToGoodAnimation";

const plans = [
  {
    name: "Basic",
    price: "$0",
    period: "to start",
    blurb: "For a single project finding its footing.",
    perks: ["1 project", "Manual test library", "Core execution and reports"],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "$49",
    period: "per user / month",
    blurb: "For teams shipping weekly and testing daily.",
    perks: ["Unlimited projects", "AI test generation", "Project Brain", "Requirement traceability"],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "Let's talk",
    period: "for scale",
    blurb: "For orgs running autonomous QA across every team.",
    perks: ["Autonomous execution agents", "Org wide reporting", "Priority support", "Custom AI credits"],
    highlighted: false,
  },
];

export default function StoryPricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-coral-500)" }}>
              Before and after
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">From tangled QA to a clean release, every time</h2>
            <p className="mt-4 max-w-md text-[var(--color-ink-soft)]">
              Spreadsheets, missed edge cases and last minute scrambles give way to a single
              workspace that plans, runs and proves your coverage.
            </p>
            <div className="mt-8">
              <BadToGoodAnimation />
            </div>
          </Reveal>

          <div className="grid gap-6">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.1}>
                <div
                  className="rounded-3xl p-7"
                  style={{
                    background: plan.highlighted ? "var(--color-indigo-900)" : "white",
                    color: plan.highlighted ? "white" : "var(--color-ink)",
                    boxShadow: plan.highlighted ? "0 20px 40px -12px rgba(23,26,77,0.4)" : "none",
                    outline: plan.highlighted ? "none" : "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    {plan.highlighted && (
                      <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "var(--color-teal-400)", color: "var(--color-ink)" }}>
                        Most picked
                      </span>
                    )}
                  </div>
                  <p className="mt-4">
                    <span className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{plan.price}</span>
                    <span className="ml-2 text-sm opacity-70">{plan.period}</span>
                  </p>
                  <p className={`mt-2 text-sm ${plan.highlighted ? "opacity-80" : "text-[var(--color-ink-soft)]"}`}>{plan.blurb}</p>
                  <ul className="mt-5 space-y-2">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-sm">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: plan.highlighted ? "var(--color-teal-400)" : "var(--color-indigo-500)" }}
                        />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#top"
                    className="mt-6 block rounded-full px-5 py-2.5 text-center text-sm font-semibold transition-transform hover:scale-105"
                    style={{
                      background: plan.highlighted ? "white" : "var(--color-indigo-500)",
                      color: plan.highlighted ? "var(--color-indigo-700)" : "white",
                    }}
                  >
                    Choose {plan.name}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
