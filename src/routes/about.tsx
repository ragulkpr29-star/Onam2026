import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Flower2, Utensils, Ship, Swords, Drum, Sparkles } from "lucide-react";
import mahabali from "@/assets/mahabali.jpg";
import { SectionTitle } from "@/components/SectionTitle";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Onam — Kongu Engineering College" },
      {
        name: "description",
        content:
          "Onam is Kerala's harvest festival marking the homecoming of King Mahabali — its history, traditions and the spirit behind the KEC celebration.",
      },
      { property: "og:title", content: "About Onam — Kongu Engineering College" },
      {
        property: "og:description",
        content: "A celebration of culture, tradition and unity at KEC.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const traditions = [
  { label: "Pookalam", Icon: Flower2 },
  { label: "Onasadya", Icon: Utensils },
  { label: "Vallam Kali", Icon: Ship },
  { label: "Kaikottikali", Icon: Sparkles },
  { label: "Pulikali", Icon: Swords },
  { label: "Thiruvathira", Icon: Drum },
];

function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <SectionTitle title="About Onam" subtitle="A celebration of culture, tradition and unity." />

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-xl font-bold">The Significance</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Onam is the most important festival of Kerala, celebrated with great enthusiasm and
              joy. It marks the homecoming of the legendary King Mahabali and symbolises prosperity,
              unity and happiness across every home in the state.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Spanning ten days from Atham to Thiruvonam, the harvest festival brings families
              together around flower carpets, feasts, boat races and folk performances — a shared
              culture that transcends religion and community.
            </p>

            <h3 className="font-display mt-8 text-lg font-bold">Traditions</h3>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {traditions.map(({ label, Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="card-soft hover-lift flex flex-col items-center gap-2 px-3 py-4 text-center"
                >
                  <Icon size={18} className="text-primary transition-transform duration-300 hover:rotate-12" aria-hidden />
                  <span className="font-ui text-[11px] font-medium text-foreground/80">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-card"
          >
            <img
              src={mahabali}
              alt="Illustration of King Mahabali with a snake boat on the Kerala backwaters"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
