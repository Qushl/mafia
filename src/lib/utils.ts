import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function mediaSrc(
  photo: { url?: string | null } | number | null | undefined,
  fallback?: string | null,
) {
  if (photo && typeof photo === "object" && photo.url) return photo.url;
  if (fallback) return fallback;
  return "";
}
