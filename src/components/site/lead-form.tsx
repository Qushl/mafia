"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EVENT_TYPES } from "@/lib/lead-schema";
import { cn } from "@/lib/utils";

export function LeadForm({
  onSuccess,
  className,
}: {
  onSuccess?: () => void;
  className?: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !json.ok) {
        setStatus("error");
        setMessage(json.error || "Не удалось отправить");
        return;
      }
      setStatus("ok");
      form.reset();
      onSuccess?.();
    } catch {
      setStatus("error");
      setMessage("Сеть недоступна. Позвоните нам напрямую.");
    }
  }

  return (
    <form onSubmit={onSubmit} className={cn("grid gap-4", className)}>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />
      <div className="grid gap-2">
        <Label htmlFor="name">Имя</Label>
        <Input id="name" name="name" required placeholder="Как к вам обращаться" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone">Телефон</Label>
        <Input id="phone" name="phone" type="tel" required placeholder="+7 999 000-00-00" />
      </div>
      <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
        <div className="grid gap-2">
          <Label htmlFor="eventType">Формат</Label>
          <select
            id="eventType"
            name="eventType"
            required
            defaultValue=""
            className="flex h-11 w-full rounded-xl border border-white/10 bg-[#0d0d11]/80 px-4 text-sm text-[var(--cream)] outline-none transition focus:border-[var(--gold)]/50 focus:ring-2 focus:ring-[var(--gold)]/20"
          >
            <option value="" disabled>
              Выберите
            </option>
            {EVENT_TYPES.map((type) => (
              <option key={type} value={type} className="bg-[#111]">
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="date">Дата</Label>
          <Input id="date" name="date" type="date" />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="comment">Комментарий</Label>
        <Textarea id="comment" name="comment" placeholder="Площадка, число гостей, пожелания" />
      </div>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-white/60">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-[var(--gold)]" />
        <span>
          Я согласен на обработку персональных данных и принимаю{" "}
          <Link href="/privacy" className="text-[var(--gold)] underline underline-offset-4 hover:text-white">
            политику обработки персональных данных
          </Link>
        </span>
      </label>
      {message ? <p className="text-sm text-red-400">{message}</p> : null}
      {status === "ok" ? <p className="text-sm text-[var(--gold)]">Заявка ушла. Мы наберём вас.</p> : null}
      <Button type="submit" size="lg" disabled={status === "loading"} className="h-12 w-full sm:h-12">
        {status === "loading" ? "Отправляем…" : "Отправить заявку"}
      </Button>
    </form>
  );
}
