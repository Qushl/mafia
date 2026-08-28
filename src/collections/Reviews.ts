import type { CollectionConfig } from "payload";

export const Reviews: CollectionConfig = {
  slug: "reviews",
  labels: { singular: "Отзыв", plural: "Отзывы" },
  admin: {
    useAsTitle: "author",
    defaultColumns: ["author", "rating", "order"],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "author", type: "text", label: "Имя", required: true },
    {
      name: "rating",
      type: "number",
      label: "Рейтинг",
      required: true,
      min: 1,
      max: 5,
      defaultValue: 5,
    },
    { name: "text", type: "textarea", label: "Текст", required: true },
    { name: "eventLabel", type: "text", label: "Мероприятие" },
    { name: "order", type: "number", label: "Порядок", defaultValue: 0 },
  ],
};
