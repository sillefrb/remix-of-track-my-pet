import { createFileRoute } from "@tanstack/react-router";
import {
  User,
  Stethoscope,
  ShieldCheck,
  MapPin,
  Plane,
  Landmark,
  Microscope,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-regulation")({
  head: () => ({
    meta: [
      { title: "Track My Pet — Regulation Creates the Foundation" },
      {
        name: "description",
        content:
          "Regulation accelerates infrastructure adoption. Track My Pet is designed for the ecosystem emerging across Europe.",
      },
    ],
  }),
  component: SlideRegulation,
});

const MILESTONES = [
  "Microchipping",
  "National registries",
  "Cross-border travel documentation",
  "European standards",
  "Digital identity infrastructure",
];

const ECOSYSTEM = [
  { label: "Owners", Icon: User },
  { label: "Veterinary clinics", Icon: Stethoscope },
  { label: "Insurance", Icon: ShieldCheck },
  { label: "Tracking", Icon: MapPin },
  { label: "Travel", Icon: Plane },
  { label: "Authorities", Icon: Landmark },
  { label: "Research", Icon: Microscope },
];

function SlideRegulation() {
  const vbW = 1200;
  const vbH = 900;

  // Timeline geometry
  const timelineY = 480;
  const startX = 120;
  const endX = 900;
  const gap = (endX - startX) / (MILESTONES.length - 1);
  const milestoneXs = MILESTONES.map((_, i) => startX + i * gap);
  const nodeRs = [4.5, 5.5, 6.5, 7.5, 8.5];

  // Identity layer above final milestone
  const idX = endX;
  const idY = 240;
  const idR = 36;

  // Ecosystem nodes radiating from identity layer
  const ecoR = 150;
  const ecoAnglesDeg = [-45, -10, 25, 60, 120, 170, 215];
  const ecoPositions = ECOSYSTEM.map((e, i) => {
    const rad = (ecoAnglesDeg[i] * Math.PI) / 180;
    return {
      ...e,
      x: idX + ecoR * Math.cos(rad),
      y: idY + ecoR * Math.sin(rad),
      angle: rad,
    };
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <style>{`
        @keyframes tmpFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tmpScaleIn {
          from { opacity: 0; transform: scale(0.88); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes tmpDraw {
          from { stroke-dashoffset: 1000; }
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
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: tmpDraw 1600ms ease-out forwards;
        }
        .tmp-node {
          animation: tmpScaleIn 700ms ease-out both;
          opacity: 0;
          transform-origin: center;
          transform-box: fill-box;
        }
      `}</style>

      {/* KICKER + HEADLINE */}
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-4 md:pt-24">
        <p
          className="text-[10px] tracking-[0.45em] text-muted-foreground text-center tmp-fade"
          style={{ animationDelay: "200ms" }}
        >
          INVESTOR SLIDE — REGULATION
        </p>
        <h1
          className="font-serif mx-auto mt-10 max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl tmp-fade"
          style={{ animationDelay: "400ms" }}
        >
          REGULATION CREATES THE FOUNDATION.
          <br />
          INFRASTRUCTURE CREATES THE VALUE.
        </h1>
      </section>

      {/* TIMELINE + ECOSYSTEM VISUAL */}
      <section className="mx-auto max-w-[1200px] px-6 pt-12 pb-6 md:pt-16">
        <div
          className="relative mx-auto w-full"
          style={{ aspectRatio: `${vbW} / ${vbH}` }}
        >
          <svg
            viewBox={`0 0 ${vbW} ${vbH}`}
            className="h-full w-full"
            aria-hidden
          >
            {/* Horizontal timeline line */}
            <line
              x1={startX}
              y1={timelineY}
              x2={endX}
              y2={timelineY}
              stroke="currentColor"
              strokeWidth={0.8}
              className="tmp-line text-foreground/20"
              style={{ animationDelay: "600ms" }}
            />

            {/* Vertical connector: last milestone → identity layer */}
            <line
              x1={idX}
              y1={timelineY - nodeRs[MILESTONES.length - 1] - 2}
              x2={idX}
              y2={idY + idR + 10}
              stroke="currentColor"
              strokeWidth={0.8}
              className="tmp-line text-foreground/20"
              style={{ animationDelay: "1800ms" }}
            />

            {/* Milestone nodes on the timeline */}
            {milestoneXs.map((x, i) => (
              <g key={`ms-${i}`} className="tmp-node" style={{ animationDelay: `${900 + i * 200}ms` }}>
                <circle
                  cx={x}
                  cy={timelineY}
                  r={nodeRs[i]}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.1}
                  className="text-foreground"
                />
                <circle
                  cx={x}
                  cy={timelineY}
                  r={1.6}
                  className="fill-accent"
                />
              </g>
            ))}

            {/* Identity layer — Track My Pet */}
            <g
              className="tmp-scale text-foreground"
              transform={`translate(${idX} ${idY})`}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animationDelay: "1600ms", transformOrigin: `${idX}px ${idY}px` }}
            >
              <circle r={idR + 18} strokeWidth={0.35} className="text-foreground/10" />
              <circle r={idR} strokeWidth={1.2} />
              <circle r={idR * 0.55} strokeWidth={0.5} className="text-accent/35" />
              <path d="M-12 1 L-4 9 L12 -8" strokeWidth={1.6} />
              <circle r={1.8} fill="currentColor" stroke="none" />
            </g>

            {/* Identity label */}
            <g
              className="tmp-fade"
              fill="currentColor"
              style={{ animationDelay: "1900ms" }}
            >
              <text
                x={idX}
                y={idY + idR + 22}
                textAnchor="middle"
                fontSize={10}
                letterSpacing={4.5}
                className="text-foreground/75"
              >
                TRACK MY PET
              </text>
            </g>

            {/* Ecosystem connection lines */}
            {ecoPositions.map((e, i) => {
              const dx = e.x - idX;
              const dy = e.y - idY;
              const len = Math.hypot(dx, dy);
              const ux = dx / len;
              const uy = dy / len;
              const x1 = idX + ux * (idR + 10);
              const y1 = idY + uy * (idR + 10);
              const x2 = e.x - ux * 28;
              const y2 = e.y - uy * 28;
              return (
                <line
                  key={`eco-line-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth={0.7}
                  className="tmp-line text-foreground/22"
                  style={{ animationDelay: `${2200 + i * 100}ms` }}
                />
              );
            })}
          </svg>

          {/* Milestone labels — staggered below timeline */}
          {milestoneXs.map((x, i) => {
            const labelY = timelineY + 26 + (i % 2 === 0 ? 0 : 18);
            const leftPct = (x / vbW) * 100;
            const topPct = (labelY / vbH) * 100;
            return (
              <div
                key={`label-${MILESTONES[i]}`}
                className="tmp-fade absolute"
                style={{
                  left: `${leftPct}%`,
                  top: `${topPct}%`,
                  transform: "translateX(-50%)",
                  animationDelay: `${1100 + i * 200}ms`,
                }}
              >
                <span className="block text-center text-[8.5px] tracking-[0.28em] text-foreground/65 whitespace-nowrap">
                  {MILESTONES[i].toUpperCase()}
                </span>
              </div>
            );
          })}

          {/* Ecosystem node icons */}
          {ecoPositions.map((e, i) => {
            const leftPct = (e.x / vbW) * 100;
            const topPct = (e.y / vbH) * 100;
            return (
              <div
                key={`eco-icon-${e.label}`}
                className="tmp-fade absolute flex flex-col items-center"
                style={{
                  left: `${leftPct}%`,
                  top: `${topPct}%`,
                  transform: "translate(-50%, -50%)",
                  animationDelay: `${2400 + i * 100}ms`,
                }}
              >
                <e.Icon
                  className="text-accent"
                  strokeWidth={1.2}
                  size={24}
                  aria-hidden
                />
              </div>
            );
          })}

          {/* Ecosystem node labels */}
          {ecoPositions.map((e, i) => {
            const dx = e.x - idX;
            const dy = e.y - idY;
            const len = Math.hypot(dx, dy);
            const offset = 42;
            const lx = ((e.x + (dx / len) * offset) / vbW) * 100;
            const ly = ((e.y + (dy / len) * offset) / vbH) * 100;
            return (
              <div
                key={`eco-label-${e.label}`}
                className="tmp-fade absolute"
                style={{
                  left: `${lx}%`,
                  top: `${ly}%`,
                  transform: "translate(-50%, -50%)",
                  animationDelay: `${2500 + i * 100}ms`,
                }}
              >
                <span className="block text-center text-[8px] tracking-[0.28em] text-foreground/60 whitespace-nowrap">
                  {e.label.toUpperCase()}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-24 text-center md:pb-24">
        <div className="mx-auto h-px w-16 bg-border tmp-fade" style={{ animationDelay: "1800ms" }} />
        <p
          className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl tmp-fade"
          style={{ animationDelay: "2000ms" }}
        >
          Track My Pet is designed for the ecosystem emerging across Europe.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
