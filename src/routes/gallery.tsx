import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { ActionButton } from "@/components/ActionButton";
import { galleryFilters, galleryItems } from "@/data/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Onam 2026 | KEC" },
      {
        name: "description",
        content:
          "Relive the joyful moments of Onam at Kongu Engineering College — pookolam, tug of war, duo dance, fashion parade and stage events.",
      },
      { property: "og:title", content: "Gallery — Onam 2026 | KEC" },
      { property: "og:description", content: "Photo highlights from Onam at KEC." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof galleryFilters)[number]>("All");
  const [visible, setVisible] = useState(8);

  const filtered = galleryItems.filter((i) => filter === "All" || i.category === filter);
  const shown = filtered.slice(0, visible);

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">
      <SectionTitle title="Gallery" subtitle="Relive the joyful moments of Onam 2025" />

      <div className="mt-8 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Gallery filters">
        {galleryFilters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => {
              setFilter(f);
              setVisible(8);
            }}
            className={`font-ui rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
              filter === f
                ? "bg-primary text-primary-foreground shadow-soft"
                : "bg-card text-foreground/75 ring-1 ring-border hover:bg-secondary"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-9 grid grid-cols-2 gap-5 md:grid-cols-4">
        {shown.map((item, i) => (
          <motion.figure
            key={`${item.alt}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
            className="overflow-hidden rounded-2xl shadow-soft"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              width={1024}
              height={768}
              className="h-40 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-48"
            />
          </motion.figure>
        ))}
      </div>

      {visible < filtered.length && (
        <div className="mt-10 flex justify-center">
          <ActionButton onClick={() => setVisible((v) => v + 8)}>Load More</ActionButton>
        </div>
      )}
    </section>
  );
}
