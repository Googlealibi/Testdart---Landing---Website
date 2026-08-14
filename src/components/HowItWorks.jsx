import { Fragment } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const message = "Stop asking if it's ready to ship. Start knowing.";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035 } },
};

const word = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="relative mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-teal-400)" }}>
            Built around you
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-mist)] md:text-4xl">Know before you have to ask</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-10 rounded-3xl bg-white p-10 text-center text-[var(--color-ink)] shadow-xl ring-1 ring-black/5 md:p-14">
            <motion.p
              className="mx-auto max-w-2xl text-2xl font-medium leading-snug text-[var(--color-ink)] md:text-3xl"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
            >
              {message.split(" ").map((w, i, arr) => (
                <Fragment key={i}>
                  <motion.span variants={word} className="inline-block">
                    {w}
                  </motion.span>
                  {i < arr.length - 1 ? " " : ""}
                </Fragment>
              ))}
            </motion.p>

            <p className="mx-auto mt-4 max-w-lg text-[var(--color-ink-soft)]">
              One live view of every requirement, test and result, so the answer is already there when you need it.
            </p>

            <button
              type="button"
              className="mt-8 inline-block rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
              style={{ background: "var(--color-coral-500)" }}
            >
              CTA
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
