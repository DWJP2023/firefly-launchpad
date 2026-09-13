export const siteUrl = "https://www.fireflyentertainment.net";
const organizationId = `${siteUrl}/#organization`;
const davidLinkedIn = "https://www.linkedin.com/in/davidwhj/";
const fireflyLinkedIn = "https://www.linkedin.com/company/106199096/";

type JsonLd = Record<string, unknown>;

const serviceNames = [
  "China Entry Feasibility Study",
  "China Live Readiness Review",
  "China Project Assurance",
  "China Local Producer Mandate",
] as const;

export const organizationJsonLd: JsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: "Firefly Entertainment",
  url: siteUrl,
  logo: `${siteUrl}/brand/logo-512.png`,
  image: `${siteUrl}/brand/og-en.png`,
  email: "david@fireflyentertainment.net",
  telephone: "+86 156 1883 9401",
  areaServed: {
    "@type": "Country",
    name: "China",
  },
  knowsLanguage: ["en", "zh-Hans"],
  description:
    "Firefly works on the client's side when an international show enters China: feasibility, advance, project control and settlement.",
  founder: { "@id": `${siteUrl}/#david` },
  employee: ["david", "allen", "jason", "yifeng"].map((id) => ({
    "@id": `${siteUrl}/#${id}`,
  })),
  sameAs: [fireflyLinkedIn, davidLinkedIn],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "China Entry and Live Project Assurance",
    itemListElement: serviceNames.map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  },
};

const team = {
  en: [
    ["david", "David J.P. Wang", "Chief Executive Officer"],
    ["allen", "Allen Chen", "Project director, artist and touring operations"],
    ["jason", "Jason Tao", "VP Production"],
    ["yifeng", "Yifeng Zou", "Production director"],
  ],
  zh: [
    ["david", "王璟平", "首席执行官"],
    ["allen", "陈煜林", "项目总监，艺人与巡演运营"],
    ["jason", "陶坚亮", "制作副总裁"],
    ["yifeng", "邹一峰", "制作总监"],
  ],
} as const;

export function teamJsonLd(language: "en" | "zh"): JsonLd[] {
  return team[language].map(([id, name, jobTitle]) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#${id}`,
    name,
    jobTitle,
    worksFor: { "@id": organizationId },
    ...(id === "david" ? { sameAs: [davidLinkedIn] } : {}),
  }));
}

export function faqJsonLd(
  language: "en" | "zh",
  faq: { items: { question: string; answer: string }[] },
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/${language}#faq`,
    inLanguage: language === "zh" ? "zh-Hans" : "en",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function jsonLdScript(data: JsonLd | JsonLd[]) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
