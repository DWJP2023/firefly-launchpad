import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/firefly/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Firefly Entertainment — The Show Must Go On" },
      {
        name: "description",
        content: "Firefly Entertainment — choose English or 中文 to enter.",
      },
      { property: "og:title", content: "Firefly Entertainment — The Show Must Go On" },
      {
        property: "og:description",
        content: "Firefly Entertainment — choose English or 中文 to enter.",
      },
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
      { rel: "canonical", href: "/" },
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "zh", href: "/zh" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="flex w-full max-w-md flex-col items-center">
        <Logo className="w-full max-w-xs sm:max-w-sm md:max-w-md" />

        <h1 className="mt-10 text-center text-sm font-medium uppercase tracking-[0.25em] text-foreground">
          The Show Must Go On
        </h1>

        <nav
          className="mt-8 flex items-center gap-4 text-sm font-medium tracking-wide text-foreground"
          aria-label="Language selection"
        >
          <LanguageLink to="/en" label="English" />
          <span className="h-4 w-px bg-border" aria-hidden="true" />
          <LanguageLink to="/zh" label="中文" />
        </nav>
      </div>
    </div>
  );
}

function LanguageLink({ to, label }: { to: "/en" | "/zh"; label: string }) {
  return (
    <Link
      to={to}
      className="group relative inline-flex h-10 items-center text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {label}
      <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </Link>
  );
}
