import type { CollectionConfig } from "payload";

export const Tariffs: CollectionConfig = {
  slug: "tariffs",
  labels: { singular: "Тариф", plural: "Тарифы" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "price", "featured", "order"],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "title", type: "text", label: "Название", required: true },
    { name: "price", type: "text", label: "Цена", required: true },
    { name: "period", type: "text", label: "Единица (час / пакет)", defaultValue: "пакет" },
    { name: "description", type: "textarea", label: "Коротко" },
    {
      name: "features",
      type: "array",
      label: "Что входит",
      required: true,
      minRows: 1,
      fields: [{ name: "item", type: "text", required: true, label: "Пункт" }],
    },
    { name: "featured", type: "checkbox", label: "Выделить карточку", defaultValue: false },
    { name: "order", type: "number", label: "Порядок", defaultValue: 0 },
  ],
};
