import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/60 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[var(--crimson)] text-white hover:bg-[#be123c]",
        gold: "bg-[var(--gold)] text-[#1a1208] hover:bg-[#d4bc8f]",
        outline:
          "border border-[var(--gold)]/40 bg-transparent text-[var(--cream)] hover:border-[var(--gold)] hover:bg-white/5",
        ghost: "text-[var(--cream)] hover:bg-white/5",
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
