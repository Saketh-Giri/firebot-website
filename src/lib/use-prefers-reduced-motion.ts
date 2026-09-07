import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

/**
 * Hydration-safe reduced-motion flag: `false` on the server and during the
 * hydration render, then the live media-query value.
 *
 * Motion's `useReducedMotion` reports the real preference on the very first
 * client render, so any component whose *markup* depends on it (extra
 * elements, SMIL loops, attribute values) mismatches the server HTML for
 * visitors who prefer reduced motion. Use this hook in those places; the
 * motion hook is fine where the flag only gates event handlers.
 */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}
