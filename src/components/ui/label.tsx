import * as React from "react";
import { cn } from "@/lib/utils";

export function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn("text-xs uppercase tracking-[0.16em] text-[var(--gold)]/80", className)}
      {...props}
    />
  );
}
