import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import packImg from "@/assets/dogpass-pack.jpg";

export const Route = createFileRoute("/slide-hero-closing")({
  head: () => ({
    meta: [
      { title: "Track My Pet — 198 Million Dogs and Cats. One Digital Identity Layer." },
      {
        name: "description",
        content:
          "The next infrastructure layer around pets is being built now. Track My Pet is building the infrastructure that follows the animal throughout life.",
      },
    ],
  }),
  component: SlideHeroClosing,
});

// Ecosystem touchpoints that orbit the central animals.
const TOUCHPOINTS = [
  { label: "Owners", angle: -90 },
  { label: "Veterinary", angle: -45 },
  { label: "Insurance", angle: 0 },
  { label: "Travel", angle: 45 },
  { label: "Authorities", angle: 90 },
  { label: "Research", angle: 135 },
  { label: "Services", angle: 180 },
  { label: "Tracking", angle: 225 },
];

function SlideHeroClosing() {
  const vbW = 1200;
  const vbH = 700;
  const cx = vbW / 2;
  const cy = vbH / 2 + 10;

  // Dog sits left of center, cat sits right of center.
  const dogX = cx - 70;
  const catX = cx + 70;
  const animalY = cy + 20;

  // Halo radii
  const haloR1 = 160;
  const haloR2 = 200;
  const haloR3 = 240;

  // Orbit ring for labels
  const orbitR = 290;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <style>{`
        @keyframes tmpFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tmpScaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes tmpDraw {
          from { stroke-dashoffset: 1200; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes tmpHalo {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes tmpOrbit {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .tmp-fade {
          animation: tmpFadeIn 900ms ease-out both;
          opacity: 0;
        }
        .tmp-scale {
          animation: tmpScaleIn 900ms ease-out both;
          opacity: 0;
        }
        .tmp-halo {
          animation: tmpHalo 1400ms ease-out both;
          opacity: 0;
          transform-origin: center;
        }
        .tmp-draw {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: tmpDraw 1600ms ease-out forwards;
        }
        .tmp-orbit {
          animation: tmpOrbit 800ms ease-out both;
          opacity: 0;
        }
      `}</style>

      {/* HEADLINE */}
      <section className="mx-auto max-w-[1500px] px-6 pt-20 pb-4 md:pt-32">
        <p className="text-[10px] tracking-[0.45em] text-muted-foreground text-center tmp-fade" style={{ animationDelay: "1200ms" }}>
          INVESTOR SLIDE — CLOSING
        </p>
        <h1 className="font-serif mx-auto mt-10 max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl tmp-fade" style={{ animationDelay: "1400ms" }}>
          198 MILLION DOGS AND CATS.
          <br />
          ONE DIGITAL IDENTITY LAYER.
        </h1>
      </section>

      {/* CENTER VISUAL — Dog + Cat + Identity Halo */}
      <section className="relative mx-auto max-w-[1100px] px-6 pt-12 pb-6 md:pt-16">
        <img
          src={packImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          aria-hidden
        />
        <div className="relative mx-auto w-full" style={{ aspectRatio: `${vbW} / ${vbH}` }}>
          <svg viewBox={`0 0 ${vbW} ${vbH}`} className="h-full w-full" aria-hidden>
            {/* Soft halo circles */}
            <circle
              cx={cx}
              cy={cy}
              r={haloR3}
              fill="none"
              stroke="currentColor"
              strokeWidth={0.4}
              className="tmp-halo text-foreground/10"
              style={{ animationDelay: "800ms" }}
            />
            <circle
              cx={cx}
              cy={cy}
              r={haloR2}
              fill="none"
              stroke="currentColor"
              strokeWidth={0.5}
              className="tmp-halo text-foreground/15"
              style={{ animationDelay: "600ms" }}
            />
            <circle
              cx={cx}
              cy={cy}
              r={haloR1}
              fill="none"
              stroke="currentColor"
              strokeWidth={0.6}
              className="tmp-halo text-accent/25"
              style={{ animationDelay: "400ms" }}
            />

            {/* Orbital tick marks at touchpoint angles */}
            {TOUCHPOINTS.map((t, i) => {
              const rad = (t.angle * Math.PI) / 180;
              const rInner = haloR3 + 6;
              const rOuter = haloR3 + 18;
              const x1 = cx + rInner * Math.cos(rad);
              const y1 = cy + rInner * Math.sin(rad);
              const x2 = cx + rOuter * Math.cos(rad);
              const y2 = cy + rOuter * Math.sin(rad);
              return (
                <line
                  key={`tick-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth={0.6}
                  className="tmp-orbit text-foreground/20"
                  style={{ animationDelay: `${1000 + i * 80}ms` }}
                />
              );
            })}

            {/* Connection arcs from animals to halo */}
            <path
              d={`M ${dogX - 45} ${animalY - 30} Q ${dogX - 90} ${cy - haloR1 + 20} ${cx - haloR1 + 30} ${cy - 20}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={0.5}
              className="tmp-draw text-accent/20"
              style={{ animationDelay: "900ms" }}
            />
            <path
              d={`M ${catX + 40} ${animalY - 30} Q ${catX + 85} ${cy - haloR1 + 20} ${cx + haloR1 - 30} ${cy - 20}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={0.5}
              className="tmp-draw text-accent/20"
              style={{ animationDelay: "1000ms" }}
            />
            <path
              d={`M ${dogX} ${animalY + 55} Q ${dogX - 50} ${cy + haloR1 - 20} ${cx - 40} ${cy + haloR1 - 30}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={0.5}
              className="tmp-draw text-accent/20"
              style={{ animationDelay: "1100ms" }}
            />
            <path
              d={`M ${catX} ${animalY + 55} Q ${catX + 50} ${cy + haloR1 - 20} ${cx + 40} ${cy + haloR1 - 30}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={0.5}
              className="tmp-draw text-accent/20"
              style={{ animationDelay: "1200ms" }}
            />

            {/* DOG — sitting, side profile, elegant line art */}
            <g
              className="tmp-scale text-foreground"
              transform={`translate(${dogX} ${animalY})`}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.1}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animationDelay: "200ms", transformOrigin: `${dogX}px ${animalY}px` }}
            >
              {/* body */}
              <path d="M -38 14 C -38 0 -28 -10 -14 -10 L 14 -10 C 28 -10 34 -4 34 6 L 34 18 C 34 26 28 30 20 30 L -28 30 C -34 30 -38 24 -38 18 Z" />
              {/* chest */}
              <path d="M -14 -10 C -20 -2 -22 8 -18 18" strokeWidth={0.8} className="text-foreground/40" />
              {/* head */}
              <path d="M 22 -8 C 34 -14 44 -10 44 0 C 44 10 36 14 28 12" />
              {/* ear */}
              <path d="M 34 -10 L 40 -22 L 44 -8" />
              {/* snout line */}
              <path d="M 38 -2 L 44 -2" strokeWidth={0.8} />
              {/* eye */}
              <circle cx={38} cy={-4} r={0.9} fill="currentColor" />
              {/* front legs */}
              <line x1={-10} y1={30} x2={-10} y2={52} />
              <line x1={2} y1={30} x2={2} y2={52} />
              {/* back legs */}
              <line x1={18} y1={30} x2={18} y2={50} />
              <line x1={26} y1={30} x2={26} y2={48} />
              {/* paws */}
              <line x1={-14} y1={52} x2={-6} y2={52} strokeWidth={0.9} />
              <line x1={-2} y1={52} x2={6} y2={52} strokeWidth={0.9} />
              <line x1={14} y1={50} x2={22} y2={50} strokeWidth={0.9} />
              <line x1={22} y1={48} x2={30} y2={48} strokeWidth={0.9} />
              {/* tail */}
              <path d="M -38 10 C -52 4 -58 -8 -50 -18" />
            </g>

            {/* CAT — sitting, side profile, elegant line art */}
            <g
              className="tmp-scale text-foreground"
              transform={`translate(${catX} ${animalY})`}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.1}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animationDelay: "400ms", transformOrigin: `${catX}px ${animalY}px` }}
            >
              {/* body */}
              <path d="M -30 14 C -30 2 -22 -8 -10 -8 L 10 -8 C 22 -8 28 0 28 10 L 28 20 C 28 26 22 30 14 30 L -22 30 C -28 30 -30 24 -30 18 Z" />
              {/* chest curve */}
              <path d="M -10 -8 C -16 0 -18 10 -14 20" strokeWidth={0.8} className="text-foreground/40" />
              {/* head */}
              <path d="M 18 -6 C 28 -10 36 -6 36 4 C 36 12 30 16 22 14" />
              {/* ears */}
              <path d="M 24 -8 L 28 -20 L 32 -8" />
              <path d="M 30 -8 L 36 -18 L 38 -6" />
              {/* eye */}
              <circle cx={30} cy={0} r={0.9} fill="currentColor" />
              {/* whisker hint */}
              <path d="M 34 4 L 42 3" strokeWidth={0.7} className="text-foreground/35" />
              <path d="M 34 6 L 42 7" strokeWidth={0.7} className="text-foreground/35" />
              {/* front legs */}
              <line x1={-6} y1={30} x2={-6} y2={52} />
              <line x1={4} y1={30} x2={4} y2={52} />
              {/* back leg */}
              <path d="M 16 30 C 24 32 30 38 28 48" />
              {/* paws */}
              <line x1={-10} y1={52} x2={-2} y2={52} strokeWidth={0.9} />
              <line x1={0} y1={52} x2={8} y2={52} strokeWidth={0.9} />
              <line x1={24} y1={48} x2={32} y2={48} strokeWidth={0.9} />
              {/* tail */}
              <path d="M -30 16 C -44 18 -52 30 -46 42" />
            </g>

            {/* Small accent dots where arcs meet the halo */}
            <circle
              cx={cx - haloR1 + 30}
              cy={cy - 20}
              r={2}
              className="tmp-orbit fill-accent"
              style={{ animationDelay: "1300ms" }}
            />
            <circle
              cx={cx + haloR1 - 30}
              cy={cy - 20}
              r={2}
              className="tmp-orbit fill-accent"
              style={{ animationDelay: "1400ms" }}
            />
            <circle
              cx={cx - 40}
              cy={cy + haloR1 - 30}
              r={2}
              className="tmp-orbit fill-accent"
              style={{ animationDelay: "1500ms" }}
            />
            <circle
              cx={cx + 40}
              cy={cy + haloR1 - 30}
              r={2}
              className="tmp-orbit fill-accent"
              style={{ animationDelay: "1600ms" }}
            />
          </svg>

          {/* Touchpoint labels around the orbit */}
          {TOUCHPOINTS.map((t, i) => {
            const rad = (t.angle * Math.PI) / 180;
            const lx = cx + orbitR * Math.cos(rad);
            const ly = cy + orbitR * Math.sin(rad);
            const leftPct = (lx / vbW) * 100;
            const topPct = (ly / vbH) * 100;
            return (
              <div
                key={t.label}
                className="tmp-orbit absolute"
                style={{
                  left: `${leftPct}%`,
                  top: `${topPct}%`,
                  transform: "translate(-50%, -50%)",
                  animationDelay: `${1200 + i * 100}ms`,
                }}
              >
                <span className="block text-center text-[9px] tracking-[0.32em] text-foreground/60 whitespace-nowrap">
                  {t.label.toUpperCase()}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* BODY COPY — minimal, spacious */}
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-6 text-center md:pt-20">
        <p className="font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl tmp-fade" style={{ animationDelay: "1800ms" }}>
          Europe already has the animals.
        </p>
        <p className="mt-5 font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl tmp-fade" style={{ animationDelay: "1900ms" }}>
          Europe already has the owners.
        </p>
        <p className="mt-5 font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl tmp-fade" style={{ animationDelay: "2000ms" }}>
          Europe already has the services.
        </p>
        <p className="mt-8 font-serif text-xl font-light leading-relaxed text-foreground/90 md:text-2xl tmp-fade" style={{ animationDelay: "2200ms" }}>
          The missing layer is the identity that connects them.
        </p>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="mx-auto max-w-4xl px-6 pt-12 pb-24 text-center md:pb-24">
        <div className="mx-auto h-px w-16 bg-border tmp-fade" style={{ animationDelay: "2400ms" }} />
        <p className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl tmp-fade" style={{ animationDelay: "2600ms" }}>
          Track My Pet is building the infrastructure that follows the animal throughout life.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
