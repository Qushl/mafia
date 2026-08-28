import type { CollectionConfig } from "payload";

export const Hosts: CollectionConfig = {
  slug: "hosts",
  labels: { singular: "Ведущий", plural: "Ведущие" },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "role", "order"],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "name", type: "text", label: "Имя", required: true },
    { name: "role", type: "text", label: "Роль", required: true },
    { name: "bio", type: "textarea", label: "Описание", required: true },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      label: "Фото",
    },
    { name: "photoUrl", type: "text", label: "URL фото (если нет файла)" },
    { name: "order", type: "number", label: "Порядок", defaultValue: 0 },
  ],
};
