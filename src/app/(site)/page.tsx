import { getSiteContent } from "@/lib/cms";
import { SiteShell } from "@/components/site/site-shell";
import { Hero } from "@/components/site/hero";
import { Hosts } from "@/components/site/hosts";
import { Tariffs } from "@/components/site/tariffs";
import { EventTypes } from "@/components/site/events";
import { Reviews } from "@/components/site/reviews";
import { Gallery } from "@/components/site/gallery";
import { Contacts } from "@/components/site/contacts";
import type { Metadata } from "next";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent();
  return {
    title: content.seoTitle,
    description: content.seoDescription,
  };
}

export default async function HomePage() {
  const content = await getSiteContent();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    name: content.brand,
    description: content.seoDescription,
    telephone: content.phone,
    email: content.email,
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    areaServed: "RU",
  };

  return (
    <SiteShell brand={content.brand} phone={content.phone} contentFooter={content}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero content={content} />
      <Hosts hosts={content.hosts} />
      <Tariffs tariffs={content.tariffs} />
      <EventTypes items={content.eventTypes} />
      <Reviews reviews={content.reviews} />
      <Gallery items={content.gallery} />
      <Contacts content={content} />
    </SiteShell>
  );
}
