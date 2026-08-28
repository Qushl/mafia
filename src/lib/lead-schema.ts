import { z } from "zod";

export const EVENT_TYPES = [
  "Мафия",
  "Квиз",
  "Детский праздник",
  "День рождения",
  "Корпоратив",
  "Другое",
] as const;

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Укажите имя").max(80),
  phone: z
    .string()
    .trim()
    .min(10, "Укажите телефон")
    .max(32)
    .regex(/^[+\d][\d\s()-]{8,}$/u, "Некорректный телефон"),
  eventType: z.string().min(1, "Выберите формат"),
  date: z.string().optional(),
  comment: z.string().max(1000).optional(),
  company: z.string().max(0).optional(),
  consent: z.preprocess(
    (value) => value === true || value === "on" || value === "true",
    z.literal(true, "Необходимо согласие на обработку персональных данных"),
  ),
});

export type LeadInput = z.infer<typeof leadSchema>;
