import { createFileRoute } from "@tanstack/react-router";
import {
  Stethoscope,
  ShieldCheck,
  Cpu,
  Syringe,
  Plane,
  Home,
  Building2,
  MapPin,
  Landmark,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/dogpass-hero.jpg";

export const Route = createFileRoute("/slide-data")({
  head: () => ({
    meta: [
      { title: "Track My Pet, Data follows systems" },
      {
        name: "description",
        content:
          "198 million dogs and cats move between thousands of systems across Europe without a shared digital identity.",
      },
    ],
  }),
  component: SlideData,
});

const NODES = [
  { label: "Veterinarian", Icon: Stethoscope },
  { label: "Insurance", Icon: ShieldCheck },
  { label: "Microchip", Icon: Cpu },
  { label: "Vaccinations", Icon: Syringe },
  { label: "Travel", Icon: Plane },
  { label: "Pet sitting", Icon: Home },
  { label: "Shelter", Icon: Building2 },
  { label: "Tracking", Icon: MapPin },
  { label: "Authorities", Icon: Landmark },
];

function SlideData() {
  // Diagram geometry, in SVG viewBox coordinates (1000 x 1000).
  const cx = 500;
  const cy = 500;
  const animalR = 110;
  const nodeR = 360;
  const nodeHit = 58;

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

      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-10 md:pt-24">
        <p className="text-[10px] tracking-[0.45em] text-muted-foreground text-center">
          INVESTOR SLIDE — 01
        </p>
        <h1 className="font-serif mx-auto mt-8 max-w-4xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Data follows systems.
          <br />
          Data rarely follows the animal.
        </h1>
      </section>

      <section className="relative aspect-[21/9] w-full overflow-hidden bg-muted">
        <img src={heroImg} alt="Track My Pet" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30" />
      </section>

      {/* DIAGRAM */}
      <section className="mx-auto max-w-[1100px] px-6">
        <div className="relative mx-auto aspect-square w-full">
          <svg
            viewBox="0 0 1000 1000"
            className="h-full w-full"
            aria-hidden
          >
            <defs>
              <style>{`
                @keyframes tmpFadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes tmpDraw { from { stroke-dashoffset: 600; } to { stroke-dashoffset: 0; } }
                .tmp-animal { animation: tmpFadeIn 900ms ease-out both; }
                .tmp-node   { animation: tmpFadeIn 700ms ease-out both; opacity: 0; }
                .tmp-line   {
                  stroke-dasharray: 600;
                  stroke-dashoffset: 600;
                  animation: tmpDraw 1200ms ease-out forwards;
                }
              `}</style>
            </defs>

            {/* Connection lines: animal -> each node. No node-to-node lines. */}
            {positions.map((p, i) => {
              // Stop line at edge of animal circle and short of node icon.
              const dx = p.x - cx;
              const dy = p.y - cy;
              const len = Math.hypot(dx, dy);
              const ux = dx / len;
              const uy = dy / len;
              const x1 = cx + ux * (animalR + 6);
              const y1 = cy + uy * (animalR + 6);
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
                  className="tmp-line text-foreground/30"
                  style={{ animationDelay: `${1600 + i * 90}ms` }}
                />
              );
            })}

            {/* Animal — thin line dog illustration */}
            <g
              className="tmp-animal text-accent"
              transform={`translate(${cx} ${cy})`}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Soft ring around animal */}
              <circle r={animalR} stroke="currentColor" className="text-foreground/15" />
              {/* Stylised sitting dog silhouette, single continuous feel */}
              <g transform="translate(-60 -55) scale(1.05)">
                {/* head */}
                <path d="M40 25 C 28 25, 20 35, 22 50 C 24 65, 36 72, 50 70 C 64 68, 74 58, 74 46 C 74 36, 66 27, 56 25" />
                {/* ears */}
                <path d="M28 28 C 20 18, 18 8, 24 6 C 30 10, 32 20, 32 28" />
                <path d="M70 28 C 78 18, 80 8, 74 6 C 68 10, 66 20, 66 28" />
                {/* eye */}
                <circle cx="42" cy="46" r="1.6" fill="currentColor" />
                <circle cx="60" cy="46" r="1.6" fill="currentColor" />
                {/* nose + muzzle */}
                <path d="M48 58 C 50 60, 54 60, 56 58" />
                <circle cx="52" cy="55" r="1.4" fill="currentColor" />
                {/* body, sitting */}
                <path d="M30 78 C 24 95, 26 115, 40 122 L 78 122 C 92 118, 96 100, 90 82" />
                {/* front legs */}
                <path d="M48 100 L 48 130" />
                <path d="M64 100 L 64 130" />
                {/* paws */}
                <path d="M44 130 C 44 134, 52 134, 52 130" />
                <path d="M60 130 C 60 134, 68 134, 68 130" />
                {/* tail */}
                <path d="M92 92 C 104 88, 108 78, 102 70" />
              </g>
            </g>
          </svg>

          {/* Node icons + labels, absolutely positioned over the SVG */}
          {NODES.map(({ label, Icon }, i) => {
            const p = positions[i];
            const leftPct = (p.x / 1000) * 100;
            const topPct = (p.y / 1000) * 100;
            // Label sits below or above icon based on vertical position.
            const labelAbove = p.y < cy - 50;
            return (
              <div
                key={label}
                className="tmp-node absolute flex flex-col items-center"
                style={{
                  left: `${leftPct}%`,
                  top: `${topPct}%`,
                  transform: "translate(-50%, -50%)",
                  animationDelay: `${400 + i * 110}ms`,
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

      <section className="mx-auto max-w-3xl px-6 pt-12 pb-24 text-center">
        <div className="mx-auto h-px w-16 bg-border" />
        <p className="font-serif mt-10 text-2xl font-light leading-snug tracking-tight text-foreground md:text-3xl">
          198 million dogs and cats move between thousands of systems across Europe without a shared digital identity.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
