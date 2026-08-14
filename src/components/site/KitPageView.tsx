import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { LinkCard } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { kitPages, type KitPage } from "@/content/community";
import { paths } from "@/content/paths";

export function KitPageView({ kit }: { kit: KitPage }) {
  const others = kitPages.filter((entry) => entry.slug !== kit.slug);

  return (
    <>
      <PageHero eyebrow="Kindling Kits" title={kit.title} lede={kit.summary} image={kit.image} />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <Photo src={kit.image} alt="" className="aspect-4/3 min-h-80 w-full" />
          {kit.activities[0]?.survey && (
            <div className="rounded-2xl border border-ember-500/25 bg-gradient-to-b from-ember-600/12 to-transparent p-6">
              <h2 className="font-semibold tracking-tight">{kit.activities[0].survey.label}</h2>
              <p className="mt-2 text-sm text-muted">{kit.activities[0].survey.body}</p>
              {kit.activities[0].survey.href ? (
                <ButtonLink
                  href={kit.activities[0].survey.href}
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

      <Section heading="More kits" tone="surface">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((entry) => (
            <LinkCard
              key={entry.slug}
              href={entry.href}
              image={entry.image}
              title={entry.title}
              description={entry.summary}
            />
          ))}
          <LinkCard href={paths.community.kits} title="All kits" description="Engineering in a box." />
        </div>
      </Section>
    </>
  );
}
