import { createFileRoute } from "@tanstack/react-router";
import {
  Fingerprint,
  Cpu,
  UserCheck,
  Mail,
  Clock,
  Pill,
  FileText,
  ShieldCheck,
  Plane,
  Stethoscope,
  Users,
  AlertCircle,
  Brain,
  TrendingUp,
  Share2,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-trust")({
  head: () => ({
    meta: [
      { title: "Track My Pet — Trust Is Infrastructure" },
      {
        name: "description",
        content:
          "Trust creates adoption. Track My Pet builds trust in layers, from identification to platform intelligence.",
      },
    ],
  }),
  component: SlideTrust,
});

const STROKE = 1.1;

interface PyramidLayer {
  label: string;
  items: string[];
  icons: React.ComponentType<{ className?: string; strokeWidth?: number; size?: number }>[];
}

const PYRAMID_LAYERS: PyramidLayer[] = [
  {
    label: "IDENTIFICATION",
    items: ["Premium tag", "NFC", "QR", "Microchip"],
    icons: [Fingerprint, Cpu, Fingerprint, Cpu],
  },
  {
    label: "OWNERSHIP",
    items: ["Owner verification", "Contact details", "Ownership history"],
    icons: [UserCheck, Mail, Clock],
  },
  {
    label: "DOCUMENTATION",
    items: ["Vaccinations", "Health records", "Insurance", "Travel documents"],
    icons: [Pill, FileText, ShieldCheck, Plane],
  },
  {
    label: "ACCESS",
    items: ["Veterinary access", "Caregiver access", "Emergency access", "Travel access"],
    icons: [Stethoscope, Users, AlertCircle, Plane],
  },
  {
    label: "INTELLIGENCE",
    items: ["AI recommendations", "Health insights", "Ecosystem services"],
    icons: [Brain, TrendingUp, Share2],
  },
];

function SlideTrust() {
  const vbW = 1200;
  const vbH = 720;

  // Pyramid geometry — base at bottom, top at top
  const cx = vbW / 2;
  const baseY = 620;
  const topY = 260;
  const layerCount = PYRAMID_LAYERS.length;
  const layerH = (baseY - topY) / layerCount; // ~72px each
  const baseW = 520;
  const topW = 140;

  // Compute width at a given y (linear taper)
  const widthAtY = (y: number) => {
    const t = (baseY - y) / (baseY - topY);
    return baseW - (baseW - topW) * t;
  };

  // Build layer geometry from bottom to top (Layer 0 = base = Identification)
  const layers = PYRAMID_LAYERS.map((layer, i) => {
    const yBottom = baseY - i * layerH;
    const yTop = yBottom - layerH;
    const wBottom = widthAtY(yBottom);
    const wTop = widthAtY(yTop);
    const xLeftBottom = cx - wBottom / 2;
    const xRightBottom = cx + wBottom / 2;
    const xLeftTop = cx - wTop / 2;
    const xRightTop = cx + wTop / 2;
    const midY = (yBottom + yTop) / 2;
    return {
      ...layer,
      yBottom,
      yTop,
      wBottom,
      wTop,
      xLeftBottom,
      xRightBottom,
      xLeftTop,
      xRightTop,
      midY,
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
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes tmpDraw {
          from { stroke-dashoffset: 700; }
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
          stroke-dasharray: 700;
          stroke-dashoffset: 700;
          animation: tmpDraw 1200ms ease-out forwards;
        }
      `}</style>

      {/* KICKER + HEADLINE */}
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-4 md:pt-24">
        <p
          className="text-[10px] tracking-[0.45em] text-muted-foreground text-center tmp-fade"
          style={{ animationDelay: "200ms" }}
        >
          INVESTOR SLIDE — TRUST
        </p>
        <h1
          className="font-serif mx-auto mt-10 max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl tmp-fade"
          style={{ animationDelay: "400ms" }}
        >
          TRUST IS INFRASTRUCTURE.
        </h1>
      </section>

      {/* PYRAMID VISUAL */}
      <section className="mx-auto max-w-[1200px] px-6 pt-10 pb-6 md:pt-14">
        <div
          className="relative mx-auto w-full"
          style={{ aspectRatio: `${vbW} / ${vbH}` }}
        >
          <svg
            viewBox={`0 0 ${vbW} ${vbH}`}
            className="h-full w-full"
            aria-hidden
          >
            {/* Pyramid outline — single path with horizontal dividers */}
            {layers.map((layer, i) => {
              // Outer path for each layer (trapezoid)
              const d = `
                M ${layer.xLeftBottom} ${layer.yBottom}
                L ${layer.xRightBottom} ${layer.yBottom}
                L ${layer.xRightTop} ${layer.yTop}
                L ${layer.xLeftTop} ${layer.yTop}
                Z
              `;
              return (
                <path
                  key={`layer-shape-${i}`}
                  d={d}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={0.8}
                  className="tmp-fade text-foreground/25"
                  style={{ animationDelay: `${400 + i * 300}ms` }}
                />
              );
            })}

            {/* Horizontal dividers between layers (subtle accent) */}
            {layers.slice(1).map((layer, i) => (
              <line
                key={`divider-${i}`}
                x1={layer.xLeftBottom}
                y1={layer.yBottom}
                x2={layer.xRightBottom}
                y2={layer.yBottom}
                stroke="currentColor"
                strokeWidth={0.5}
                className="tmp-line text-foreground/15"
                style={{ animationDelay: `${600 + i * 300}ms` }}
              />
            ))}

            {/* Layer labels inside each band */}
            {layers.map((layer, i) => (
              <g
                key={`layer-label-${i}`}
                className="tmp-fade"
                fill="currentColor"
                style={{ animationDelay: `${700 + i * 300}ms` }}
              >
                <text
                  x={cx}
                  y={layer.midY - 8}
                  textAnchor="middle"
                  fontSize={11}
                  letterSpacing={4}
                  className="text-foreground/70"
                >
                  {layer.label}
                </text>
              </g>
            ))}

            {/* Small accent dot at the apex */}
            <circle
              cx={cx}
              cy={topY - 16}
              r={3}
              className="tmp-scale fill-accent"
              style={{ animationDelay: "2000ms", transformOrigin: `${cx}px ${topY - 16}px` }}
            />

            {/* Apex label */}
            <g
              className="tmp-fade"
              fill="currentColor"
              style={{ animationDelay: "2200ms" }}
            >
              <text
                x={cx}
                y={topY - 30}
                textAnchor="middle"
                fontSize={9}
                letterSpacing={3}
                className="text-muted-foreground"
              >
                PLATFORM INTELLIGENCE
              </text>
            </g>
          </svg>

          {/* Icons + item labels inside each layer */}
          {layers.map((layer, i) => {
            const itemCount = layer.items.length;
            const iconSize = 15;
            const itemGap = Math.min(110, (layer.wTop * 0.75) / Math.max(itemCount - 1, 1));
            const totalRowW = itemGap * (itemCount - 1);
            const startX = cx - totalRowW / 2;

            return (
              <div key={`layer-content-${i}`}>
                {layer.icons.map((Icon, j) => {
                  const ix = startX + j * itemGap;
                  const leftPct = (ix / vbW) * 100;
                  const topPct = ((layer.midY + 14) / vbH) * 100;
                  return (
                    <div
                      key={`icon-${i}-${j}`}
                      className="tmp-fade absolute flex flex-col items-center"
                      style={{
                        left: `${leftPct}%`,
                        top: `${topPct}%`,
                        transform: "translate(-50%, -50%)",
                        animationDelay: `${900 + i * 300 + j * 80}ms`,
                      }}
                    >
                      <Icon
                        className="text-accent"
                        strokeWidth={1.1}
                        size={iconSize}
                        aria-hidden
                      />
                      <span className="mt-1.5 block text-center text-[7px] tracking-[0.2em] text-foreground/50 whitespace-nowrap">
                        {layer.items[j].toUpperCase()}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-24 text-center md:pb-24">
        <div
          className="mx-auto h-px w-16 bg-border tmp-fade"
          style={{ animationDelay: "2800ms" }}
        />
        <p
          className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl tmp-fade"
          style={{ animationDelay: "3000ms" }}
        >
          Trust turns isolated services into connected ecosystems.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
