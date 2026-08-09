import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  to?: string;
  params?: Record<string, string>;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="font-ui flex flex-wrap items-center gap-1.5 text-xs">
      {items.map((c, i) => (
        <span key={c.label} className="flex items-center gap-1.5">
          {c.to ? (
            <Link
              to={c.to}
              params={c.params as never}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {c.label}
            </Link>
          ) : (
            <span className="font-medium text-primary">{c.label}</span>
          )}
          {i < items.length - 1 && (
            <ChevronRight size={12} className="text-muted-foreground/60" aria-hidden />
          )}
        </span>
      ))}
    </nav>
  );
}
