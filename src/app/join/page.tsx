import type { Metadata } from "next";
import { Stepper } from "@/components/fx/Stepper";
import { TiltCard } from "@/components/fx/TiltCard";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { faqs, joinIntro, recruitmentFlyer, subteamTags } from "@/content/join";
import { site } from "@/content/site";
import { paths } from "@/content/paths";

export const metadata: Metadata = {
  title: "Join the Team",
  description: "No experience required. Fremont High Robotics tryouts are typically in August and September.",
};

const steps = [
  {
    eyebrow: "Step one",
    title: "Fill out the interest form",
    content: (
      <>
        <p>
          Two minutes. Name, grade, and what you are curious about. Anyone on the list gets the tryout
          email before it goes anywhere else.
        </p>
        <div className="mt-6">
          <ButtonLink href={site.interestForm} withArrow>
            Interest form
          </ButtonLink>
        </div>
      </>
    ),
  },
  {
    eyebrow: "Step two",
    title: "Come to tryouts",
    content: (
      <p>
        Usually August and September. We look at curiosity, dedication, and how you work with people —
        not prior robotics knowledge. Technical, non-technical, or both.
      </p>
    ),
  },
  {
    eyebrow: "Step three",
    title: "Land on an FTC team",
    content: (
      <p>
        New members join one of four FTC teams. You will design, build, code, or run business and
        marketing, and you can move between subteams during the season.
      </p>
    ),
  },
  {
    eyebrow: "Step four",
    title: "Earn a spot on Firebots",
    content: (
      <p>
        After a season or two in FTC, mentors invite students who are ready onto FRC Team 3501. Build
        season, district events, and — in a good year — Houston.
      </p>
    ),
  },
];

export default function JoinPage() {
  return (
    <>
      <PageHero eyebrow="Join" title="Join the team" lede={joinIntro}>
        <div className="flex flex-wrap gap-4">
          <ButtonLink href={site.interestForm} size="lg" withArrow>
            Interest form
          </ButtonLink>
          <ButtonLink href={paths.contact} size="lg" variant="secondary">
            Ask a question
          </ButtonLink>
        </div>
      </PageHero>

      <Section eyebrow="How it works" heading="From interest form to FRC">
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <Stepper steps={steps} />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
              Subteams
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {subteamTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted transition duration-300 hover:border-ember-500/40 hover:text-bright"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <TiltCard maxTilt={6} scale={1.02}>
                <Photo
                  src={recruitmentFlyer}
                  alt="Fremont High Robotics recruitment flyer from 2022–23"
                  className="aspect-3/4 w-full"
                  sizes="(min-width: 1024px) 34vw, 100vw"
                />
              </TiltCard>
              <p className="mt-3 text-sm text-dim">Flyer from 2022–23. Use the interest form for this season.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="FAQ" heading="Tryouts" tone="surface">
        <Accordion
          className="max-w-3xl"
          defaultOpen={0}
          items={faqs.map((faq) => ({
            title: faq.question,
            content: (
              <div className="max-w-2xl space-y-3 text-muted">
                {faq.answer.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            ),
          }))}
        />
      </Section>
    </>
  );
}
