import { type PageContent } from "@/lib/firefly/content";

export function TeamContent({ content }: { content: PageContent }) {
  const placeholders = Array.from({ length: 6 }, (_, i) => i);

  return (
    <main className="bg-white px-6 py-16 md:py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {content.nav.team}
        </p>
        <h1 className="mt-6 text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
          {content.team.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {content.team.subtitle}
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((index) => (
            <article
              key={index}
              className="flex flex-col border border-border bg-muted p-5"
            >
              <div className="aspect-[3/4] w-full bg-secondary">
                <div className="flex h-full flex-col items-center justify-center gap-2 px-4 text-center">
                  <span className="text-sm font-medium text-muted-foreground">
                    {content.team.placeholderPhoto}
                  </span>
                </div>
              </div>
              <div className="mt-5 space-y-2">
                <p className="text-lg font-medium text-foreground">
                  {content.team.placeholderName}
                </p>
                <p className="text-sm font-medium uppercase tracking-wide text-primary">
                  {content.team.placeholderRole}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {content.team.placeholderBio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
