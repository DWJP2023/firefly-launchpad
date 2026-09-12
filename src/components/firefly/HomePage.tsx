import { Header } from "./Header";
import { type Language, type PageContent } from "@/lib/firefly/content";

export function HomePage({ lang, content }: { lang: Language; content: PageContent }) {
  return (
    <>
      <Header lang={lang} page="home" content={content} />
      <main>
        <section
          id="about"
          className="bg-white px-6 py-24 md:py-32 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {content.nav.about}
            </p>
            <h1 className="mt-6 text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
              {content.sections.about.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {content.sections.about.body}
            </p>
          </div>
        </section>

        <section
          id="what-we-do"
          className="bg-muted px-6 py-24 md:py-32 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {content.nav.whatWeDo}
            </p>
            <h2 className="mt-6 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              {content.sections.whatWeDo.title}
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {content.sections.whatWeDo.items.map((item) => (
                <div key={item.title} className="bg-white p-6">
                  <h3 className="text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="approach"
          className="bg-white px-6 py-24 md:py-32 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {content.nav.approach}
            </p>
            <h2 className="mt-6 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              {content.sections.approach.title}
            </h2>
            <dl className="mt-10 space-y-8">
              {content.sections.approach.items.map((item) => (
                <div key={item.title}>
                  <dt className="text-lg font-medium text-foreground">
                    {item.title}
                  </dt>
                  <dd className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          id="contact"
          className="bg-muted px-6 py-24 md:py-32 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {content.nav.contact}
            </p>
            <h2 className="mt-6 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              {content.sections.contact.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {content.sections.contact.body}
            </p>
            <a
              href={`mailto:${content.sections.contact.email}`}
              className="mt-8 inline-flex h-11 items-center text-base font-medium text-primary underline decoration-1 underline-offset-4 transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {content.sections.contact.emailLabel}: {content.sections.contact.email}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
