import { Flower2, Users, Music4, Crown } from "lucide-react";
import type { EventIcon as IconKey } from "@/data/events";

const map = {
  flower: { Icon: Flower2, bg: "bg-primary" },
  rope: { Icon: Users, bg: "bg-accent" },
  dance: { Icon: Music4, bg: "bg-destructive" },
  crown: { Icon: Crown, bg: "bg-primary/80" },
} as const;

export function EventIconBadge({ icon, size = "md" }: { icon: IconKey; size?: "sm" | "md" | "lg" }) {
  const { Icon, bg } = map[icon];
  const dim = size === "sm" ? "h-9 w-9" : size === "lg" ? "h-16 w-16" : "h-12 w-12";
  const inner = size === "sm" ? 16 : size === "lg" ? 28 : 20;
  return (
    <span
      aria-hidden
      className={`${dim} ${bg} inline-flex items-center justify-center rounded-full text-primary-foreground shadow-[0_6px_18px_-8px_rgba(0,0,0,0.5)] ring-4 ring-card transition-transform duration-300 hover:rotate-12`}
    >
      <Icon size={inner} strokeWidth={2} />
    </span>
  );
}
