import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ActionLink } from "./ActionButton";
import kecLogo from "@/assets/kec-logo.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About Onam" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Kongu Engineering College home">
      <img
        src={kecLogo.url}
        alt="Kongu Engineering College logo"
        className="h-10 w-auto sm:h-11"
        loading="eager"
        decoding="async"
      />
      <span className="hidden leading-tight sm:block">
        <span className="font-ui block text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
          (Autonomous)
        </span>
        <span className="block text-[9px] font-semibold tracking-[0.16em] text-accent uppercase">
          Onam 2026
        </span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-card/70 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-card"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8"
        aria-label="Main"
      >
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="font-ui relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary after:absolute after:-bottom-1.5 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-accent after:transition-all after:duration-300 hover:after:w-6 data-[status=active]:after:w-6"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ActionLink to="/events" size="sm" className="hidden sm:inline-flex">
            Register Now
          </ActionLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-primary transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <Menu className="hidden" /> : null}
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-card/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="font-ui rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary data-[status=active]:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <ActionLink to="/events" size="sm" className="mt-2 w-full">
              Register Now
            </ActionLink>
          </div>
        </div>
      )}
    </header>
  );
}
