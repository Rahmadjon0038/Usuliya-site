
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
import SeoHead from "./components/SeoHead.jsx";

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const privacyLangByRoute = {
    "/privacy": "uz",
    "/eng-privacy": "en",
  };
  const privacyLang = privacyLangByRoute[pathname];
  const isPrivacyRoute = Boolean(privacyLang);
  const siteOrigin = window.location.origin;
  const canonicalPath = pathname;

  const seoConfig = (() => {
    if (privacyLang === "uz") {
      return {
        title: "Maxfiylik siyosati | USULIYA",
        description:
          "USULIYA maxfiylik siyosati. Platformada shaxsiy ma'lumotlar qanday yig'ilishi, ishlatilishi va himoyalanishi haqida ma'lumot.",
        robots: "index, follow",
        lang: "uz-Latn",
        canonicalUrl: `${siteOrigin}/privacy`,
        keywords: "USULIYA maxfiylik siyosati, privacy policy, shaxsiy ma'lumotlar",
        pageType: "article",
      };
    }

    if (privacyLang === "en") {
      return {
        title: "Privacy Policy | USULIYA",
        description:
          "USULIYA privacy policy. Learn how personal data is collected, used and protected on the platform.",
        robots: "index, follow",
        lang: "en",
        canonicalUrl: `${siteOrigin}/eng-privacy`,
        keywords: "USULIYA privacy policy, personal data, data protection",
        pageType: "article",
      };
    }

    return {
      title: "USULIYA | Arab tilini 0 dan o'rganish",
      description:
        "USULIYA - arab tilini 0 dan o'rganish uchun zamonaviy platforma. 10 ta darsda harflarni ajratish, o'qish va yozish asoslarini mustahkamlang.",
      robots: "index, follow, max-image-preview:large",
      lang: "uz-Latn",
      canonicalUrl: `${siteOrigin}${canonicalPath}`,
      keywords:
        "USULIYA, arab tili, arab tilini o'rganish, online arab tili, arab alifbosi, 0 dan arab tili, usuliya academy",
      pageType: "WebSite",
    };
  })();

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

  if (isPrivacyRoute) {
    return (
      <>
        <SeoHead config={seoConfig} siteOrigin={siteOrigin} />
        <PrivacyPage lang={privacyLang} />
      </>
    );
  }

  return (
    <>
      <SeoHead config={seoConfig} siteOrigin={siteOrigin} />
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
    </>
  );
}

export default App;
