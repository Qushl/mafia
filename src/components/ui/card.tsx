import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-[var(--panel)] shadow-[0_20px_60px_-24px_rgba(0,0,0,0.76)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)]/30 hover:shadow-[0_24px_64px_-22px_rgba(196,165,116,0.35)]",
        className,
      )}
      {...props}
    />
  );
}
