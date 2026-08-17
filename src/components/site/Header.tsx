"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { paths } from "@/content/paths";
import { ButtonLink } from "@/components/ui/Button";
import { clsx } from "@/lib/clsx";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Collapse any open menu when the route changes.
  const [renderedPath, setRenderedPath] = useState(pathname);
  if (renderedPath !== pathname) {
    setRenderedPath(pathname);
    setMobileOpen(false);
    setOpenGroup(null);
  }

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const pathOnly = (href?: string) => href?.split("#")[0];

  const isCurrent = (href?: string) => {
    const path = pathOnly(href);
    if (!path) return false;
    return path === "/" ? pathname === "/" : pathname === path;
  };

  const groupIsCurrent = (children?: { href: string }[]) =>
    children?.some((child) => isCurrent(child.href)) ?? false;

  /** A short grace period keeps the menu usable when the pointer crosses the gap. */
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenGroup(null), 140);
  };

  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition duration-500 ease-out-expo",
        scrolled || mobileOpen
          ? "border-b border-white/8 bg-ink/70 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
          : "border-b border-transparent",
      )}
    >
      <div
        className={clsx(
          "container-page flex items-center justify-between gap-6 transition-all duration-500 ease-out-expo",
          scrolled ? "h-18" : "h-22",
        )}
      >
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative flex shrink-0">
            <span
              aria-hidden
              className="absolute inset-0 -z-10 rounded-full bg-ember-500/45 blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <Image
              src="/images/shared/logo.png"
              alt="Firebots"
              width={56}
              height={56}
              priority
              className="size-12 rounded-full ring-1 ring-white/10 transition duration-500 ease-out-expo group-hover:ring-ember-500/50"
            />
          </span>
          <span className="flex flex-col leading-none whitespace-nowrap">
            <span className="text-lg font-bold tracking-[-0.03em] uppercase sm:text-xl">
              Firebots
            </span>
            <span className="mt-1 font-mono text-[0.7rem] font-semibold tracking-[0.18em] text-ember-400 uppercase">
              {site.teamNumber} · FHS Robotics
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  cancelClose();
                  setOpenGroup(item.label);
                }}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  aria-expanded={openGroup === item.label}
                  aria-haspopup="menu"
                  aria-controls={`nav-menu-${item.label}`}
                  onClick={() =>
                    setOpenGroup((current) => (current === item.label ? null : item.label))
                  }
                  className={clsx(
                    "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition duration-300",
                    groupIsCurrent(item.children) || openGroup === item.label
                      ? "bg-white/8 text-bright"
                      : "text-muted hover:bg-white/5 hover:text-bright",
                  )}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden
                    className={clsx(
                      "size-3.5 transition-transform duration-300 ease-out-expo",
                      openGroup === item.label && "rotate-180",
                    )}
                  />
                </button>

                {openGroup === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                    <ul
                      id={`nav-menu-${item.label}`}
                      role="menu"
                      className="animate-rise w-56 overflow-hidden rounded-2xl border border-white/10 bg-surface/95 p-1.5 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.95)] backdrop-blur-2xl"
                    >
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            role="menuitem"
                            className={clsx(
                              "flex items-center rounded-xl px-3.5 py-2.5 text-sm font-medium transition duration-300",
                              isCurrent(child.href)
                                ? "bg-ember-500/12 text-bright"
                                : "text-muted hover:bg-white/6 hover:text-bright",
                            )}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className={clsx(
                  "rounded-full px-4 py-2 text-sm font-medium transition duration-300",
                  isCurrent(item.href)
                    ? "bg-white/8 text-bright"
                    : "text-muted hover:bg-white/5 hover:text-bright",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:block">
            <ButtonLink href={paths.join} className="whitespace-nowrap">
              Join Us
            </ButtonLink>
          </span>
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-full border border-white/12 bg-white/5 p-2.5 transition duration-300 hover:border-ember-500/50 hover:bg-ember-500/10 lg:hidden"
          >
            {mobileOpen ? (
              <X aria-hidden className="size-5" />
            ) : (
              <Menu aria-hidden className="size-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/8 bg-ink/95 backdrop-blur-2xl lg:hidden">
          <nav aria-label="Mobile" className="container-page py-6">
            <ul className="divide-y divide-white/8">
              {nav.map((item) => (
                <li key={item.label} className="py-5">
                  {item.children ? (
                    <>
                      <p className="font-mono text-[0.7rem] font-semibold tracking-[0.2em] text-ember-300 uppercase">
                        {item.label}
                      </p>
                      <ul className="mt-3 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={clsx(
                                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-base transition-colors duration-200",
                                isCurrent(child.href)
                                  ? "bg-ember-500/12 text-bright"
                                  : "text-muted hover:bg-white/5 hover:text-bright",
                              )}
                            >
                              <span
                                aria-hidden
                                className={clsx(
                                  "size-1.5 shrink-0 rounded-full",
                                  isCurrent(child.href) ? "bg-ember-400" : "bg-line-2",
                                )}
                              />
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className="block text-base font-semibold tracking-tight transition-colors hover:text-ember-300"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <ButtonLink href={paths.join} size="lg" className="mt-6 w-full">
              Join Us
            </ButtonLink>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 block text-center text-sm text-muted transition-colors hover:text-ember-300"
            >
              {site.email}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
