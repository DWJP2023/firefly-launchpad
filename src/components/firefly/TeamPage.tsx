import { Footer } from "./Footer";
import { type PageContent } from "@/lib/firefly/content";

export function TeamContent({ content }: { content: PageContent }) {
  return (
    <>
      <main id="main-content" className="bg-white px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
            {content.team.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {content.team.subtitle}
          </p>

          <div className="mt-16 divide-y divide-border border-y border-border">
            {content.team.members.map((member) => (
              <article
                key={member.name}
                className="py-10 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12"
              >
                <div>
                  {member.photo ? (
                    <div className="flex items-center gap-4 md:block">
                      <div className="w-[88px] shrink-0 md:mb-6 md:w-40">
                        <img
                          src={`/photos/team/${member.photo}`}
                          alt={member.name}
                          width={640}
                          height={640}
                          loading="lazy"
                          decoding="async"
                          className="block aspect-square h-auto w-full rounded-[2px] border border-border object-cover"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl font-medium tracking-tight text-foreground">
                          {member.name}
                        </h2>
                        <p className="mt-2 text-sm font-medium tracking-wide text-primary">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-medium tracking-tight text-foreground">
                        {member.name}
                      </h2>
                      <p className="mt-2 text-sm font-medium tracking-wide text-primary">
                        {member.role}
                      </p>
                    </>
                  )}
                </div>
                <div className="mt-6 md:mt-0">
                  <p className="leading-relaxed text-muted-foreground">{member.bio}</p>
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {member.credits.map((group) => (
                      <section key={group.title}>
                        <h3 className="text-sm font-medium text-foreground">{group.title}</h3>
                        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                          {group.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer lang={content.lang} page="team" content={content} />
    </>
  );
}
