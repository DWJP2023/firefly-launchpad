import { Link } from "@tanstack/react-router";
import { alternatePaths, type Language } from "@/lib/firefly/content";

export function LanguageSwitcher({ lang, page }: { lang: Language; page: "home" | "team" }) {
  const targetLang: Language = lang === "en" ? "zh" : "en";
  const targetPath = alternatePaths[targetLang][page];
  const label = targetLang === "en" ? "EN" : "中文";
  const ariaLabel = targetLang === "en" ? "Switch to English" : "切换到中文";

  return (
    <Link
      to={targetPath}
      lang={targetLang === "zh" ? "zh-Hans" : "en"}
      hrefLang={targetLang === "zh" ? "zh-Hans" : "en"}
      aria-label={ariaLabel}
      className="inline-flex h-11 min-w-[44px] items-center justify-center text-sm font-medium tracking-wide text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {label}
    </Link>
  );
}
