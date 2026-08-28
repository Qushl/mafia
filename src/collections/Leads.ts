import type { CollectionConfig } from "payload";

export const Leads: CollectionConfig = {
  slug: "leads",
  labels: { singular: "Заявка", plural: "Заявки" },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "phone", "eventType", "status", "createdAt"],
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
    create: () => false,
  },
  fields: [
    { name: "name", type: "text", label: "Имя", required: true },
    { name: "phone", type: "text", label: "Телефон", required: true },
    { name: "eventType", type: "text", label: "Тип мероприятия", required: true },
    { name: "eventDate", type: "date", label: "Дата", admin: { date: { pickerAppearance: "dayOnly" } } },
    { name: "comment", type: "textarea", label: "Комментарий" },
    {
      name: "status",
      type: "select",
      label: "Статус",
      required: true,
      defaultValue: "new",
      options: [
        { label: "Новая", value: "new" },
        { label: "В работе", value: "in_progress" },
        { label: "Закрыта", value: "closed" },
      ],
    },
  ],
};
