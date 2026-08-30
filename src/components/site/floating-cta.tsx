"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLeadModal } from "./lead-modal";
import { telHref } from "@/lib/utils";

export function FloatingCta({ phone }: { phone: string }) {
  const { setOpen } = useLeadModal();

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-8 sm:right-8">
      <Button asChild variant="outline" size="icon" className="h-10 w-10 border-white/10 bg-[#0c0c10]/90 shadow-[0_18px_42px_-18px_rgba(0,0,0,0.9)] backdrop-blur-md sm:h-12 sm:w-12">
        <a href={telHref(phone)} aria-label="Позвонить">
          <Phone className="h-4 w-4" />
        </a>
      </Button>
      <Button size="lg" className="h-10 px-4 text-sm shadow-[0_18px_48px_-16px_rgba(159,18,57,0.9)] sm:h-11 sm:px-5" onClick={() => setOpen(true)}>
        Оставить заявку
      </Button>
    </div>
  );
}
