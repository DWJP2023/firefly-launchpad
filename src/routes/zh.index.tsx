import { createFileRoute } from "@tanstack/react-router";
import { HomeContent } from "@/components/firefly/HomePage";
import { content } from "@/lib/firefly/content";

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
      { rel: "canonical", href: "/zh" },
      { rel: "alternate", hrefLang: "en", href: "/en" },
    ],
  }),
  component: ChineseHome,
});

function ChineseHome() {
  return <HomeContent content={content.zh} />;
}
