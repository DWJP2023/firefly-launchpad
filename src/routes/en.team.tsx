import { createFileRoute } from "@tanstack/react-router";
import { TeamPage } from "@/components/firefly/TeamPage";
import { content } from "@/lib/firefly/content";

export const Route = createFileRoute("/en/team")({
  head: () => ({
    meta: [
      { title: `Team — ${content.en.siteName}` },
      { name: "description", content: content.en.meta.description },
      { property: "og:title", content: `Team — ${content.en.siteName}` },
      { property: "og:description", content: content.en.meta.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: "/en/team" },
      { rel: "alternate", hrefLang: "zh", href: "/zh/team" },
    ],
  }),
  component: EnglishTeam,
});

function EnglishTeam() {
  return <TeamPage lang="en" content={content.en} />;
}
