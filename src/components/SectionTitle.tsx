import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  small?: boolean;
}

export function SectionTitle({ title, subtitle, align = "center", small = false }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <h2
        className={`font-display tracking-tight ${small ? "text-xl md:text-2xl" : "text-3xl md:text-4xl"} font-bold`}
      >
        {title}
      </h2>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className={`mt-3 block h-[3px] w-24 rounded-full bg-accent ${align === "center" ? "mx-auto" : ""}`}
      />
      {subtitle && <p className="mt-3 text-sm text-muted-foreground md:text-base">{subtitle}</p>}
    </motion.div>
  );
}
