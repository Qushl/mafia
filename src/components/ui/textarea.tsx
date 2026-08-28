import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-24 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-[var(--cream)] placeholder:text-white/35 outline-none transition focus:border-[var(--gold)]/50 focus:ring-1 focus:ring-[var(--gold)]/30",
        className,
      )}
      {...props}
    />
  );
}
