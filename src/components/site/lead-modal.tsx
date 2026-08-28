"use client";

import { createContext, useContext, useState } from "react";
import { LeadForm } from "./lead-form";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

type LeadModalContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const LeadModalContext = createContext<LeadModalContextValue | null>(null);

export function useLeadModal() {
  const ctx = useContext(LeadModalContext);
  if (!ctx) throw new Error("useLeadModal must be used within LeadModalProvider");
  return ctx;
}

export function LeadModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <LeadModalContext.Provider value={{ open, setOpen }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle className="mb-1">Заявка на вечер</DialogTitle>
          <p className="mb-6 text-sm text-white/55">Ответим в течение рабочего дня, подберём формат и слот.</p>
          <LeadForm onSuccess={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </LeadModalContext.Provider>
  );
}
