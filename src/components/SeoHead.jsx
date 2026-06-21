import { useEffect } from "react";

const upsertMeta = (keyAttr, keyValue, content) => {
  const selector = `meta[${keyAttr}="${keyValue}"]`;
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(keyAttr, keyValue);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const SeoHead = ({ config, siteOrigin }) => {
  useEffect(() => {
    document.documentElement.lang = config.lang;
    document.title = config.title;

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", config.canonicalUrl);

    upsertMeta("name", "description", config.description);
    upsertMeta("name", "keywords", config.keywords);
    upsertMeta("name", "author", "USULIYA");
    upsertMeta("name", "application-name", "USULIYA");
    upsertMeta("name", "robots", config.robots);
    upsertMeta("name", "theme-color", "#00674F");
    upsertMeta("property", "og:site_name", "USULIYA");
    upsertMeta("property", "og:title", config.title);
    upsertMeta("property", "og:description", config.description);
    upsertMeta("property", "og:type", config.pageType);
    upsertMeta("property", "og:locale", config.lang === "en" ? "en_US" : "uz_UZ");
    upsertMeta("property", "og:url", config.canonicalUrl);
    upsertMeta("property", "og:image", `${siteOrigin}/og-image.svg`);
    upsertMeta("property", "og:image:type", "image/svg+xml");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", config.title);
    upsertMeta("name", "twitter:description", config.description);
    upsertMeta("name", "twitter:image", `${siteOrigin}/og-image.svg`);

    const jsonLdId = "seo-json-ld";
    let jsonLd = document.getElementById(jsonLdId);
    if (!jsonLd) {
      jsonLd = document.createElement("script");
      jsonLd.id = jsonLdId;
      jsonLd.type = "application/ld+json";
      document.head.appendChild(jsonLd);
    }

    jsonLd.textContent = JSON.stringify(
      config.pageType === "WebSite"
        ? {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                name: "USULIYA",
                url: siteOrigin,
                description: config.description,
                inLanguage: config.lang,
                potentialAction: {
                  "@type": "SearchAction",
                  target: `${siteOrigin}/?q={search_term_string}`,
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@type": "Organization",
                name: "USULIYA",
                url: siteOrigin,
                logo: `${siteOrigin}/favicon.png`,
                sameAs: [
                  "https://t.me/usuliya",
                  "https://www.instagram.com/usuliya.uz",
                  "https://youtube.com/@ibrohim_tizim_franshiza",
                ],
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    contactType: "customer support",
                    telephone: "+998935714230",
                    availableLanguage: ["uz", "en"],
                  },
                ],
              },
            ],
          }
        : {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: config.title,
            url: config.canonicalUrl,
            description: config.description,
            inLanguage: config.lang,
            isPartOf: {
              "@type": "WebSite",
              name: "USULIYA",
              url: siteOrigin,
            },
          },
      null,
      0
    );
  }, [config, siteOrigin]);

  return null;
};

export default SeoHead;
