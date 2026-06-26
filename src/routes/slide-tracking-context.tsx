import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin,
  Activity,
  Hexagon,
  Route as RouteIcon,
  Fingerprint,
  HeartPulse,
  Umbrella,
  FileText,
  Siren,
  ClipboardList,
  Stethoscope,
  Brain,
  ShieldCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-tracking-context")({
  head: () => ({
    meta: [
      { title: "Track My Pet — Location Is One Signal, Context Changes Everything" },
      {
        name: "description",
        content:
          "Tracking becomes a service layer rather than a standalone device. Location is one signal. Context changes everything.",
      },
    ],
  }),
  component: SlideTrackingContext,
});

const STROKE = 1.1;

const TRACKING = [
  { label: "LOCATION", Icon: MapPin },
  { label: "ACTIVITY", Icon: Activity },
  { label: "GEOFENCE", Icon: Hexagon },
  { label: "MOVEMENT HISTORY", Icon: RouteIcon },
];

const CONTEXT = [
  { label: "LOCATION", Icon: MapPin },
  { label: "IDENTITY", Icon: Fingerprint },
  { label: "HEALTH PROFILE", Icon: HeartPulse },
  { label: "INSURANCE", Icon: Umbrella },
  { label: "TRAVEL DOCUMENTS", Icon: FileText },
  { label: "EMERGENCY CONTACTS", Icon: Siren },
  { label: "CARE INSTRUCTIONS", Icon: ClipboardList },
  { label: "VETERINARY HISTORY", Icon: Stethoscope },
  { label: "AI RECOMMENDATIONS", Icon: Brain },
];

function SlideTrackingContext() {
  const vbW = 1500;
  const vbH = 900;

  // Left column
  const leftCX = 340;
  const leftCY = 460;
  const leftTop = 240;
  const leftGap = 140;

  // Right radial
  const rightCX = 1160;
  const rightCY = 460;
  const rightInnerR = 95;
  const rightOuterR = 255;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* KICKER */}
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-2 md:pt-24">
        <p className="text-[10px] tracking-[0.45em] text-muted-foreground text-center">
          INVESTOR SLIDE — TRACKING &amp; CONTEXT
        </p>
      </section>

      {/* HEADLINE */}
      <section className="mx-auto max-w-[1500px] px-6 pt-8 pb-4">
        <h1 className="font-serif mx-auto max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          LOCATION IS ONE SIGNAL.
          <br />
          CONTEXT CHANGES EVERYTHING.
        </h1>
      </section>

      {/* SPLIT SCREEN VISUAL */}
      <section className="mx-auto max-w-[1500px] px-6 pt-14 pb-8 md:pt-20">
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
                  animation: tmpDraw 1400ms ease-out forwards;
                }
              `}</style>
            </defs>

            {/* ============ LEFT COLUMN LABEL ============ */}
            <text
              x={leftCX}
              y={120}
              textAnchor="middle"
              fontSize={12}
              letterSpacing={5}
              className="fill-muted-foreground tmp-fade"
              style={{ animationDelay: "200ms" }}
            >
              TRACKING
            </text>
            <line
              x1={leftCX - 30}
              y1={140}
              x2={leftCX + 30}
              y2={140}
              stroke="currentColor"
              strokeWidth={0.6}
              className="text-foreground/30 tmp-fade"
              style={{ animationDelay: "300ms" }}
            />

            {/* Left vertical spine */}
            <line
              x1={leftCX}
              y1={leftTop}
              x2={leftCX}
              y2={leftTop + (TRACKING.length - 1) * leftGap}
              stroke="currentColor"
              strokeWidth={0.5}
              className="text-foreground/20 tmp-line"
              style={{ animationDelay: "400ms" }}
            />

            {/* Left item nodes */}
            {TRACKING.map((_, i) => {
              const y = leftTop + i * leftGap;
              return (
                <g key={`left-node-${i}`}>
                  <circle
                    cx={leftCX}
                    cy={y}
                    r={2.6}
                    fill="currentColor"
                    className="text-foreground/40 tmp-fade"
                    style={{ animationDelay: `${500 + i * 120}ms` }}
                  />
                  {/* Short horizontal tick toward label */}
                  <line
                    x1={leftCX + 4}
                    y1={y}
                    x2={leftCX + 28}
                    y2={y}
                    stroke="currentColor"
                    strokeWidth={0.4}
                    className="text-foreground/20 tmp-line"
                    style={{ animationDelay: `${600 + i * 120}ms` }}
                  />
                </g>
              );
            })}

            {/* ============ RIGHT COLUMN LABEL ============ */}
            <text
              x={rightCX}
              y={120}
              textAnchor="middle"
              fontSize={12}
              letterSpacing={5}
              className="fill-muted-foreground tmp-fade"
              style={{ animationDelay: "1200ms" }}
            >
              CONNECTED CONTEXT
            </text>
            <line
              x1={rightCX - 30}
              y1={140}
              x2={rightCX + 30}
              y2={140}
              stroke="currentColor"
              strokeWidth={0.6}
              className="text-foreground/30 tmp-fade"
              style={{ animationDelay: "1300ms" }}
            />

            {/* Right identity center */}
            <circle
              cx={rightCX}
              cy={rightCY}
              r={rightInnerR + 14}
              fill="none"
              stroke="currentColor"
              strokeWidth={0.4}
              className="text-foreground/15 tmp-scale"
              style={{ animationDelay: "1400ms" }}
            />
            <circle
              cx={rightCX}
              cy={rightCY}
              r={rightInnerR}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.2}
              className="text-foreground tmp-scale"
              style={{ animationDelay: "1500ms" }}
            />

            {/* Verified check inside identity */}
            <g
              transform={`translate(${rightCX} ${rightCY})`}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground tmp-scale"
              style={{ animationDelay: "1600ms" }}
            >
              <path d="M -26 2 L -10 18 L 26 -16" strokeWidth={2} />
            </g>

            {/* Center label */}
            <text
              x={rightCX}
              y={rightCY + rightInnerR + 32}
              textAnchor="middle"
              fontSize={10}
              letterSpacing={4}
              className="fill-muted-foreground tmp-fade"
              style={{ animationDelay: "1700ms" }}
            >
              VERIFIED PROFILE
            </text>

            {/* Connection lines: center -> each context node */}
            {CONTEXT.map((_, i) => {
              const angle =
                -Math.PI / 2 + (i * 2 * Math.PI) / CONTEXT.length;
              const x1 = rightCX + (rightInnerR + 8) * Math.cos(angle);
              const y1 = rightCY + (rightInnerR + 8) * Math.sin(angle);
              const x2 = rightCX + (rightOuterR - 30) * Math.cos(angle);
              const y2 = rightCY + (rightOuterR - 30) * Math.sin(angle);
              return (
                <line
                  key={`ctx-line-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth={0.7}
                  className="text-foreground/30 tmp-line"
                  style={{ animationDelay: `${1800 + i * 70}ms` }}
                />
              );
            })}

            {/* Context node dots */}
            {CONTEXT.map((_, i) => {
              const angle =
                -Math.PI / 2 + (i * 2 * Math.PI) / CONTEXT.length;
              const x = rightCX + rightOuterR * Math.cos(angle);
              const y = rightCY + rightOuterR * Math.sin(angle);
              return (
                <circle
                  key={`ctx-node-${i}`}
                  cx={x}
                  cy={y}
                  r={2.4}
                  fill="currentColor"
                  className="text-foreground/45 tmp-fade"
                  style={{ animationDelay: `${1900 + i * 70}ms` }}
                />
              );
            })}

            {/* ============ TRANSITION ELEMENT (center, appears LAST) ============ */}
            <g className="tmp-fade" style={{ animationDelay: "2600ms" }}>
              {/* Vertical connecting line */}
              <line
                x1={750}
                y1={280}
                x2={750}
                y2={640}
                stroke="currentColor"
                strokeWidth={0.5}
                className="text-foreground/25"
                strokeDasharray="4 4"
              />

              {/* Arrow down */}
              <path
                d="M 740 630 L 750 645 L 760 630"
                fill="none"
                stroke="currentColor"
                strokeWidth={STROKE}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-foreground/55"
              />
            </g>
          </svg>

          {/* ============ LEFT ICON + LABEL OVERLAYS ============ */}
          {TRACKING.map(({ label, Icon }, i) => {
            const y = leftTop + i * leftGap;
            return (
              <div key={`left-${label}`}>
                <div
                  className="tmp-fade absolute"
                  style={{
                    left: `${((leftCX - 40) / vbW) * 100}%`,
                    top: `${(y / vbH) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${600 + i * 120}ms`,
                    opacity: 0,
                  }}
                >
                  <Icon
                    className="text-foreground/65"
                    strokeWidth={STROKE}
                    size={24}
                    aria-hidden
                  />
                </div>
                <div
                  className="tmp-fade absolute"
                  style={{
                    left: `${((leftCX + 64) / vbW) * 100}%`,
                    top: `${(y / vbH) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${700 + i * 120}ms`,
                    opacity: 0,
                  }}
                >
                  <span className="block text-center text-[9px] tracking-[0.28em] text-foreground/65 whitespace-nowrap">
                    {label}
                  </span>
                </div>
              </div>
            );
          })}

          {/* ============ RIGHT ICON + LABEL OVERLAYS ============ */}
          {CONTEXT.map(({ label, Icon }, i) => {
            const angle =
              -Math.PI / 2 + (i * 2 * Math.PI) / CONTEXT.length;
            const x = rightCX + rightOuterR * Math.cos(angle);
            const y = rightCY + rightOuterR * Math.sin(angle);
            const lx = rightCX + (rightOuterR + 52) * Math.cos(angle);
            const ly = rightCY + (rightOuterR + 52) * Math.sin(angle);
            return (
              <div key={`ctx-${label}`}>
                <div
                  className="tmp-fade absolute"
                  style={{
                    left: `${(x / vbW) * 100}%`,
                    top: `${(y / vbH) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${2000 + i * 70}ms`,
                    opacity: 0,
                  }}
                >
                  <Icon
                    className="text-accent"
                    strokeWidth={STROKE}
                    size={24}
                    aria-hidden
                  />
                </div>
                <div
                  className="tmp-fade absolute"
                  style={{
                    left: `${(lx / vbW) * 100}%`,
                    top: `${(ly / vbH) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${2100 + i * 70}ms`,
                    opacity: 0,
                  }}
                >
                  <span className="block text-center text-[8.5px] tracking-[0.28em] text-foreground/75 whitespace-nowrap">
                    {label}
                  </span>
                </div>
              </div>
            );
          })}

          {/* ============ CENTER TRANSITION TEXT OVERLAYS ============ */}
          <div
            className="tmp-fade absolute"
            style={{
              left: `${(750 / vbW) * 100}%`,
              top: `${(260 / vbH) * 100}%`,
              transform: "translate(-50%, -50%)",
              animationDelay: "2600ms",
              opacity: 0,
            }}
          >
            <span className="block text-center text-[9px] tracking-[0.35em] text-foreground/60 whitespace-nowrap">
              LOCATION
            </span>
          </div>
          <div
            className="tmp-fade absolute"
            style={{
              left: `${(750 / vbW) * 100}%`,
              top: `${(360 / vbH) * 100}%`,
              transform: "translate(-50%, -50%)",
              animationDelay: "2700ms",
              opacity: 0,
            }}
          >
            <span className="block text-center text-[9px] tracking-[0.35em] text-foreground/60 whitespace-nowrap">
              IDENTITY
            </span>
          </div>
          <div
            className="tmp-fade absolute"
            style={{
              left: `${(750 / vbW) * 100}%`,
              top: `${(460 / vbH) * 100}%`,
              transform: "translate(-50%, -50%)",
              animationDelay: "2800ms",
              opacity: 0,
            }}
          >
            <span className="block text-center text-[9px] tracking-[0.35em] text-foreground/60 whitespace-nowrap">
              CONTEXT
            </span>
          </div>
          <div
            className="tmp-fade absolute"
            style={{
              left: `${(750 / vbW) * 100}%`,
              top: `${(580 / vbH) * 100}%`,
              transform: "translate(-50%, -50%)",
              animationDelay: "3000ms",
              opacity: 0,
            }}
          >
            <span className="block text-center text-[8px] tracking-[0.3em] text-accent whitespace-nowrap">
              BETTER DECISIONS
            </span>
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="mx-auto max-w-3xl px-6 pt-14 pb-24 text-center md:pb-24">
        <div className="mx-auto h-px w-16 bg-border" />
        <p className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl">
          Tracking becomes significantly more valuable when connected to identity
          and trusted information.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
