import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "What is testdart?",
    a: "testdart is an AI assisted QA platform that helps teams create, manage, execute and review software tests from their project requirements. It brings key testing activities into one connected workspace, reducing the manual effort involved in preparing and running tests.",
  },
  {
    q: "Who is testdart designed for?",
    a: "testdart is designed for QA teams, software development teams and organizations that want to make their testing process more efficient and easier to manage. It can be useful for teams handling frequent releases, changing requirements and large volumes of test cases.",
  },
  {
    q: "How does testdart create test cases?",
    a: "You can provide project requirements, user stories, Jira issues or relevant documents. testdart analyzes that information and generates structured test cases, ready to run on their own in autonomous mode, or for your team to review and select first in copilot mode.",
  },
  {
    q: "Can my team review test cases before they run?",
    a: "That depends on the mode. In copilot mode, your team reviews the generated test cases and chooses which ones move forward before execution. In autonomous mode, testdart generates and runs tests on its own, with results available to review afterward.",
  },
  {
    q: "Can testdart execute tests automatically?",
    a: "Yes. testdart executes test cases through a real browser and gives your team visibility into the execution process and results, cutting down on repetitive manual execution.",
  },
  {
    q: "Do I need to write automation code?",
    a: "No. testdart is built to remove the automation code your team would otherwise write by hand, turning requirements and test scenarios directly into executable browser based tests.",
  },
  {
    q: "What kind of results and reports does testdart provide?",
    a: "After execution, testdart provides test results and reporting that help your team understand what was tested, what passed or failed and where attention may be needed.",
  },
  {
    q: "Can testdart fit into our existing development and QA workflow?",
    a: "Yes. testdart is built around how modern teams already manage requirements and testing. It works with inputs like Jira issues and project documents, bringing test creation, execution and reporting into one connected workflow, with review built in whenever you choose copilot mode.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(-1);

  return (
    <section id="faq" className="px-6 py-24" style={{ background: "var(--color-canvas-alt)" }}>
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-teal-400)" }}>
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-mist)] md:text-4xl">Frequently asked questions</h2>
          <p className="mt-3 text-[var(--color-mist-soft)]">Answers to the questions teams ask when evaluating testdart.</p>
        </Reveal>

        <div className="mt-10 divide-y divide-black/10 rounded-3xl bg-white text-[var(--color-ink)] ring-1 ring-black/5">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left"
                >
                  <span className="font-semibold">{item.q}</span>
                  <motion.svg
                    viewBox="0 0 24 24"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-4 w-4 shrink-0"
                    style={{ color: "var(--color-indigo-500)", transformOrigin: "50% 50%" }}
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 pb-6 text-[var(--color-ink-soft)]">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
