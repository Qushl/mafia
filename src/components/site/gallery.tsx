import Image from "next/image";
import type { GalleryCard } from "@/lib/content";

export function Gallery({ items }: { items: GalleryCard[] }) {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--gold)] sm:text-xs sm:tracking-[0.32em]">Галерея</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--cream)] sm:text-5xl">Кейсы, не стоковые улыбки</h2>
      <div className="mt-8 grid grid-cols-2 gap-2 sm:mt-12 sm:gap-3 md:grid-cols-4 md:gap-4">
        {items.map((item, index) => (
          <figure
            key={item.id}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#121216] shadow-[0_18px_40px_-24px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)]/25 ${index === 0 ? "col-span-2 row-span-2 min-h-56 sm:min-h-72" : "min-h-36 sm:min-h-44"}`}
          >
            <Image src={item.photoUrl} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(max-width:768px) 50vw, 25vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4">
              <p className="text-sm font-medium text-white">{item.title}</p>
              {item.caption ? <p className="text-xs text-white/60">{item.caption}</p> : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
