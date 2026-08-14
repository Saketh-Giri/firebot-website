# Fremont High Robotics

A modernized replica of [fremontrobotics.com](https://www.fremontrobotics.com) — the site for FRC
Team 3501 Firebots and the FIRST Tech Challenge teams at Fremont High School in Sunnyvale,
California. All 22 pages of the original site are rebuilt in Next.js with the original copy,
photography, and newsletters, on a new dark design system.

## Stack

| Tool | Purpose |
| --- | --- |
| Next.js 16 (App Router, Turbopack) | Routing, static rendering, image optimization |
| TypeScript | Types for content modules and components |
| Tailwind CSS v4 | Styling via CSS-first `@theme` tokens in `src/app/globals.css` |
| Motion | Scroll reveals and stat count-ups |
| lucide-react | Interface icons (brand marks are inlined in `SocialIcon`) |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Project layout

```
src/
  app/                 Nested routes matching the sitemap, plus sitemap.ts, robots.ts, api/contact
  components/
    site/              Header, Footer, page templates, contact form
    ui/                Section, Card, Button, Stat, Accordion, Gallery, PersonCard, PageHero
  content/             Copy and data, nested to match URLs — edit these, not the pages
    paths.ts           Canonical hrefs and legacy redirects
    about/             history, structure, people
    programs/          frc, ftc, business, marketing
    outreach/          fll, events (events render as a section on the FLL page)
    community/         impact overview, tutors, kindling kits
    updates/           gallery and newsletters
  lib/
public/
  images/              Scraped photography, grouped by page, plus assets.json manifest
  newsletters/         The five FHS Robotics Rewind PDFs
scripts/
  scrape-assets.mjs    Re-downloads images from the live Wix site
```

### Content modules

Page copy lives in `src/content` so text edits never require touching JSX. Folders map to URL prefixes:

| Path | Contents |
| --- | --- |
| `site.ts` / `paths.ts` | Team details, navigation, footer, canonical URLs |
| `home.ts` | Mission, glance stats, announcement, home links |
| `about/` | History, organizational structure, leads, mentors |
| `programs/` | FRC, FTC, Business, and Marketing |
| `outreach/` | FLL mentorship and previous-events albums |
| `community/` | Community Impact, Torchbearing Tutors, Kindling Kits |
| `updates/` | Gallery albums and newsletter issues |
| `sponsors.ts` | Tiers, benefits matrix, logos, past sponsors |
| `join.ts` | Join the team copy and tryout FAQs |

### Images

`scripts/scrape-assets.mjs` pulls every image from the live site into
`public/images/<page>/<order>-<name>.<ext>` and writes `public/images/assets.json` mapping each file
back to its original Wix URL. Files larger than 2.5 MB are re-fetched through a Wix resize so the
repository stays reasonable. Re-run it with:

```bash
node scripts/scrape-assets.mjs
```

## Things to wire up before going live

- **Contact form** — `src/app/api/contact/route.ts` validates submissions and returns success, but
  no mail provider is connected yet.
- **Calendar** — `src/app/calendar/page.tsx` embeds a placeholder Google Calendar; swap in the team
  calendar id.
- **Gallery albums** — album covers link to a lightbox of that cover. The original site's Wix albums
  hold many photos per album, which are not exported here.
- **Kit videos** — the Kindling Kits build-along videos and two of the three feedback forms are
  hosted in Wix apps and were not available to copy.
