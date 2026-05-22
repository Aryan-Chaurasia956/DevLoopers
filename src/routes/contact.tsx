import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MessageCircle, MapPin, Send, Check } from "lucide-react";
import { Section, Eyebrow } from "@/components/Section";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Megatron Group" },
      { name: "description", content: "Start a project, ask a question, or talk about a collaboration. We reply within 24 hours." },
      { property: "og:title", content: "Contact — Megatron Group" },
      { property: "og:description", content: "Start a project. We reply within 24 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  projectType: z.string().max(60).optional().or(z.literal("")),
  budget: z.string().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(10, "At least 10 characters").max(2000),
});
type FormVals = z.infer<typeof schema>;

const tabs = ["Project inquiry", "General query", "Collaboration"] as const;

function Contact() {
  const [tab, setTab] = useState<typeof tabs[number]>("Project inquiry");
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormVals>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (vals: FormVals) => {
    // Static demo flow — open user's mail client with prefilled body.
    const subject = encodeURIComponent(`[${tab}] ${vals.name} from ${vals.company || "—"}`);
    const body = encodeURIComponent(
      `Name: ${vals.name}\nEmail: ${vals.email}\nCompany: ${vals.company || "—"}\nProject type: ${vals.projectType || "—"}\nBudget: ${vals.budget || "—"}\n\n${vals.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-radial-glow opacity-80" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-12 lg:px-8 lg:pt-32">
          <Eyebrow>Contact · {SITE.responseTime}</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold tracking-tight md:text-6xl">
            Tell us about <span className="text-gradient-mint">your project.</span>
          </h1>
        </div>
      </section>

      <Section className="!pt-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex flex-wrap gap-2 border-b border-border pb-4">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                    tab === t
                      ? "border-primary bg-primary/15 text-primary"
                      : "border-border bg-surface text-foreground/70 hover:text-primary"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5" noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Your name" error={errors.name?.message}>
                  <input {...register("name")} className={inputCls} placeholder="Jane Doe" />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input {...register("email")} type="email" className={inputCls} placeholder="jane@company.com" />
                </Field>
                <Field label="Company (optional)">
                  <input {...register("company")} className={inputCls} placeholder="Acme Inc." />
                </Field>
                <Field label="Project type (optional)">
                  <select {...register("projectType")} className={inputCls}>
                    <option value="">Select…</option>
                    <option>Web app</option>
                    <option>Android app</option>
                    <option>Web + Android</option>
                    <option>API / Integration</option>
                    <option>Audit / Migration</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Budget range (optional)" className="md:col-span-2">
                  <select {...register("budget")} className={inputCls}>
                    <option value="">Select…</option>
                    <option>₹2L – ₹5L</option>
                    <option>₹5L – ₹15L</option>
                    <option>₹15L – ₹50L</option>
                    <option>₹50L+</option>
                    <option>Not sure yet</option>
                  </select>
                </Field>
              </div>
              <Field label="Tell us about your project" error={errors.message?.message}>
                <textarea {...register("message")} rows={6} className={inputCls} placeholder="Goals, timeline, anything we should know…" />
              </Field>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-mint px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02] disabled:opacity-60"
                >
                  {sent ? (<><Check className="h-4 w-4" /> Email opened — send to finish</>) : (<>Send message <Send className="h-4 w-4" /></>)}
                </button>
                <span className="text-xs text-muted-foreground">By submitting, you agree to our <a href="/privacy" className="underline">privacy policy</a>.</span>
              </div>
            </form>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <Eyebrow>Direct lines</Eyebrow>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                  <a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                  <a href={`tel:${SITE.phone}`} className="hover:text-primary">{SITE.phone}</a>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                  <a href={`https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" className="hover:text-primary">WhatsApp us</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                  <span>{SITE.location}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <div className="font-display text-lg font-semibold">{SITE.responseTime}</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Every inquiry gets a real reply from a senior team member — usually within a working day.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

function Field({
  label, error, children, className = "",
}: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
