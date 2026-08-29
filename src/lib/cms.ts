import { getCms } from "./payload";
import {
  fallbackContent,
  type EventTypeCard,
  type GalleryCard,
  type HostCard,
  type ReviewCard,
  type SiteContent,
  type TariffCard,
} from "./content";
import { mediaSrc, type MediaLike } from "./utils";

function photo(upload: MediaLike, url?: string | null, fallback = "") {
  return mediaSrc(upload, url) || fallback;
}

export async function getSiteContent(): Promise<SiteContent> {
  try {
    const payload = await getCms();
    const [settings, hosts, tariffs, eventTypes, reviews, gallery] = await Promise.all([
      payload.findGlobal({ slug: "site-settings" }),
      payload.find({ collection: "hosts", sort: "order", limit: 12, depth: 1 }),
      payload.find({ collection: "tariffs", sort: "order", limit: 6, depth: 0 }),
      payload.find({ collection: "event-types", sort: "order", limit: 6, depth: 1 }),
      payload.find({ collection: "reviews", sort: "order", limit: 12, depth: 0 }),
      payload.find({ collection: "gallery", sort: "order", limit: 12, depth: 1 }),
    ]);

    const mappedHosts: HostCard[] = hosts.docs.map((doc) => ({
      id: String(doc.id),
      name: String(doc.name),
      role: String(doc.role),
      bio: String(doc.bio),
      photoUrl: photo(doc.photo, doc.photoUrl ?? undefined, fallbackContent.hosts[0]?.photoUrl),
    }));

    const mappedTariffs: TariffCard[] = tariffs.docs.map((doc) => ({
      id: String(doc.id),
      title: String(doc.title),
      price: String(doc.price),
      period: String(doc.period || "пакет"),
      description: String(doc.description || ""),
      features: Array.isArray(doc.features)
        ? doc.features.map((row) => String((row as { item?: string }).item || "")).filter(Boolean)
        : [],
      featured: Boolean(doc.featured),
    }));

    const mappedEvents: EventTypeCard[] = eventTypes.docs.map((doc) => ({
      id: String(doc.id),
      title: String(doc.title),
      audience: doc.audience as EventTypeCard["audience"],
      description: String(doc.description),
      photoUrl: photo(doc.photo, doc.photoUrl ?? undefined),
    }));

    const mappedReviews: ReviewCard[] = reviews.docs.map((doc) => ({
      id: String(doc.id),
      author: String(doc.author),
      rating: Number(doc.rating) || 5,
      text: String(doc.text),
      eventLabel: String(doc.eventLabel || ""),
    }));

    const mappedGallery: GalleryCard[] = gallery.docs.map((doc) => ({
      id: String(doc.id),
      title: String(doc.title),
      caption: String(doc.caption || ""),
      photoUrl: photo(doc.photo, doc.photoUrl ?? undefined),
    }));

    return {
      brand: String(settings.brand || fallbackContent.brand),
      heroKicker: String(settings.heroKicker || fallbackContent.heroKicker),
      heroTitle: String(settings.heroTitle || fallbackContent.heroTitle),
      heroSubtitle: String(settings.heroSubtitle || fallbackContent.heroSubtitle),
      heroCta: String(settings.heroCta || fallbackContent.heroCta),
      phone: String(settings.phone || fallbackContent.phone),
      email: String(settings.email || fallbackContent.email),
      telegram: String(settings.telegram || fallbackContent.telegram),
      address: String(settings.address || fallbackContent.address),
      heroImageUrl: String(settings.heroImageUrl || fallbackContent.heroImageUrl),
      seoTitle: String(settings.seoTitle || fallbackContent.seoTitle),
      seoDescription: String(settings.seoDescription || fallbackContent.seoDescription),
      hosts: mappedHosts.length ? mappedHosts : fallbackContent.hosts,
      tariffs: mappedTariffs.length ? mappedTariffs : fallbackContent.tariffs,
      eventTypes: mappedEvents.length ? mappedEvents : fallbackContent.eventTypes,
      reviews: mappedReviews.length ? mappedReviews : fallbackContent.reviews,
      gallery: mappedGallery.length ? mappedGallery : fallbackContent.gallery,
    };
  } catch {
    return fallbackContent;
  }
}
