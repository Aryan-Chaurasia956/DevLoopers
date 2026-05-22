import { createFileRoute, Link } from "@tanstack/react-router";
import { Copy, FileText, Check } from "lucide-react";
import { useState } from "react";
import { Section, Eyebrow } from "@/components/Section";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Payment information — Megatron Group" },
      { name: "description", content: "Manual payment instructions for active Megatron Group clients — bank transfer, UPI, and milestone breakdown." },
      { property: "og:title", content: "Payment — Megatron Group" },
      { property: "og:description", content: "Bank and UPI details for active clients." },
      { property: "og:url", content: "/payment" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/payment" }],
  }),
  component: Payment,
});

const bank = {
  beneficiary: "Megatron Group Pvt. Ltd.",
  account: "1234 5678 9012 3456",
  ifsc: "HDFC0000123",
  bank: "HDFC Bank, Connaught Place, New Delhi",
  swift: "HDFCINBB",
  upi: "megatron@hdfcbank",
};

const milestones = [
  { name: "Discovery & design", percent: "20%", when: "On project kickoff" },
  { name: "Alpha milestone", percent: "30%", when: "On working alpha" },
  { name: "Beta milestone", percent: "30%", when: "On feature-complete beta" },
  { name: "Launch & handover", percent: "20%", when: "On production launch" },
];

function Row({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border/60 py-3.5 last:border-0">
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-0.5 font-mono text-sm">{value}</div>
      </div>
      <button
        onClick={() => { navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground/70 hover:text-primary"
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
}

function Payment() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-radial-glow opacity-80" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-16 lg:px-8 lg:pt-28">
          <Eyebrow>Payment information · for active clients</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Bank transfer, UPI, or <span className="text-gradient-mint">milestone invoicing.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            We don't use payment gateways for project work — all payments go directly via bank transfer or UPI against an issued invoice. Below are the details you'll need.
          </p>
        </div>
      </section>

      <Section className="!pt-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-border bg-surface p-8">
            <Eyebrow>Bank transfer (preferred)</Eyebrow>
            <div className="mt-6 divide-y divide-border/60">
              <Row label="Beneficiary" value={bank.beneficiary} />
              <Row label="Account number" value={bank.account} />
              <Row label="IFSC code" value={bank.ifsc} />
              <Row label="Bank & branch" value={bank.bank} />
              <Row label="SWIFT (international)" value={bank.swift} />
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-8">
            <Eyebrow>UPI / Indian clients</Eyebrow>
            <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-border bg-background p-6">
              <div
                aria-label="UPI QR code placeholder"
                className="h-48 w-48 rounded-xl border-2 border-primary/40"
                style={{
                  backgroundImage: `repeating-conic-gradient(var(--color-foreground) 0% 25%, transparent 0% 50%)`,
                  backgroundSize: "12px 12px",
                  opacity: 0.85,
                }}
              />
              <div className="mt-5 font-mono text-sm">{bank.upi}</div>
              <p className="mt-2 text-xs text-muted-foreground">Scan with any UPI app · GPay, PhonePe, Paytm</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-border bg-surface p-8">
            <Eyebrow>Standard milestone schedule</Eyebrow>
            <table className="mt-6 w-full text-sm">
              <thead className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                <tr><th className="pb-3">Milestone</th><th className="pb-3">Share</th><th className="pb-3">Invoiced</th></tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {milestones.map((m) => (
                  <tr key={m.name}>
                    <td className="py-3.5">{m.name}</td>
                    <td className="py-3.5 font-display text-base text-primary">{m.percent}</td>
                    <td className="py-3.5 text-muted-foreground">{m.when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-5 text-xs text-muted-foreground">Schedule can be adjusted per project. Defined in each Statement of Work.</p>
          </div>

          <div className="rounded-3xl border border-primary/30 bg-surface p-8">
            <Eyebrow>Need a formal invoice or PO?</Eyebrow>
            <p className="mt-3 text-sm text-muted-foreground">
              We issue GST invoices for all India clients and tax-compliant invoices for international clients. Request one and we'll send it within a working day.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-mint px-5 py-2.5 text-sm font-semibold text-primary-foreground">
              <FileText className="h-4 w-4" /> Request invoice
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
