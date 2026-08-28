import type { CollectionConfig } from "payload";

export const Gallery: CollectionConfig = {
  slug: "gallery",
  labels: { singular: "Кейс", plural: "Галерея" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "order"],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "title", type: "text", label: "Название", required: true },
    { name: "caption", type: "text", label: "Подпись" },
    { name: "photo", type: "upload", relationTo: "media", label: "Фото" },
    { name: "photoUrl", type: "text", label: "URL фото (если нет файла)" },
    { name: "order", type: "number", label: "Порядок", defaultValue: 0 },
  ],
};
