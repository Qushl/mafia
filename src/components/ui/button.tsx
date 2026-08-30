import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/60 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[var(--crimson)] text-white shadow-[0_18px_45px_-18px_rgba(159,18,57,0.9)] hover:-translate-y-0.5 hover:bg-[var(--crimson-strong)] hover:shadow-[0_24px_52px_-18px_rgba(190,18,60,0.8)]",
        gold: "bg-[var(--gold)] text-[#1a1208] shadow-[0_18px_38px_-18px_rgba(196,165,116,0.8)] hover:-translate-y-0.5 hover:bg-[var(--gold-strong)]",
        outline:
          "border border-[var(--gold)]/45 bg-transparent text-[var(--cream)] shadow-[0_14px_30px_-22px_rgba(196,165,116,0.6)] hover:-translate-y-0.5 hover:border-[var(--gold)] hover:bg-white/5 hover:text-white",
        ghost: "text-[var(--cream)] hover:bg-white/5 hover:text-white",
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
