import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { Header } from "@/components/firefly/Header";
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
  component: EnglishLayout,
});

function EnglishLayout() {
  const { pathname } = useLocation();
  const page = pathname.startsWith("/en/team") ? "team" : "home";

  return (
    <>
      <Header lang="en" page={page} content={content.en} />
      <Outlet />
    </>
  );
}
