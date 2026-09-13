import { createFileRoute } from "@tanstack/react-router";
import { TeamContent } from "@/components/firefly/TeamPage";
import { content } from "@/lib/firefly/content";
import { jsonLdScript, teamJsonLd } from "@/lib/firefly/jsonld";

export const Route = createFileRoute("/en/team")({
  head: () => ({
    meta: [
      { title: `Team — ${content.en.siteName}` },
      { name: "description", content: content.en.meta.description },
      { property: "og:title", content: `Team — ${content.en.siteName}` },
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
      { rel: "canonical", href: "/en/team" },
      { rel: "alternate", hrefLang: "zh", href: "/zh/team" },
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
