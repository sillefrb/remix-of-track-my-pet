import { createFileRoute } from "@tanstack/react-router";
import {
  Heart,
  Pill,
  Plane,
  Stethoscope,
  Home,
  Search,
  Siren,
  Clock,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-journey")({
  head: () => ({
    meta: [
      { title: "Track My Pet — One Identity, Every Situation" },
      {
        name: "description",
        content:
          "The same identity creates value in every life situation.",
      },
    ],
  }),
  component: SlideJourney,
});

const STROKE = 1.1;

const SITUATIONS = [
  { label: "NEW PUPPY", Icon: Heart },
  { label: "VACCINATION", Icon: Pill },
  { label: "TRAVEL", Icon: Plane },
  { label: "VETERINARY", Icon: Stethoscope },
  { label: "PET SITTING", Icon: Home },
  { label: "LOST PET", Icon: Search },
  { label: "EMERGENCY", Icon: Siren },
  { label: "SENIOR CARE", Icon: Clock },
];

function SlideJourney() {
  const vbW = 1500;
  const vbH = 900;
  const cx = 750;
  const cy = 460;
  const haloInnerR = 95;
  const haloOuterR = 118;
  const nodeR = 300;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* KICKER */}
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-2 md:pt-24">
        <p className="text-[10px] tracking-[0.45em] text-muted-foreground text-center">
          INVESTOR SLIDE — JOURNEY
        </p>
      </section>

      {/* HEADLINE */}
      <section className="mx-auto max-w-[1500px] px-6 pt-8 pb-4">
        <h1 className="font-serif mx-auto max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          ONE IDENTITY.
          <br />
          EVERY SITUATION.
        </h1>
      </section>

      {/* CIRCULAR JOURNEY VISUAL */}
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
                  from { stroke-dashoffset: 400; }
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
                  stroke-dasharray: 400;
                  stroke-dashoffset: 400;
                  animation: tmpDraw 1200ms ease-out forwards;
                }
              `}</style>
            </defs>

            {/* ============ ANIMAL SILHOUETTE (center) ============ */}
            <g
              className="tmp-scale text-foreground/70"
              transform={`translate(${cx} ${cy})`}
              fill="none"
              stroke="currentColor"
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animationDelay: "400ms" }}
            >
              {/* Dog head */}
              <path d="M -42 -20 L -50 -52 L -28 -38 Z" />
              <path d="M 42 -20 L 50 -52 L 28 -38 Z" />
              <ellipse cx={0} cy={4} rx={48} ry={42} />
              <circle cx={-16} cy={-4} r={2.4} fill="currentColor" />
              <circle cx={16} cy={-4} r={2.4} fill="currentColor" />
              <path d="M -6 18 Q 0 24 6 18" />
              <circle cx={0} cy={14} r={2.2} fill="currentColor" />
            </g>

            {/* ============ IDENTITY HALO ============ */}
            <circle
              cx={cx}
              cy={cy}
              r={haloOuterR}
              fill="none"
              stroke="currentColor"
              strokeWidth={0.35}
              className="text-foreground/12 tmp-scale"
              style={{ animationDelay: "600ms" }}
            />
            <circle
              cx={cx}
              cy={cy}
              r={haloInnerR + 10}
              fill="none"
              stroke="currentColor"
              strokeWidth={0.6}
              className="text-foreground/20 tmp-scale"
              style={{ animationDelay: "700ms" }}
            />
            <circle
              cx={cx}
              cy={cy}
              r={haloInnerR}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.2}
              className="text-foreground/50 tmp-scale"
              style={{ animationDelay: "800ms" }}
            />

            {/* Halo label */}
            <text
              x={cx}
              y={cy + haloOuterR + 22}
              textAnchor="middle"
              fontSize={10}
              letterSpacing={4}
              className="fill-muted-foreground tmp-fade"
              style={{ animationDelay: "900ms" }}
            >
              VERIFIED IDENTITY
            </text>

            {/* ============ CONNECTION LINES (halo -> each situation) ============ */}
            {SITUATIONS.map((_, i) => {
              const angle = (-Math.PI / 2) + (i * 2 * Math.PI) / SITUATIONS.length;
              const x1 = cx + haloInnerR * Math.cos(angle);
              const y1 = cy + haloInnerR * Math.sin(angle);
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
                  strokeWidth={0.6}
                  className="text-foreground/25 tmp-line"
                  style={{ animationDelay: `${1700 + i * 100}ms` }}
                />
              );
            })}

            {/* Situation node dots */}
            {SITUATIONS.map((_, i) => {
              const angle = (-Math.PI / 2) + (i * 2 * Math.PI) / SITUATIONS.length;
              const x = cx + nodeR * Math.cos(angle);
              const y = cy + nodeR * Math.sin(angle);
              return (
                <circle
                  key={`node-${i}`}
                  cx={x}
                  cy={y}
                  r={2.4}
                  fill="currentColor"
                  className="text-accent tmp-fade"
                  style={{ animationDelay: `${1000 + i * 150}ms` }}
                />
              );
            })}
          </svg>

          {/* ============ ICON + LABEL OVERLAYS ============ */}
          {SITUATIONS.map(({ label, Icon }, i) => {
            const angle = (-Math.PI / 2) + (i * 2 * Math.PI) / SITUATIONS.length;
            const x = cx + nodeR * Math.cos(angle);
            const y = cy + nodeR * Math.sin(angle);
            // label slightly outward
            const lx = cx + (nodeR + 52) * Math.cos(angle);
            const ly = cy + (nodeR + 52) * Math.sin(angle);
            return (
              <div key={`situation-${label}`}>
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
                    className="text-accent"
                    strokeWidth={STROKE}
                    size={26}
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

      {/* CLOSING STATEMENT */}
      <section className="mx-auto max-w-3xl px-6 pt-14 pb-24 text-center md:pb-24">
        <div className="mx-auto h-px w-16 bg-border" />
        <p className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl">
          The value of the identity grows with every interaction and every life
          event.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
