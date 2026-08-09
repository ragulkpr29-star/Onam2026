import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Instagram, Facebook, Youtube } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { ActionButton } from "@/components/ActionButton";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Onam 2026 | KEC" },
      {
        name: "description",
        content:
          "Reach the Onam 2026 organising team at Kongu Engineering College, Perundurai, Erode — phone, email and enquiry form.",
      },
      { property: "og:title", content: "Contact — Onam 2026 | KEC" },
      { property: "og:description", content: "We're here to help you — get in touch with the Onam 2026 team." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const field =
  "font-ui mt-1.5 w-full rounded-lg border border-input bg-card px-3 py-2.5 text-xs text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/25";

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">
      <SectionTitle title="Contact Us" subtitle="We're here to help you!" />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <div className="space-y-4">
            {[
              {
                Icon: MapPin,
                text: "Kongu Engineering College (Autonomous), Perundurai, Erode – 638 060, Tamil Nadu, India.",
              },
              { Icon: Phone, text: "04294 226300" },
              { Icon: Mail, text: "info@kongu.ac.in" },
              { Icon: Globe, text: "www.kongu.ac.in" },
            ].map(({ Icon, text }) => (
              <p key={text} className="flex items-start gap-3 text-xs text-muted-foreground">
                <Icon size={15} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                <span>{text}</span>
              </p>
            ))}
          </div>

          <div>
            <h3 className="font-display text-base font-bold">Follow Us</h3>
            <div className="mt-3 flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-card text-primary ring-1 ring-border transition-all duration-300 hover:bg-secondary"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="card-soft p-6 md:p-7"
        >
          <h3 className="font-display text-lg font-bold">Send Us a Message</h3>
          <span className="mt-2 block h-[3px] w-12 rounded-full bg-accent" />

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="font-ui text-[11px] font-medium text-foreground/80">
                Your Name
              </label>
              <input id="name" name="name" required placeholder="Enter your name" className={field} />
            </div>
            <div>
              <label htmlFor="email" className="font-ui text-[11px] font-medium text-foreground/80">
                Email ID
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className={field}
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="font-ui text-[11px] font-medium text-foreground/80">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Type your message..."
              className={field}
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <ActionButton type="submit">Send Message</ActionButton>
            {sent && (
              <p role="status" className="font-ui text-xs font-medium text-primary">
                Thanks! We'll get back to you soon.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
