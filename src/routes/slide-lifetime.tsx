import { createFileRoute } from "@tanstack/react-router";
import {
  PawPrint,
  FileText,
  Syringe,
  ShieldCheck,
  Plane,
  Stethoscope,
  Home,
  Hourglass,
  UserCheck,
  Bookmark,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-lifetime")({
  head: () => ({
    meta: [
      { title: "Track My Pet, One identity follows the animal throughout life" },
      {
        name: "description",
        content:
          "One identity follows the animal throughout life.",
      },
    ],
  }),
  component: SlideLifetime,
});

const STAGES = [
  { label: "New puppy or kitten", Icon: PawPrint },
  { label: "Registration", Icon: FileText },
  { label: "Vaccinations", Icon: Syringe },
  { label: "Insurance", Icon: ShieldCheck },
  { label: "Travel", Icon: Plane },
  { label: "Veterinary care", Icon: Stethoscope },
  { label: "Pet sitting", Icon: Home },
  { label: "Senior years", Icon: Hourglass },
  { label: "Change of ownership", Icon: UserCheck },
  { label: "Legacy and care planning", Icon: Bookmark },
];

function SlideLifetime() {
  const vbW = 1400;
  const vbH = 360;
  const paddingX = 80;
  const startX = paddingX;
  const endX = vbW - paddingX;
  const lineY = 200;
  const step = (endX - startX) / (STAGES.length - 1);

  // Dog silhouette paths, translated to sit above the timeline centre.
  const dogCx = vbW / 2;
  const dogCy = lineY - 95;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HEADLINE */}
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-6 md:pt-24">
        <p className="text-[10px] tracking-[0.45em] text-muted-foreground text-center">
          INVESTOR SLIDE — 04
        </p>
        <h1 className="font-serif mx-auto mt-10 max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          ONE IDENTITY.
          <br />
          AN ENTIRE LIFETIME.
        </h1>
      </section>

      {/* DIAGRAM */}
      <section className="mx-auto max-w-[1400px] px-6 pt-10 pb-6">
        <div className="relative mx-auto w-full">
          <svg
            viewBox={`0 0 ${vbW} ${vbH}`}
            className="h-auto w-full"
            aria-hidden
          >
            <defs>
              <style>{`
                @keyframes tmpFadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes tmpScaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
                @keyframes tmpDrawLine { from { stroke-dashoffset: 1400; } to { stroke-dashoffset: 0; } }
                .tmp-animal { animation: tmpScaleIn 900ms ease-out both; transform-origin: center; }
                .tmp-stage { animation: tmpFadeIn 600ms ease-out both; opacity: 0; }
                .tmp-timeline {
                  stroke-dasharray: 1400;
                  stroke-dashoffset: 1400;
                  animation: tmpDrawLine 1800ms ease-out forwards;
                }
              `}</style>
            </defs>

            {/* Identity line — thin continuous baseline, drawn last */}
            <line
              x1={startX}
              y1={lineY}
              x2={endX}
              y2={lineY}
              stroke="currentColor"
              strokeWidth={1}
              className="tmp-timeline text-accent/60"
              strokeLinecap="round"
              style={{ animationDelay: `${200 + STAGES.length * 200}ms` }}
            />

            {/* Subtle tick marks at each stage */}
            {STAGES.map((_, i) => {
              const x = startX + i * step;
              return (
                <line
                  key={`tick-${i}`}
                  x1={x}
                  y1={lineY - 5}
                  x2={x}
                  y2={lineY + 5}
                  stroke="currentColor"
                  strokeWidth={1}
                  className="tmp-stage text-foreground/20"
                  style={{ animationDelay: `${200 + i * 180}ms` }}
                />
              );
            })}

            {/* Small accent dots on the line */}
            {STAGES.map((_, i) => {
              const x = startX + i * step;
              return (
                <circle
                  key={`dot-${i}`}
                  cx={x}
                  cy={lineY}
                  r={4}
                  fill="var(--background)"
                  stroke="currentColor"
                  strokeWidth={1}
                  className="tmp-stage text-accent"
                  style={{ animationDelay: `${300 + i * 180}ms` }}
                />
              );
            })}

            {/* Thin-line dog silhouette above timeline centre */}
            <g
              className="tmp-animal text-foreground"
              transform={`translate(${dogCx} ${dogCy})`}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Soft halo */}
              <circle r={68} strokeWidth={0.4} className="text-foreground/10" />
              {/* Head */}
              <path d="M-28 -20 C -36 -20, -42 -10, -40 2 C -38 14, -28 20, -18 18 C -8 16, -2 8, -4 -2 C -6 -12, -18 -20, -28 -20" />
              {/* Ears */}
              <path d="M-32 -16 C -38 -24, -40 -32, -34 -34 C -28 -30, -26 -22, -26 -16" />
              <path d="M-14 -16 C -8 -24, -6 -32, -12 -34 C -18 -30, -20 -22, -20 -16" />
              {/* Eyes */}
              <circle cx="-26" cy="-2" r="1.3" fill="currentColor" />
              <circle cx="-16" cy="-2" r="1.3" fill="currentColor" />
              {/* Nose + muzzle */}
              <path d="M-24 6 C -22 8, -20 8, -18 6" />
              <circle cx="-21" cy="4" r="1.1" fill="currentColor" />
              {/* Body, sitting */}
              <path d="M-30 18 C -36 30, -34 46, -24 52 L 6 52 C 18 48, 22 34, 16 20" />
              {/* Front legs */}
              <path d="M-20 36 L -20 58" />
              <path d="M-8 36 L -8 58" />
              {/* Paws */}
              <path d="M-24 58 C -24 61, -18 61, -18 58" />
              <path d="M-12 58 C -12 61, -6 61, -6 58" />
              {/* Tail */}
              <path d="M18 30 C 28 26, 32 18, 26 12" />
            </g>
          </svg>

          {/* Stage icons + labels, overlaid below the timeline */}
          <div className="relative flex justify-between items-start mt-[-120px] md:mt-[-140px]">
            {STAGES.map(({ label, Icon }, i) => (
              <div
                key={label}
                className="tmp-stage flex flex-col items-center"
                style={{
                  width: `${100 / STAGES.length}%`,
                  animationDelay: `${400 + i * 180}ms`,
                }}
              >
                <Icon
                  className="text-accent"
                  strokeWidth={1.2}
                  size={28}
                  aria-hidden
                />
                <span className="mt-3 text-[9px] tracking-[0.24em] text-foreground/70 text-center uppercase leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BODY COPY */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-10 text-center md:pt-28">
        <p className="font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          A dog or cat creates health records, travel documents, insurance
          information and relationships throughout life.
        </p>
        <p className="mt-8 font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          Track My Pet allows this information to follow the animal rather than
          remaining attached to individual organisations and systems.
        </p>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-3xl px-6 pt-12 pb-32 text-center md:pb-40">
        <div className="mx-auto h-px w-16 bg-border" />
        <p className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl">
          The identity grows in value with every interaction, every document and
          every life stage.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
