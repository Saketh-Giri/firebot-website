import type { Metadata } from "next";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { historyIntro, historyPhotos, seasons } from "@/content/about/history";

export const metadata: Metadata = {
  title: "Team History",
  description:
    "From ten students called the Grinders in 2010 to six teams today: awards and student leadership for every Fremont High Robotics season.",
};

const totalAwards = seasons.reduce(
  (total, season) =>
    total + (season.awards?.reduce((sum, block) => sum + block.results.length, 0) ?? 0),
  0,
);

const items: AccordionItem[] = seasons.map((season) => ({
  title: season.season,
  meta: season.awards?.length
    ? `${season.awards.reduce((total, block) => total + block.results.length, 0)} awards`
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
        title="Sixteen seasons"
        lede="From ten students in 2010 to six teams today."
        image="/images/history/02-img-5270-jpg.jpg"
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          {historyIntro.map((beat) => (
            <article key={beat.year} className="border-t border-white/10 pt-6">
              <p className="font-mono text-sm font-semibold text-ember-300">{beat.year}</p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight">{beat.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{beat.body}</p>
            </article>
          ))}
        </div>

        <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-white/8 pt-10">
          {[
            { value: seasons.length, label: "Seasons" },
            { value: totalAwards, label: "Results logged" },
            { value: 2010, label: "Founded" },
          ].map((entry) => (
            <div key={entry.label}>
              <dt className="text-gradient-bright text-3xl font-semibold tracking-tight tabular-nums">
                {entry.value}
              </dt>
              <dd className="mt-2 text-sm text-muted">{entry.label}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {historyPhotos.map((photo) => (
            <Photo
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              className="aspect-4/3 min-h-64 w-full"
            />
          ))}
        </div>
      </Section>

      <Section eyebrow="Archive" heading="Season by season" tone="surface">
        <Accordion items={items} defaultOpen={0} />
      </Section>
    </>
  );
}
