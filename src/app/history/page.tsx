import type { Metadata } from "next";
import Image from "next/image";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { PageHero } from "@/components/ui/PageHero";
import { Prose, Section } from "@/components/ui/Section";
import { historyIntro, seasons } from "@/content/history";

export const metadata: Metadata = {
  title: "Team Accomplishments & History",
  description:
    "From ten students called the Grinders in 2010 to five competition teams today: awards and student leadership for every Fremont High Robotics season.",
};

const totalAwards = seasons.reduce(
  (total, season) =>
    total + (season.awards?.reduce((sum, block) => sum + block.results.length, 0) ?? 0),
  0,
);

const items: AccordionItem[] = seasons.map((season) => ({
  title: season.season,
  meta: season.awards?.length
    ? `${season.awards.reduce((total, block) => total + block.results.length, 0)} awards & results`
    : undefined,
  content: (
    <div className="grid gap-10 lg:grid-cols-2">
      {season.awards && season.awards.length > 0 && (
        <div>
          <h4 className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
            Awards
          </h4>
          <ul className="mt-5 space-y-5">
            {season.awards.map((block) => (
              <li key={block.event}>
                <p className="text-sm font-medium">{block.event}</p>
                <ul className="mt-2 space-y-1.5">
                  {block.results.map((result) => (
                    <li key={result} className="flex gap-2.5 text-sm text-muted">
                      <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-ember-500" />
                      {result}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}

      {season.leadership && (
        <div>
          <h4 className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
            Leadership
          </h4>
          <dl className="mt-5 space-y-2.5">
            {season.leadership.map((lead) => (
              <div
                key={`${lead.role}-${lead.name}`}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-white/6 pb-2.5 text-sm"
              >
                <dt className="text-muted">{lead.role}</dt>
                <dd className="font-medium">{lead.name}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  ),
}));

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="History"
        title="Sixteen seasons."
        lede="Grinders → Firebots → six teams."
        image="/images/history/02-img-5270-jpg.jpg"
        brandMark
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div>
            <Prose paragraphs={historyIntro} />
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/8 pt-8">
              {[
                { value: seasons.length, label: "Seasons" },
                { value: totalAwards, label: "Results logged" },
                { value: 2010, label: "Founded" },
              ].map((entry) => (
                <div key={entry.label}>
                  <dt className="text-gradient-bright text-3xl font-semibold tracking-tight tabular-nums">
                    {entry.value}
                  </dt>
                  <dd className="mt-2 text-sm leading-snug text-muted">{entry.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:sticky lg:top-28">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-ember-600/12 blur-3xl"
            />
            <Image
              src="/images/history/01-driveteam2017-1.jpg"
              alt="A Firebots drive team at competition"
              width={900}
              height={675}
              className="w-full rounded-2xl border border-white/10 object-cover shadow-lift"
            />
          </div>
        </div>
      </Section>

      <Section eyebrow="Archive" heading="Season by season." tone="surface">
        <Accordion items={items} defaultOpen={0} />
      </Section>
    </>
  );
}
