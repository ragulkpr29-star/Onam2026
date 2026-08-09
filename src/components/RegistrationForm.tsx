import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserPlus, Trash2 } from "lucide-react";
import { departments, years } from "@/data/events";
import { ActionButton } from "./ActionButton";

const field =
  "font-ui mt-1.5 h-10 w-full rounded-lg border border-input bg-card px-3 text-xs text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/25";

const MAX_MEMBERS = 4; // including the team leader

interface Member {
  id: number;
  name: string;
  rollNo: string;
  email: string;
}

function Field({
  label,
  id,
  placeholder,
  type = "text",
  required = true,
  value,
  onChange,
}: {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="font-ui text-[11px] font-medium text-foreground/80">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className={field}
        {...(onChange ? { value: value ?? "", onChange: (e) => onChange(e.target.value) } : {})}
      />
    </div>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <div>
      <label htmlFor={id} className="font-ui text-[11px] font-medium text-foreground/80">
        {label} <span className="text-destructive">*</span>
      </label>
      <select id={id} name={id} required defaultValue="" className={field}>
        <option value="" disabled>
          Select {label.toLowerCase()}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export function RegistrationForm({ eventTitle }: { eventTitle: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [members, setMembers] = useState<Member[]>([]);

  const total = members.length + 1;
  const canAdd = total < MAX_MEMBERS;

  const addMember = () =>
    setMembers((m) => (m.length < MAX_MEMBERS - 1 ? [...m, { id: Date.now(), name: "", rollNo: "", email: "" }] : m));

  const removeMember = (id: number) => setMembers((m) => m.filter((x) => x.id !== id));

  const update = (id: number, key: keyof Omit<Member, "id">, v: string) =>
    setMembers((m) => m.map((x) => (x.id === id ? { ...x, [key]: v } : x)));

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="card-soft p-6 md:p-7"
    >
      <h3 className="font-display text-lg font-bold">Team Details</h3>
      <span className="mt-2 block h-[3px] w-12 rounded-full bg-accent" />

      <div className="mt-5">
        <Field label="Team Name" id="team-name" placeholder="Enter team name" />
      </div>

      <h3 className="font-display mt-8 text-lg font-bold">Team Leader Details</h3>
      <span className="mt-2 block h-[3px] w-12 rounded-full bg-accent" />

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label="Team Leader Name" id="leader-name" placeholder="Enter leader name" />
        <Field label="Roll No" id="leader-roll" placeholder="Enter roll number" />
        <Field label="Email ID" id="leader-email" placeholder="Enter email id" type="email" />
        <Field label="Phone Number" id="leader-phone" placeholder="Enter phone number" type="tel" />
        <SelectField label="Department" options={departments} />
        <SelectField label="Year" options={years} />
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-bold">Team Members</h3>
          <span className="mt-2 block h-[3px] w-12 rounded-full bg-accent" />
        </div>
        <p className="font-ui text-[11px] text-muted-foreground">
          {total} / {MAX_MEMBERS} members
        </p>
      </div>

      <AnimatePresence initial={false}>
        {members.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-5 rounded-xl border border-border bg-secondary/40 p-4"
          >
            <div className="flex items-center justify-between">
              <p className="font-ui text-[11px] font-semibold tracking-[0.14em] text-primary uppercase">
                Member {i + 2}
              </p>
              <button
                type="button"
                onClick={() => removeMember(m.id)}
                aria-label={`Remove member ${i + 2}`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-card hover:text-destructive"
              >
                <Trash2 size={15} />
              </button>
            </div>
            <div className="mt-3 grid gap-4 sm:grid-cols-3">
              <Field
                label="Name"
                id={`member-${m.id}-name`}
                placeholder="Enter name"
                value={m.name}
                onChange={(v) => update(m.id, "name", v)}
              />
              <Field
                label="Roll No"
                id={`member-${m.id}-roll`}
                placeholder="Enter roll number"
                value={m.rollNo}
                onChange={(v) => update(m.id, "rollNo", v)}
              />
              <Field
                label="Email ID"
                id={`member-${m.id}-email`}
                placeholder="Enter email id"
                type="email"
                value={m.email}
                onChange={(v) => update(m.id, "email", v)}
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {canAdd ? (
        <button
          type="button"
          onClick={addMember}
          className="font-ui mt-5 inline-flex items-center gap-2 rounded-full border border-dashed border-primary/50 px-4 py-2.5 text-xs font-semibold text-primary transition-colors hover:bg-secondary"
        >
          <UserPlus size={15} />
          {members.length === 0 ? "Add Team Member" : "Add Another Member"}
        </button>
      ) : (
        <p className="font-ui mt-5 text-xs text-muted-foreground">
          Maximum of {MAX_MEMBERS} members (including the team leader) reached.
        </p>
      )}

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <ActionButton type="submit">Register Team</ActionButton>
        {submitted && (
          <p role="status" className="font-ui text-xs font-medium text-primary">
            Thanks! Your {eventTitle} team entry has been noted.
          </p>
        )}
      </div>
    </motion.form>
  );
}
