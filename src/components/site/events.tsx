import Image from "next/image";
import type { EventTypeCard } from "@/lib/content";
import { eventAudienceLabels } from "@/lib/event-labels";

export function EventTypes({ items }: { items: EventTypeCard[] }) {
  return (
    <section id="events" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--gold)] sm:text-xs sm:tracking-[0.32em]">Форматы</p>
      <h2 className="mt-3 max-w-lg text-2xl font-semibold tracking-tight text-[var(--cream)] sm:text-5xl">
        Один язык игры — три разных зала
      </h2>
      <div className="-mx-4 mt-8 flex snap-x gap-3 overflow-x-auto px-4 pb-4 sm:mx-0 sm:mt-12 sm:grid sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 md:grid-cols-3">
        {items.map((item, idx) => (
          <article key={item.id} className="group w-[76vw] min-w-[76vw] snap-start overflow-hidden rounded-xl border border-white/10 bg-[#0f0f13] shadow-[0_10px_20px_-8px_rgba(0,0,0,0.6)] transition-all duration-200 hover:border-white/15 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.7)] sm:w-auto sm:min-w-0" style={{ animationDelay: `${idx * 40}ms` }}>
            <div className="relative aspect-[5/4] sm:aspect-[4/5]">
              <Image
                src={item.photoUrl}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(max-width:768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]">{eventAudienceLabels[item.audience]}</p>
                <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/70 sm:text-sm">{item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
