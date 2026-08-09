import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import kecLogo from "@/assets/kec-logo.png.asset.json";

const TARGET = new Date("2026-09-05T09:00:00+05:30").getTime();

const diff = () => {
  const ms = Math.max(0, TARGET - Date.now());
  return [
    ["Days", Math.floor(ms / 86400000)],
    ["Hours", Math.floor((ms / 3600000) % 24)],
    ["Minutes", Math.floor((ms / 60000) % 60)],
    ["Seconds", Math.floor((ms / 1000) % 60)],
  ] as [string, number][];
};

export function WelcomePopup() {
  const [open, setOpen] = useState(false);
  const [cells, setCells] = useState<[string, number][] | null>(null);

  useEffect(() => {
    setOpen(true);
    const tick = () => setCells(diff());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Welcome to Onam 2026"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 px-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full max-w-md rounded-3xl bg-primary p-8 text-center shadow-card ring-1 ring-primary/40"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close welcome message"
              className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-colors hover:bg-primary-foreground/25"
            >
              <X size={16} />
            </button>

            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground p-2">
              <img
                src={kecLogo.url}
                alt="Kongu Engineering College logo"
                className="h-full w-full object-contain"
              />
            </span>

            <h2 className="font-display mt-5 text-2xl font-bold text-primary-foreground">
              Welcome to Onam 2026
            </h2>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <span className="font-ui rounded-full bg-accent px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-primary uppercase">
                Registration Open
              </span>
              <span className="font-ui rounded-full bg-primary-foreground px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-primary uppercase">
                Entry Free
              </span>
            </div>

            <p className="font-ui mt-5 text-xs font-medium text-primary-foreground/80">
              The celebration begins in
            </p>

            <div className="mt-3 grid grid-cols-4 gap-2">
              {(cells ?? [["Days", 0], ["Hours", 0], ["Minutes", 0], ["Seconds", 0]] as [string, number][]).map(
                ([label, value]) => (
                  <div key={label} className="rounded-xl bg-primary-foreground px-1.5 py-3">
                    <p className="font-display text-2xl font-bold text-primary">
                      {cells ? value : "--"}
                    </p>
                    <p className="font-ui mt-0.5 text-[9px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                      {label}
                    </p>
                  </div>
                ),
              )}
            </div>

            <p className="font-ui mt-5 text-[10px] text-primary-foreground/60">
              Registration deadline · 23 August 2026
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
