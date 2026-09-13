import { LanguageSwitcher } from "./LanguageSwitcher";
import { type Language, type PageContent } from "@/lib/firefly/content";

export function Footer({
  lang,
  page,
  content,
}: {
  lang: Language;
  page: "home" | "team" | "clients";
  content: PageContent;
}) {
  return (
    <footer className="border-t border-border bg-background">
      <div className="px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 py-8 text-sm text-muted-foreground lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-medium text-foreground">{content.footer.rights}</span>
            <span>© {new Date().getFullYear()}</span>
            <span>{content.footer.licence}</span>
            <span>{content.footer.locations}</span>
            <a
              href={`mailto:${content.sections.contact.email}`}
              className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {content.sections.contact.email}
            </a>
          </div>
          <LanguageSwitcher lang={lang} page={page} />
        </div>
      </div>
    </footer>
  );
}
