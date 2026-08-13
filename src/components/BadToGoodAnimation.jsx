// static illustration, sitting directly on the page (no card/frame):
// scattered, messy inputs on the left settle into one clean checklist on
// the right — no emoji, custom stroke icons in the brand palette

function SpreadsheetIcon({ tint }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" style={{ color: tint }}>
      <rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 10h18M9 4v16" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function BugIcon({ tint }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" style={{ color: tint }}>
      <ellipse cx="12" cy="13" rx="5" ry="6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 7V4M9 5l1.5 2M15 5l-1.5 2M4 12h3M17 12h3M5 18l3-2M19 18l-3-2M5 8l3 2M19 8l-3 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClockIcon({ tint }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" style={{ color: tint }}>
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const messyItems = [
  { Icon: SpreadsheetIcon, label: "Test tracker.xlsx", rotate: -6, x: 0, y: 0 },
  { Icon: BugIcon, label: "Bug found late", rotate: 4, x: 18, y: 34 },
  { Icon: ClockIcon, label: "Missed deadline", rotate: -3, x: 4, y: 68 },
];

const cleanItems = ["Requirements", "Test cases", "Execution", "Report"];

export default function BadToGoodAnimation() {
  return (
    <div className="mx-auto grid w-full max-w-sm grid-cols-[1fr_auto_1fr] items-center gap-3">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: "var(--color-coral-500)" }}>
          Before
        </p>
        <div className="relative mt-3 h-28">
          {messyItems.map(({ Icon, label, rotate, x, y }) => (
            <div
              key={label}
              className="absolute flex items-center gap-1.5 rounded-lg bg-white px-2 py-1.5 text-[9.5px] font-medium text-[var(--color-ink)] shadow-md ring-1 ring-black/5"
              style={{ transform: `rotate(${rotate}deg)`, left: x, top: y }}
            >
              <Icon tint="var(--color-coral-500)" />
              {label}
            </div>
          ))}
        </div>
      </div>

      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" style={{ color: "var(--color-ink-soft)" }}>
        <path d="M4 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: "var(--color-teal-600)" }}>
          After
        </p>
        <div className="mt-3 space-y-1.5">
          {cleanItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-1.5 rounded-lg bg-white px-2 py-1.5 text-[10.5px] font-medium text-[var(--color-ink)] shadow-sm ring-1 ring-black/5"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--color-teal-500)" }}>
                <path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
