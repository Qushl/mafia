import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-[#121216]/80 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.8)] backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  );
}
