import type { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Prose, Section } from "@/components/ui/Section";
import { faqs, joinIntro, subteamTags } from "@/content/join";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Join the Team",
  description: "No experience required. Firebots tryouts each August and September.",
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Join"
        title="Your place is here."
        lede="Curious beats experienced."
      >
        <div className="flex flex-wrap gap-4">
          <ButtonLink href={site.interestForm} size="lg" withArrow>
            Interest form
          </ButtonLink>
          <ButtonLink href="/contact" size="lg" variant="secondary">
            Ask a question
          </ButtonLink>
        </div>
      </PageHero>

      <Section>
        <Prose paragraphs={joinIntro} className="max-w-2xl" />
        <p className="mt-10 font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
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
      </Section>

      <Section eyebrow="FAQ" heading="Tryouts." tone="surface">
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
