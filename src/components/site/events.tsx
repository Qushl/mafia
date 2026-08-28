import Image from "next/image";
import type { EventTypeCard } from "@/lib/content";

const labels = {
  kids: "Дети",
  birthday: "Дни рождения",
  corporate: "Корпоративы",
};

export function EventTypes({ items }: { items: EventTypeCard[] }) {
  return (
    <section id="events" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <p className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">Форматы</p>
      <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight text-[var(--cream)] sm:text-5xl">
        Один язык игры — три разных зала
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.id} className="group overflow-hidden rounded-2xl border border-white/10">
            <div className="relative aspect-[4/5]">
              <Image
                src={item.photoUrl}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]">{labels[item.audience]}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
