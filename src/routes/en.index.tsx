import { createFileRoute } from "@tanstack/react-router";
import { HomeContent } from "@/components/firefly/HomePage";
import { content } from "@/lib/firefly/content";

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
      { rel: "canonical", href: "/en" },
      { rel: "alternate", hrefLang: "zh", href: "/zh" },
    ],
  }),
  component: EnglishHome,
});

function EnglishHome() {
  return <HomeContent content={content.en} />;
}
