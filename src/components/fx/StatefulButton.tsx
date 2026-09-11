"use client";

import { AnimatePresence, motion } from "motion/react";
import type { ComponentProps, ReactNode } from "react";
import { Check, Loader2, X } from "lucide-react";
import { clsx } from "@/lib/clsx";

export type ButtonState = "idle" | "loading" | "success" | "error";

export function StatefulButton({
  state,
  children,
  successLabel = "Sent",
  errorLabel = "Try again",
  className,
  ...props
}: Omit<ComponentProps<"button">, "children"> & {
  state: ButtonState;
  children: ReactNode;
  successLabel?: string;
  errorLabel?: string;
}) {
  const busy = state === "loading";
  return (
    <motion.button
      type="submit"
      aria-busy={busy}
      whileTap={busy ? undefined : { scale: 0.97 }}
      animate={{
        backgroundColor:
          state === "success" ? "#1f9d55" : state === "error" ? "#b8121a" : "#e01f26",
      }}
      transition={{ duration: 0.3 }}
      className={clsx(
        "relative inline-flex min-w-40 items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white",
        "shadow-[0_10px_30px_-10px_rgba(224,31,38,0.7),inset_0_1px_0_0_rgba(255,255,255,0.2)]",
        "disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-ember-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink focus-visible:outline-none",
        className,
      )}
      disabled={busy || props.disabled}
      {...(props as object)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={state}
          initial={{ y: 12, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -12, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2"
        >
          {state === "loading" && <Loader2 className="size-4 animate-spin" />}
          {state === "success" && (
            <motion.span
              initial={{ scale: 0.4, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 22 }}
              className="grid size-5 place-items-center rounded-full bg-white/20"
            >
              <Check className="size-3.5" strokeWidth={3} />
            </motion.span>
          )}
          {state === "error" && <X className="size-4" strokeWidth={2.5} />}
          <span>
            {state === "idle" && children}
            {state === "loading" && "Sending"}
            {state === "success" && successLabel}
            {state === "error" && errorLabel}
          </span>
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
