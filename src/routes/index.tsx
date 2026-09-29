import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Journey } from "@/components/site/Journey";
import { Intro, Celebrations, Interlude, Contact } from "@/components/site/Sections";
import { Nav, Footer } from "@/components/site/Chrome";
import { useRevealObserver } from "@/lib/scroll";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/EventPlanner",
  name: "Event Planner by Heer",
  description:
    "Wedding and event decoration studio in Gujranwala, Pakistan. Stage decoration, floral installations and lighting for barat, mehndi, walima and family celebrations.",
  telephone: "+923446116182",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Block B, Satellite Town",
    addressLocality: "Gujranwala",
    postalCode: "52250",
    addressCountry: "PK",
  },
  openingHours: "Mo-Su 00:00-23:59",
  sameAs: ["https://www.instagram.com/eventplannerbyheer/"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Event Planner by Heer | Wedding Planner & Decorator in Gujranwala" },
      {
        name: "description",
        content:
          "Event Planner by Heer is a wedding planner and event decorator in Satellite Town, Gujranwala. Stage decoration, florals and lighting for barat, mehndi and walima.",
      },
      {
        property: "og:title",
        content: "Event Planner by Heer | Wedding Planner & Decorator in Gujranwala",
      },
      {
        property: "og:description",
        content:
          "Wedding and event decoration in Gujranwala: stages, floral walls, draped ceilings and lighting for barat, mehndi, walima and family celebrations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusiness),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useRevealObserver();

  return (
    <main className="bg-night">
      <Nav />
      <Hero />
      <Intro />
      <Journey />
      <Interlude />
      <Celebrations />
      <Contact />
      <Footer />
    </main>
  );
}
