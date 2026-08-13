import { BrandMark } from "@/components/ui/BrandMark";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[78svh] items-center overflow-hidden py-32">
      <div aria-hidden className="bg-grid mask-fade-b absolute inset-0 -z-20 opacity-40" />
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
        <h1 className="text-balance-tight mt-4 max-w-xl text-title font-semibold">
          Page not found.
        </h1>
        <p className="mt-4 max-w-md text-lg text-muted">Head home, or ask Firebots.</p>
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
