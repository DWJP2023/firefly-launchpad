import { createFileRoute } from "@tanstack/react-router";
import { HomeContent } from "@/components/firefly/HomePage";
import { content } from "@/lib/firefly/content";
import { faqJsonLd, jsonLdScript, siteUrl } from "@/lib/firefly/jsonld";

export const Route = createFileRoute("/zh/")({
  head: () => ({
    meta: [
      { title: content.zh.meta.title },
      { name: "description", content: content.zh.meta.description },
      { property: "og:title", content: content.zh.meta.title },
      { property: "og:description", content: content.zh.meta.description },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://www.fireflyentertainment.net/brand/og-zh.png",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: `${siteUrl}/zh` },
      { rel: "alternate", hrefLang: "en", href: `${siteUrl}/en` },
      { rel: "alternate", hrefLang: "zh-Hans", href: `${siteUrl}/zh` },
      { rel: "alternate", hrefLang: "x-default", href: `${siteUrl}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: jsonLdScript(faqJsonLd("zh", content.zh.faq)),
      },
    ],
  }),
  component: ChineseHome,
});

function ChineseHome() {
  return <HomeContent content={content.zh} />;
}
