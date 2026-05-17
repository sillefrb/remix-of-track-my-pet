import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Track My Pet — Pricing" },
      {
        name: "description",
        content:
          "Simpel, transparent prismodel for ejere, klinikker og partnere — benchmarket mod den internationale referencemodel.",
      },
      { property: "og:title", content: "Track My Pet — Pricing" },
      {
        property: "og:description",
        content:
          "Free, Plus, Pro og Lifetime for ejere. Clinic Starter, Professional og Enterprise for klinikker. Partner API for ekosystemet.",
      },
    ],
  }),
  component: PricingPage,
});

const consumerPlans = [
  {
    name: "Free",
    price: "Free",
    cadence: "/forever",
    tagline: "Et simpelt udgangspunkt for én verificeret profil.",
    cta: "Get Started Free",
    features: [
      "1 pet passport",
      "Basic health records",
      "QR verification",
      "50MB storage",
    ],
    highlight: false,
  },
  {
    name: "Plus",
    price: "$9.99",
    cadence: "/month",
    tagline: "Udvidede værktøjer til rejse, dokumenter og mere.",
    cta: "Start 14-Day Trial",
    features: [
      "2 pet passports",
      "Full passport access",
      "Medical record uploads",
      "Travel export & checklist",
      "Verified badge",
      "Emergency profile",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    price: "$19.99",
    cadence: "/month",
    tagline: "For power users der vil have hele platformen.",
    cta: "Start 14-Day Trial",
    features: [
      "Unlimited pets",
      "AI health insights",
      "Lost pet alerts",
      "NFT passport minting",
      "Premium travel clearance",
      "Priority support",
      "5GB storage",
    ],
    highlight: false,
  },
  {
    name: "Lifetime Passport",
    price: "$299",
    cadence: "one-time",
    tagline: "Én betaling. Livstidsadgang.",
    cta: "Buy Lifetime Pass",
    features: [
      "1 lifetime pet passport",
      "Full passport access",
      "Medical records",
      "Travel tools",
      "One-time $299 payment",
    ],
    highlight: false,
  },
];

const orgPlans = [
  {
    name: "Clinic Starter",
    price: "$49",
    cadence: "/mo",
    features: [
      "Up to 50 pets",
      "Passport creation",
      "Manual record uploads",
      "3 staff seats",
      "Basic clinic dashboard",
    ],
  },
  {
    name: "Clinic Professional",
    price: "$99",
    cadence: "/mo",
    features: [
      "Unlimited pets",
      "Bulk upload & automation",
      "Email passport delivery",
      "Clinic branding",
      "5 staff seats",
      "Record templates",
    ],
  },
  {
    name: "Clinic Enterprise",
    price: "$299",
    cadence: "/mo",
    features: [
      "Everything in Professional",
      "White label",
      "API access",
      "Audit logs",
      "Multi-location",
      "25 staff seats",
    ],
  },
  {
    name: "Shelter Basic",
    price: "Free",
    cadence: "/mo",
    features: [
      "Bulk pet creation",
      "Adoption tracking",
      "Pre-generated passports",
      "3 staff seats",
      "Free for shelters",
    ],
  },
  {
    name: "Partner Validation",
    price: "$500",
    cadence: "/mo",
    features: [
      "Passport scanner",
      "Validation dashboard",
      "Compliance view",
      "API access (50K/mo)",
    ],
  },
  {
    name: "Partner API Access",
    price: "$1,000",
    cadence: "/mo",
    features: [
      "API access (500K/mo)",
      "API logging",
      "White label",
      "10 staff seats",
    ],
  },
];

function PricingPage() {
  return (
    <div className="bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <p className="text-[10px] tracking-[0.4em] text-muted-foreground">
          PRICING — REFERENCEMODEL
        </p>
        <h1 className="font-serif mt-8 text-4xl font-light leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          Simple,{" "}
          <span className="italic text-accent">transparent</span> pricing.
        </h1>
        <p className="mx-auto mt-10 max-w-xl text-sm font-light leading-relaxed text-foreground/75">
          Start med essentielt — opgradér når dyret, husstanden, klinikken eller
          organisationen vokser. Prismodellen er benchmarket 1:1 mod den
          internationale referencemodel for at validere prispunkter og
          tier-arkitektur.
        </p>
        <div className="mx-auto mt-12 inline-flex items-center gap-2 rounded-full border border-border px-2 py-1 text-[11px] tracking-[0.25em] text-muted-foreground">
          <span className="rounded-full bg-foreground px-4 py-2 text-background">
            MONTHLY
          </span>
          <span className="px-4 py-2">ANNUAL · SAVE 17%</span>
        </div>
      </section>

      {/* CONSUMER PLANS */}
      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:pb-32">
        <p className="text-[10px] tracking-[0.4em] text-muted-foreground">
          FOR EJERE — N°01 / CONSUMER
        </p>
        <h2 className="font-serif mt-6 max-w-2xl text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
          Fire planer.{" "}
          <span className="italic text-accent">Ét identitetslag.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {consumerPlans.map((p) => (
            <article
              key={p.name}
              className={`flex flex-col bg-background p-8 ${
                p.highlight ? "ring-1 ring-accent" : ""
              }`}
            >
              {p.highlight && (
                <span className="mb-4 inline-block w-fit rounded-full bg-accent/10 px-3 py-1 text-[10px] tracking-[0.3em] text-accent">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-serif text-2xl font-light italic">
                {p.name}
              </h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-serif text-4xl font-light">
                  {p.price}
                </span>
                <span className="text-xs font-light text-muted-foreground">
                  {p.cadence}
                </span>
              </div>
              <p className="mt-4 text-sm font-light leading-relaxed text-foreground/70">
                {p.tagline}
              </p>
              <ul className="mt-8 flex-1 space-y-3 text-[13px] font-light text-foreground/75">
                {p.features.map((f) => (
                  <li key={f} className="flex items-baseline gap-3">
                    <span className="h-px w-3 translate-y-[-4px] bg-border" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-10 w-full rounded-full px-6 py-3 text-xs tracking-[0.2em] transition ${
                  p.highlight
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                {p.cta}
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* ORG PLANS */}
      <section className="bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">
            FOR KLINIKKER, SHELTERS & PARTNERE — N°02 / B2B
          </p>
          <h2 className="font-serif mt-6 max-w-3xl text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
            Connected workflows for{" "}
            <span className="italic text-accent">clinics, shelters and partners.</span>
          </h2>
          <p className="mt-8 max-w-xl text-sm font-light leading-relaxed text-foreground/75">
            Tre niveauer for klinikker, gratis adgang for shelters og to
            API-tiers for partnere — forsikring, told, rejse, groomers og
            services.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {orgPlans.map((p) => (
              <article
                key={p.name}
                className="flex flex-col bg-card p-8"
              >
                <h3 className="font-serif text-xl font-light italic">
                  {p.name}
                </h3>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-serif text-3xl font-light">
                    {p.price}
                  </span>
                  <span className="text-xs font-light text-muted-foreground">
                    {p.cadence}
                  </span>
                </div>
                <ul className="mt-8 flex-1 space-y-3 text-[13px] font-light text-foreground/75">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-baseline gap-3">
                      <span className="h-px w-3 translate-y-[-4px] bg-border" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="mt-10 w-full rounded-full border border-border bg-background px-6 py-3 text-xs tracking-[0.2em] text-foreground transition hover:bg-muted"
                >
                  {p.name.startsWith("Partner") ||
                  p.name.endsWith("Enterprise")
                    ? "Contact Sales"
                    : "Start Trial"}
                </button>
              </article>
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-xs font-light leading-relaxed text-muted-foreground">
            Shelters og rescues kan kvalificere sig til gratis eller
            subsidieret adgang. Kontakt os for at høre mere.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <p className="text-[10px] tracking-[0.4em] text-muted-foreground">
          BUILD THE LAYER
        </p>
        <h2 className="font-serif mt-8 text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
          Start with building your pet's{" "}
          <span className="italic text-accent">verified identity</span> today.
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-sm font-light leading-relaxed text-foreground/75">
          Join pet owners, clinics, og organisationer der bruger Track My Pet
          til at skabe et mere connected, secure system for pet identity og
          records.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            className="rounded-full bg-emerald-400 px-8 py-4 text-sm font-medium tracking-wide text-foreground hover:bg-emerald-500"
          >
            Get Started Free
          </button>
          <button
            type="button"
            className="rounded-full border border-border bg-background px-8 py-4 text-sm font-light tracking-wide hover:bg-muted"
          >
            For Clinics & Vets
          </button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
