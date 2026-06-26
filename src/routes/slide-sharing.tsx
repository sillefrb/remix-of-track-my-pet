import { createFileRoute } from "@tanstack/react-router";
import {
  User,
  Stethoscope,
  ShieldCheck,
  Home,
  Siren,
  Plane,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-sharing")({
  head: () => ({
    meta: [
      { title: "Track My Pet — Trusted Information, Controlled Access" },
      {
        name: "description",
        content:
          "Sharing trusted information creates better experiences for everyone involved.",
      },
    ],
  }),
  component: SlideSharing,
});

const STROKE = 1.1;

interface Stakeholder {
  label: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number; size?: number }>;
  permissions: number; // 1–3 dots
  lineStyle: "solid" | "medium" | "dotted";
  isOwner?: boolean;
}

const STAKEHOLDERS: Stakeholder[] = [
  { label: "OWNER", Icon: User, permissions: 3, lineStyle: "solid", isOwner: true },
  { label: "VETERINARIAN", Icon: Stethoscope, permissions: 3, lineStyle: "solid" },
  { label: "INSURANCE", Icon: ShieldCheck, permissions: 2, lineStyle: "medium" },
  { label: "PET SITTER", Icon: Home, permissions: 1, lineStyle: "dotted" },
  { label: "EMERGENCY", Icon: Siren, permissions: 3, lineStyle: "solid" },
  { label: "TRAVEL", Icon: Plane, permissions: 2, lineStyle: "medium" },
];

function SlideSharing() {
  const vbW = 1500;
  const vbH = 900;
  const cx = 750;
  const cy = 420;
  const haloR = 70;
  const nodeR = 290;

  const dashFor = (style: string) => {
    switch (style) {
      case "dotted":
        return "2 6";
      case "medium":
        return "8 6";
      default:
        return "none";
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* KICKER */}
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-2 md:pt-24">
        <p className="text-[10px] tracking-[0.45em] text-muted-foreground text-center tmp-fade">
          INVESTOR SLIDE — SHARING
        </p>
      </section>

      {/* HEADLINE */}
      <section className="mx-auto max-w-[1500px] px-6 pt-8 pb-4">
        <h1 className="font-serif mx-auto max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl tmp-fade">
          TRUSTED INFORMATION.
          <br />
          CONTROLLED ACCESS.
        </h1>
      </section>

      {/* ECOSYSTEM VISUAL */}
      <section className="mx-auto max-w-[1500px] px-6 pt-10 pb-6 md:pt-14">
        <div className="relative">
          <svg
            viewBox={`0 0 ${vbW} ${vbH}`}
            className="h-auto w-full"
            aria-hidden
          >
            <defs>
              <style>{`
                @keyframes tmpFadeIn {
                  from { opacity: 0; transform: translateY(6px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                @keyframes tmpScaleIn {
                  from { opacity: 0; transform: scale(0.9); }
                  to { opacity: 1; transform: scale(1); }
                }
                @keyframes tmpDraw {
                  from { stroke-dashoffset: 500; }
                  to { stroke-dashoffset: 0; }
                }
                .tmp-fade {
                  animation: tmpFadeIn 800ms ease-out both;
                  opacity: 0;
                }
                .tmp-scale {
                  animation: tmpScaleIn 900ms ease-out both;
                  opacity: 0;
                  transform-origin: center;
                }
                .tmp-line {
                  stroke-dasharray: 500;
                  stroke-dashoffset: 500;
                  animation: tmpDraw 1200ms ease-out forwards;
                }
              `}</style>
            </defs>

            {/* Subtle permission zone rings */}
            <circle
              cx={cx}
              cy={cy}
              r={haloR + 50}
              fill="none"
              stroke="currentColor"
              strokeWidth={0.25}
              className="text-foreground/10 tmp-scale"
              style={{ animationDelay: "500ms" }}
            />
            <circle
              cx={cx}
              cy={cy}
              r={haloR + 110}
              fill="none"
              stroke="currentColor"
              strokeWidth={0.25}
              className="text-foreground/8 tmp-scale"
              style={{ animationDelay: "600ms" }}
            />
            <circle
              cx={cx}
              cy={cy}
              r={haloR + 170}
              fill="none"
              stroke="currentColor"
              strokeWidth={0.25}
              className="text-foreground/6 tmp-scale"
              style={{ animationDelay: "700ms" }}
            />

            {/* ============ CENTER: VERIFIED IDENTITY ============ */}
            <g
              className="tmp-scale text-foreground"
              transform={`translate(${cx} ${cy})`}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animationDelay: "300ms" }}
            >
              <circle r={haloR + 24} strokeWidth={0.3} className="text-foreground/10" />
              <circle r={haloR + 12} strokeWidth={0.5} className="text-foreground/20" />
              <circle r={haloR} strokeWidth={1.2} />
              <path d="M -22 2 L -8 14 L 20 -10" strokeWidth={2} />
              <circle r={2} fill="currentColor" stroke="none" />
            </g>

            {/* Center label */}
            <text
              x={cx}
              y={cy + haloR + 28}
              textAnchor="middle"
              fontSize={10}
              letterSpacing={4}
              className="fill-muted-foreground tmp-fade"
              style={{ animationDelay: "800ms" }}
            >
              VERIFIED IDENTITY
            </text>

            {/* ============ CONNECTION LINES ============ */}
            {STAKEHOLDERS.map((s, i) => {
              const angle = (-Math.PI / 2) + (i * 2 * Math.PI) / STAKEHOLDERS.length;
              const x1 = cx + haloR * Math.cos(angle);
              const y1 = cy + haloR * Math.sin(angle);
              const x2 = cx + (nodeR - 34) * Math.cos(angle);
              const y2 = cy + (nodeR - 34) * Math.sin(angle);
              return (
                <line
                  key={`conn-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth={0.7}
                  strokeDasharray={dashFor(s.lineStyle)}
                  className={`tmp-line ${s.isOwner ? "text-accent/50" : "text-foreground/20"}`}
                  style={{ animationDelay: `${1400 + i * 120}ms` }}
                />
              );
            })}

            {/* Stakeholder node dots */}
            {STAKEHOLDERS.map((s, i) => {
              const angle = (-Math.PI / 2) + (i * 2 * Math.PI) / STAKEHOLDERS.length;
              const x = cx + nodeR * Math.cos(angle);
              const y = cy + nodeR * Math.sin(angle);
              return (
                <g key={`node-${i}`}>
                  {/* Owner control ring */}
                  {s.isOwner && (
                    <circle
                      cx={x}
                      cy={y}
                      r={14}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={0.6}
                      className="text-accent/40 tmp-scale"
                      style={{ animationDelay: `${1000 + i * 150}ms`, transformOrigin: `${x}px ${y}px` }}
                    />
                  )}
                  <circle
                    cx={x}
                    cy={y}
                    r={s.isOwner ? 4 : 2.6}
                    fill="currentColor"
                    className={`tmp-fade ${s.isOwner ? "text-accent" : "text-foreground/50"}`}
                    style={{ animationDelay: `${1000 + i * 150}ms` }}
                  />
                </g>
              );
            })}

            {/* Permission dots near each node (subtle horizontal indicators) */}
            {STAKEHOLDERS.map((s, i) => {
              const angle = (-Math.PI / 2) + (i * 2 * Math.PI) / STAKEHOLDERS.length;
              const nx = cx + nodeR * Math.cos(angle);
              const ny = cy + nodeR * Math.sin(angle);
              // Perpendicular direction for dot placement
              const px = -Math.sin(angle);
              const py = Math.cos(angle);
              const dotGap = 5;
              const startOffset = -((s.permissions - 1) * dotGap) / 2;
              return (
                <g key={`perm-${i}`} className="tmp-fade" style={{ animationDelay: `${1600 + i * 120}ms` }}>
                  {Array.from({ length: s.permissions }).map((_, d) => {
                    const dx = nx + px * (startOffset + d * dotGap);
                    const dy = ny + py * (startOffset + d * dotGap);
                    return (
                      <circle
                        key={`dot-${d}`}
                        cx={dx}
                        cy={dy}
                        r={1.4}
                        className={s.isOwner ? "fill-accent" : "fill-foreground/35"}
                      />
                    );
                  })}
                </g>
              );
            })}
          </svg>

          {/* ============ ICON + LABEL OVERLAYS ============ */}
          {STAKEHOLDERS.map(({ label, Icon, isOwner }, i) => {
            const angle = (-Math.PI / 2) + (i * 2 * Math.PI) / STAKEHOLDERS.length;
            const x = cx + nodeR * Math.cos(angle);
            const y = cy + nodeR * Math.sin(angle);
            const lx = cx + (nodeR + 54) * Math.cos(angle);
            const ly = cy + (nodeR + 54) * Math.sin(angle);
            return (
              <div key={`stakeholder-${label}`}>
                {/* Icon */}
                <div
                  className="tmp-fade absolute"
                  style={{
                    left: `${(x / vbW) * 100}%`,
                    top: `${(y / vbH) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${1100 + i * 150}ms`,
                    opacity: 0,
                  }}
                >
                  <Icon
                    className={isOwner ? "text-accent" : "text-foreground/75"}
                    strokeWidth={STROKE}
                    size={isOwner ? 30 : 26}
                    aria-hidden
                  />
                </div>
                {/* Label */}
                <div
                  className="tmp-fade absolute"
                  style={{
                    left: `${(lx / vbW) * 100}%`,
                    top: `${(ly / vbH) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${1200 + i * 150}ms`,
                    opacity: 0,
                  }}
                >
                  <span className="block text-center text-[8.5px] tracking-[0.28em] text-foreground/70 whitespace-nowrap">
                    {label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BODY COPY */}
      <section className="mx-auto max-w-3xl px-6 pt-14 pb-6 text-center md:pt-20">
        <p className="font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl tmp-fade">
          Different situations require different information.
        </p>
        <p className="mt-6 font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl tmp-fade">
          Track My Pet allows owners to share trusted information with the right
          people while maintaining control over access and permissions.
        </p>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="mx-auto max-w-3xl px-6 pt-14 pb-32 text-center md:pb-40">
        <div className="mx-auto h-px w-16 bg-border tmp-fade" />
        <p className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl tmp-fade">
          Sharing becomes simpler when information starts from the same identity.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
