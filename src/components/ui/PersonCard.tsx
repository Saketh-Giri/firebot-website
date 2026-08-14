import Image from "next/image";
import type { Person } from "@/content/about/people";
import { clsx } from "@/lib/clsx";

export function PersonCard({ person, showBio = false }: { person: Person; showBio?: boolean }) {
  const meta = person.classOf ?? person.since;
  const initials = person.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <article
      className={clsx(
        "group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-surface shadow-card",
        "transition duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-ember-500/40 hover:shadow-glow",
      )}
    >
      <div className="relative aspect-4/5 overflow-hidden bg-surface-2">
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            fill
            sizes="(min-width: 1024px) 24vw, (min-width: 640px) 42vw, 85vw"
            className="object-cover object-top transition duration-700 ease-out-expo group-hover:scale-[1.06]"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-gradient-to-br from-surface-2 to-surface text-4xl font-semibold text-line-2">
            {initials}
          </div>
        )}

        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-ember-600/0 transition-colors duration-500 group-hover:bg-ember-600/12"
        />

        {meta && (
          <span className="absolute top-3.5 right-3.5 rounded-full border border-white/12 bg-ink/65 px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.14em] text-bright/70 uppercase backdrop-blur-sm">
            {meta}
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="text-lg leading-tight font-semibold tracking-tight text-white">
            {person.name}
          </h3>
          <p className="mt-1.5 text-sm leading-snug font-medium text-ember-300">{person.role}</p>
        </div>
      </div>

      {showBio && person.bio && (
        <div className="flex-1 border-t border-white/6 p-5">
          <p className="text-sm leading-relaxed text-muted">{person.bio}</p>
        </div>
      )}
    </article>
  );
}
