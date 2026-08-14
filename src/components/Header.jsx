import { useLayoutEffect, useRef } from "react";
import logoMark from "../assets/testdart_logo_light.png";
import useTheme from "../lib/useTheme";

function ThemeToggle({ theme, toggle }) {
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light background" : "Switch to dark background"}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors"
      style={{ background: "var(--color-hairline-soft)" }}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" style={{ color: "var(--color-mist)" }}>
          <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" style={{ color: "var(--color-mist)" }}>
          <path
            d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

export default function Header() {
  const headerRef = useRef(null);
  const { theme, toggle } = useTheme();

  useLayoutEffect(() => {
    const el = headerRef.current;
    const setHeight = () => {
      document.documentElement.style.setProperty("--header-h", `${el.offsetHeight}px`);
    };
    setHeight();
    const observer = new ResizeObserver(setHeight);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 border-b bg-[var(--color-canvas)]/90 text-[var(--color-mist)] backdrop-blur-md"
      style={{ borderColor: "var(--color-hairline)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/#top" className="flex items-center gap-1 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <img src={logoMark} alt="" className="h-8 w-8 object-contain" />
          <span>test<span style={{ color: "var(--color-indigo-500)" }}>dart</span></span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="/#pricing" className="group relative py-1 text-sm font-medium text-[var(--color-mist-soft)] transition-colors hover:text-[var(--color-mist)]">
            Pricing
            <span
              className="absolute inset-x-0 -bottom-0.5 h-[1.5px] origin-left scale-x-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-x-100"
              style={{ background: "var(--color-indigo-500)" }}
            />
          </a>
          <a href="/#agentic-qa" className="group relative py-1 text-sm font-medium text-[var(--color-mist-soft)] transition-colors hover:text-[var(--color-mist)]">
            Agentic QA
            <span
              className="absolute inset-x-0 -bottom-0.5 h-[1.5px] origin-left scale-x-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-x-100"
              style={{ background: "var(--color-indigo-500)" }}
            />
          </a>
          <ThemeToggle theme={theme} toggle={toggle} />
          <button
            type="button"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-[var(--color-mist)] ring-1 transition-colors hover:bg-white hover:text-[var(--color-ink)]"
            style={{ "--tw-ring-color": "var(--color-hairline)" }}
          >
            CTA 2
          </button>
          <button
            type="button"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
            style={{ background: "var(--color-indigo-500)" }}
          >
            CTA
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} toggle={toggle} />
          <button
            type="button"
            className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--color-mist)] ring-1"
            style={{ "--tw-ring-color": "var(--color-hairline)" }}
          >
            CTA 2
          </button>
          <button
            type="button"
            className="rounded-full px-4 py-2 text-sm font-semibold text-white"
            style={{ background: "var(--color-indigo-500)" }}
          >
            CTA
          </button>
        </div>
      </div>
    </header>
  );
}
