import { season } from "@/content/season";
import { site } from "@/content/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SportsTeam",
        "@id": `${site.url}/#team`,
        name: site.team,
        alternateName: [site.shortName, site.name, `Team ${site.teamNumber}`],
        sport: "Robotics",
        url: site.url,
        email: site.email,
        foundingDate: String(site.founded),
        logo: `${site.url}/images/shared/logo.png`,
        image: `${site.url}/images/home/01-0b69-mv2.jpg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "575 W Fremont Ave",
          addressLocality: "Sunnyvale",
          addressRegion: "CA",
          postalCode: "94087",
          addressCountry: "US",
        },
        memberOf: {
          "@type": "Organization",
          name: "FIRST",
          url: "https://www.firstinspires.org",
        },
        sameAs: [...site.socials.map((social) => social.href), season.links.tba],
      },
      {
        "@type": "NGO",
        "@id": `${site.url}/#org`,
        name: site.name,
        url: site.url,
        email: site.email,
        nonprofitStatus: "https://schema.org/Nonprofit501c3",
        potentialAction: {
          "@type": "DonateAction",
          target: season.donate.href,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
