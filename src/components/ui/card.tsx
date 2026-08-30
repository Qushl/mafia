import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/8 bg-[#0f0f13]/60 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all duration-200 hover:border-white/12 hover:shadow-[0_14px_28px_-8px_rgba(0,0,0,0.6)]",
        className,
      )}
      {...props}
    />
  );
}
