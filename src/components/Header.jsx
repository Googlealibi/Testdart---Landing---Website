import logoMark from "../assets/testdart_logo_light.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-[var(--color-canvas)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-1 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <img src={logoMark} alt="" className="h-8 w-8 object-contain" />
          <span>test<span style={{ color: "var(--color-indigo-500)" }}>dart</span></span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#pricing" className="text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]">
            Pricing
          </a>
          <a href="#agentic-qa" className="text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]">
            Agentic QA
          </a>
          <a
            href="#demo"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] ring-1 ring-black/10 transition-colors hover:bg-white"
          >
            CTA 2
          </a>
          <a
            href="#cta"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
            style={{ background: "var(--color-indigo-500)" }}
          >
            CTA
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#demo"
            className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--color-ink)] ring-1 ring-black/10"
          >
            CTA 2
          </a>
          <a
            href="#cta"
            className="rounded-full px-4 py-2 text-sm font-semibold text-white"
            style={{ background: "var(--color-indigo-500)" }}
          >
            CTA
          </a>
        </div>
      </div>
    </header>
  );
}
