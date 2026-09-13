import { createFileRoute } from "@tanstack/react-router";
import { ClientsContent } from "@/components/firefly/ClientsPage";
import { content } from "@/lib/firefly/content";
import { siteUrl } from "@/lib/firefly/jsonld";

export const Route = createFileRoute("/en/clients")({
  head: () => ({
    meta: [
      { title: content.en.clientsMeta.title },
      { name: "description", content: content.en.clientsMeta.description },
      { property: "og:title", content: content.en.clientsMeta.title },
      { property: "og:description", content: content.en.clientsMeta.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${siteUrl}/brand/og-en.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: `${siteUrl}/en/clients` },
      { rel: "alternate", hrefLang: "en", href: `${siteUrl}/en/clients` },
      { rel: "alternate", hrefLang: "zh-Hant", href: `${siteUrl}/zh/clients` },
      { rel: "alternate", hrefLang: "x-default", href: `${siteUrl}/` },
    ],
  }),
  component: EnglishClients,
});

function EnglishClients() {
  return <ClientsContent content={content.en} />;
}
