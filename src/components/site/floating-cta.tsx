"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLeadModal } from "./lead-modal";
import { telHref } from "@/lib/utils";

export function FloatingCta({ phone }: { phone: string }) {
  const { setOpen } = useLeadModal();

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-8 sm:right-8">
      <Button asChild variant="outline" size="icon" className="h-10 w-10 border-white/8 bg-[#0a0a0c]/95 shadow-[0_8px_16px_-6px_rgba(0,0,0,0.7)] sm:h-12 sm:w-12">
        <a href={telHref(phone)} aria-label="Позвонить">
          <Phone className="h-4 w-4" />
        </a>
      </Button>
      <Button size="lg" className="h-10 px-4 text-sm shadow-[0_10px_20px_-8px_rgba(159,18,57,0.7)] sm:h-11 sm:px-5" onClick={() => setOpen(true)}>
        Оставить заявку
      </Button>
    </div>
  );
}
