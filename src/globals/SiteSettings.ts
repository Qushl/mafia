import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Тексты сайта",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "brand",
      type: "text",
      label: "Бренд",
      defaultValue: "Полночь",
    },
    {
      name: "heroKicker",
      type: "text",
      label: "Надзаголовок Hero",
      defaultValue: "Агентство игровых вечеров",
    },
    {
      name: "heroTitle",
      type: "text",
      label: "Заголовок Hero",
      required: true,
      defaultValue: "Вечер, после которого в чате ещё неделю разбирают, кто был мафией",
    },
    {
      name: "heroSubtitle",
      type: "textarea",
      label: "Подзаголовок Hero",
      defaultValue:
        "Мафия, квизы и корпоративы под ключ: сценарий, ведущие, реквизит и атмосфера. Вы зовёте людей — мы держим зал.",
    },
    {
      name: "heroCta",
      type: "text",
      label: "Текст кнопки Hero",
      defaultValue: "Оставить заявку",
    },
    { name: "phone", type: "text", label: "Телефон", defaultValue: "+7 (495) 120-13-00" },
    { name: "email", type: "email", label: "Email", defaultValue: "hello@polnoch.agency" },
    { name: "telegram", type: "text", label: "Telegram", defaultValue: "https://t.me/polnoch" },
    { name: "address", type: "text", label: "Адрес", defaultValue: "Москва · выезд по России" },
    { name: "heroImageUrl", type: "text", label: "URL фона Hero" },
    {
      name: "seoTitle",
      type: "text",
      label: "SEO title",
      defaultValue: "Полночь — мафия, квизы и корпоративы",
    },
    {
      name: "seoDescription",
      type: "textarea",
      label: "SEO description",
      defaultValue:
        "Агентство развлекательных мероприятий: мафия, квизы, дни рождения и корпоративы. Ведущие, сценарий и атмосфера под ключ.",
    },
  ],
};
