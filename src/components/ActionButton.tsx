import { createLink } from "@tanstack/react-router";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghostGold" | "dark";
type Size = "sm" | "md" | "lg";

const base =
  "font-ui inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.97] disabled:opacity-60 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-1";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft",
  outline: "border border-primary/30 bg-card text-primary hover:bg-secondary",
  ghostGold: "bg-accent text-accent-foreground hover:brightness-105 shadow-soft",
  dark: "bg-deep text-primary-foreground hover:bg-primary",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-sm",
};

export interface ActionProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

export const ActionButton = forwardRef<
  HTMLButtonElement,
  ActionProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ variant = "primary", size = "md", className, children, ...rest }, ref) => (
  <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
    {children}
  </button>
));
ActionButton.displayName = "ActionButton";

const StyledAnchor = forwardRef<
  HTMLAnchorElement,
  ActionProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ variant = "primary", size = "md", className, children, ...rest }, ref) => (
  <a ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
    {children}
  </a>
));
StyledAnchor.displayName = "StyledAnchor";

export const ActionLink = createLink(StyledAnchor);

