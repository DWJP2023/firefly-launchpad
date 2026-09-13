import { createFileRoute } from "@tanstack/react-router";
import { TeamContent } from "@/components/firefly/TeamPage";
import { content } from "@/lib/firefly/content";

export const Route = createFileRoute("/zh/team")({
  head: () => ({
    meta: [
      { title: `团队 — ${content.zh.siteName}` },
      { name: "description", content: content.zh.meta.description },
      { property: "og:title", content: `团队 — ${content.zh.siteName}` },
      { property: "og:description", content: content.zh.meta.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: "/zh/team" },
      { rel: "alternate", hrefLang: "en", href: "/en/team" },
    ],
  }),
  component: ChineseTeam,
});

function ChineseTeam() {
  return <TeamContent content={content.zh} />;
}
