import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import kecLogo from "@/assets/kec-logo.png";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
] as const;

const moreLinks = [
  { to: "/about", label: "About Onam" },
  { to: "/contact", label: "Contact" },
  { to: "/events", label: "Register" },
] as const;

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 bg-deep text-primary-foreground"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1.8fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center rounded-lg bg-primary-foreground px-3 py-2">
              <img
                src={kecLogo}
                alt="Kongu Engineering College logo"
                className="h-10 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </span>
            <span className="leading-tight">
              <span className="font-display block text-base font-bold text-primary-foreground">
                Kongu Engineering College
              </span>
              <span className="font-ui block text-[10px] font-medium tracking-wide text-primary-foreground/70 uppercase">
                (Autonomous)
              </span>
              <span className="font-ui block text-[9px] font-semibold tracking-[0.16em] text-accent uppercase">
                Onam 2026
              </span>
            </span>
          </div>

          <p className="mt-4 flex items-start gap-2 text-xs text-primary-foreground/70">
            <MapPin size={13} className="mt-0.5 shrink-0" aria-hidden />
            Perundurai, Erode – 638 060, Tamil Nadu, India.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-ui text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-1.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-xs text-primary-foreground/75 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-ui text-[11px] font-semibold tracking-[0.18em] text-transparent uppercase select-none">
              More
            </h3>
            <ul className="mt-3 space-y-1.5">
              {moreLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-xs text-primary-foreground/75 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4 text-center text-[11px] text-primary-foreground/55">
        © 2026 Kongu Engineering College · Onam 2026
      </div>
    </motion.footer>
  );
}
