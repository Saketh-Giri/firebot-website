import type { Metadata } from "next";
import { KitBlueprint } from "@/components/fx/KitBlueprint";
import { LinkCard } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { kindlingKits, kitPages } from "@/content/community";

export const metadata: Metadata = {
  title: "Kindling Kits",
  description: "Recyclable kits with a build-along video, made for the kitchen table.",
};

export default function KindlingKitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Kindling Kits"
        title="Kindling Kits"
        lede={kindlingKits.intro}
        image={kindlingKits.photo}
      />

      <Section>
        <ol className="grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/6 md:grid-cols-3">
          {kindlingKits.how.map((step, i) => (
            <li
              key={step.title}
              className="group relative h-full bg-surface p-8 transition-colors duration-500 hover:bg-surface-2 md:p-10"
            >
              <span
                aria-hidden
                className="absolute top-0 left-8 h-px w-0 bg-gradient-to-r from-ember-400 to-ember-600 transition-all duration-700 ease-out-expo group-hover:w-[calc(100%-4rem)] md:left-10 md:group-hover:w-[calc(100%-5rem)]"
              />
              <Reveal delay={i * 0.08}>
                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase tabular-nums">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-bright">{step.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow="The kits"
        heading="Pick a build"
        lede={<p>Three kits so far, each built around one idea you can test at the table.</p>}
        tone="surface"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {kitPages.map((kit, i) => (
            <Reveal key={kit.href} delay={i * 0.08} className="h-full">
              <LinkCard
                href={kit.href}
                media={<KitBlueprint kind={kit.blueprint} index={i + 1} title={kit.teaches} />}
                eyebrow={kit.teaches}
                title={kit.title}
                description={kit.summary}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
