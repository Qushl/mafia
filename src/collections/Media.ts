import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Файл", plural: "Медиатека" },
  access: {
    read: () => true,
  },
  upload: {
    mimeTypes: ["image/*"],
    imageSizes: [
      { name: "card", width: 800, height: 1000, position: "centre" },
      { name: "wide", width: 1600, height: 900, position: "centre" },
    ],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Alt-текст",
      required: true,
    },
  ],
};
