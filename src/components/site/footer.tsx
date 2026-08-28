import Link from "next/link";
import type { SiteContent } from "@/lib/content";

export function Footer({ content }: { content: SiteContent }) {
  return (
    <footer className="border-t border-white/5 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p className="uppercase tracking-[0.24em] text-[var(--gold)]/70">{content.brand}</p>
        <p>Игровые вечера · {new Date().getFullYear()}</p>
        <Link href="/admin" className="hover:text-white/70">
          Админка
        </Link>
      </div>
    </footer>
  );
}
