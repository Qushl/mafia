"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLeadModal } from "./lead-modal";
import { telHref } from "@/lib/utils";

export function Header({ brand, phone }: { brand: string; phone: string }) {
  const { setOpen } = useLeadModal();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-[#08080a]/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--cream)]">
          {brand}
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          <a href="#hosts" className="hover:text-white">
            Ведущие
          </a>
          <a href="#tariffs" className="hover:text-white">
            Тарифы
          </a>
          <a href="#events" className="hover:text-white">
            Форматы
          </a>
          <a href="#gallery" className="hover:text-white">
            Кейсы
          </a>
          <a href="#contacts" className="hover:text-white">
            Контакты
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <a href={telHref(phone)}>{phone}</a>
          </Button>
          <Button size="sm" onClick={() => setOpen(true)}>
            Заявка
          </Button>
        </div>
      </div>
    </header>
  );
}
