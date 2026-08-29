"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLeadModal } from "./lead-modal";
import type { SiteContent } from "@/lib/content";
import { telHref } from "@/lib/utils";

export function Hero({ content }: { content: SiteContent }) {
  const { setOpen } = useLeadModal();

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <Image
        src={content.heroImageUrl}
        alt=""
        fill
        priority
        className="hero-image object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-[#08080a]" />
      <div className="hero-glow absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(159,18,57,0.22),transparent_55%)]" />

      <div className="hero-content relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-14 pt-24 sm:px-6 sm:pb-20 lg:pb-28">
        <p className="mb-4 text-[10px] uppercase tracking-[0.26em] text-[var(--gold)] sm:mb-5 sm:text-xs sm:tracking-[0.32em]">{content.heroKicker}</p>
        <h1 className="max-w-4xl text-3xl font-semibold leading-[1.08] tracking-tight text-[var(--cream)] sm:text-6xl lg:text-7xl">
          {content.heroTitle}
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-lg">{content.heroSubtitle}</p>
        <div className="mt-7 flex flex-wrap items-center gap-2 sm:mt-10 sm:gap-3">
          <Button size="lg" onClick={() => setOpen(true)}>
            {content.heroCta}
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={telHref(content.phone)}>Позвонить</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
