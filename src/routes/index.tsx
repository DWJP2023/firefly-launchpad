import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/firefly/Logo";
import { landing } from "@/lib/firefly/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: landing.meta.title },
      {
        name: "description",
        content: landing.meta.description,
      },
      { property: "og:title", content: landing.meta.title },
      {
        property: "og:description",
        content: landing.meta.description,
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
      { rel: "canonical", href: "https://www.fireflyentertainment.net/" },
      { rel: "alternate", hrefLang: "en", href: "https://www.fireflyentertainment.net/en" },
      { rel: "alternate", hrefLang: "zh-Hans", href: "https://www.fireflyentertainment.net/zh" },
      { rel: "alternate", hrefLang: "x-default", href: "https://www.fireflyentertainment.net/" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col items-center justify-center bg-background px-6 lg:px-8"
    >
      <div className="flex w-full max-w-5xl flex-col items-center text-center">
        <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {landing.taglineEn}
        </h1>
        <p
          lang="zh-Hans"
          className="mt-3 text-2xl font-medium tracking-tight text-foreground sm:text-3xl md:text-4xl"
        >
          {landing.taglineZh}
        </p>
        <Logo className="mt-10 h-6 w-auto" />
        <div className="mt-8 space-y-1 text-sm leading-relaxed text-muted-foreground">
          <p>{landing.descriptorEn}</p>
          <p lang="zh-Hans">{landing.descriptorZh}</p>
        </div>
        <nav
          className="mt-8 flex items-center gap-4 text-sm font-medium tracking-wide text-foreground"
          aria-label={landing.languageSelectionLabel}
        >
          <LanguageLink
            to="/en"
            label={landing.english}
            lang="en"
            hrefLang="en"
            ariaLabel={landing.englishAriaLabel}
          />
          <span className="h-4 w-px bg-border" aria-hidden="true" />
          <LanguageLink
            to="/zh"
            label={landing.chinese}
            lang="zh-Hans"
            hrefLang="zh-Hans"
            ariaLabel={landing.chineseAriaLabel}
          />
        </nav>
      </div>
    </main>
  );
}

function LanguageLink({
  to,
  label,
  lang,
  hrefLang,
  ariaLabel,
}: {
  to: "/en" | "/zh";
  label: string;
  lang: "en" | "zh-Hans";
  hrefLang: "en" | "zh-Hans";
  ariaLabel: string;
}) {
  return (
    <Link
      to={to}
      lang={lang}
      hrefLang={hrefLang}
      aria-label={ariaLabel}
      className="group relative inline-flex h-11 items-center text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {label}
      <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </Link>
  );
}
