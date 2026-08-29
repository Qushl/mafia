"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLeadModal } from "./lead-modal";
import { telHref } from "@/lib/utils";

export function FloatingCta({ phone }: { phone: string }) {
  const { setOpen } = useLeadModal();

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-8 sm:right-8">
      <Button asChild variant="outline" size="icon" className="h-10 w-10 bg-[#0c0c10]/90 shadow-lg sm:h-12 sm:w-12">
        <a href={telHref(phone)} aria-label="Позвонить">
          <Phone className="h-4 w-4" />
        </a>
      </Button>
      <Button size="lg" className="h-10 px-4 text-sm shadow-[0_12px_40px_-10px_rgba(159,18,57,0.9)] sm:h-11 sm:px-5" onClick={() => setOpen(true)}>
        Оставить заявку
      </Button>
    </div>
  );
}
