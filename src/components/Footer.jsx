import logoMark from "../assets/testdart_logo_light.png";

const CONTACT_EMAIL = "info@provassure.com";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-16" style={{ background: "var(--color-indigo-900)" }}>
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
        <div>
          <p className="flex items-center gap-1 text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1">
              <img src={logoMark} alt="" className="h-full w-full object-contain" />
            </span>
            <span>test<span style={{ color: "var(--color-teal-400)" }}>dart</span></span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-white/60">AI assisted testing for modern QA teams.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Explore</h4>
          <nav className="mt-4 flex flex-col gap-2.5 text-sm text-white/60">
            <a href="/#agentic-qa" className="hover:text-white">Features</a>
            <a href="/#pricing" className="hover:text-white">Pricing</a>
            <a href="/#demo" className="hover:text-white">Demo</a>
            <a href="/#faq" className="hover:text-white">FAQ</a>
          </nav>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Company</h4>
          <nav className="mt-4 flex flex-col gap-2.5 text-sm text-white/60">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">Contact</a>
            <a href="/#top" className="hover:text-white">Log In</a>
            <button type="button" className="text-left hover:text-white">CTA</button>
          </nav>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Legal</h4>
          <nav className="mt-4 flex flex-col gap-2.5 text-sm text-white/60">
            <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
          </nav>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Contact</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
            <div>
              <p className="text-xs uppercase tracking-wide text-white/40">Email</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-white/40">Phone</p>
              <p>[Contact number to be added]</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-white/40">Address</p>
              <p>[Company address to be added]</p>
            </div>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/40">
        &copy; {year} testdart. All rights reserved.
      </p>
    </footer>
  );
}
