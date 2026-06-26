import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-final")({
  head: () => ({
    meta: [
      { title: "Track My Pet — The Next Generation of Pet Services" },
      {
        name: "description",
        content:
          "The category is being created now. Track My Pet is building the identity layer connecting pets, owners and services across Europe.",
      },
    ],
  }),
  component: SlideFinal,
});

const STEPS = [
  "DOG OR CAT",
  "DIGITAL IDENTITY",
  "DATA",
  "AI",
  "SERVICES",
  "ECOSYSTEM",
];

function SlideFinal() {
  const vbW = 600;
  const vbH = 680;
  const cx = vbW / 2;
  const topY = 56;
  const bottomY = vbH - 56;
  const n = STEPS.length;
  const gap = (bottomY - topY) / (n - 1);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HEADLINE */}
      <section className="mx-auto max-w-[1500px] px-6 pt-20 pb-4 md:pt-32">
        <p className="text-[10px] tracking-[0.45em] text-muted-foreground text-center">
          INVESTOR SLIDE — 11
        </p>
        <h1 className="font-serif mx-auto mt-10 max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          THE NEXT GENERATION OF PET SERVICES
          <br />
          WILL BE BUILT ON DIGITAL IDENTITY.
        </h1>
      </section>

      {/* SUPPORTING STATEMENT */}
      <section className="mx-auto max-w-3xl px-6 pt-14 pb-6 text-center md:pt-20">
        <p className="font-serif text-lg font-light leading-relaxed text-foreground/70 md:text-xl">
          Identity creates continuity.
          <br />
          Continuity creates intelligence.
          <br />
          Intelligence creates better experiences for pets, owners and partners.
        </p>
      </section>

      {/* VERTICAL FLOW */}
      <section className="mx-auto max-w-[600px] px-6 pt-16 pb-6 md:pt-24">
        <div className="relative mx-auto w-full" style={{ aspectRatio: `${vbW} / ${vbH}` }}>
          <svg viewBox={`0 0 ${vbW} ${vbH}`} className="h-full w-full" aria-hidden>
            <defs>
              <style>{`
                @keyframes tmpFadeIn {
                  from { opacity: 0; transform: translateY(6px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                @keyframes tmpDraw {
                  from { stroke-dashoffset: 600; }
                  to { stroke-dashoffset: 0; }
                }
                .tmp-step { animation: tmpFadeIn 700ms ease-out both; opacity: 0; }
                .tmp-line {
                  stroke-dasharray: 600;
                  stroke-dashoffset: 600;
                  animation: tmpDraw 1400ms ease-out forwards;
                }
              `}</style>
            </defs>

            {/* Vertical connecting line */}
            <line
              x1={cx}
              y1={topY}
              x2={cx}
              y2={bottomY}
              stroke="currentColor"
              strokeWidth={1}
              className="tmp-line text-foreground/20"
            />

            {/* Step dots */}
            {STEPS.map((_, i) => {
              const y = topY + i * gap;
              return (
                <circle
                  key={`dot-${i}`}
                  cx={cx}
                  cy={y}
                  r={3.5}
                  fill="var(--background)"
                  stroke="currentColor"
                  strokeWidth={1}
                  className="tmp-step text-accent"
                  style={{ animationDelay: `${600 + i * 220}ms` }}
                />
              );
            })}

            {/* Step labels */}
            {STEPS.map((step, i) => {
              const y = topY + i * gap;
              return (
                <text
                  key={step}
                  x={cx}
                  y={y + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={13}
                  letterSpacing={5}
                  fill="currentColor"
                  className="tmp-step text-foreground/85"
                  style={{
                    fontFamily: "var(--font-serif)",
                    animationDelay: `${400 + i * 220}ms`,
                  }}
                >
                  {step}
                </text>
              );
            })}
          </svg>
        </div>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-10 text-center md:pt-24">
        <div className="mx-auto h-px w-16 bg-border" />
        <p className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl">
          Track My Pet is building the identity layer connecting pets, owners
          and services across Europe.
        </p>
      </section>

      <div className="flex-1" />

      <SiteFooter />
    </main>
  );
}
