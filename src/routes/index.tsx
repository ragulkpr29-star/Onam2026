import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBoat from "@/assets/hero-boat.jpg";
import nilavilakku from "@/assets/nilavilakku.png";
import { CountdownCard } from "@/components/CountdownCard";
import { EventCard } from "@/components/EventCard";
import { SectionTitle } from "@/components/SectionTitle";
import { ActionLink } from "@/components/ActionButton";
import { events } from "@/data/events";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Onam 2026 — Kongu Engineering College" },
      {
        name: "description",
        content:
          "Celebrate Onam 2026 at Kongu Engineering College. Pookolam, Tug of War, Duo Dance and Fashion Parade — register before 23 August 2026.",
      },
      { property: "og:title", content: "Onam 2026 — Kongu Engineering College" },
      {
        property: "og:description",
        content: "Tradition. Togetherness. Triumph. Join the Onam 2026 celebrations at KEC.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroBoat}
          alt="Vallam kali snake boat race on the Kerala backwaters"
          width={1600}
          height={912}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/70 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-display text-lg text-foreground/70 italic">Celebrate the spirit of</p>
            <h1 className="font-display mt-1 text-5xl leading-none font-black tracking-tight text-primary md:text-7xl">
              ONAM 2026
              <span className="ml-2 align-super text-2xl text-accent">✦</span>
            </h1>
            <p className="font-ui mt-3 text-sm font-semibold tracking-wide text-accent md:text-base">
              Tradition. Togetherness. Triumph.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Join us for a vibrant Onam celebration filled with cultural events, exciting
              competitions and unforgettable memories.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <ActionLink to="/events">
                Explore Events <ArrowRight size={15} />
              </ActionLink>
            </motion.div>
          </motion.div>

          <div className="flex justify-center lg:justify-end">
            <CountdownCard />
          </div>
        </div>

        <img
          src={nilavilakku}
          alt=""
          aria-hidden
          loading="lazy"
          width={800}
          height={1024}
          className="pointer-events-none absolute -bottom-1 left-1 hidden h-28 w-auto object-contain opacity-90 xl:block"
          style={{ animation: "flame-flicker 3.5s ease-in-out infinite" }}
        />
      </section>

      {/* Events */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">
        <SectionTitle title="Our Events" subtitle="Participate, Enjoy and Celebrate!" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e, i) => (
            <EventCard key={e.slug} event={e} index={i} />
          ))}
        </div>
      </section>

      </section>
    </div>
  );
}
