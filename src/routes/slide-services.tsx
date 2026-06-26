import { createFileRoute } from "@tanstack/react-router";
import {
  HeartPulse,
  Syringe,
  ShieldCheck,
  Plane,
  MapPin,
  Siren,
  Stethoscope,
  Home,
  FileText,
  BookOpen,
  Archive,
  Sparkles,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-services")({
  head: () => ({
    meta: [
      { title: "Track My Pet, One identity. Multiple services." },
      {
        name: "description",
        content:
          "Services become more valuable when they share the same identity.",
      },
    ],
  }),
  component: SlideServices,
});

const SERVICES = [
  { label: "Health records", Icon: HeartPulse },
  { label: "Vaccinations", Icon: Syringe },
  { label: "Insurance", Icon: ShieldCheck },
  { label: "Travel", Icon: Plane },
  { label: "Tracking", Icon: MapPin },
  { label: "Emergency access", Icon: Siren },
  { label: "Veterinary care", Icon: Stethoscope },
  { label: "Pet sitting", Icon: Home },
  { label: "Ownership history", Icon: FileText },
  { label: "Care instructions", Icon: BookOpen },
  { label: "Digital legacy", Icon: Archive },
  { label: "AI services", Icon: Sparkles },
];

function SlideServices() {
  // Diagram geometry — generous viewBox for 12 nodes
  const cx = 700;
  const cy = 520;
  const centerR = 82;
  const nodeR = 390;
  const nodeHit = 48;

  const positions = SERVICES.map((_, i) => {
    const angle = (-Math.PI / 2) + (i * 2 * Math.PI) / SERVICES.length;
    return {
      x: cx + nodeR * Math.cos(angle),
      y: cy + nodeR * Math.sin(angle),
      angle,
    };
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HEADLINE */}
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-6 md:pt-24">
        <p className="text-[10px] tracking-[0.45em] text-muted-foreground text-center">
          INVESTOR SLIDE — 06
        </p>
        <h1 className="font-serif mx-auto mt-10 max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          ONE IDENTITY.
          <br />
          MULTIPLE SERVICES.
        </h1>
      </section>

      {/* DIAGRAM */}
      <section className="mx-auto max-w-[1300px] px-6 pt-10 pb-6">
        <div className="relative mx-auto w-full" style={{ aspectRatio: "1400 / 1100" }}>
          <svg
            viewBox="0 0 1400 1100"
            className="h-full w-full"
            aria-hidden
          >
            <defs>
              <style>{`
                @keyframes tmpFadeIn {
                  from { opacity: 0; transform: translateY(6px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                @keyframes tmpDraw {
                  from { stroke-dashoffset: 700; }
                  to { stroke-dashoffset: 0; }
                }
                @keyframes tmpScaleIn {
                  from { opacity: 0; transform: scale(0.85); }
                  to { opacity: 1; transform: scale(1); }
                }
                .tmp-center {
                  animation: tmpScaleIn 900ms ease-out both;
                  transform-origin: center;
                }
                .tmp-node { animation: tmpFadeIn 700ms ease-out both; opacity: 0; }
                .tmp-line {
                  stroke-dasharray: 700;
                  stroke-dashoffset: 700;
                  animation: tmpDraw 1200ms ease-out forwards;
                }
              `}</style>
            </defs>

            {/* Connection lines: center -> each service node */}
            {positions.map((p, i) => {
              const dx = p.x - cx;
              const dy = p.y - cy;
              const len = Math.hypot(dx, dy);
              const ux = dx / len;
              const uy = dy / len;
              const x1 = cx + ux * (centerR + 10);
              const y1 = cy + uy * (centerR + 10);
              const x2 = p.x - ux * (nodeHit - 6);
              const y2 = p.y - uy * (nodeHit - 6);
              return (
                <line
                  key={`l-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth={1}
                  className="tmp-line text-foreground/20"
                  style={{ animationDelay: `${1800 + i * 90}ms` }}
                />
              );
            })}

            {/* Central verified identity element */}
            <g
              className="tmp-center text-foreground"
              transform={`translate(${cx} ${cy})`}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Subtle outer halo ring */}
              <circle
                r={108}
                strokeWidth={0.4}
                className="text-foreground/12"
              />
              {/* Main identity ring */}
              <circle r={centerR} strokeWidth={1.4} />
              {/* Inner accent ring */}
              <circle
                r={74}
                strokeWidth={0.5}
                className="text-accent/35"
              />
              {/* Checkmark */}
              <path
                d="M-24 2 L-10 16 L24 -14"
                strokeWidth={2.2}
              />
              {/* Center dot anchor */}
              <circle r={2.5} fill="currentColor" stroke="none" />
            </g>

            {/* Central label below the identity circle */}
            <g
              fill="currentColor"
              className="tmp-center"
            >
              <text
                x={cx}
                y={cy + centerR + 34}
                textAnchor="middle"
                fontSize={14}
                letterSpacing={6}
                className="text-foreground/70"
              >
                VERIFIED IDENTITY
              </text>
              <text
                x={cx}
                y={cy + centerR + 56}
                textAnchor="middle"
                fontSize={11}
                letterSpacing={4}
                className="text-muted-foreground"
              >
                TRACK MY PET
              </text>
            </g>
          </svg>

          {/* Service node icons + labels, absolutely positioned over the SVG */}
          {SERVICES.map(({ label, Icon }, i) => {
            const p = positions[i];
            const leftPct = (p.x / 1400) * 100;
            const topPct = (p.y / 1100) * 100;
            const labelAbove = p.y < cy - 40;
            return (
              <div
                key={label}
                className="tmp-node absolute flex flex-col items-center"
                style={{
                  left: `${leftPct}%`,
                  top: `${topPct}%`,
                  transform: "translate(-50%, -50%)",
                  animationDelay: `${400 + i * 100}ms`,
                }}
              >
                {labelAbove && (
                  <span className="mb-2 text-[10px] tracking-[0.32em] text-foreground/70 whitespace-nowrap">
                    {label.toUpperCase()}
                  </span>
                )}
                <Icon
                  className="text-accent"
                  strokeWidth={1.2}
                  size={30}
                  aria-hidden
                />
                {!labelAbove && (
                  <span className="mt-2 text-[10px] tracking-[0.32em] text-foreground/70 whitespace-nowrap">
                    {label.toUpperCase()}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-3xl px-6 pt-12 pb-24 text-center md:pb-24">
        <div className="mx-auto h-px w-16 bg-border" />
        <p className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl">
          The identity remains the same.
          <br />
          The ecosystem grows around it.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
