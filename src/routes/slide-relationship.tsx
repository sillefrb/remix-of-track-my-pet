import { createFileRoute } from "@tanstack/react-router";
import {
  PawPrint,
  FileSignature,
  Syringe,
  ShieldCheck,
  GraduationCap,
  Plane,
  Stethoscope,
  MapPin,
  Heart,
  Users,
  ScrollText,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-relationship")({
  head: () => ({
    meta: [
      { title: "Track My Pet — The Longer the Relationship, the Stronger the Platform" },
      {
        name: "description",
        content: "A long relationship creates defensibility.",
      },
    ],
  }),
  component: SlideRelationship,
});

const STAGES = [
  { label: "New puppy", Icon: PawPrint },
  { label: "Registration", Icon: FileSignature },
  { label: "Vaccinations", Icon: Syringe },
  { label: "Insurance", Icon: ShieldCheck },
  { label: "Training", Icon: GraduationCap },
  { label: "Travel", Icon: Plane },
  { label: "Veterinary care", Icon: Stethoscope },
  { label: "Tracking", Icon: MapPin },
  { label: "Senior years", Icon: Heart },
  { label: "New ownership", Icon: Users },
  { label: "Legacy", Icon: ScrollText },
];

const VALUE_LAYERS = [
  "More documentation",
  "More health history",
  "More behavioural insights",
  "More relationships",
  "More context",
  "Better AI",
  "Better services",
];

function SlideRelationship() {
  // Timeline geometry
  const vbW = 1600;
  const vbH = 520;
  const padX = 80;
  const lineY = 220;
  const count = STAGES.length;
  const step = (vbW - padX * 2) / (count - 1);
  const xs = STAGES.map((_, i) => padX + i * step);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HEADLINE */}
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-6 md:pt-24">
        <p className="text-[10px] tracking-[0.45em] text-muted-foreground text-center">
          INVESTOR SLIDE — 12
        </p>
        <h1 className="font-serif mx-auto mt-10 max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          THE LONGER THE RELATIONSHIP,
          <br />
          THE STRONGER THE PLATFORM.
        </h1>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-6 md:pt-24">
        <div className="relative mx-auto w-full">
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
                @keyframes tmpDraw {
                  from { stroke-dashoffset: var(--len, 1500); }
                  to { stroke-dashoffset: 0; }
                }
                @keyframes tmpGrow {
                  from { transform: scaleY(0); opacity: 0; }
                  to { transform: scaleY(1); opacity: 1; }
                }
                .tmp-line {
                  stroke-dasharray: 1500;
                  stroke-dashoffset: 1500;
                  animation: tmpDraw 1800ms ease-out 200ms forwards;
                }
                .tmp-stage { animation: tmpFadeIn 700ms ease-out both; opacity: 0; }
                .tmp-pet {
                  animation: tmpFadeIn 900ms ease-out 1600ms both;
                  opacity: 0;
                  transform-origin: center;
                }
                .tmp-value {
                  animation: tmpGrow 1400ms ease-out both;
                  transform-origin: center top;
                  opacity: 0;
                }
                .tmp-value-line {
                  stroke-dasharray: 1500;
                  stroke-dashoffset: 1500;
                  animation: tmpDraw 2200ms ease-out 2400ms forwards;
                }
              `}</style>
            </defs>

            {/* Main horizontal timeline */}
            <line
              x1={padX}
              y1={lineY}
              x2={vbW - padX}
              y2={lineY}
              stroke="currentColor"
              strokeWidth={1}
              className="tmp-line text-foreground/40"
            />

            {/* Tick + stage nodes */}
            {STAGES.map((s, i) => {
              const x = xs[i];
              const delay = 400 + i * 140;
              return (
                <g key={s.label} className="tmp-stage" style={{ animationDelay: `${delay}ms` }}>
                  {/* tick */}
                  <line
                    x1={x}
                    y1={lineY - 8}
                    x2={x}
                    y2={lineY + 8}
                    stroke="currentColor"
                    strokeWidth={1}
                    className="text-foreground/50"
                  />
                  {/* accent dot */}
                  <circle
                    cx={x}
                    cy={lineY}
                    r={3}
                    className="fill-accent"
                  />
                </g>
              );
            })}

            {/* Central pet (silhouette of a small dog) */}
            <g
              className="tmp-pet text-foreground"
              transform={`translate(${vbW / 2} ${lineY - 70}) scale(1.6)`}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.1}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* body */}
              <path d="M -22 6 C -22 -4 -14 -10 -4 -10 L 14 -10 C 22 -10 26 -6 26 0 L 26 8 C 26 12 23 14 20 14 L -18 14 C -21 14 -22 12 -22 8 Z" />
              {/* head */}
              <path d="M 22 -4 C 30 -8 36 -6 36 0 C 36 6 32 8 28 8" />
              {/* ear */}
              <path d="M 30 -6 L 34 -14 L 36 -4" />
              {/* eye */}
              <circle cx={32} cy={0} r={0.8} fill="currentColor" />
              {/* legs */}
              <line x1={-14} y1={14} x2={-14} y2={22} />
              <line x1={-4} y1={14} x2={-4} y2={22} />
              <line x1={14} y1={14} x2={14} y2={22} />
              <line x1={22} y1={14} x2={22} y2={22} />
              {/* tail */}
              <path d="M -22 0 C -28 -4 -30 -10 -26 -14" />
            </g>

            {/* VALUE LAYER under the timeline — growing triangle */}
            <g className="tmp-value" style={{ animationDelay: "2200ms" }}>
              <polygon
                points={`${padX},${lineY + 110} ${vbW - padX},${lineY + 110} ${vbW - padX},${lineY + 230} ${padX},${lineY + 150}`}
                fill="currentColor"
                className="text-accent/12"
                stroke="none"
              />
              <line
                x1={padX}
                y1={lineY + 150}
                x2={vbW - padX}
                y2={lineY + 110}
                stroke="currentColor"
                strokeWidth={1}
                className="tmp-value-line text-accent/70"
              />
            </g>

            {/* Value labels along the growth line */}
            {VALUE_LAYERS.map((v, i) => {
              const t = i / (VALUE_LAYERS.length - 1);
              const x = padX + t * (vbW - padX * 2);
              const y = lineY + 150 - t * 40;
              const delay = 2600 + i * 180;
              return (
                <g key={v} className="tmp-stage" style={{ animationDelay: `${delay}ms` }}>
                  <circle cx={x} cy={y} r={2.2} className="fill-accent" />
                  <text
                    x={x}
                    y={y + 28}
                    textAnchor="middle"
                    fontSize={13}
                    letterSpacing={2.8}
                    className="fill-current text-foreground/70"
                  >
                    {v.toUpperCase()}
                  </text>
                </g>
              );
            })}

            {/* Anchor label for value layer */}
            <text
              x={padX}
              y={lineY + 100}
              fontSize={10}
              letterSpacing={4}
              className="tmp-stage fill-current text-muted-foreground"
              style={{ animationDelay: "2400ms" }}
            >
              VALUE OF IDENTITY OVER TIME
            </text>
            <text
              x={vbW - padX}
              y={lineY + 100}
              textAnchor="end"
              fontSize={10}
              letterSpacing={4}
              className="tmp-stage fill-current text-muted-foreground"
              style={{ animationDelay: "2400ms" }}
            >
              COMPOUNDING →
            </text>
          </svg>

          {/* Stage icons + titles overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {STAGES.map(({ label, Icon }, i) => {
              const leftPct = (xs[i] / vbW) * 100;
              const topPct = ((lineY - 70) / vbH) * 100;
              const labelTopPct = ((lineY + 28) / vbH) * 100;
              const delay = 500 + i * 140;
              const isCenter = i === Math.floor(STAGES.length / 2);
              return (
                <div key={label}>
                  {!isCenter && (
                    <div
                      className="tmp-stage absolute flex items-center justify-center"
                      style={{
                        left: `${leftPct}%`,
                        top: `${topPct}%`,
                        transform: "translate(-50%, -50%)",
                        animationDelay: `${delay}ms`,
                      }}
                    >
                      <Icon
                        className="text-accent"
                        strokeWidth={1.2}
                        size={26}
                        aria-hidden
                      />
                    </div>
                  )}
                  <div
                    className="tmp-stage absolute"
                    style={{
                      left: `${leftPct}%`,
                      top: `${labelTopPct}%`,
                      transform: "translate(-50%, 0)",
                      animationDelay: `${delay + 80}ms`,
                    }}
                  >
                    <span className="block text-center text-[9px] tracking-[0.28em] text-foreground/75 whitespace-nowrap">
                      {label.toUpperCase()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BODY COPY */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-10 text-center md:pt-28">
        <p className="font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          Most digital products create short interactions.
        </p>
        <p className="mt-6 font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          Track My Pet follows the animal through years of health events,
          relationships, travel, care and life stages.
        </p>
        <p className="mt-6 font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          Every interaction enriches the profile and strengthens the value for
          owners, partners and the ecosystem.
        </p>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-3xl px-6 pt-12 pb-32 text-center md:pb-40">
        <div className="mx-auto h-px w-16 bg-border" />
        <p className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl">
          Time becomes a competitive advantage.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
