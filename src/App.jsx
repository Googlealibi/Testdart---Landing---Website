import useLenis from "./lib/useLenis";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Demo from "./components/Demo";
import WhyTestDart from "./components/WhyTestDart";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import StoryPricing from "./components/StoryPricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";

export default function App() {
  useLenis();

  const isPrivacyPolicy = window.location.pathname === "/privacy-policy";

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main style={{ paddingTop: "var(--header-h, 88px)" }}>
        {isPrivacyPolicy ? (
          <PrivacyPolicy />
        ) : (
          <>
            <Hero />
            <Demo />
            <WhyTestDart />
            <Features />
            <HowItWorks />
            <StoryPricing />
            <FAQ />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
