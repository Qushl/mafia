import "dotenv/config";
import { getPayload } from "payload";
import config from "../payload.config";
import { fallbackContent } from "../lib/content";

async function seed() {
  const payload = await getPayload({ config });
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  const existing = await payload.find({ collection: "users", limit: 1 });
  if (existing.totalDocs === 0) {
    if (!adminEmail || !adminPassword) {
      throw new Error("ADMIN_EMAIL and ADMIN_PASSWORD are required to create the first admin");
    }
    await payload.create({
      collection: "users",
      data: {
        email: adminEmail,
        password: adminPassword,
        name: "Администратор",
      },
    });
  }

  const hostsCount = await payload.find({ collection: "hosts", limit: 1 });
  if (hostsCount.totalDocs === 0) {
    for (const [index, host] of fallbackContent.hosts.entries()) {
      await payload.create({
        collection: "hosts",
        data: {
          name: host.name,
          role: host.role,
          bio: host.bio,
          photoUrl: host.photoUrl,
          order: index,
        },
      });
    }
  }

  const tariffsCount = await payload.find({ collection: "tariffs", limit: 1 });
  if (tariffsCount.totalDocs === 0) {
    for (const [index, tariff] of fallbackContent.tariffs.entries()) {
      await payload.create({
        collection: "tariffs",
        data: {
          title: tariff.title,
          price: tariff.price,
          period: tariff.period,
          description: tariff.description,
          featured: tariff.featured,
          order: index,
          features: tariff.features.map((item) => ({ item })),
        },
      });
    }
  }

  const eventsCount = await payload.find({ collection: "event-types", limit: 1 });
  if (eventsCount.totalDocs === 0) {
    for (const [index, item] of fallbackContent.eventTypes.entries()) {
      await payload.create({
        collection: "event-types",
        data: {
          title: item.title,
          audience: item.audience,
          description: item.description,
          photoUrl: item.photoUrl,
          order: index,
        },
      });
    }
  }

  const reviewsCount = await payload.find({ collection: "reviews", limit: 1 });
  if (reviewsCount.totalDocs === 0) {
    for (const [index, review] of fallbackContent.reviews.entries()) {
      await payload.create({
        collection: "reviews",
        data: {
          author: review.author,
          rating: review.rating,
          text: review.text,
          eventLabel: review.eventLabel,
          order: index,
        },
      });
    }
  }

  const galleryCount = await payload.find({ collection: "gallery", limit: 1 });
  if (galleryCount.totalDocs === 0) {
    for (const [index, item] of fallbackContent.gallery.entries()) {
      await payload.create({
        collection: "gallery",
        data: {
          title: item.title,
          caption: item.caption,
          photoUrl: item.photoUrl,
          order: index,
        },
      });
    }
  }

  await payload.updateGlobal({
    slug: "site-settings",
    data: {
      brand: fallbackContent.brand,
      heroKicker: fallbackContent.heroKicker,
      heroTitle: fallbackContent.heroTitle,
      heroSubtitle: fallbackContent.heroSubtitle,
      heroCta: fallbackContent.heroCta,
      phone: fallbackContent.phone,
      email: fallbackContent.email,
      telegram: fallbackContent.telegram,
      address: fallbackContent.address,
      heroImageUrl: fallbackContent.heroImageUrl,
      seoTitle: fallbackContent.seoTitle,
      seoDescription: fallbackContent.seoDescription,
    },
  });

  console.log("Seed complete. Admin:", adminEmail || "existing user");
}

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
