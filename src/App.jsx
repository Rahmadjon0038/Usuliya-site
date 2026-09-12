
import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar.jsx"
import Hero from "./components/sections/Hero.jsx";
import WhoIsFor from "./components/sections/WhoIsFor.jsx";
import Curriculum from "./components/sections/Curriculum.jsx";
import VideoGuide from "./components/sections/VideoGuide.jsx";
import Results from "./components/sections/Results.jsx";
import ContactUs from "./components/sections/ContactUs.jsx";
import FAQ from "./components/sections/FAQ.jsx";
import Footer from "./components/layout/Footer.jsx";
import PrivacyPage from "./components/pages/PrivacyPage.jsx";
import SeoHead from "./components/SeoHead.jsx";
import { getSiteContent } from "./content/siteContent.js";

const APP_STORE_URLS = {
  apple: "https://apps.apple.com/ca/app/usuliya/id6775377699",
  android: "https://play.google.com/store/apps/details?id=com.usuliya.app",
};

const getStoreUrl = () => {
  if (typeof window === "undefined") {
    return APP_STORE_URLS.android;
  }

  const ua = window.navigator.userAgent || "";
  const isAppleDevice = /iPhone|iPad|iPod/i.test(ua) ||
    (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);

  return isAppleDevice ? APP_STORE_URLS.apple : APP_STORE_URLS.android;
};

function App() {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") {
      return "uz";
    }

    const storedLang = window.localStorage.getItem("usuliya-lang");
    if (storedLang === "uz" || storedLang === "en") {
      return storedLang;
    }

    return "uz";
  });
  const [showInstallPrompt, setShowInstallPrompt] = useState(true);
  const appStoreUrl = getStoreUrl();
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const privacyLangByRoute = {
    "/privacy": "uz",
    "/eng-privacy": "en",
  };
  const privacyLang = privacyLangByRoute[pathname];
  const isPrivacyRoute = Boolean(privacyLang);
  const siteOrigin = window.location.origin;
  const canonicalPath = pathname;
  const content = getSiteContent(lang);

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
      title:
        lang === "en"
          ? "USULIYA | Learn Arabic from Zero"
          : "USULIYA | Arab tilini 0 dan o'rganish",
      description:
        lang === "en"
          ? "USULIYA is a modern platform for learning Arabic from zero. Build a strong foundation in reading, writing, and letter recognition in 10 lessons."
          : "USULIYA - arab tilini 0 dan o'rganish uchun zamonaviy platforma. 10 ta darsda harflarni ajratish, o'qish va yozish asoslarini mustahkamlang.",
      robots: "index, follow, max-image-preview:large",
      lang: lang === "en" ? "en" : "uz-Latn",
      canonicalUrl: `${siteOrigin}${canonicalPath}`,
      keywords:
        lang === "en"
          ? "USULIYA, Arabic language, learn Arabic, online Arabic lessons, Arabic alphabet, Arabic from zero, usuliya academy"
          : "USULIYA, arab tili, arab tilini o'rganish, online arab tili, arab alifbosi, 0 dan arab tili, usuliya academy",
      pageType: "WebSite",
    };
  })();

  useEffect(() => {
    window.localStorage.setItem("usuliya-lang", lang);
    document.documentElement.lang = lang === "en" ? "en" : "uz";
  }, [lang]);

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
        <Navbar lang={lang} setLang={setLang} content={content.nav} />
        <main>
          <Hero content={content.hero} />
          <WhoIsFor content={content.who} />
          <Curriculum content={content.curriculum} />
          <VideoGuide content={content.video} />
          <Results content={content.results} />
          <ContactUs content={content.contact} />
          <FAQ content={content.faq} />
        </main>
        <Footer content={content.footer} />

        {showInstallPrompt && (
          <div className="fixed bottom-4 left-1/2 z-50 w-[min(960px,calc(100vw-2rem))] -translate-x-1/2">
            <div className="rounded-[24px] border border-white/10 bg-dark-navy px-5 py-4 text-white shadow-2xl shadow-black/30">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white font-black">
                    ✦
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">
                      USULIYA App
                    </p>
                    <p className="text-lg md:text-2xl font-black leading-tight">
                      Mobil ilovamizni yuklab oling
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={appStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 font-black text-white transition hover:bg-emerald-400"
                  >
                    Yuklash
                  </a>
                  <button
                    type="button"
                    onClick={() => setShowInstallPrompt(false)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                    aria-label="Dismiss download prompt"
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
