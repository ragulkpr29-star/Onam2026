import { Check } from "lucide-react";
import { COMMON_RULES } from "@/data/events";

interface Props {
  guidelines?: string[];
  ctaSlot?: React.ReactNode;
}

export function RulesCard({ guidelines, ctaSlot }: Props) {
  return (
    <aside className="card-soft p-6">
      <h3 className="font-display text-lg font-bold">Rules &amp; Regulations</h3>
      <span className="mt-2 block h-[3px] w-12 rounded-full bg-accent" />
      <ul className="mt-4 space-y-3">
        {COMMON_RULES.map((rule) => (
          <li key={rule} className="flex gap-2 text-sm text-muted-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
            <span>{rule}</span>
          </li>
        ))}
      </ul>

      {guidelines && guidelines.length > 0 && (
        <>
          <h4 className="mt-6 font-display text-base font-bold">General Guidelines</h4>
          <ul className="mt-3 space-y-2">
            {guidelines.map((g) => (
              <li key={g} className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </>
      )}
      {ctaSlot && <div className="mt-6">{ctaSlot}</div>}
    </aside>
  );
}
