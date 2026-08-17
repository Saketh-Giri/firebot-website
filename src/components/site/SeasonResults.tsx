import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { frc2026, ftc2025 } from "@/content/season";

export function FrcSeasonResults() {
  return (
    <Section eyebrow={frc2026.heading} heading="How 2026 went" tone="surface">
      <p className="max-w-2xl text-lg leading-relaxed text-muted">{frc2026.lede}</p>
      <dl className="mt-10 grid grid-cols-3 gap-6 border-y border-white/8 py-8">
        <div>
          <dt className="text-gradient-bright text-3xl font-semibold tracking-tight md:text-4xl">
            {frc2026.record}
          </dt>
          <dd className="mt-2 text-sm text-muted">official play</dd>
        </div>
        <div>
          <dt className="text-gradient-bright text-3xl font-semibold tracking-tight md:text-4xl">
            {frc2026.districtRank}
          </dt>
          <dd className="mt-2 text-sm text-muted">FIRST California</dd>
        </div>
        <div>
          <dt className="text-gradient-bright text-3xl font-semibold tracking-tight md:text-4xl">
            {frc2026.districtPoints}
          </dt>
          <dd className="mt-2 text-sm text-muted">district points</dd>
        </div>
      </dl>
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {frc2026.awards.map((award) => (
          <li key={award.name}>
            <Card>
              <p className="font-semibold tracking-tight">{award.name}</p>
              <p className="mt-2 text-sm text-muted">{award.event}</p>
            </Card>
          </li>
        ))}
      </ul>
      <ul className="mt-8 space-y-4">
        {frc2026.events.map((event) => (
          <li
            key={event.name}
            className="flex flex-col gap-1 border-b border-white/8 py-4 last:border-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
          >
            <div>
              <p className="font-medium">{event.name}</p>
              <p className="mt-1 text-sm text-dim">{event.when}</p>
            </div>
            <p className="text-sm text-muted sm:max-w-md sm:text-right">{event.result}</p>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <ButtonLink href={frc2026.source.href} withArrow>
          {frc2026.source.label}
        </ButtonLink>
      </div>
    </Section>
  );
}

export function FtcSeasonResults() {
  return (
    <Section eyebrow={ftc2025.heading} heading="DECODE results" tone="surface">
      <p className="max-w-2xl text-lg leading-relaxed text-muted">{ftc2025.lede}</p>
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {ftc2025.teams.map((team) => (
          <li key={team.number}>
            <Card className="h-full">
              <p className="font-mono text-xs font-semibold tracking-[0.18em] text-ember-300 uppercase">
                {team.number}
              </p>
              <p className="mt-2 text-lg font-semibold tracking-tight">{team.name}</p>
              <p className="mt-1 font-mono text-sm text-ember-200">{team.record}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{team.result}</p>
              <a
                href={team.href}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-block text-sm font-medium text-ember-300 hover:underline"
              >
                FIRST event results
              </a>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
