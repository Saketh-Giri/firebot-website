import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Glow } from "@/components/fx/Glow";
import { TiltCard } from "@/components/fx/TiltCard";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import { season } from "@/content/season";
import {
  additionalSeasonPartners,
  benefitTiers,
  benefits,
  pastSponsors,
  sponsorLogos,
  sponsorsIntro,
  tiers,
  whySponsor,
} from "@/content/sponsors";

export const metadata: Metadata = {
  title: "Sponsor Us",
  description:
    "Fremont High Robotics is a 501(c)(3) non-profit. Sponsorship covers tools, safety equipment, robot materials, and outreach programs.",
};

/** Metal colours so the levels read as a hierarchy at a glance. */
const tierMetal: Record<string, string> = {
  Diamond: "#9fdff5",
  Platinum: "#dfe4ec",
  Gold: "#f0c14b",
  Silver: "#bcc3cf",
  Bronze: "#c98b53",
  Iron: "#8d939e",
};

export default function SponsorPage() {
  return (
    <>
      <PageHero eyebrow="Sponsors" title="Sponsor us" lede={sponsorsIntro}>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${site.email}?subject=Sponsoring%20Firebots%203501`} size="lg" withArrow>
            Talk sponsorship
          </ButtonLink>
          <ButtonLink href={season.donate.href} size="lg" variant="secondary">
            Donate
          </ButtonLink>
        </div>
      </PageHero>

      <Section eyebrow="Supporters" heading="This season's partners">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {sponsorLogos.map((sponsor, i) => {
            const inner = (
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                width={240}
                height={120}
                className="h-full w-full object-contain"
              />
            );
            const shell =
              "flex h-28 items-center justify-center rounded-2xl border border-white/10 bg-white/95 px-6 py-5 transition duration-500 ease-out-expo hover:shadow-glow focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:outline-none";
            return (
              <li key={sponsor.name}>
                <Reveal delay={Math.min(i * 0.04, 0.3)}>
                  <TiltCard maxTilt={8} scale={1.04}>
                    {sponsor.href ? (
                      <a href={sponsor.href} target="_blank" rel="noreferrer noopener" className={shell}>
                        {inner}
                      </a>
                    ) : (
                      <div className={shell}>{inner}</div>
                    )}
                  </TiltCard>
                </Reveal>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 text-sm text-muted">
          FIRST also listed {additionalSeasonPartners.join(", ")} among 2026 season partners.
        </p>
      </Section>

      <Section eyebrow="Why" heading={whySponsor.heading} tone="surface">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div>
            <p className="text-lg leading-relaxed text-muted">{whySponsor.body}</p>

            <p className="mt-8 text-sm font-medium text-muted">{whySponsor.fostersHeading}</p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {whySponsor.fosters.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Card>
            <h3 className="text-base font-semibold">{whySponsor.supportHeading}</h3>
            <ul className="mt-6 space-y-3.5">
              {whySponsor.supportTypes.map((type) => (
                <li key={type} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-ember-300" />
                  {type}
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
          {season.donate.matching} Questions:{" "}
          <a href={`mailto:${season.donate.matchingContact}`} className="text-ember-300 hover:underline">
            {season.donate.matchingContact}
          </a>
          .
        </p>
      </Section>

      <Section eyebrow="Benefits" heading="What each level includes">
        <ul className="space-y-4 md:hidden">
          {[...benefitTiers].reverse().map((tier) => {
            const included = benefits.filter((row) => row.tiers.includes(tier));
            return (
              <li
                key={tier}
                className="relative overflow-hidden rounded-2xl border border-white/8 surface-panel p-6"
              >
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-0.5"
                  style={{ backgroundColor: tierMetal[tier] }}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg font-semibold" style={{ color: tierMetal[tier] }}>
                    {tier}
                  </h3>
                  <p className="font-mono text-xs text-ember-300">
                    {tiers.find((entry) => entry.name === tier)?.range}
                  </p>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {included.map((row) => (
                    <li key={row.benefit} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-ember-300" />
                      {row.benefit}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="hidden overflow-x-auto rounded-2xl border border-white/8 surface-panel md:block">
          <table className="w-full min-w-3xl border-collapse text-sm">
            <caption className="sr-only">Sponsor benefits by level</caption>
            <thead>
              <tr className="bg-gradient-to-r from-ember-600/30 via-ember-600/12 to-transparent">
                <th
                  scope="col"
                  className="border-b border-white/10 px-5 py-5 text-left font-mono text-xs font-semibold tracking-[0.16em] uppercase"
                >
                  Benefit
                </th>
                {benefitTiers.map((tier) => {
                  const range = tiers.find((entry) => entry.name === tier)?.range;
                  return (
                    <th
                      key={tier}
                      scope="col"
                      className="border-b border-white/10 px-4 py-5 text-center font-semibold"
                    >
                      <span className="block" style={{ color: tierMetal[tier] }}>
                        {tier}
                      </span>
                      <span className="mt-1 block font-mono text-[11px] font-normal text-dim">
                        {range}
                      </span>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {benefits.map((row) => (
                <tr
                  key={row.benefit}
                  className="border-t border-white/6 transition-colors duration-300 even:bg-white/[0.015] hover:bg-white/4"
                >
                  <th scope="row" className="px-5 py-4 text-left font-normal text-muted">
                    {row.benefit}
                  </th>
                  {benefitTiers.map((tier) => (
                    <td key={tier} className="px-4 py-4 text-center">
                      {row.tiers.includes(tier) ? (
                        <>
                          <Check aria-hidden className="mx-auto size-4 text-ember-400" />
                          <span className="sr-only">Included</span>
                        </>
                      ) : (
                        <>
                          <span aria-hidden className="mx-auto block h-px w-3 bg-line-2" />
                          <span className="sr-only">Not included</span>
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow="This season" heading="Sponsor levels" tone="surface">
        <div className="space-y-4">
          {tiers.map((tier) => {
            const metal = tierMetal[tier.name];
            return (
              <Glow
                key={tier.name}
                className="relative overflow-hidden rounded-2xl border border-white/8 surface-panel p-7 pl-8 transition duration-500 ease-out-expo hover:border-white/16"
              >
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-1"
                  style={{ backgroundColor: metal }}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-1/3 opacity-12"
                  style={{ backgroundImage: `linear-gradient(to right, ${metal}, transparent)` }}
                />

                <div className="relative flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold tracking-tight" style={{ color: metal }}>
                    {tier.name} Level
                  </h3>
                  <p className="font-mono text-sm text-dim">{tier.range}</p>
                </div>

                {tier.members.length > 0 ? (
                  <ul className="relative mt-5 flex flex-wrap gap-2.5">
                    {tier.members.map((member) => (
                      <li
                        key={member}
                        className="rounded-full border border-white/10 bg-ink/60 px-4 py-2 text-sm font-medium"
                      >
                        {member}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="relative mt-4 text-sm text-dim">
                    This level is open. Could your name go here?
                  </p>
                )}
              </Glow>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Past" heading="Support that got us here">
        <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {pastSponsors.map((sponsor) => (
            <li
              key={sponsor.name}
              className="group flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-white/6 py-3.5 transition-colors duration-300 hover:border-ember-500/40"
            >
              <span className="font-medium text-muted transition-colors duration-300 group-hover:text-bright">
                {sponsor.name}
              </span>
              {sponsor.years && <span className="font-mono text-xs text-dim">{sponsor.years}</span>}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
