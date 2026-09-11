"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { paths } from "@/content/paths";
import { ButtonLink } from "@/components/ui/Button";
import { clsx } from "@/lib/clsx";

const ease = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const lastPointer = useRef<string | null>(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!openGroup) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpenGroup(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openGroup]);

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
              className="absolute inset-0 -z-10 rounded-full bg-ember-500/45 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"
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
            <span className="text-lg font-bold tracking-[-0.03em] uppercase sm:text-xl">Firebots</span>
            <span className="mt-1 font-mono text-[0.7rem] font-semibold tracking-[0.18em] text-ember-400 uppercase">
              {site.teamNumber} · FHS Robotics
            </span>
          </span>
        </Link>

        <nav
          ref={navRef}
          aria-label="Main"
          className="hidden items-center gap-0.5 lg:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {nav.map((item) => {
            const key = item.label;
            const current = item.children ? groupIsCurrent(item.children) : isCurrent(item.href);
            const pill = hovered === key && (
              <motion.span
                layoutId="nav-pill"
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full bg-white/8"
                transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.6 }}
              />
            );
            const dot = current && (
              <span
                aria-hidden
                className="absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-ember-400 shadow-[0_0_8px_1px_rgba(246,86,79,0.8)]"
              />
            );
            const linkClass = clsx(
              "relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
              current || hovered === key || openGroup === key ? "text-bright" : "text-muted",
            );

            return item.children ? (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => {
                  if (lastPointer.current === "touch") return;
                  cancelClose();
                  setHovered(key);
                  setOpenGroup(key);
                }}
                onMouseLeave={scheduleClose}
                onBlur={(event) => {

                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setOpenGroup((c) => (c === key ? null : c));
                  }
                }}
              >
                <button
                  type="button"
                  aria-expanded={openGroup === key}
                  aria-controls={`nav-menu-${key}`}
                  onFocus={() => setHovered(key)}
                  onPointerDown={(event) => {
                    lastPointer.current = event.pointerType;
                  }}
                  onClick={() => {
                    const viaMouse = lastPointer.current === "mouse";
                    lastPointer.current = null;
                    setOpenGroup((c) => (c === key && !viaMouse ? null : key));
                  }}
                  className={linkClass}
                >
                  {pill}
                  {item.label}
                  <ChevronDown
                    aria-hidden
                    className={clsx(
                      "size-3.5 transition-transform duration-300 ease-out-expo",
                      openGroup === key && "rotate-180",
                    )}
                  />
                  {dot}
                </button>

                <AnimatePresence>
                  {openGroup === key && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                      <motion.ul
                        id={`nav-menu-${key}`}
                        initial={{ opacity: 0, y: 10, scale: 0.97, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 6, scale: 0.98, filter: "blur(4px)" }}
                        transition={{ duration: 0.26, ease }}
                        className="w-60 overflow-hidden rounded-2xl border border-white/10 bg-surface/95 p-1.5 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.95)] backdrop-blur-2xl"
                      >
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-ember-400/70 to-transparent"
                        />
                        {item.children.map((child, i) => (
                          <motion.li
                            key={child.href}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.04 + i * 0.035, duration: 0.25, ease }}
                          >
                            <Link
                              href={child.href}
                              aria-current={isCurrent(child.href) ? "page" : undefined}
                              className={clsx(
                                "group/item flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition duration-300",
                                isCurrent(child.href)
                                  ? "bg-ember-500/12 text-bright"
                                  : "text-muted hover:bg-white/6 hover:text-bright",
                              )}
                            >
                              {child.label}
                              <ArrowUpRight className="size-3.5 -translate-x-1 opacity-0 transition duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-60" />
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                aria-current={current ? "page" : undefined}
                onMouseEnter={() => setHovered(key)}
                onFocus={() => setHovered(key)}
                className={linkClass}
              >
                {pill}
                {item.label}
                {dot}
              </Link>
            );
          })}
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
            className="relative rounded-full border border-white/12 bg-white/5 p-2.5 transition duration-300 hover:border-ember-500/50 hover:bg-ember-500/10 lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="block"
              >
                {mobileOpen ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      <motion.span
        aria-hidden
        style={{ scaleX: progress }}
        className={clsx(
          "absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-ember-500 via-flare-400 to-ember-500 transition-opacity duration-500",
          scrolled && !mobileOpen ? "opacity-100" : "opacity-0",
        )}
      />

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/8 bg-ink/95 backdrop-blur-2xl lg:hidden"
          >
            <nav aria-label="Mobile" className="container-page py-6">
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
                className="divide-y divide-white/8"
              >
                {nav.map((item) => (
                  <motion.li
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, y: 14 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
                    }}
                    className="py-5"
                  >
                    {item.children ? (
                      <>
                        <p className="font-mono text-[0.7rem] font-semibold tracking-[0.2em] text-ember-300 uppercase">
                          {item.label}
                        </p>
                        <ul className="mt-3 grid gap-1 sm:grid-cols-2">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className={clsx(
                                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-lg font-medium tracking-tight transition-colors duration-200",
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
                        className="flex items-center justify-between text-2xl font-semibold tracking-tight transition-colors hover:text-ember-300"
                      >
                        {item.label}
                        <ArrowUpRight className="size-5 text-dim" />
                      </Link>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4, ease }}
              >
                <ButtonLink href={paths.join} size="lg" className="mt-6 w-full">
                  Join Us
                </ButtonLink>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-4 block text-center text-sm text-muted transition-colors hover:text-ember-300"
                >
                  {site.email}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
