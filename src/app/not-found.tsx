import { DotGrid } from "@/components/fx/DotGrid";
import { Embers } from "@/components/fx/Embers";
import { SplitText } from "@/components/fx/SplitText";
import { BrandMark } from "@/components/ui/BrandMark";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[78svh] items-center overflow-hidden py-32">
      <DotGrid className="mask-vignette -z-20" gap={30} radius={200} />
      <Embers density={0.6} className="-z-10" />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -z-20 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember-700/14 blur-[130px]"
      />

      <div className="container-page flex flex-col items-center text-center">
        <BrandMark size="lg" className="justify-center" />
        <p
          aria-hidden
          className="text-gradient-ember mt-10 text-[clamp(5rem,18vw,10rem)] leading-none font-bold tracking-[-0.05em]"
        >
          404
        </p>
        <SplitText
          as="h1"
          text="This page missed the field."
          className="text-balance-tight mt-4 max-w-xl text-title font-semibold"
        />
        <p className="mt-4 max-w-md text-lg text-muted">
          The link may be old — many of our Wix-era pages moved. Head home, or ask Firebots.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/" size="lg" withArrow>
            Home
          </ButtonLink>
          <ButtonLink href="/contact" size="lg" variant="secondary">
            Contact
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
