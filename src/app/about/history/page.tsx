import type { Metadata } from "next";
import { Timeline, type TimelineEntry } from "@/components/fx/Timeline";
import { Glow } from "@/components/fx/Glow";
import { TextGenerate } from "@/components/fx/TextGenerate";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Stat } from "@/components/ui/Stat";
import { historyIntro, historyPhotos, seasons } from "@/content/about/history";

export const metadata: Metadata = {
  title: "Team History",
  description:
    "From ten students called the Grinders in 2010 to five competition teams today: awards and student leadership for every Fremont High Robotics season.",
};

const totalAwards = seasons.reduce(
  (total, season) =>
    total + (season.awards?.reduce((sum, block) => sum + block.results.length, 0) ?? 0),
  0,
);

const entries: TimelineEntry[] = seasons.map((season) => {
  const count = season.awards?.reduce((total, block) => total + block.results.length, 0) ?? 0;
  const [start, end] = season.season.split(" - ");
  return {
    label: `${start}–${end.slice(2)}`,
    meta: count ? `${count} ${count === 1 ? "result" : "results"}` : "Season",
    content: (
      <Glow key={season.season} className="rounded-2xl border border-white/8 bg-surface p-6 shadow-card sm:p-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {season.awards && season.awards.length > 0 ? (
            <div>
              <h4 className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
                Awards
              </h4>
              <ul className="mt-5 space-y-5">
                {season.awards.map((block) => (
                  <li key={block.event}>
                    <p className="text-sm font-medium text-bright">{block.event}</p>
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
          ) : (
            <p className="text-sm text-dim">No awards recorded for this season.</p>
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
                    <dd className="font-medium text-bright">{lead.name}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </Glow>
    ),
  };
});

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="History"
        title="Seventeen seasons"
        lede="From ten students in 2010 to five competition teams today."
        image="/images/history/02-img-5270-jpg.jpg"
      />

      <Section>
        <TextGenerate
          text="Every season below is real: the regionals, the *banners*, and the students who ran the shop."
          className="max-w-3xl text-2xl leading-snug font-medium tracking-tight text-bright md:text-3xl"
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {historyIntro.map((beat, i) => (
            <Reveal key={beat.year} delay={i * 0.08}>
              <article className="group border-t border-white/10 pt-6">
                <p className="font-mono text-sm font-semibold text-ember-300">{beat.year}</p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight">{beat.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{beat.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/8 pt-10">
          <div>
            <p className="text-gradient-bright text-4xl font-semibold tracking-[-0.03em] tabular-nums md:text-5xl">
              2010
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">Founded</p>
          </div>
          <Stat value={String(seasons.length)} label="Seasons" bare />
          <Stat value={String(totalAwards)} label="Results logged" bare />
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {historyPhotos.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 0.1}>
              <Photo src={photo.src} alt={photo.alt} className="aspect-4/3 min-h-64 w-full" />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Archive"
        heading="Season by season"
        lede={<p>Newest first. Awards are as recorded on FIRST and The Blue Alliance; leadership as listed in each year&apos;s roster.</p>}
        tone="surface"
      >
        <Timeline entries={entries} />
      </Section>
    </>
  );
}
