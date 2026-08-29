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
    <section id="tariffs" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--gold)] sm:text-xs sm:tracking-[0.32em]">Тарифы</p>
      <h2 className="mt-3 max-w-lg text-2xl font-semibold tracking-tight text-[var(--cream)] sm:text-5xl">
        Без скрытых часов и «ну ещё ведущего»
      </h2>
      <div className="-mx-4 mt-8 flex snap-x gap-3 overflow-x-auto px-4 pb-4 sm:mx-0 sm:mt-12 sm:grid sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 lg:items-stretch">
        {tariffs.map((tariff) => (
          <Card
            key={tariff.id}
            className={cn(
              "flex w-[72vw] min-w-[72vw] snap-start flex-col p-4 sm:w-auto sm:min-w-0 sm:p-7",
              tariff.featured &&
                "border-[var(--gold)]/45 bg-gradient-to-b from-[#1a1216] to-[#121216] lg:-translate-y-4 lg:shadow-[0_30px_80px_-32px_rgba(159,18,57,0.55)]",
            )}
          >
            {tariff.featured ? (
              <p className="mb-3 text-[9px] uppercase tracking-[0.18em] text-[var(--gold)] sm:mb-4 sm:text-[10px] sm:tracking-[0.22em]">Чаще берут</p>
            ) : (
              <p className="mb-3 text-[9px] uppercase tracking-[0.18em] text-white/30 sm:mb-4 sm:text-[10px] sm:tracking-[0.22em]">Формат</p>
            )}
            <h3 className="text-xl font-semibold text-[var(--cream)] sm:text-2xl">{tariff.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-white/50 sm:text-sm">{tariff.description}</p>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-white sm:mt-6 sm:text-4xl">
              {tariff.price}
              <span className="ml-1 text-xs font-normal text-white/40 sm:ml-2 sm:text-sm">/ {tariff.period}</span>
            </p>
            <ul className="mt-4 flex flex-1 flex-col gap-2 sm:mt-6 sm:gap-2.5">
              {tariff.features.map((item) => (
                <li key={item} className="flex items-start gap-1.5 text-xs text-white/70 sm:gap-2 sm:text-sm">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--gold)] sm:h-4 sm:w-4" />
                  {item}
                </li>
              ))}
            </ul>
            <Button className="mt-6 h-10 w-full px-3 text-xs sm:mt-8 sm:h-11 sm:px-4 sm:text-sm" variant={tariff.featured ? "default" : "outline"} onClick={() => setOpen(true)}>
              Оставить заявку
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
