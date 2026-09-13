import { createFileRoute } from "@tanstack/react-router";
import { TeamContent } from "@/components/firefly/TeamPage";
import { content } from "@/lib/firefly/content";
import { jsonLdScript, siteUrl, teamJsonLd } from "@/lib/firefly/jsonld";

export const Route = createFileRoute("/en/team")({
  head: () => ({
    meta: [
      { title: content.en.teamMeta.title },
      { name: "description", content: content.en.teamMeta.description },
      { property: "og:title", content: content.en.teamMeta.title },
      { property: "og:description", content: content.en.teamMeta.description },
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
      { rel: "canonical", href: `${siteUrl}/en/team` },
      { rel: "alternate", hrefLang: "en", href: `${siteUrl}/en/team` },
      { rel: "alternate", hrefLang: "zh-Hans", href: `${siteUrl}/zh/team` },
      { rel: "alternate", hrefLang: "x-default", href: `${siteUrl}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: jsonLdScript(teamJsonLd("en")),
      },
    ],
  }),
  component: EnglishTeam,
});

function EnglishTeam() {
  return <TeamContent content={content.en} />;
}
