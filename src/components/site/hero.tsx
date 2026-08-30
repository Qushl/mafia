"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLeadModal } from "./lead-modal";
import type { SiteContent } from "@/lib/content";
import { telHref } from "@/lib/utils";

export function Hero({ content }: { content: SiteContent }) {
  const { setOpen } = useLeadModal();

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#0a0a0c]">
      <Image
        src={content.heroImageUrl}
        alt=""
        fill
        priority
        className="hero-image object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,10,0.42)_0%,rgba(8,8,10,0.76)_20%,rgba(8,8,10,0.94)_100%)]" />
      <div className="hero-glow absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(159,18,57,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)]" />

      <div className="hero-content relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-14 pt-24 sm:px-6 sm:pb-20 lg:pb-28">
        <p className="mb-4 text-[10px] uppercase tracking-[0.26em] text-[var(--gold)] sm:mb-5 sm:text-xs sm:tracking-[0.32em]">{content.heroKicker}</p>
        <h1 className="max-w-4xl text-3xl font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--cream)] sm:text-5xl lg:text-7xl">
          {content.heroTitle}
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-lg">{content.heroSubtitle}</p>
        <div className="mt-7 flex flex-col items-start gap-3 sm:mt-10 sm:flex-row sm:items-center">
          <Button size="lg" onClick={() => setOpen(true)} className="w-full sm:w-auto">
            {content.heroCta}
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <a href={telHref(content.phone)}>Позвонить</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
