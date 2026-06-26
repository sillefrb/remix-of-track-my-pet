import { createFileRoute } from "@tanstack/react-router";
import {
  User,
  Stethoscope,
  ShieldCheck,
  MapPin,
  Plane,
  Landmark,
  Microscope,
  Home,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-europe")({
  head: () => ({
    meta: [
      { title: "Track My Pet — Europe's Missing Identity Layer" },
      {
        name: "description",
        content:
          "198 million dogs and cats. One missing identity layer for Europe's pet ecosystem.",
      },
    ],
  }),
  component: SlideEurope,
});

// Highly simplified, soft Europe silhouette (single path, no political borders).
// Coordinates tuned for a 1200x900 viewBox.
const EUROPE_PATH =
  "M 280 230 L 330 200 L 395 195 L 445 175 L 495 165 L 545 175 L 590 200 L 640 195 L 700 180 L 760 175 L 815 190 L 855 215 L 880 250 L 905 290 L 920 335 L 935 380 L 940 430 L 925 475 L 905 515 L 880 545 L 850 575 L 815 600 L 785 625 L 760 655 L 740 685 L 715 700 L 680 705 L 645 695 L 615 680 L 585 690 L 555 705 L 520 710 L 485 700 L 455 685 L 425 670 L 395 660 L 365 645 L 340 620 L 315 595 L 295 565 L 280 530 L 270 490 L 265 450 L 260 410 L 255 370 L 255 330 L 260 290 L 270 255 Z";

// Pet population data points across Europe — denser around UK, Germany,
// France, Italy, Poland, Iberia. Values are 1200x900 viewBox coordinates.
const POPULATION_POINTS: { x: number; y: number; r?: number; o?: number }[] = [
  // UK / Ireland cluster
  { x: 360, y: 260 }, { x: 370, y: 280 }, { x: 385, y: 275 },
  { x: 350, y: 295 }, { x: 375, y: 305 }, { x: 395, y: 300 },
  { x: 340, y: 320 }, { x: 365, y: 330 },
  // France
  { x: 460, y: 380 }, { x: 480, y: 395 }, { x: 500, y: 410 },
  { x: 475, y: 425 }, { x: 495, y: 440 }, { x: 515, y: 450 },
  { x: 455, y: 455 }, { x: 485, y: 470 },
  // Iberia
  { x: 360, y: 510 }, { x: 380, y: 525 }, { x: 400, y: 540 },
  { x: 355, y: 545 }, { x: 385, y: 560 }, { x: 410, y: 555 },
  { x: 375, y: 575 },
  // Germany / Central Europe (dense)
  { x: 570, y: 360 }, { x: 590, y: 350 }, { x: 605, y: 370 },
  { x: 585, y: 385 }, { x: 605, y: 400 }, { x: 625, y: 385 },
  { x: 575, y: 410 }, { x: 600, y: 425 }, { x: 620, y: 415 },
  { x: 645, y: 405 }, { x: 555, y: 380 }, { x: 565, y: 430 },
  // Italy
  { x: 595, y: 480 }, { x: 615, y: 495 }, { x: 635, y: 515 },
  { x: 625, y: 540 }, { x: 645, y: 560 }, { x: 605, y: 525 },
  // Poland / Eastern
  { x: 680, y: 340 }, { x: 700, y: 360 }, { x: 720, y: 355 },
  { x: 695, y: 380 }, { x: 715, y: 395 },
  // Scandinavia
  { x: 580, y: 230 }, { x: 610, y: 250 }, { x: 630, y: 235 },
  { x: 600, y: 275 }, { x: 625, y: 290 }, { x: 555, y: 260 },
  // Balkans / Southeast
  { x: 680, y: 460 }, { x: 710, y: 480 }, { x: 730, y: 500 },
  { x: 700, y: 510 }, { x: 745, y: 525 },
  // Eastern reach
  { x: 770, y: 380 }, { x: 800, y: 360 }, { x: 820, y: 395 },
  { x: 790, y: 420 }, { x: 825, y: 440 }, { x: 805, y: 470 },
];

const CONNECTIONS = [
  { label: "Owners", Icon: User },
  { label: "Veterinary clinics", Icon: Stethoscope },
  { label: "Insurance", Icon: ShieldCheck },
  { label: "Tracking", Icon: MapPin },
  { label: "Travel", Icon: Plane },
  { label: "Authorities", Icon: Landmark },
  { label: "Research", Icon: Microscope },
  { label: "Pet care services", Icon: Home },
];

function SlideEurope() {
  const vbW = 1200;
  const vbH = 900;
  // Identity node sits roughly over central Europe
  const cx = 600;
  const cy = 420;
  const centerR = 38;
  const nodeR = 330;

  const positions = CONNECTIONS.map((_, i) => {
    const angle = (-Math.PI / 2) + (i * 2 * Math.PI) / CONNECTIONS.length;
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
          198 MILLION DOGS AND CATS.
          <br />
          ONE MISSING IDENTITY LAYER.
        </h1>
      </section>

      {/* MAP */}
      <section className="mx-auto max-w-[1400px] px-6 pt-12 pb-6">
        <div className="relative mx-auto w-full max-w-[1150px]">
          <svg
            viewBox={`0 0 ${vbW} ${vbH}`}
            className="h-full w-full"
            aria-hidden
          >
            <defs>
              <style>{`
                @keyframes tmpFadeIn {
                  from { opacity: 0; transform: translateY(6px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                @keyframes tmpDot {
                  from { opacity: 0; transform: scale(0.4); }
                  to { opacity: 1; transform: scale(1); }
                }
                @keyframes tmpScaleIn {
                  from { opacity: 0; transform: scale(0.85); }
                  to { opacity: 1; transform: scale(1); }
                }
                @keyframes tmpDraw {
                  from { stroke-dashoffset: 800; }
                  to { stroke-dashoffset: 0; }
                }
                @keyframes tmpPulse {
                  0%, 100% { opacity: 0.18; transform: scale(1); }
                  50% { opacity: 0.35; transform: scale(1.08); }
                }
                .tmp-map {
                  animation: tmpFadeIn 1200ms ease-out both;
                }
                .tmp-dot {
                  animation: tmpDot 700ms ease-out both;
                  transform-origin: center;
                  transform-box: fill-box;
                }
                .tmp-center {
                  animation: tmpScaleIn 900ms ease-out both;
                  transform-origin: center;
                  transform-box: fill-box;
                }
                .tmp-halo {
                  transform-origin: center;
                  transform-box: fill-box;
                  animation: tmpPulse 4s ease-in-out infinite;
                }
                .tmp-line {
                  stroke-dasharray: 800;
                  stroke-dashoffset: 800;
                  animation: tmpDraw 1400ms ease-out forwards;
                }
                .tmp-node { animation: tmpFadeIn 700ms ease-out both; opacity: 0; }
              `}</style>
            </defs>

            {/* Europe silhouette — soft, no political borders */}
            <path
              d={EUROPE_PATH}
              className="tmp-map text-foreground/12"
              fill="currentColor"
              stroke="none"
            />
            <path
              d={EUROPE_PATH}
              className="tmp-map text-foreground/25"
              fill="none"
              stroke="currentColor"
              strokeWidth={0.8}
              style={{ animationDelay: "300ms" }}
            />

            {/* Population data points */}
            {POPULATION_POINTS.map((p, i) => (
              <circle
                key={`p-${i}`}
                cx={p.x}
                cy={p.y}
                r={p.r ?? 2.2}
                className="tmp-dot text-foreground/55"
                fill="currentColor"
                style={{ animationDelay: `${800 + i * 22}ms` }}
              />
            ))}

            {/* Connection lines from identity node to ecosystem nodes */}
            {positions.map((p, i) => {
              const dx = p.x - cx;
              const dy = p.y - cy;
              const len = Math.hypot(dx, dy);
              const ux = dx / len;
              const uy = dy / len;
              const x1 = cx + ux * (centerR + 8);
              const y1 = cy + uy * (centerR + 8);
              const x2 = p.x - ux * 36;
              const y2 = p.y - uy * 36;
              return (
                <line
                  key={`l-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth={0.8}
                  className="tmp-line text-foreground/30"
                  style={{ animationDelay: `${2400 + i * 110}ms` }}
                />
              );
            })}

            {/* Glow halo */}
            <circle
              cx={cx}
              cy={cy}
              r={72}
              className="tmp-halo text-accent/25"
              fill="currentColor"
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            />

            {/* Identity node */}
            <g
              className="tmp-center text-foreground"
              transform={`translate(${cx} ${cy})`}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animationDelay: "1800ms", transformOrigin: `${cx}px ${cy}px` }}
            >
              <circle r={54} strokeWidth={0.4} className="text-accent/40" />
              <circle r={centerR} strokeWidth={1.3} />
              <circle r={28} strokeWidth={0.5} className="text-accent/40" />
              <path d="M-12 1 L-4 9 L12 -8" strokeWidth={1.8} />
              <circle r={1.8} fill="currentColor" stroke="none" />
            </g>

            {/* Identity label */}
            <g
              className="tmp-center"
              fill="currentColor"
              style={{ animationDelay: "2000ms", transformOrigin: `${cx}px ${cy}px` }}
            >
              <text
                x={cx}
                y={cy + centerR + 22}
                textAnchor="middle"
                fontSize={10}
                letterSpacing={5}
                className="text-foreground/80"
              >
                TRACK MY PET
              </text>
              <text
                x={cx}
                y={cy + centerR + 38}
                textAnchor="middle"
                fontSize={9}
                letterSpacing={4}
                className="text-muted-foreground"
              >
                IDENTITY LAYER
              </text>
            </g>
          </svg>

          {/* Ecosystem node icons + labels */}
          {CONNECTIONS.map(({ label, Icon }, i) => {
            const p = positions[i];
            const leftPct = (p.x / vbW) * 100;
            const topPct = (p.y / vbH) * 100;
            const dx = p.x - cx;
            const dy = p.y - cy;
            const len = Math.hypot(dx, dy);
            const offset = 46;
            const lx = ((p.x + (dx / len) * offset) / vbW) * 100;
            const ly = ((p.y + (dy / len) * offset) / vbH) * 100;
            return (
              <div key={label}>
                <div
                  className="tmp-node absolute flex flex-col items-center"
                  style={{
                    left: `${leftPct}%`,
                    top: `${topPct}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${2600 + i * 140}ms`,
                  }}
                >
                  <Icon
                    className="text-accent"
                    strokeWidth={1.2}
                    size={26}
                    aria-hidden
                  />
                </div>
                <div
                  className="tmp-node absolute"
                  style={{
                    left: `${lx}%`,
                    top: `${ly}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${2700 + i * 140}ms`,
                  }}
                >
                  <span className="block text-center text-[9px] tracking-[0.32em] text-foreground/75 whitespace-nowrap">
                    {label.toUpperCase()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-3xl px-6 pt-12 pb-24 text-center md:pb-24">
        <div className="mx-auto h-px w-16 bg-border" />
        <p className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl">
          Track My Pet is building the identity layer
          <br />
          for Europe's pet ecosystem.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
