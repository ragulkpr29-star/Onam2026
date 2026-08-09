import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TARGET = new Date("2026-09-05T09:00:00+05:30").getTime();
const DEADLINE = new Date("2026-08-23T23:59:59+05:30").getTime();

interface Parts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const diff = (to: number): Parts => {
  const ms = Math.max(0, to - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
};

const pad = (n: number) => String(n).padStart(2, "0");

export function CountdownCard() {
  const [parts, setParts] = useState<Parts | null>(null);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => {
      setParts(diff(TARGET));
      setDaysLeft(Math.max(0, Math.ceil((DEADLINE - Date.now()) / 86400000)));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const cells: [string, number | null][] = [
    ["Days", parts?.days ?? null],
    ["Hours", parts?.hours ?? null],
    ["Minutes", parts?.minutes ?? null],
    ["Seconds", parts?.seconds ?? null],
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
      className="w-full max-w-sm rounded-3xl bg-card/95 p-6 shadow-card ring-1 ring-border/60 backdrop-blur-sm"
    >
      <p className="font-ui flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
        Onam Festival Begins In
      </p>

      <div className="mt-5 grid grid-cols-4 gap-2" aria-live="polite">
        {cells.map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-secondary/70 py-3 text-center">
            <span className="font-display block text-2xl leading-none font-bold text-primary md:text-3xl">
              {value === null ? "--" : pad(value)}
            </span>
            <span className="font-ui mt-1.5 block text-[9px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
        <div>
          <p className="font-ui text-[10px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
            Registration Closes In
          </p>
          <p className="font-display mt-1 text-2xl leading-none font-bold text-primary">
            {daysLeft === null ? "--" : daysLeft}
            <span className="font-ui ml-1.5 text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
              Days Left
            </span>
          </p>
        </div>
        <div className="text-right">
          <p className="font-ui text-[10px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
            Deadline
          </p>
          <p className="font-ui mt-1 text-sm font-semibold text-destructive">23 AUG 2026</p>
        </div>
      </div>
    </motion.div>
  );
}
