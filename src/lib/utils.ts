import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export type MediaLike = { id?: number | string; url?: string | null } | number | null | undefined;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function mediaSrc(photo: MediaLike, fallback?: string | null) {
  if (photo && typeof photo === "object" && photo.url) return photo.url;
  if (fallback) return fallback;
  return "";
}
