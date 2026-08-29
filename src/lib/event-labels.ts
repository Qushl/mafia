export const eventAudienceLabels = {
  kids: "Дети",
  birthday: "Дни рождения",
  corporate: "Корпоративы",
} as const;

export type EventAudience = keyof typeof eventAudienceLabels;
