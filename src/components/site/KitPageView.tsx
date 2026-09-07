import { ArrowUpRight } from "lucide-react";
import { KitBlueprint } from "@/components/fx/KitBlueprint";
import { TiltCard } from "@/components/fx/TiltCard";
import { ButtonLink } from "@/components/ui/Button";
import { LinkCard } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { kitPages, type KitPage } from "@/content/community";
import { paths } from "@/content/paths";

export function KitPageView({ kit }: { kit: KitPage }) {
  const others = kitPages.filter((entry) => entry.slug !== kit.slug);
  const sheet = kitPages.findIndex((entry) => entry.slug === kit.slug) + 1;
  const about = kit.activities[0];

  return (
    <>
      <PageHero eyebrow="Kindling Kits" title={kit.title} lede={kit.summary} image={kit.photo} />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <Reveal>
            <TiltCard maxTilt={5} scale={1.01}>
              <KitBlueprint
                kind={kit.blueprint}
                index={sheet}
                title={kit.teaches}
                className="aspect-[5/3] w-full rounded-2xl border border-white/10 shadow-lift"
              />
            </TiltCard>
          </Reveal>

          <div className="space-y-5">
            {about && (
              <Reveal delay={0.06}>
                <div className="rounded-2xl border border-white/8 bg-surface p-6 shadow-card">
                  <p className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
                    Teaches {kit.teaches.toLowerCase()}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight">{about.heading}</h2>
                  <p className="mt-3 leading-relaxed text-muted">{about.body}</p>
                </div>
              </Reveal>
            )}

            {about?.survey && (
              <Reveal delay={0.12}>
                <div className="rounded-2xl border border-ember-500/25 bg-gradient-to-b from-ember-600/12 to-transparent p-6">
                  <h2 className="font-semibold tracking-tight">{about.survey.label}</h2>
                  <p className="mt-2 text-sm text-muted">{about.survey.body}</p>
                  {about.survey.href ? (
                    <ButtonLink href={about.survey.href} variant="secondary" className="mt-5" withArrow>
                      Open form
                    </ButtonLink>
                  ) : (
                    <p className="mt-5 inline-flex items-center gap-2 text-sm text-dim">
                      <ArrowUpRight aria-hidden className="size-4" />
                      Ask a member for the link.
                    </p>
                  )}
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </Section>

      <Section heading="More kits" tone="surface">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((entry) => (
            <LinkCard
              key={entry.slug}
              href={entry.href}
              media={
                <KitBlueprint
                  kind={entry.blueprint}
                  index={kitPages.findIndex((k) => k.slug === entry.slug) + 1}
                  title={entry.teaches}
                />
              }
              eyebrow={entry.teaches}
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
