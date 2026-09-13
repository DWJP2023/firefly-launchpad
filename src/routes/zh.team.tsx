import { createFileRoute } from "@tanstack/react-router";
import { TeamContent } from "@/components/firefly/TeamPage";
import { content } from "@/lib/firefly/content";
import { jsonLdScript, teamJsonLd } from "@/lib/firefly/jsonld";

export const Route = createFileRoute("/zh/team")({
  head: () => ({
    meta: [
      { title: `团队 — ${content.zh.siteName}` },
      { name: "description", content: content.zh.meta.description },
      { property: "og:title", content: `团队 — ${content.zh.siteName}` },
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
      { rel: "canonical", href: "/zh/team" },
      { rel: "alternate", hrefLang: "en", href: "/en/team" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: jsonLdScript(teamJsonLd("zh")),
      },
    ],
  }),
  component: ChineseTeam,
});

function ChineseTeam() {
  return <TeamContent content={content.zh} />;
}
