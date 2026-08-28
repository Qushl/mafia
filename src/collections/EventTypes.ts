import type { CollectionConfig } from "payload";

export const EventTypes: CollectionConfig = {
  slug: "event-types",
  labels: { singular: "Тип мероприятия", plural: "Типы мероприятий" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "audience", "order"],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "title", type: "text", label: "Название", required: true },
    {
      name: "audience",
      type: "select",
      label: "Аудитория",
      required: true,
      options: [
        { label: "Дети", value: "kids" },
        { label: "Дни рождения", value: "birthday" },
        { label: "Корпоративы", value: "corporate" },
      ],
    },
    { name: "description", type: "textarea", label: "Описание", required: true },
    { name: "photo", type: "upload", relationTo: "media", label: "Фото" },
    { name: "photoUrl", type: "text", label: "URL фото (если нет файла)" },
    { name: "order", type: "number", label: "Порядок", defaultValue: 0 },
  ],
};
