import { createFileRoute } from "@tanstack/react-router";
import {
  User,
  HeartPulse,
  Syringe,
  ShieldCheck,
  Plane,
  MapPin,
  FileText,
  Siren,
  Activity,
  Globe,
  Stethoscope,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-ai")({
  head: () => ({
    meta: [
      { title: "Track My Pet — AI Powered by Connected Data" },
      {
        name: "description",
        content:
          "AI becomes valuable when information follows the animal throughout life.",
      },
    ],
  }),
  component: SlideAI,
});

const PROFILE_ITEMS = [
  { label: "Identity", Icon: User },
  { label: "Health records", Icon: HeartPulse },
  { label: "Vaccinations", Icon: Syringe },
  { label: "Insurance", Icon: ShieldCheck },
  { label: "Travel history", Icon: Plane },
  { label: "Tracking data", Icon: MapPin },
  { label: "Ownership history", Icon: FileText },
  { label: "Emergency information", Icon: Siren },
];

const OUTCOME_ITEMS = [
  { label: "Health insights", Icon: Activity },
  { label: "Travel readiness", Icon: Globe },
  { label: "Emergency support", Icon: Siren },
  { label: "Preventive care", Icon: Stethoscope },
  { label: "Insurance support", Icon: ShieldCheck },
  { label: "Population insights", Icon: BarChart3 },
];

function ColumnHeader({
  kicker,
  Icon,
  delay,
}: {
  kicker: string;
  Icon: typeof User;
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
  items: { label: string; Icon: typeof User }[];
  delay: number;
}) {
  return (
    <ul className="mt-8 space-y-4">
      {items.map(({ label, Icon }, i) => (
        <li
          key={label}
          className="tmp-item flex items-center justify-center gap-3 text-center"
          style={{ animationDelay: `${delay + i * 80}ms` }}
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

function SlideAI() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <style>{`
        @keyframes tmpFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tmpScaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes tmpDraw {
          from { stroke-dashoffset: 700; }
          to { stroke-dashoffset: 0; }
        }
        .tmp-col { animation: tmpFadeIn 800ms ease-out both; opacity: 0; }
        .tmp-item { animation: tmpFadeIn 700ms ease-out both; opacity: 0; }
        .tmp-center {
          animation: tmpScaleIn 900ms ease-out both;
          transform-origin: center;
        }
        .tmp-line {
          stroke-dasharray: 700;
          stroke-dashoffset: 700;
          animation: tmpDraw 1400ms ease-out forwards;
        }
      `}</style>

      {/* HEADLINE */}
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-6 md:pt-24">
        <p className="text-[10px] tracking-[0.45em] text-muted-foreground text-center">
          INVESTOR SLIDE — 08
        </p>
        <h1 className="font-serif mx-auto mt-10 max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          AI BECOMES POWERFUL
          <br />
          WHEN DATA STAYS CONNECTED.
        </h1>
      </section>

      {/* THREE-COLUMN FLOW */}
      <section className="mx-auto max-w-[1400px] px-6 pt-20 pb-6">
        <div className="relative">
          {/* Connection lines overlay (desktop only) */}
          <svg
            viewBox="0 0 1400 600"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-0 right-0 top-0 hidden h-full w-full md:block"
            aria-hidden
          >
            {/* Left -> Center flow lines */}
            <path
              d="M 260 140 C 500 140, 550 260, 700 260"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              className="tmp-line text-foreground/20"
              style={{ animationDelay: "2200ms" }}
            />
            <path
              d="M 260 300 C 480 300, 550 280, 700 280"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              className="tmp-line text-foreground/20"
              style={{ animationDelay: "2350ms" }}
            />
            <path
              d="M 260 460 C 500 460, 550 300, 700 300"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              className="tmp-line text-foreground/20"
              style={{ animationDelay: "2500ms" }}
            />

            {/* Center -> Right flow lines */}
            <path
              d="M 700 260 C 850 260, 900 160, 1140 160"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              className="tmp-line text-foreground/20"
              style={{ animationDelay: "2700ms" }}
            />
            <path
              d="M 700 280 C 850 280, 900 280, 1140 280"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              className="tmp-line text-foreground/20"
              style={{ animationDelay: "2850ms" }}
            />
            <path
              d="M 700 300 C 850 300, 900 400, 1140 400"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              className="tmp-line text-foreground/20"
              style={{ animationDelay: "3000ms" }}
            />

            {/* Center AI element */}
            <g
              className="tmp-center text-foreground"
              transform="translate(700, 280)"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Outer subtle halo */}
              <circle
                r={92}
                strokeWidth={0.4}
                className="text-foreground/12"
              />
              {/* Main AI ring */}
              <circle r={72} strokeWidth={1.2} />
              {/* Inner accent ring */}
              <circle
                r={56}
                strokeWidth={0.5}
                className="text-accent/30"
              />
              {/* Core dot */}
              <circle r={3.5} fill="currentColor" stroke="none" className="text-foreground/40" />
              {/* Subtle sparkle accent */}
              <path
                d="M0 -28 L0 -36 M0 28 L0 36 M-28 0 L-36 0 M28 0 L36 0"
                strokeWidth={0.8}
                className="text-accent/40"
              />
            </g>

            {/* Center label below AI element */}
            <text
              x={700}
              y={380}
              textAnchor="middle"
              fontSize={13}
              letterSpacing={5}
              fill="currentColor"
              className="text-foreground/70"
            >
              CONTINUOUS INTELLIGENCE
            </text>
            <text
              x={700}
              y={402}
              textAnchor="middle"
              fontSize={10}
              letterSpacing={4}
              fill="currentColor"
              className="text-muted-foreground"
            >
              TRACK MY PET
            </text>
          </svg>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-10">
            {/* LEFT — PROFILE DATA */}
            <div className="flex flex-col items-center">
              <ColumnHeader kicker="PROFILE DATA" Icon={User} delay={300} />
              <ItemList items={PROFILE_ITEMS} delay={600} />
            </div>

            {/* CENTER — AI LAYER (spacer on desktop, visible element on mobile) */}
            <div className="flex flex-col items-center md:hidden">
              <Sparkles
                className="text-accent"
                strokeWidth={1.2}
                size={56}
                aria-hidden
              />
              <p className="mt-6 text-[11px] tracking-[0.45em] text-foreground/70">
                AI LAYER
              </p>
              <div className="mt-5 h-px w-10 bg-border" />
            </div>

            {/* RIGHT — AI OUTCOMES */}
            <div className="flex flex-col items-center">
              <ColumnHeader kicker="AI OUTCOMES" Icon={Sparkles} delay={1400} />
              <ItemList items={OUTCOME_ITEMS} delay={1700} />
            </div>
          </div>
        </div>
      </section>

      {/* BODY COPY */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-10 text-center md:pt-28">
        <p className="font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          Health information, travel history, ownership records and
          documentation create value when they remain connected over time.
        </p>
        <p className="mt-6 font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          AI transforms that continuity into insights, recommendations and better
          decisions for owners, veterinarians and partners.
        </p>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-3xl px-6 pt-12 pb-32 text-center md:pb-40">
        <div className="mx-auto h-px w-16 bg-border" />
        <p className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl">
          The value of AI grows with every interaction, every document and every
          year of the animal's life.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
