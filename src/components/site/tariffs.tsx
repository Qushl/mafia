"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { TariffCard } from "@/lib/content";
import { cn } from "@/lib/utils";
import { useLeadModal } from "./lead-modal";

export function Tariffs({ tariffs }: { tariffs: TariffCard[] }) {
  const { setOpen } = useLeadModal();

  return (
    <section id="tariffs" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <p className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">Тарифы</p>
      <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight text-[var(--cream)] sm:text-5xl">
        Без скрытых часов и «ну ещё ведущего»
      </h2>
      <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:items-stretch">
        {tariffs.map((tariff) => (
          <Card
            key={tariff.id}
            className={cn(
              "flex flex-col p-7",
              tariff.featured &&
                "border-[var(--gold)]/45 bg-gradient-to-b from-[#1a1216] to-[#121216] lg:-translate-y-4 lg:shadow-[0_30px_80px_-32px_rgba(159,18,57,0.55)]",
            )}
          >
            {tariff.featured ? (
              <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-[var(--gold)]">Чаще берут</p>
            ) : (
              <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-white/30">Формат</p>
            )}
            <h3 className="text-2xl font-semibold text-[var(--cream)]">{tariff.title}</h3>
            <p className="mt-2 text-sm text-white/50">{tariff.description}</p>
            <p className="mt-6 text-4xl font-semibold tracking-tight text-white">
              {tariff.price}
              <span className="ml-2 text-sm font-normal text-white/40">/ {tariff.period}</span>
            </p>
            <ul className="mt-6 flex flex-1 flex-col gap-2.5">
              {tariff.features.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                  {item}
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full" variant={tariff.featured ? "default" : "outline"} onClick={() => setOpen(true)}>
              Оставить заявку
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
