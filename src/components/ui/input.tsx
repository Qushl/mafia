import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-[var(--cream)] placeholder:text-white/35 outline-none transition focus:border-[var(--gold)]/50 focus:ring-1 focus:ring-[var(--gold)]/30",
        className,
      )}
      {...props}
    />
  );
}
