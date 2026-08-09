const petals = [
  { left: "8%", delay: "0s", dur: "26s", size: 14, hue: "bg-accent/50" },
  { left: "24%", delay: "6s", dur: "32s", size: 10, hue: "bg-destructive/30" },
  { left: "48%", delay: "12s", dur: "29s", size: 12, hue: "bg-accent/40" },
  { left: "66%", delay: "3s", dur: "35s", size: 9, hue: "bg-primary/25" },
  { left: "82%", delay: "16s", dur: "28s", size: 13, hue: "bg-accent/45" },
  { left: "93%", delay: "9s", dur: "33s", size: 10, hue: "bg-destructive/25" },
];

/** Very slow floating flower petals — purely decorative background motion. */
export function Petals() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((p, i) => (
        <span
          key={i}
          className={`absolute top-0 rounded-[60%_40%_55%_45%] ${p.hue}`}
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animation: `petal-fall ${p.dur} linear ${p.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
