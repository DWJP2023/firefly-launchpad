import { Footer } from "./Footer";
import { type CreditGroup, type PageContent } from "@/lib/firefly/content";

function ClientGroup({ group, columns = 1 }: { group: CreditGroup; columns?: 1 | 3 }) {
  return (
    <section>
      <h2 className="text-xl font-medium tracking-tight text-foreground md:text-2xl">
        {group.title}
      </h2>
      <ul
        className={`mt-6 columns-1 gap-x-10 text-[22px] leading-[1.5] text-muted-foreground lg:text-[30px] ${
          columns === 3 ? "lg:columns-3" : ""
        }`}
      >
        {group.items.map((item) => (
          <li key={item} className="break-inside-avoid py-1">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ClientsContent({ content }: { content: PageContent }) {
  const [debutsAndTours, festivalsAndFormats, exhibitionsAndAttractions, sport] =
    content.clients.groups;

  return (
    <>
      <main id="main-content" className="bg-white px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
            {content.clients.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {content.clients.note}
          </p>

          <div className="mt-16 space-y-16">
            <ClientGroup group={debutsAndTours} columns={3} />
            <div className="grid gap-16 md:grid-cols-2 md:gap-12">
              <ClientGroup group={festivalsAndFormats} />
              <ClientGroup group={sport} />
            </div>
            <ClientGroup group={exhibitionsAndAttractions} />
          </div>
        </div>
      </main>
      <Footer lang={content.lang} page="clients" content={content} />
    </>
  );
}
