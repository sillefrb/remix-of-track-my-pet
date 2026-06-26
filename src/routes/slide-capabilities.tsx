import { createFileRoute } from "@tanstack/react-router";
import {
  Fingerprint,
  Brain,
  Stethoscope,
  Cpu,
  ShieldCheck,
  MapPin,
  Scale,
  Layers,
  Share2,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-capabilities")({
  head: () => ({
    meta: [
      { title: "Track My Pet — Building the Team to Build the Category" },
      {
        name: "description",
        content:
          "Building the capabilities required to create Europe's pet identity infrastructure.",
      },
    ],
  }),
  component: SlideCapabilities,
});

const CAPABILITIES = [
  { label: "Identity infrastructure", Icon: Fingerprint },
  { label: "AI and data", Icon: Brain },
  { label: "Veterinary ecosystem", Icon: Stethoscope },
  { label: "Hardware and manufacturing", Icon: Cpu },
  { label: "Insurance partnerships", Icon: ShieldCheck },
  { label: "Tracking integrations", Icon: MapPin },
  { label: "Regulatory and compliance", Icon: Scale },
  { label: "Product and design", Icon: Layers },
  { label: "Distribution and partnerships", Icon: Share2 },
];

function SlideCapabilities() {
  const cx = 600;
  const cy = 500;
  const centerR = 74;
  const nodeR = 340;
  const nodeHit = 52;

  const positions = CAPABILITIES.map((_, i) => {
    const angle = (-Math.PI / 2) + (i * 2 * Math.PI) / CAPABILITIES.length;
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
          INVESTOR SLIDE — 14
        </p>
        <h1 className="font-serif mx-auto mt-10 max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          BUILDING THE TEAM
          <br />
          TO BUILD THE CATEGORY.
        </h1>
      </section>

      {/* CAPABILITY MAP */}
      <section className="mx-auto max-w-[1200px] px-6 pt-10 pb-6">
        <div className="relative mx-auto aspect-square w-full max-w-[950px]">
          <svg
            viewBox="0 0 1200 1100"
            className="h-full w-full"
            aria-hidden
          >
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
                @keyframes tmpScaleIn {
                  from { opacity: 0; transform: scale(0.85); }
                  to { opacity: 1; transform: scale(1); }
                }
                .tmp-center {
                  animation: tmpScaleIn 900ms ease-out both;
                  transform-origin: center;
                }
                .tmp-node { animation: tmpFadeIn 700ms ease-out both; opacity: 0; }
                .tmp-line {
                  stroke-dasharray: 600;
                  stroke-dashoffset: 600;
                  animation: tmpDraw 1200ms ease-out forwards;
                }
              `}</style>
            </defs>

            {/* Connection lines: center -> each capability node */}
            {positions.map((p, i) => {
              const dx = p.x - cx;
              const dy = p.y - cy;
              const len = Math.hypot(dx, dy);
              const ux = dx / len;
              const uy = dy / len;
              const x1 = cx + ux * (centerR + 10);
              const y1 = cy + uy * (centerR + 10);
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
                  className="tmp-line text-foreground/25"
                  style={{ animationDelay: `${1800 + i * 90}ms` }}
                />
              );
            })}

            {/* Central Track My Pet identity layer */}
            <g
              className="tmp-center text-foreground"
              transform={`translate(${cx} ${cy})`}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle
                r={102}
                strokeWidth={0.4}
                className="text-foreground/12"
              />
              <circle r={centerR} strokeWidth={1.4} />
              <circle
                r={70}
                strokeWidth={0.5}
                className="text-accent/35"
              />
              <path
                d="M-22 2 L-10 14 L22 -12"
                strokeWidth={2.2}
              />
              <circle r={2.5} fill="currentColor" stroke="none" />
            </g>

            {/* Center label */}
            <g className="tmp-center" fill="currentColor">
              <text
                x={cx}
                y={cy + centerR + 32}
                textAnchor="middle"
                fontSize={13}
                letterSpacing={5}
                className="text-foreground/70"
              >
                TRACK MY PET
              </text>
              <text
                x={cx}
                y={cy + centerR + 52}
                textAnchor="middle"
                fontSize={10}
                letterSpacing={4}
                className="text-muted-foreground"
              >
                CAPABILITIES
              </text>
            </g>
          </svg>

          {/* Capability node icons + labels */}
          {CAPABILITIES.map(({ label, Icon }, i) => {
            const p = positions[i];
            const leftPct = (p.x / 1200) * 100;
            const topPct = (p.y / 1100) * 100;
            const dx = p.x - cx;
            const dy = p.y - cy;
            const len = Math.hypot(dx, dy);
            const offset = 68;
            const lx = ((p.x + (dx / len) * offset) / 1200) * 100;
            const ly = ((p.y + (dy / len) * offset) / 1100) * 100;
            return (
              <div key={label}>
                <div
                  className="tmp-node absolute flex flex-col items-center"
                  style={{
                    left: `${leftPct}%`,
                    top: `${topPct}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${400 + i * 150}ms`,
                  }}
                >
                  <Icon
                    className="text-accent"
                    strokeWidth={1.2}
                    size={32}
                    aria-hidden
                  />
                </div>
                <div
                  className="tmp-node absolute"
                  style={{
                    left: `${lx}%`,
                    top: `${ly}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${500 + i * 150}ms`,
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
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-3xl px-6 pt-12 pb-24 text-center md:pb-24">
        <div className="mx-auto h-px w-16 bg-border" />
        <p className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl">
          Categories are built by teams capable of connecting industries that
          previously operated separately.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
