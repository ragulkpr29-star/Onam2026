import { createFileRoute, notFound } from "@tanstack/react-router";
import nilavilakku from "@/assets/nilavilakku.png";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RegistrationForm } from "@/components/RegistrationForm";
import { RulesCard } from "@/components/RulesCard";
import { getEvent } from "@/data/events";

export const Route = createFileRoute("/events/$slug/register")({
  loader: ({ params }) => {
    const event = getEvent(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Registration — Onam 2026" }, { name: "robots", content: "noindex" }],
      };
    }
    const { event } = loaderData;
    return {
      meta: [
        { title: `${event.title} Registration — Onam 2026 | KEC` },
        {
          name: "description",
          content: `Register your team for ${event.title} at the Onam 2026 celebrations of Kongu Engineering College.`,
        },
        { property: "og:title", content: `${event.title} Registration — Onam 2026 | KEC` },
        {
          property: "og:description",
          content: `Fill in your team details to enter ${event.title} at Onam 2026.`,
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/events/${event.slug}/register` },
      ],
      links: [{ rel: "canonical", href: `/events/${event.slug}/register` }],
    };
  },
  errorComponent: () => (
    <p className="mx-auto max-w-3xl px-6 py-20 text-center text-sm text-muted-foreground">
      This registration form couldn't be loaded.
    </p>
  ),
  notFoundComponent: () => (
    <p className="mx-auto max-w-3xl px-6 py-20 text-center text-sm text-muted-foreground">
      We couldn't find that event.
    </p>
  ),
  component: RegisterPage,
});

function RegisterPage() {
  const { event } = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-7xl px-6 py-8 md:px-8 md:py-10">
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Events", to: "/events" },
          { label: event.title, to: "/events/$slug", params: { slug: event.slug } },
          { label: "Register" },
        ]}
      />

      <header className="mt-8 text-center">
        <h1 className="font-display text-3xl font-bold md:text-4xl">
          <span className="text-accent">✦ </span>
          {event.title} - Registration
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Fill in the details to register your team.</p>
      </header>

      <div className="mt-8 grid gap-7 lg:grid-cols-[1.6fr_1fr]">
        <RegistrationForm eventTitle={event.title} />
        <div>
          <RulesCard />
          <img
            src={nilavilakku}
            alt="Traditional Kerala nilavilakku lamp"
            loading="lazy"
            width={800}
            height={1024}
            className="mx-auto mt-6 h-56 w-auto object-contain"
            style={{ animation: "flame-flicker 3.5s ease-in-out infinite" }}
          />
        </div>
      </div>
    </div>
  );
}
