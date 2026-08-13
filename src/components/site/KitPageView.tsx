import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { LinkCard } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { kitPages, type KitPage } from "@/content/community";

export function KitPageView({ kit }: { kit: KitPage }) {
  const others = kitPages.filter((entry) => entry.slug !== kit.slug);

  return (
    <>
      <PageHero eyebrow="Kindling Kits" title={kit.title} lede={kit.summary} />

      {kit.activities.map((activity, index) => (
        <Section
          key={`${activity.heading}-${index}`}
          heading={activity.heading}
          tone={index % 2 === 1 ? "surface" : "default"}
        >
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <p className="text-lg leading-relaxed text-muted md:text-xl">{activity.body}</p>

            {activity.survey && (
              <div className="relative isolate overflow-hidden rounded-2xl border border-ember-500/25 bg-gradient-to-b from-ember-600/12 to-transparent p-6">
                <h3 className="font-semibold tracking-tight">{activity.survey.label}</h3>
                <p className="mt-2 text-sm text-muted">{activity.survey.body}</p>
                {activity.survey.href ? (
                  <ButtonLink
                    href={activity.survey.href}
                    variant="secondary"
                    className="mt-5"
                    withArrow
                  >
                    Open form
                  </ButtonLink>
                ) : (
                  <p className="mt-5 inline-flex items-center gap-2 text-sm text-dim">
                    <ArrowUpRight aria-hidden className="size-4" />
                    Ask a member for the link.
                  </p>
                )}
              </div>
            )}
          </div>
        </Section>
      ))}

      <Section
        heading="More kits"
        tone={kit.activities.length % 2 === 1 ? "surface" : "default"}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((entry) => (
            <LinkCard
              key={entry.slug}
              href={`/${entry.slug}`}
              title={entry.title}
              description={entry.summary}
              className="h-full"
            />
          ))}
          <LinkCard
            href="/kindling-kits"
            title="All kits"
            description="Engineering in a box"
            className="h-full"
          />
        </div>
      </Section>
    </>
  );
}
