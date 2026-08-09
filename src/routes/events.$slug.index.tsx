import { createFileRoute, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock, MapPin, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EventIconBadge } from "@/components/EventIcon";
import { RulesCard } from "@/components/RulesCard";
import { ActionLink } from "@/components/ActionButton";
import { galleryItems } from "@/data/gallery";
import { getEvent } from "@/data/events";

export const Route = createFileRoute("/events/$slug/")({
  loader: ({ params }) => {
    const event = getEvent(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Event not found — Onam 2026" }, { name: "robots", content: "noindex" }] };
    }
    const { event } = loaderData;
    return {
      meta: [
        { title: `${event.title} — Onam 2026 | KEC` },
        { name: "description", content: event.short },
        { property: "og:title", content: `${event.title} — Onam 2026 | KEC` },
        { property: "og:description", content: event.short },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/events/${event.slug}` },
      ],
      links: [{ rel: "canonical", href: `/events/${event.slug}` }],
    };
  },
  errorComponent: () => (
    <p className="mx-auto max-w-3xl px-6 py-20 text-center text-sm text-muted-foreground">
      This event couldn't be loaded.
    </p>
  ),
  notFoundComponent: () => (
    <p className="mx-auto max-w-3xl px-6 py-20 text-center text-sm text-muted-foreground">
      We couldn't find that event.
    </p>
  ),
  component: EventDetail,
});

function Meta({ Icon, label, value }: { Icon: typeof Users; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden />
      <div>
        <p className="font-ui text-[10px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
          {label}
        </p>
        <p className="mt-0.5 text-xs font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
}

function EventDetail() {
  const { event } = Route.useLoaderData();
  const shots = galleryItems.slice(0, 5);

  return (
    <div className="mx-auto max-w-7xl px-6 py-8 md:px-8 md:py-10">
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Events", to: "/events" }, { label: event.title }]}
      />

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.55fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-7 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl shadow-card">
              <img
                src={event.image}
                alt={event.title}
                width={1024}
                height={768}
                className="h-56 w-full object-cover md:h-64"
              />
              <span className="absolute bottom-3 left-3">
                <EventIconBadge icon={event.icon} />
              </span>
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold">{event.title}</h1>
              <p className="font-ui mt-1.5 text-sm font-medium text-accent">{event.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {event.description}
              </p>
            </div>
          </div>

          <div className="card-soft mt-7 grid gap-5 p-6 sm:grid-cols-2 lg:grid-cols-4">
            <Meta Icon={Users} label="Team Size" value={event.teamSize} />
            <Meta Icon={MapPin} label="Venue" value={event.venue} />
            <Meta Icon={CalendarDays} label="Date" value={event.date} />
            <Meta Icon={Clock} label="Time" value={event.time} />
          </div>

          <div className="card-soft mt-7 p-6">
            <h2 className="font-display text-center text-base font-bold tracking-[0.14em] uppercase">
              Event Gallery
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {shots.map((s, i) => (
                <figure key={i} className="overflow-hidden rounded-xl">
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-20 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </figure>
              ))}
            </div>
            <p className="font-ui mt-4 text-center text-xs text-muted-foreground">
              View More Photos
            </p>
          </div>
        </motion.div>

        <RulesCard
          guidelines={event.guidelines}
          ctaSlot={
            <ActionLink to="/events/$slug/register" params={{ slug: event.slug }} className="w-full">
              Register Now <ArrowRight size={15} />
            </ActionLink>
          }
        />
      </div>
    </div>
  );
}
