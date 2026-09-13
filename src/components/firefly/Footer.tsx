import { LanguageSwitcher } from "./LanguageSwitcher";
import { type Language, type PageContent } from "@/lib/firefly/content";

export function Footer({
  lang,
  page,
  content,
}: {
  lang: Language;
  page: "home" | "team";
  content: PageContent;
}) {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-medium text-foreground">Firefly Entertainment</span>
          <span>© {new Date().getFullYear()}</span>
          <a
            href={`mailto:${content.sections.contact.email}`}
            className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {content.sections.contact.email}
          </a>
        </div>
        <LanguageSwitcher lang={lang} page={page} />
      </div>
    </footer>
  );
}
