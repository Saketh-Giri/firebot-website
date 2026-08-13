import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { footerColumns, site } from "@/content/site";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/8 bg-gradient-to-b from-surface/60 to-ink">
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 size-[46rem] -translate-x-1/2 rounded-full bg-ember-700/12 blur-[130px]"
      />
      <div aria-hidden className="hairline-center absolute inset-x-0 top-0" />

      <div className="container-page py-18">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_2.4fr]">
          <div>
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/images/shared/logo.png"
                alt=""
                width={52}
                height={52}
                className="size-12 rounded-full ring-1 ring-white/10 transition duration-500 group-hover:ring-ember-500/50"
              />
              <span className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-[-0.02em] uppercase">Firebots</span>
                <span className="mt-1 font-mono text-[0.7rem] tracking-[0.18em] text-ember-400 uppercase">
                  {site.teamNumber} · FHS Robotics
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              Student-run 501(c)(3) robotics at Fremont High · {site.tagline}.
            </p>

            <div className="mt-7 space-y-3 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-3 text-muted transition-colors hover:text-ember-300"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition duration-300 group-hover:border-ember-500/40 group-hover:bg-ember-500/10">
                  <Mail aria-hidden className="size-3.5" />
                </span>
                {site.email}
              </a>
              <p className="flex items-center gap-3 text-muted">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <MapPin aria-hidden className="size-3.5" />
                </span>
                {site.address}
              </p>
            </div>

            <ul className="mt-7 flex gap-2.5">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition duration-300 ease-out-expo hover:-translate-y-1 hover:border-ember-500/50 hover:bg-ember-500/12 hover:text-bright"
                  >
                    <SocialIcon name={social.label} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <h2 className="font-mono text-[0.7rem] font-semibold tracking-[0.2em] text-ember-300 uppercase">
                  {column.heading}
                </h2>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-bright"
                      >
                        <span
                          aria-hidden
                          className="h-px w-0 bg-ember-500 transition-all duration-300 ease-out-expo group-hover:w-3.5"
                        />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/8 pt-7 text-xs text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="max-w-md sm:text-right">
            Built by the Media subteam. FIRST&reg; is a registered trademark of FIRST, which is not
            affiliated with this website.
          </p>
        </div>
      </div>

      <p
        aria-hidden
        className="pointer-events-none -mb-3 flex justify-center bg-gradient-to-b from-white/[0.055] to-transparent bg-clip-text text-center text-[clamp(2.75rem,11vw,9rem)] leading-none font-bold tracking-[-0.05em] text-transparent select-none md:-mb-6"
      >
        FIREBOTS 3501
      </p>
    </footer>
  );
}
