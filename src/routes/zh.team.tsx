import { createFileRoute } from "@tanstack/react-router";
import { TeamContent } from "@/components/firefly/TeamPage";
import { content } from "@/lib/firefly/content";
import { jsonLdScript, siteUrl, teamJsonLd } from "@/lib/firefly/jsonld";

export const Route = createFileRoute("/zh/team")({
  head: () => ({
    meta: [
      { title: content.zh.teamMeta.title },
      { name: "description", content: content.zh.teamMeta.description },
      { property: "og:title", content: content.zh.teamMeta.title },
      { property: "og:description", content: content.zh.teamMeta.description },
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
      { rel: "canonical", href: `${siteUrl}/zh/team` },
      { rel: "alternate", hrefLang: "en", href: `${siteUrl}/en/team` },
      { rel: "alternate", hrefLang: "zh-Hant", href: `${siteUrl}/zh/team` },
      { rel: "alternate", hrefLang: "x-default", href: `${siteUrl}/` },
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
