import { createFileRoute } from "@tanstack/react-router";
import {
  Tag,
  CreditCard,
  FolderOpen,
  User,
  FileText,
  HeartPulse,
  ShieldCheck,
  Lock,
  Heart,
  Plane,
  Siren,
  MapPin,
  Home,
  Sparkles,
  Stethoscope,
  Shield,
  Satellite,
  Globe,
  Microscope,
  ShoppingBag,
  Users,
  Lightbulb,
  TrendingUp,
  AlertTriangle,
  Activity,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-business-model")({
  head: () => ({
    meta: [
      { title: "Track My Pet — Business Model" },
      {
        name: "description",
        content:
          "The business model expands as the ecosystem grows. Multiple revenue streams, one identity layer.",
      },
    ],
  }),
  component: SlideBusinessModel,
});

const LAYERS = [
  {
    kicker: "ENTRY POINT",
    items: [
      { label: "Premium tag", Icon: Tag },
      { label: "Premium card", Icon: CreditCard },
      { label: "Welcome folder", Icon: FolderOpen },
    ],
  },
  {
    kicker: "IDENTITY LAYER",
    items: [
      { label: "Identity profile", Icon: User },
      { label: "Documentation", Icon: FileText },
      { label: "Health records", Icon: HeartPulse },
      { label: "Ownership", Icon: ShieldCheck },
      { label: "Permissions", Icon: Lock },
    ],
  },
  {
    kicker: "SUBSCRIPTION LAYER",
    items: [
      { label: "Health", Icon: Heart },
      { label: "Travel", Icon: Plane },
      { label: "Emergency", Icon: Siren },
      { label: "Tracking", Icon: MapPin },
      { label: "Care", Icon: Home },
      { label: "AI", Icon: Sparkles },
    ],
  },
  {
    kicker: "PARTNER LAYER",
    items: [
      { label: "Veterinary", Icon: Stethoscope },
      { label: "Insurance", Icon: Shield },
      { label: "Tracking", Icon: Satellite },
      { label: "Travel", Icon: Globe },
      { label: "Research", Icon: Microscope },
      { label: "Pet services", Icon: ShoppingBag },
    ],
  },
  {
    kicker: "INTELLIGENCE LAYER",
    items: [
      { label: "Population insights", Icon: Users },
      { label: "AI recommendations", Icon: Lightbulb },
      { label: "Benchmarking", Icon: TrendingUp },
      { label: "Risk modelling", Icon: AlertTriangle },
      { label: "Health trends", Icon: Activity },
    ],
  },
];

function SlideBusinessModel() {
  const vbW = 900;
  const vbH = 720;
  const cx = vbW / 2;
  const topY = 40;
  const bottomY = vbH - 40;
  const n = LAYERS.length;
  const gap = (bottomY - topY) / (n - 1);

  // Pyramid width at each layer (widens toward bottom)
  const halfWidths = [140, 220, 300, 300, 260];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <style>{`
        @keyframes tmpFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tmpDraw {
          from { stroke-dashoffset: 900; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes tmpGrow {
          from { transform: scaleX(0); opacity: 0; }
          to { transform: scaleX(1); opacity: 1; }
        }
        .tmp-layer { animation: tmpFadeIn 700ms ease-out both; opacity: 0; }
        .tmp-item { animation: tmpFadeIn 600ms ease-out both; opacity: 0; }
        .tmp-line {
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          animation: tmpDraw 1400ms ease-out forwards;
        }
        .tmp-rule {
          animation: tmpGrow 800ms ease-out both;
          transform-origin: center;
          opacity: 0;
        }
      `}</style>

      {/* HEADLINE */}
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-6 md:pt-24">
        <p className="text-[10px] tracking-[0.45em] text-muted-foreground text-center">
          INVESTOR SLIDE — 13
        </p>
        <h1 className="font-serif mx-auto mt-10 max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          MULTIPLE REVENUE STREAMS.
          <br />
          ONE IDENTITY LAYER.
        </h1>
      </section>

      {/* LAYERED VALUE MODEL */}
      <section className="mx-auto max-w-[1000px] px-6 pt-16 pb-6 md:pt-24">
        <div
          className="relative mx-auto w-full"
          style={{ aspectRatio: `${vbW} / ${vbH}` }}
        >
          <svg viewBox={`0 0 ${vbW} ${vbH}`} className="h-full w-full" aria-hidden>
            {/* Subtle expanding background shape */}
            <polygon
              points={`${cx},${topY - 20} ${cx + halfWidths[0]},${topY + gap * 0.5} ${cx + halfWidths[1]},${topY + gap * 1.5} ${cx + halfWidths[2]},${topY + gap * 2.5} ${cx + halfWidths[3]},${topY + gap * 3.5} ${cx + halfWidths[4]},${topY + gap * 4.5} ${cx - halfWidths[4]},${topY + gap * 4.5} ${cx - halfWidths[3]},${topY + gap * 3.5} ${cx - halfWidths[2]},${topY + gap * 2.5} ${cx - halfWidths[1]},${topY + gap * 1.5} ${cx - halfWidths[0]},${topY + gap * 0.5}`}
              fill="currentColor"
              className="tmp-layer text-accent/8"
              style={{ animationDelay: "200ms" }}
            />

            {/* Vertical spine */}
            <line
              x1={cx}
              y1={topY}
              x2={cx}
              y2={bottomY}
              stroke="currentColor"
              strokeWidth={1}
              className="tmp-line text-foreground/15"
              style={{ animationDelay: "300ms" }}
            />

            {/* Layer nodes on spine */}
            {LAYERS.map((_, i) => {
              const y = topY + i * gap;
              return (
                <circle
                  key={`node-${i}`}
                  cx={cx}
                  cy={y}
                  r={3}
                  fill="var(--background)"
                  stroke="currentColor"
                  strokeWidth={1}
                  className="tmp-layer text-accent"
                  style={{ animationDelay: `${400 + i * 200}ms` }}
                />
              );
            })}

            {/* Horizontal rules between layers */}
            {LAYERS.map((_, i) => {
              const y = topY + i * gap;
              const hw = halfWidths[i];
              return (
                <line
                  key={`rule-${i}`}
                  x1={cx - hw}
                  y1={y}
                  x2={cx + hw}
                  y2={y}
                  stroke="currentColor"
                  strokeWidth={1}
                  className="tmp-rule text-foreground/20"
                  style={{ animationDelay: `${600 + i * 200}ms` }}
                />
              );
            })}

            {/* Layer labels */}
            {LAYERS.map((layer, i) => {
              const y = topY + i * gap;
              return (
                <text
                  key={layer.kicker}
                  x={cx}
                  y={y - 14}
                  textAnchor="middle"
                  fontSize={10}
                  letterSpacing={4}
                  fill="currentColor"
                  className="tmp-layer text-muted-foreground"
                  style={{ animationDelay: `${500 + i * 200}ms` }}
                >
                  {layer.kicker}
                </text>
              );
            })}
          </svg>

          {/* Items overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {LAYERS.map((layer, i) => {
              const y = topY + i * gap;
              const topPct = (y / vbH) * 100;
              return (
                <div
                  key={layer.kicker}
                  className="tmp-layer absolute left-0 right-0 flex items-center justify-center gap-5 md:gap-7"
                  style={{
                    top: `${topPct}%`,
                    transform: "translateY(-50%)",
                    animationDelay: `${700 + i * 200}ms`,
                  }}
                >
                  {layer.items.map(({ label, Icon }, j) => (
                    <div
                      key={label}
                      className="tmp-item flex flex-col items-center gap-1.5"
                      style={{ animationDelay: `${900 + i * 200 + j * 70}ms` }}
                    >
                      <Icon
                        className="text-foreground/50"
                        strokeWidth={1.2}
                        size={18}
                        aria-hidden
                      />
                      <span className="text-[9px] tracking-[0.2em] text-foreground/70 whitespace-nowrap">
                        {label.toUpperCase()}
                      </span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BODY COPY */}
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-10 text-center md:pt-24">
        <p className="font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          The physical products establish the relationship.
        </p>
        <p className="mt-6 font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          Subscriptions strengthen engagement.
        </p>
        <p className="mt-6 font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          Partners create distribution and new services.
        </p>
        <p className="mt-6 font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          Data and AI create long-term platform value.
        </p>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-3xl px-6 pt-12 pb-32 text-center md:pb-40">
        <div className="mx-auto h-px w-16 bg-border" />
        <p className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl">
          The ecosystem becomes more valuable with every new profile, service
          and partner.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
