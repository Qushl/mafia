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
            className={`relative overflow-hidden rounded-xl sm:rounded-2xl ${index === 0 ? "col-span-2 row-span-2 min-h-56 sm:min-h-72" : "min-h-36 sm:min-h-44"}`}
          >
            <Image src={item.photoUrl} alt={item.title} fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-sm font-medium text-white">{item.title}</p>
              {item.caption ? <p className="text-xs text-white/60">{item.caption}</p> : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
