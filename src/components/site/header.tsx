"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn, telHref } from "@/lib/utils";
import { useLeadModal } from "./lead-modal";

const navItems = [
  { id: "hosts", label: "Ведущие" },
  { id: "tariffs", label: "Тарифы" },
  { id: "events", label: "Форматы" },
  { id: "gallery", label: "Кейсы" },
  { id: "contacts", label: "Контакты" },
];

export function Header({ brand, phone }: { brand: string; phone: string }) {
  const { setOpen } = useLeadModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hosts");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);

      const sections = navItems
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean)
        .map((section) => ({
          id: section!.id,
          top: section!.getBoundingClientRect().top,
        }));

      const visible = sections.find((section) => section.top <= 180) ?? sections[0];
      if (visible) setActiveSection(visible.id);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b border-white/5 transition-all duration-300",
        isScrolled ? "bg-[#0a0b0d]/80 shadow-[0_14px_40px_-20px_rgba(0,0,0,0.85)] backdrop-blur-xl" : "bg-[#08080a]/55 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--cream)]">
          {brand}
        </Link>
        <nav className="hidden items-center gap-1.5 text-sm md:flex">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={cn(
                "rounded-full px-3 py-1.5 transition-all duration-200",
                activeSection === id ? "bg-white/7 text-white shadow-[inset_0_0_0_1px_rgba(196,165,116,0.22)]" : "text-white/68 hover:bg-white/5 hover:text-white",
              )}
            >
              {label}
            </a>
          ))}
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
