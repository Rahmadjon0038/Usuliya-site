
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar.jsx"
import Hero from "./components/sections/Hero.jsx";
import WhoIsFor from "./components/sections/WhoIsFor.jsx";
import Curriculum from "./components/sections/Curriculum.jsx";
import VideoGuide from "./components/sections/VideoGuide.jsx";
import Results from "./components/sections/Results.jsx";
import Pricing from "./components/sections/Pricing.jsx";
import FAQ from "./components/sections/FAQ.jsx";
import Footer from "./components/layout/Footer.jsx";
import PrivacyPage from "./components/pages/PrivacyPage.jsx";

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const privacyPdfByRoute = {
    "/privacy": "/privacy.pdf",
    "/privacy.pdf": "/privacy.pdf",
    "/eng-privacy": "/eng-privacy.pdf",
    "/eng-privacy.pdf": "/eng-privacy.pdf",
  };
  const privacyPdfSrc = privacyPdfByRoute[pathname];
  const isPrivacyRoute = Boolean(privacyPdfSrc);

  useEffect(() => {
    if (isPrivacyRoute) {
      return undefined;
    }

    const duration = 1100;
    const headerOffset = 96;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const scrollToTarget = (target) => {
      const startY = window.scrollY;
      const targetY = Math.max(
        0,
        target.getBoundingClientRect().top + window.scrollY - headerOffset
      );
      const distance = targetY - startY;

      if (Math.abs(distance) < 1) {
        return;
      }

      const startTime = performance.now();

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);

        window.scrollTo(0, startY + distance * easedProgress);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    const handleDocumentClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]');

      if (!anchor) {
        return;
      }

      const hash = anchor.getAttribute("href");

      if (!hash || hash === "#") {
        return;
      }

      const target = document.querySelector(hash);

      if (!target) {
        return;
      }

      event.preventDefault();
      scrollToTarget(target);
      window.history.replaceState(null, "", hash);
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, [isPrivacyRoute]);

  if (privacyPdfSrc === "/privacy.pdf") {
    return (
      <PrivacyPage
        title="Privacy policy"
        pdfSrc={privacyPdfSrc}
      />
    );
  }

  if (privacyPdfSrc === "/eng-privacy.pdf") {
    return (
      <PrivacyPage
        title="English privacy policy"
        pdfSrc={privacyPdfSrc}
      />
    );
  }

  return (
    <div className="min-h-screen bg-life-white font-roboto text-dark-navy overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <WhoIsFor />
        <Curriculum />
        <VideoGuide />
        <Results />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
