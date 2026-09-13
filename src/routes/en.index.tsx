import { createFileRoute } from "@tanstack/react-router";
import { HomeContent } from "@/components/firefly/HomePage";
import { content } from "@/lib/firefly/content";
import { faqJsonLd, jsonLdScript, siteUrl } from "@/lib/firefly/jsonld";

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: content.en.meta.title },
      { name: "description", content: content.en.meta.description },
      { property: "og:title", content: content.en.meta.title },
      { property: "og:description", content: content.en.meta.description },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://www.fireflyentertainment.net/brand/og-en.png",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: `${siteUrl}/en` },
      { rel: "alternate", hrefLang: "en", href: `${siteUrl}/en` },
      { rel: "alternate", hrefLang: "zh-Hant", href: `${siteUrl}/zh` },
      { rel: "alternate", hrefLang: "x-default", href: `${siteUrl}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: jsonLdScript(faqJsonLd("en", content.en.sections.faq)),
      },
    ],
  }),
  component: EnglishHome,
});

function EnglishHome() {
  return <HomeContent content={content.en} />;
}
