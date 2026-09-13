import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { alternatePaths, type Language, type PageContent } from "@/lib/firefly/content";

export function Header({
  lang,
  page,
  content,
}: {
  lang: Language;
  page: "home" | "team";
  content: PageContent;
}) {
  const [open, setOpen] = useState(false);
  const homePath = alternatePaths[lang].home;

  const navLinks =
    page === "home"
      ? [
          { href: "#about", label: content.nav.about },
          { href: "#what-we-do", label: content.nav.whatWeDo },
          { href: "#approach", label: content.nav.approach },
          { href: "#contact", label: content.nav.contact },
        ]
      : [];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          to={homePath}
          className="flex min-w-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Logo className="h-7 w-auto shrink-0" />
          <span className="sr-only">{content.siteName}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex h-10 items-center px-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Link
            to={alternatePaths[lang].team}
            activeProps={{ className: "text-primary" }}
            className="inline-flex h-10 items-center px-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            {content.nav.team}
          </Link>
          <div className="ml-2 flex items-center border-l border-border pl-4">
            <LanguageSwitcher lang={lang} page={page} />
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 lg:px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex h-11 items-center text-base font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Link
              to={alternatePaths[lang].team}
              onClick={() => setOpen(false)}
              className="flex h-11 items-center text-base font-medium text-foreground transition-colors hover:text-primary"
            >
              {content.nav.team}
            </Link>
            <div className="mt-2 flex h-11 items-center border-t border-border pt-2">
              <LanguageSwitcher lang={lang} page={page} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
