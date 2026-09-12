import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/firefly/HomePage";
import { content } from "@/lib/firefly/content";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: content.en.meta.title },
      { name: "description", content: content.en.meta.description },
      { property: "og:title", content: content.en.meta.title },
      { property: "og:description", content: content.en.meta.description },
      { property: "og:type", content: "website" },
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
  return <HomePage lang="en" content={content.en} />;
}
