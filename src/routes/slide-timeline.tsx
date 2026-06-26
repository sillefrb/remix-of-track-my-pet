import { createFileRoute } from "@tanstack/react-router";
import {
  Cpu,
  Database,
  ClipboardList,
  Globe,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-timeline")({
  head: () => ({
    meta: [
      { title: "Track My Pet, Europe is building digital pet identity" },
      {
        name: "description",
        content:
          "European regulation and digital infrastructure are moving towards stronger standards for identification, ownership, health records and traceability.",
      },
    ],
  }),
  component: SlideTimeline,
});

const MILESTONES = [
  { label: "Microchip", Icon: Cpu },
  { label: "Registration", Icon: Database },
  { label: "Digital records", Icon: ClipboardList },
  { label: "Shared standards", Icon: Globe },
  { label: "Digital identity", Icon: ShieldCheck },
  { label: "AI and connected services", Icon: Workflow },
];

function SlideTimeline() {
  // SVG viewBox for the timeline diagram.
  const vbW = 1200;
  const vbH = 280;
  const startX = 120;
  const endX = vbW - 120;
  const lineY = 140;
  const step = (endX - startX) / (MILESTONES.length - 1);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HEADLINE */}
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-6 md:pt-24">
        <p className="text-[10px] tracking-[0.45em] text-muted-foreground text-center">
          INVESTOR SLIDE — 03
        </p>
        <h1 className="font-serif mx-auto mt-10 max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          EUROPE IS BUILDING
          <br />
          THE FOUNDATION FOR DIGITAL PET IDENTITY.
        </h1>
      </section>

      {/* TIMELINE DIAGRAM */}
      <section className="mx-auto max-w-[1200px] px-6 pt-16 pb-6">
        <div className="relative mx-auto w-full">
          <svg
            viewBox={`0 0 ${vbW} ${vbH}`}
            className="h-auto w-full"
            aria-hidden
          >
            <defs>
              <style>{`
                @keyframes tmpFadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes tmpDrawLine { from { stroke-dashoffset: 960; } to { stroke-dashoffset: 0; } }
                .tmp-milestone { animation: tmpFadeIn 700ms ease-out both; opacity: 0; }
                .tmp-timeline {
                  stroke-dasharray: 960;
                  stroke-dashoffset: 960;
                  animation: tmpDrawLine 1400ms ease-out forwards;
                }
              `}</style>
            </defs>

            {/* Main horizontal connection line */}
            <line
              x1={startX}
              y1={lineY}
              x2={endX}
              y2={lineY}
              stroke="currentColor"
              strokeWidth={1}
              className="tmp-timeline text-foreground/25"
              strokeLinecap="round"
            />

            {/* Subtle vertical ticks at each milestone position */}
            {MILESTONES.map((_, i) => {
              const x = startX + i * step;
              return (
                <line
                  key={`tick-${i}`}
                  x1={x}
                  y1={lineY - 6}
                  x2={x}
                  y2={lineY + 6}
                  stroke="currentColor"
                  strokeWidth={1}
                  className="tmp-timeline text-foreground/20"
                  style={{ animationDelay: `${200 + i * 120}ms` }}
                />
              );
            })}

            {/* Accent circle markers on the line */}
            {MILESTONES.map((_, i) => {
              const x = startX + i * step;
              return (
                <g
                  key={`dot-${i}`}
                  className="tmp-milestone"
                  style={{ animationDelay: `${400 + i * 140}ms` }}
                >
                  <circle
                    cx={x}
                    cy={lineY}
                    r={5}
                    fill="var(--background)"
                    stroke="currentColor"
                    strokeWidth={1}
                    className="text-accent"
                  />
                </g>
              );
            })}
          </svg>

          {/* Milestone icons + labels overlaid */}
          <div className="relative flex justify-between items-start mt-[-40px] md:mt-[-50px]">
            {MILESTONES.map(({ label, Icon }, i) => (
              <div
                key={label}
                className="tmp-milestone flex flex-col items-center"
                style={{
                  width: `${100 / MILESTONES.length}%`,
                  animationDelay: `${500 + i * 140}ms`,
                }}
              >
                <Icon
                  className="text-accent"
                  strokeWidth={1.2}
                  size={32}
                  aria-hidden
                />
                <span className="mt-4 text-[9px] tracking-[0.28em] text-foreground/70 text-center uppercase leading-tight">
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
          European regulation and digital infrastructure are moving towards
          stronger standards for identification, ownership, health records and
          traceability.
        </p>
        <p className="mt-8 font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          The next step is a digital identity layer that allows information to
          follow the animal throughout life and across borders.
        </p>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-3xl px-6 pt-12 pb-32 text-center md:pb-40">
        <div className="mx-auto h-px w-16 bg-border" />
        <p className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl">
          Track My Pet is designed for the ecosystem Europe is building.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
