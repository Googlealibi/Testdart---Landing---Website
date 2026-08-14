const collected = [
  "Full Name",
  "Email Address",
  "Phone Number",
  "Company Name",
  "Project Requirements or Interests",
  "Any additional information you voluntarily provide",
];

const purposes = [
  "To contact you regarding your inquiry",
  "To provide information about our services",
  "To send marketing and promotional communications",
  "To improve our services and customer experience",
  "To follow up on sales or support requests",
];

const legalBasis = [
  "Your consent when you submit the lead form",
  "Legitimate interest in responding to your inquiry and offering relevant services",
];

const rights = [
  "Access the personal data we hold about you",
  "Request correction or deletion of your data",
  "Withdraw your consent at any time",
  "Object to or restrict certain types of processing",
];

function CheckList({ items }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-[var(--color-ink-soft)]">
          <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--color-teal-500)" }}>
            <path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

function Section({ number, title, children }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-[var(--color-ink)]">
        {number}. {title}
      </h2>
      <div className="mt-2 text-[var(--color-ink-soft)]">{children}</div>
    </section>
  );
}

function BackHome() {
  return (
    <a
      href="/"
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-indigo-600)] hover:underline"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path d="M15 19l-7-7 7-7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Back to home
    </a>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-3xl bg-white p-8 text-[var(--color-ink)] shadow-xl ring-1 ring-black/5 md:p-12">
      <BackHome />

      <p className="mt-6 text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-teal-600)" }}>
        Legal
      </p>
      <h1 className="mt-3 text-3xl font-bold md:text-4xl">Privacy Policy</h1>

      <p className="mt-6 text-[var(--color-ink-soft)]">
        Provassure Software Technologies Private Limited ("Provassure," "we," "our," or "us") is committed to
        protecting the privacy of individuals who interact with our business through digital advertising
        platforms, including Google Ads. This Privacy Policy outlines how we collect, use, and protect personal
        information submitted via our lead forms.
      </p>

      <Section number={1} title="Information We Collect">
        <p>When you submit your information through our lead forms, we may collect the following:</p>
        <CheckList items={collected} />
      </Section>

      <Section number={2} title="Purpose of Data Collection">
        <p>We collect and use your personal information solely for the following purposes:</p>
        <CheckList items={purposes} />
        <p className="mt-3">
          We do not use your data for any unrelated purposes or share it with third parties for their own
          marketing.
        </p>
      </Section>

      <Section number={3} title="Legal Basis for Processing">
        <p>We process your personal data based on:</p>
        <CheckList items={legalBasis} />
      </Section>

      <Section number={4} title="Data Sharing and Disclosure">
        <p>
          Your data is accessible only to authorized personnel within Provassure. We do not sell, rent, or trade
          your personal information. We may share your data with trusted service providers who assist us in
          managing communications or CRM systems, under strict confidentiality agreements.
        </p>
      </Section>

      <Section number={5} title="Data Retention">
        <p>
          We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy
          or as required by law. You may request deletion of your data at any time.
        </p>
      </Section>

      <Section number={6} title="Your Rights">
        <p>You have the right to:</p>
        <CheckList items={rights} />
        <p className="mt-3">
          To exercise these rights, please contact us at{" "}
          <a href="mailto:info@provassure.com" className="font-semibold text-[var(--color-indigo-600)] hover:underline">
            info@provassure.com
          </a>
          .
        </p>
      </Section>

      <Section number={7} title="Data Security">
        <p>
          We implement appropriate technical and organizational measures to protect your data from unauthorized
          access, disclosure, alteration, or destruction.
        </p>
      </Section>

      <Section number={8} title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
          updated effective date.
        </p>
      </Section>

      <Section number={9} title="Contact Us">
        <p className="font-semibold text-[var(--color-ink)]">Provassure Software Technologies Private Limited</p>
        <p className="mt-1">
          Email:{" "}
          <a href="mailto:info@provassure.com" className="font-semibold text-[var(--color-indigo-600)] hover:underline">
            info@provassure.com
          </a>
        </p>
        <p className="mt-3">
          If you have any questions or concerns about this Privacy Policy or how your data is handled, please
          reach out and we will respond within 1 business day.
        </p>
      </Section>

      <div className="mt-14 border-t border-black/10 pt-8">
        <BackHome />
      </div>
      </div>
    </div>
  );
}
