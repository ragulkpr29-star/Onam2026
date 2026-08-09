import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { EventIconBadge } from "@/components/EventIcon";
import { events } from "@/data/events";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Our Events — Onam 2026 | KEC" },
      {
        name: "description",
        content:
          "Pookolam, Tug of War, Duo Dance and Fashion Parade — explore every Onam 2026 competition at Kongu Engineering College and register your team.",
      },
      { property: "og:title", content: "Our Events — Onam 2026 | KEC" },
      {
        property: "og:description",
        content: "Explore all Onam 2026 competitions at Kongu Engineering College.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-14 md:px-8 md:py-16">
      <SectionTitle title="Our Events" subtitle="Participate, Enjoy and Celebrate!" />

      <div className="mt-10 space-y-6">
        {events.map((e, i) => (
          <motion.article
            key={e.slug}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-soft hover-lift group grid overflow-hidden sm:grid-cols-[280px_1fr]"
          >
            <div className="h-44 overflow-hidden sm:h-full">
              <img
                src={e.image}
                alt={e.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex items-start gap-4 p-6">
              <EventIconBadge icon={e.icon} />
              <div>
                <Link
                  to="/events/$slug"
                  params={{ slug: e.slug }}
                  className="font-display text-xl font-bold text-primary transition-colors hover:text-accent"
                >
                  {e.title}
                </Link>
                <p className="mt-2 max-w-md text-xs leading-relaxed text-muted-foreground">
                  {e.short}
                </p>
                <Link
                  to="/events/$slug/register"
                  params={{ slug: e.slug }}
                  className="font-ui mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-colors hover:text-primary"
                >
                  Register Now
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
