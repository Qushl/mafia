import Image from "next/image";
import type { HostCard } from "@/lib/content";

export function Hosts({ hosts }: { hosts: HostCard[] }) {
  return (
    <section id="hosts" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <p className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">Ведущие</p>
      <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-[var(--cream)] sm:text-5xl">
        Люди, которые держат стол
      </h2>
      <div className="mt-12 flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible">
        {hosts.map((host) => (
          <article key={host.id} className="min-w-[240px] shrink-0 md:min-w-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image src={host.photoUrl} alt={host.name} fill className="object-cover" sizes="(max-width:768px) 70vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-lg font-medium text-white">{host.name}</p>
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
