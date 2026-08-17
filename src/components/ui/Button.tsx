import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { clsx } from "@/lib/clsx";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition duration-300 ease-out-expo disabled:pointer-events-none disabled:opacity-50";

/** Light sweep that crosses the button once on hover. */
const sheen =
  "before:pointer-events-none before:absolute before:inset-y-0 before:-left-full before:w-1/2 before:-skew-x-12 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 before:ease-out-expo hover:before:translate-x-[420%]";

const variants: Record<Variant, string> = {
  primary: clsx(
    "bg-gradient-to-b from-ember-400 to-ember-600 text-white",
    "shadow-[0_10px_30px_-10px_rgba(224,31,38,0.7),inset_0_1px_0_0_rgba(255,255,255,0.25)]",
    "hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_rgba(224,31,38,0.85),inset_0_1px_0_0_rgba(255,255,255,0.3)]",
    sheen,
  ),
  secondary: clsx(
    "border border-white/12 bg-white/5 text-bright backdrop-blur-sm",
    "hover:-translate-y-0.5 hover:border-ember-500/50 hover:bg-white/8",
    sheen,
  ),
  ghost: "text-muted hover:text-ember-300",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs tracking-wide",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface ButtonLinkProps extends Omit<ComponentProps<typeof Link>, "className"> {
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  children: ReactNode;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  withArrow = false,
  children,
  href,
  ...props
}: ButtonLinkProps) {
  const external = typeof href === "string" && /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
      target={external ? "_blank" : props.target}
      rel={external ? "noreferrer noopener" : props.rel}
    >
      <span className="relative">{children}</span>
      {withArrow && (
        <ArrowRight
          aria-hidden
          className="relative size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}

interface ButtonProps extends ComponentProps<"button"> {
  variant?: Variant;
  size?: Size;
}

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  return <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />;
}
