import Image from "next/image";
import type { HostCard } from "@/lib/content";

export function Hosts({ hosts }: { hosts: HostCard[] }) {
  return (
    <section id="hosts" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--gold)] sm:text-xs sm:tracking-[0.32em]">Ведущие</p>
      <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight text-[var(--cream)] sm:text-5xl">
        Люди, которые держат стол
      </h2>
      <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4 sm:mt-12 sm:gap-5 md:grid md:grid-cols-4 md:overflow-visible">
        {hosts.map((host, idx) => (
          <article key={host.id} className="w-[76vw] min-w-[76vw] snap-start transition-all duration-200 sm:w-auto sm:min-w-0 md:min-w-0" style={{ animationDelay: `${idx * 50}ms` }}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-[#0f0f13] shadow-[0_10px_20px_-8px_rgba(0,0,0,0.6)] sm:aspect-[3/4]">
              <Image src={host.photoUrl} alt={host.name} fill className="object-cover" sizes="(max-width:768px) 76vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-lg font-semibold text-white">{host.name}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold)]">{host.role}</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/55">{host.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
