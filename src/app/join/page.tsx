import type { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { faqs, joinIntro, recruitmentFlyer, subteamTags } from "@/content/join";
import { site } from "@/content/site";
import { paths } from "@/content/paths";

export const metadata: Metadata = {
  title: "Join the Team",
  description: "No experience required. Fremont High Robotics tryouts are typically in August and September.",
};

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

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
              Subteams
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {subteamTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Photo
              src={recruitmentFlyer}
              alt="Fremont High Robotics recruitment flyer from 2022–23"
              className="aspect-3/4 min-h-96 w-full"
            />
            <p className="mt-3 text-sm text-dim">Flyer from 2022–23. Use the interest form for this season.</p>
          </div>
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
