import { createFileRoute } from "@tanstack/react-router";
import {
  Satellite,
  MapPin,
  Activity,
  Route as RouteIcon,
  User,
  HeartPulse,
  Syringe,
  ShieldCheck,
  Siren,
  Plane,
  Search,
  Stethoscope,
  Truck,
  Handshake,
  FileText,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-context")({
  head: () => ({
    meta: [
      { title: "Track My Pet — Location, Identity, Context" },
      {
        name: "description",
        content:
          "Tracking becomes exponentially more valuable when combined with identity and context.",
      },
    ],
  }),
  component: SlideContext,
});

const LOCATION_ITEMS = [
  { label: "Live position", Icon: MapPin },
  { label: "Geofence", Icon: ShieldCheck },
  { label: "Activity", Icon: Activity },
  { label: "Movement history", Icon: RouteIcon },
];

const IDENTITY_ITEMS = [
  { label: "Owner", Icon: User },
  { label: "Medical profile", Icon: HeartPulse },
  { label: "Vaccinations", Icon: Syringe },
  { label: "Insurance", Icon: ShieldCheck },
  { label: "Emergency contacts", Icon: Siren },
  { label: "Travel documents", Icon: Plane },
];

const CONTEXT_ITEMS = [
  { label: "Lost pet recovery", Icon: Search },
  { label: "Faster veterinary decisions", Icon: Stethoscope },
  { label: "Better emergency response", Icon: Siren },
  { label: "Simpler travel", Icon: Plane },
  { label: "Trusted handover to carers", Icon: Handshake },
  { label: "Better insurance documentation", Icon: FileText },
];

function ColumnHeader({
  kicker,
  Icon,
  delay,
}: {
  kicker: string;
  Icon: typeof MapPin;
  delay: number;
}) {
  return (
    <div
      className="tmp-col flex flex-col items-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon
        className="text-accent"
        strokeWidth={1.2}
        size={56}
        aria-hidden
      />
      <p className="mt-6 text-[11px] tracking-[0.45em] text-foreground/70">
        {kicker}
      </p>
      <div className="mt-5 h-px w-10 bg-border" />
    </div>
  );
}

function ItemList({
  items,
  delay,
}: {
  items: { label: string; Icon: typeof MapPin }[];
  delay: number;
}) {
  return (
    <ul className="mt-8 space-y-4">
      {items.map(({ label, Icon }, i) => (
        <li
          key={label}
          className="tmp-item flex items-center justify-center gap-3 text-center"
          style={{ animationDelay: `${delay + i * 90}ms` }}
        >
          <Icon
            className="text-foreground/55 shrink-0"
            strokeWidth={1.2}
            size={16}
            aria-hidden
          />
          <span className="font-serif text-base font-light leading-snug text-foreground/85 md:text-lg">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SlideContext() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <style>{`
        @keyframes tmpFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tmpDraw {
          from { stroke-dashoffset: 600; }
          to { stroke-dashoffset: 0; }
        }
        .tmp-col { animation: tmpFadeIn 800ms ease-out both; opacity: 0; }
        .tmp-item { animation: tmpFadeIn 700ms ease-out both; opacity: 0; }
        .tmp-line {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: tmpDraw 1400ms ease-out forwards;
        }
      `}</style>

      {/* HEADLINE */}
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-6 md:pt-24">
        <p className="text-[10px] tracking-[0.45em] text-muted-foreground text-center">
          INVESTOR SLIDE — 07
        </p>
        <h1 className="font-serif mx-auto mt-10 max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          LOCATION TELLS YOU WHERE.
          <br />
          IDENTITY TELLS YOU WHO.
        </h1>
      </section>

      {/* THREE COLUMNS */}
      <section className="mx-auto max-w-[1400px] px-6 pt-20 pb-6">
        <div className="relative">
          {/* Connection lines overlay (desktop only) */}
          <svg
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-0 right-0 top-[120px] hidden h-[180px] w-full md:block"
            aria-hidden
          >
            {/* Left (LOCATION) -> Right (CONTEXT) */}
            <path
              d="M 180 30 C 500 30, 700 170, 1020 170"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              className="tmp-line text-foreground/25"
              style={{ animationDelay: "2200ms" }}
            />
            {/* Center (IDENTITY) -> Right (CONTEXT) */}
            <path
              d="M 600 30 C 760 30, 860 100, 1020 170"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              className="tmp-line text-foreground/25"
              style={{ animationDelay: "2500ms" }}
            />
          </svg>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-10">
            {/* LOCATION */}
            <div className="flex flex-col items-center">
              <ColumnHeader kicker="LOCATION" Icon={Satellite} delay={300} />
              <ItemList items={LOCATION_ITEMS} delay={700} />
            </div>

            {/* IDENTITY */}
            <div className="flex flex-col items-center">
              <ColumnHeader kicker="IDENTITY" Icon={ShieldCheck} delay={900} />
              <ItemList items={IDENTITY_ITEMS} delay={1300} />
            </div>

            {/* CONTEXT */}
            <div className="flex flex-col items-center">
              <ColumnHeader kicker="CONTEXT" Icon={Truck} delay={1600} />
              <ItemList items={CONTEXT_ITEMS} delay={2000} />
            </div>
          </div>
        </div>
      </section>

      {/* BODY COPY */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-10 text-center md:pt-28">
        <p className="font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          GPS tracking creates location data.
        </p>
        <p className="mt-6 font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          Digital identity adds ownership, health information, documentation
          and relationships.
        </p>
        <p className="mt-6 font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          Together they create context that improves safety, care and decision
          making throughout the animal's life.
        </p>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-3xl px-6 pt-12 pb-32 text-center md:pb-40">
        <div className="mx-auto h-px w-16 bg-border" />
        <p className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl">
          Tracking becomes more powerful when connected
          <br />
          to identity and documentation.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
