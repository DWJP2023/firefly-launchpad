import { Footer } from "./Footer";
import { type PageContent } from "@/lib/firefly/content";

export function HomeContent({ content }: { content: PageContent }) {
  return (
    <>
      <main id="main-content">
        <section id="about" className="bg-white px-6 py-24 md:py-32 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="max-w-3xl text-2xl font-medium leading-relaxed text-foreground md:text-3xl">
              {content.descriptor}
            </p>
            <div className="mt-16 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {content.brandLine}
              </p>
              <h1 className="mt-6 text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
                {content.sections.about.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {content.sections.about.body}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {content.sections.about.clients}
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="bg-muted px-6 py-24 md:py-32 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              {content.sections.services.title}
            </h2>
            <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2">
              {content.sections.services.items.map((item) => (
                <article key={item.index} className="bg-muted p-6 md:p-8">
                  <p className="text-sm font-medium tracking-[0.16em] text-primary">{item.index}</p>
                  <h3 className="mt-6 text-xl font-medium text-foreground">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{item.description}</p>
                  <ul className="mt-5 divide-y divide-border border-y border-border text-sm leading-relaxed text-muted-foreground">
                    {item.covers.map((cover) => (
                      <li key={cover} className="py-2 pl-4">
                        {cover}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
                    {item.deliverable}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-muted px-6 py-24 md:py-32 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              {content.sections.faq.title}
            </h2>
            <div className="mt-10 max-w-3xl divide-y divide-border border-y border-border">
              {content.sections.faq.items.map((item) => (
                <article key={item.question} className="py-8">
                  <h3 className="text-lg font-medium leading-relaxed text-foreground">
                    {item.question}
                  </h3>
                  {item.answer.split("\n\n").map((paragraph) => (
                    <p key={paragraph} className="mt-4 leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white px-6 py-24 md:py-32 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                {content.sections.contact.title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {content.sections.contact.body}
              </p>
              <h3 className="mt-12 text-lg font-medium text-foreground">
                {content.sections.contact.briefTitle}
              </h3>
              <ol className="mt-5 list-decimal space-y-3 pl-5 leading-relaxed text-muted-foreground">
                {content.sections.contact.brief.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
              <div className="mt-12 space-y-2 text-base leading-relaxed">
                <p className="font-medium text-foreground">{content.sections.contact.name}</p>
                <p className="text-muted-foreground">{content.sections.contact.role}</p>
                <a
                  href={`mailto:${content.sections.contact.email}`}
                  className="inline-flex h-11 items-center text-primary underline decoration-1 underline-offset-4 transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {content.sections.contact.email}
                </a>
                <p className="text-muted-foreground">{content.sections.contact.phone}</p>
                <p className="text-muted-foreground">{content.sections.contact.locations}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={content.lang} page="home" content={content} />
    </>
  );
}
