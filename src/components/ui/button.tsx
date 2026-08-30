import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/60 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[var(--crimson)] text-white shadow-[0_8px_16px_-6px_rgba(159,18,57,0.7)] hover:bg-[var(--crimson-strong)] hover:shadow-[0_10px_20px_-8px_rgba(159,18,57,0.8)]",
        gold: "bg-[var(--gold)] text-[#1a1208] shadow-[0_8px_14px_-6px_rgba(196,165,116,0.6)] hover:bg-[var(--gold-strong)]",
        outline:
          "border border-[var(--gold)]/30 bg-transparent text-[var(--cream)] shadow-[0_6px_12px_-8px_rgba(0,0,0,0.4)] hover:border-[var(--gold)]/50 hover:bg-white/3 hover:text-white",
        ghost: "text-[var(--cream)] hover:bg-white/4 hover:text-white",
      },
      size: {
        default: "h-11 px-6",
        lg: "h-12 px-8 text-base",
        sm: "h-9 px-4 text-xs tracking-wide",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
