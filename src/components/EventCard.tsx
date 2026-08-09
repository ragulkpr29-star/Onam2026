import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { OnamEvent } from "@/data/events";
import { EventIconBadge } from "./EventIcon";

export function EventCard({ event, index = 0 }: { event: OnamEvent; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="card-soft hover-lift group overflow-hidden"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="relative px-5 pt-7 pb-5">
        <div className="absolute -top-6 left-5">
          <EventIconBadge icon={event.icon} />
        </div>
        <h3 className="font-display text-lg font-bold">{event.title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{event.short}</p>
        <Link
          to="/events/$slug/register"
          params={{ slug: event.slug }}
          className="font-ui mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-colors hover:text-primary"
        >
          Register Now
          <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
