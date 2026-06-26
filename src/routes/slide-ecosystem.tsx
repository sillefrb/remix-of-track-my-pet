import { createFileRoute } from "@tanstack/react-router";
import {
  User,
  Stethoscope,
  ShieldCheck,
  MapPin,
  Plane,
  Landmark,
  Home,
  Microscope,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-ecosystem")({
  head: () => ({
    meta: [
      { title: "Track My Pet, One identity. An entire lifetime." },
      {
        name: "description",
        content:
          "One identity connects the entire ecosystem around the animal.",
      },
    ],
  }),
  component: SlideEcosystem,
});

const NODES = [
  { label: "Pet owner", Icon: User },
  { label: "Veterinarian", Icon: Stethoscope },
  { label: "Insurance", Icon: ShieldCheck },
  { label: "Tracking", Icon: MapPin },
  { label: "Travel", Icon: Plane },
  { label: "Authorities", Icon: Landmark },
  { label: "Pet sitting", Icon: Home },
  { label: "Research", Icon: Microscope },
];

function SlideEcosystem() {
  // Diagram geometry, in SVG viewBox coordinates (1000 x 1000).
  const cx = 500;
  const cy = 500;
  const centerR = 82;
  const nodeR = 340;
  const nodeHit = 56;

  const positions = NODES.map((_, i) => {
    // Start at top (-90deg), evenly distribute.
    const angle = (-Math.PI / 2) + (i * 2 * Math.PI) / NODES.length;
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
          INVESTOR SLIDE — 02
        </p>
        <h1 className="font-serif mx-auto mt-10 max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          ONE IDENTITY.
          <br />
          AN ENTIRE LIFETIME.
        </h1>
      </section>

      {/* DIAGRAM */}
      <section className="mx-auto max-w-[1200px] px-6 pt-10 pb-6">
        <div className="relative mx-auto aspect-square w-full max-w-[950px]">
          <svg
            viewBox="0 0 1000 1000"
            className="h-full w-full"
            aria-hidden
          >
            <defs>
              <style>{`
                @keyframes tmpFadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes tmpDraw { from { stroke-dashoffset: 600; } to { stroke-dashoffset: 0; } }
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
                  stroke-dasharray: 600;
                  stroke-dashoffset: 600;
                  animation: tmpDraw 1200ms ease-out forwards;
                }
              `}</style>
            </defs>

            {/* Connection lines: center -> each node. No node-to-node lines. */}
            {positions.map((p, i) => {
              const dx = p.x - cx;
              const dy = p.y - cy;
              const len = Math.hypot(dx, dy);
              const ux = dx / len;
              const uy = dy / len;
              const x1 = cx + ux * (centerR + 10);
              const y1 = cy + uy * (centerR + 10);
              const x2 = p.x - ux * (nodeHit - 8);
              const y2 = p.y - uy * (nodeHit - 8);
              return (
                <line
                  key={`l-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth={1}
                  className="tmp-line text-foreground/25"
                  style={{ animationDelay: `${1600 + i * 100}ms` }}
                />
              );
            })}

            {/* Central verified profile element */}
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
              {/* Main profile ring */}
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
          </svg>

          {/* Central label, positioned just below the profile circle */}
          <div
            className="tmp-center absolute left-1/2 flex flex-col items-center"
            style={{
              top: `${((cy + centerR + 28) / 1000) * 100}%`,
              transform: "translateX(-50%)",
            }}
          >
            <span className="text-[10px] tracking-[0.45em] text-foreground/70">
              VERIFIED IDENTITY
            </span>
            <span className="mt-2 text-[9px] tracking-[0.32em] text-muted-foreground">
              TRACK MY PET
            </span>
          </div>

          {/* Node icons + labels, absolutely positioned over the SVG */}
          {NODES.map(({ label, Icon }, i) => {
            const p = positions[i];
            const leftPct = (p.x / 1000) * 100;
            const topPct = (p.y / 1000) * 100;
            const labelAbove = p.y < cy - 50;
            return (
              <div
                key={label}
                className="tmp-node absolute flex flex-col items-center"
                style={{
                  left: `${leftPct}%`,
                  top: `${topPct}%`,
                  transform: "translate(-50%, -50%)",
                  animationDelay: `${400 + i * 120}ms`,
                }}
              >
                {labelAbove && (
                  <span className="mb-3 text-[10px] tracking-[0.32em] text-foreground/70">
                    {label.toUpperCase()}
                  </span>
                )}
                <Icon
                  className="text-accent"
                  strokeWidth={1.2}
                  size={36}
                  aria-hidden
                />
                {!labelAbove && (
                  <span className="mt-3 text-[10px] tracking-[0.32em] text-foreground/70">
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
          Identity becomes the foundation for documentation, services, AI and
          future integrations.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
