import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--gold)]/30 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--gold)]",
        className,
      )}
      {...props}
    />
  );
}
