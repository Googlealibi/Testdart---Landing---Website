import { motion } from "framer-motion";
import Reveal from "./Reveal";
import BadToGoodAnimation from "./BadToGoodAnimation";

const plans = [
  {
    name: "Basic",
    price: "$0",
    period: "to start",
    blurb: "For a single project finding its footing.",
    perks: ["1 project", "Manual test library", "Core execution and reports", "Community support"],
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
    <section id="pricing" className="px-6 py-24" style={{ background: "var(--color-canvas-alt)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[280px_1fr] md:items-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-[var(--color-mist)] md:text-4xl">From tangled QA to a clean release, every time</h2>
            <p className="mt-4 max-w-md text-[var(--color-mist-soft)]">
              Spreadsheets, missed edge cases and last minute scrambles give way to a single
              workspace that plans, runs and proves your coverage.
            </p>
            <div className="mt-8">
              <BadToGoodAnimation />
            </div>
          </Reveal>

          <div className="flex items-stretch py-6">
            {plans.map((plan, i) => (
              <Reveal
                key={plan.name}
                delay={i * 0.1}
                className={`relative flex min-w-0 flex-1 ${plan.highlighted ? "z-10 -translate-y-5" : "z-0 translate-y-3"} ${i > 0 ? "-ml-3" : ""}`}
              >
                <motion.div
                  className="flex h-full w-full flex-col p-7"
                  initial={{
                    boxShadow: plan.highlighted
                      ? "0 24px 48px -12px rgba(23,26,77,0.45)"
                      : "0 8px 20px -10px rgba(0,0,0,0.1)",
                  }}
                  whileHover={{
                    y: -6,
                    boxShadow: plan.highlighted
                      ? "0 28px 56px -10px color-mix(in oklch, var(--color-teal-500) 55%, transparent)"
                      : "0 20px 40px -12px color-mix(in oklch, var(--color-indigo-500) 40%, transparent)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  style={{
                    background: plan.highlighted ? "var(--color-indigo-900)" : "white",
                    color: plan.highlighted ? "white" : "var(--color-ink)",
                    borderRadius: "1.75rem",
                    outline: plan.highlighted ? "none" : "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="flex min-h-[26px] items-baseline justify-between gap-1">
                    <h3 className="text-lg font-bold">{plan.name}</h3>
                    {plan.highlighted && (
                      <span
                        className="whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-semibold"
                        style={{ background: "var(--color-teal-400)", color: "var(--color-ink)" }}
                      >
                        Most picked
                      </span>
                    )}
                  </div>
                  <p className="mt-4">
                    <span className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{plan.price}</span>
                  </p>
                  <p className="text-xs opacity-70">{plan.period}</p>
                  <ul className="mt-6 mb-8 space-y-2.5">
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
                  <button
                    type="button"
                    className="mt-auto block w-full rounded-full px-4 py-2.5 text-center text-sm font-semibold transition-transform hover:scale-105"
                    style={{
                      background: plan.highlighted ? "white" : "var(--color-indigo-500)",
                      color: plan.highlighted ? "var(--color-indigo-700)" : "white",
                    }}
                  >
                    Choose {plan.name}
                  </button>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
