import { createFileRoute } from "@tanstack/react-router";
import {
  Cpu,
  FileText,
  FileBadge,
  Mail,
  KeyRound,
  Server,
  Tag,
  ShieldCheck,
  Stethoscope,
  Umbrella,
  Plane,
  Siren,
  MapPin,
  Brain,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-physical-digital")({
  head: () => ({
    meta: [
      { title: "Track My Pet — From Identification to Digital Identity" },
      {
        name: "description",
        content:
          "Physical identity and digital identity belong together.",
      },
    ],
  }),
  component: SlidePhysicalDigital,
});

const TODAY = [
  { label: "MICROCHIP", Icon: Cpu },
  { label: "PAPER PASSPORT", Icon: FileBadge },
  { label: "INSURANCE PDF", Icon: FileText },
  { label: "EMAIL CONFIRMATIONS", Icon: Mail },
  { label: "MULTIPLE LOGINS", Icon: KeyRound },
  { label: "SEPARATE SYSTEMS", Icon: Server },
];

const TMP = [
  { label: "PREMIUM TAG", Icon: Tag },
  { label: "VERIFIED PROFILE", Icon: ShieldCheck },
  { label: "HEALTH RECORDS", Icon: Stethoscope },
  { label: "INSURANCE", Icon: Umbrella },
  { label: "TRAVEL", Icon: Plane },
  { label: "EMERGENCY", Icon: Siren },
  { label: "TRACKING", Icon: MapPin },
  { label: "AI SERVICES", Icon: Brain },
];

const STROKE = 1.1;

function SlidePhysicalDigital() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* KICKER */}
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-2 md:pt-24">
        <p className="text-[10px] tracking-[0.45em] text-muted-foreground text-center">
          INVESTOR SLIDE — 15
        </p>
      </section>

      {/* HEADLINE */}
      <section className="mx-auto max-w-[1500px] px-6 pt-8 pb-4">
        <h1 className="font-serif mx-auto max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          FROM IDENTIFICATION
          <br />
          TO DIGITAL IDENTITY.
        </h1>
      </section>

      {/* SPLIT SCREEN */}
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-10 md:pt-24">
        <div className="relative">
          <svg
            viewBox="0 0 1500 900"
            className="h-auto w-full"
            aria-hidden
          >
            <defs>
              <style>{`
                @keyframes tmpFadeIn {
                  from { opacity: 0; transform: translateY(6px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                @keyframes tmpDraw {
                  from { stroke-dashoffset: 400; }
                  to { stroke-dashoffset: 0; }
                }
                @keyframes tmpScaleIn {
                  from { opacity: 0; transform: scale(0.9); }
                  to { opacity: 1; transform: scale(1); }
                }
                .tmp-fade { animation: tmpFadeIn 800ms ease-out both; opacity: 0; }
                .tmp-scale { animation: tmpScaleIn 900ms ease-out both; opacity: 0; transform-origin: center; }
                .tmp-line {
                  stroke-dasharray: 400;
                  stroke-dashoffset: 400;
                  animation: tmpDraw 1400ms ease-out forwards;
                }
              `}</style>
            </defs>

            {/* ============ LEFT SIDE — TODAY ============ */}
            {(() => {
              const cx = 360;
              const cy = 470;
              const r = 250;
              return (
                <g>
                  {/* Label */}
                  <text
                    x={cx}
                    y={120}
                    textAnchor="middle"
                    fontSize={12}
                    letterSpacing={5}
                    className="fill-muted-foreground tmp-fade"
                    style={{ animationDelay: "200ms" }}
                  >
                    TODAY
                  </text>
                  <line
                    x1={cx - 30}
                    y1={140}
                    x2={cx + 30}
                    y2={140}
                    stroke="currentColor"
                    strokeWidth={0.6}
                    className="text-foreground/30 tmp-fade"
                    style={{ animationDelay: "300ms" }}
                  />

                  {/* Dog/cat silhouette in center — disconnected, no ring */}
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
                    {/* Simple dog head */}
                    <path d="M -42 -20 L -50 -52 L -28 -38 Z" />
                    <path d="M 42 -20 L 50 -52 L 28 -38 Z" />
                    <ellipse cx={0} cy={4} rx={48} ry={42} />
                    <circle cx={-16} cy={-4} r={2.4} fill="currentColor" />
                    <circle cx={16} cy={-4} r={2.4} fill="currentColor" />
                    <path d="M -6 18 Q 0 24 6 18" />
                    <circle cx={0} cy={14} r={2.2} fill="currentColor" />
                  </g>

                  {/* Disconnected objects — scattered around, NO connecting lines */}
                  {TODAY.map((_, i) => {
                    const angle = (-Math.PI / 2) + (i * 2 * Math.PI) / TODAY.length;
                    const x = cx + r * Math.cos(angle);
                    const y = cy + r * Math.sin(angle);
                    return (
                      <g key={`today-tick-${i}`}>
                        {/* tiny tick to suggest disconnection */}
                        <line
                          x1={x - 4}
                          y1={y}
                          x2={x + 4}
                          y2={y}
                          stroke="currentColor"
                          strokeWidth={0.5}
                          className="text-foreground/20 tmp-fade"
                          style={{ animationDelay: `${700 + i * 90}ms` }}
                        />
                      </g>
                    );
                  })}
                </g>
              );
            })()}

            {/* ============ TRANSITION ARROW (center, appears LAST) ============ */}
            <g
              className="tmp-fade"
              style={{ animationDelay: "2400ms" }}
            >
              <line
                x1={690}
                y1={470}
                x2={810}
                y2={470}
                stroke="currentColor"
                strokeWidth={STROKE}
                className="text-foreground/55"
              />
              <path
                d="M 800 460 L 815 470 L 800 480"
                fill="none"
                stroke="currentColor"
                strokeWidth={STROKE}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-foreground/55"
              />
            </g>

            {/* ============ RIGHT SIDE — TRACK MY PET ============ */}
            {(() => {
              const cx = 1140;
              const cy = 470;
              const innerR = 110;
              const outerR = 250;
              return (
                <g>
                  {/* Label */}
                  <text
                    x={cx}
                    y={120}
                    textAnchor="middle"
                    fontSize={12}
                    letterSpacing={5}
                    className="fill-muted-foreground tmp-fade"
                    style={{ animationDelay: "1400ms" }}
                  >
                    TRACK MY PET
                  </text>
                  <line
                    x1={cx - 30}
                    y1={140}
                    x2={cx + 30}
                    y2={140}
                    stroke="currentColor"
                    strokeWidth={0.6}
                    className="text-foreground/30 tmp-fade"
                    style={{ animationDelay: "1500ms" }}
                  />

                  {/* Identity layer rings */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={innerR + 14}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={0.4}
                    className="text-foreground/15 tmp-scale"
                    style={{ animationDelay: "1500ms" }}
                  />
                  <circle
                    cx={cx}
                    cy={cy}
                    r={innerR}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.3}
                    className="text-foreground tmp-scale"
                    style={{ animationDelay: "1600ms" }}
                  />

                  {/* Verified check inside identity */}
                  <g
                    transform={`translate(${cx} ${cy})`}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground tmp-scale"
                    style={{ animationDelay: "1700ms" }}
                  >
                    <path d="M -26 2 L -10 18 L 26 -16" strokeWidth={2} />
                  </g>

                  {/* Connection lines: center -> each TMP node */}
                  {TMP.map((_, i) => {
                    const angle = (-Math.PI / 2) + (i * 2 * Math.PI) / TMP.length;
                    const x1 = cx + (innerR + 8) * Math.cos(angle);
                    const y1 = cy + (innerR + 8) * Math.sin(angle);
                    const x2 = cx + (outerR - 30) * Math.cos(angle);
                    const y2 = cy + (outerR - 30) * Math.sin(angle);
                    return (
                      <line
                        key={`tmp-line-${i}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="currentColor"
                        strokeWidth={0.7}
                        className="text-foreground/30 tmp-line"
                        style={{ animationDelay: `${1900 + i * 70}ms` }}
                      />
                    );
                  })}

                  {/* Outer node markers */}
                  {TMP.map((_, i) => {
                    const angle = (-Math.PI / 2) + (i * 2 * Math.PI) / TMP.length;
                    const x = cx + outerR * Math.cos(angle);
                    const y = cy + outerR * Math.sin(angle);
                    return (
                      <circle
                        key={`tmp-node-${i}`}
                        cx={x}
                        cy={y}
                        r={2.2}
                        fill="currentColor"
                        className="text-foreground/45 tmp-fade"
                        style={{ animationDelay: `${2000 + i * 70}ms` }}
                      />
                    );
                  })}

                  {/* Center label */}
                  <text
                    x={cx}
                    y={cy + innerR + 32}
                    textAnchor="middle"
                    fontSize={10}
                    letterSpacing={4}
                    className="fill-muted-foreground tmp-scale"
                    style={{ animationDelay: "1800ms" }}
                  >
                    VERIFIED IDENTITY
                  </text>
                </g>
              );
            })()}
          </svg>

          {/* TODAY icon + label overlays */}
          {TODAY.map(({ label, Icon }, i) => {
            const cx = 360;
            const cy = 470;
            const r = 250;
            const angle = (-Math.PI / 2) + (i * 2 * Math.PI) / TODAY.length;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            // outward offset for label
            const lx = cx + (r + 56) * Math.cos(angle);
            const ly = cy + (r + 56) * Math.sin(angle);
            return (
              <div key={`today-${label}`}>
                <div
                  className="tmp-fade absolute"
                  style={{
                    left: `${(x / 1500) * 100}%`,
                    top: `${(y / 900) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${800 + i * 110}ms`,
                    opacity: 0,
                  }}
                >
                  <Icon
                    className="text-foreground/75"
                    strokeWidth={STROKE}
                    size={28}
                    aria-hidden
                  />
                </div>
                <div
                  className="tmp-fade absolute"
                  style={{
                    left: `${(lx / 1500) * 100}%`,
                    top: `${(ly / 900) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${900 + i * 110}ms`,
                    opacity: 0,
                  }}
                >
                  <span className="block text-center text-[8.5px] tracking-[0.28em] text-foreground/65 whitespace-nowrap">
                    {label}
                  </span>
                </div>
              </div>
            );
          })}

          {/* TRACK MY PET icon + label overlays */}
          {TMP.map(({ label, Icon }, i) => {
            const cx = 1140;
            const cy = 470;
            const outerR = 250;
            const angle = (-Math.PI / 2) + (i * 2 * Math.PI) / TMP.length;
            const x = cx + outerR * Math.cos(angle);
            const y = cy + outerR * Math.sin(angle);
            const lx = cx + (outerR + 52) * Math.cos(angle);
            const ly = cy + (outerR + 52) * Math.sin(angle);
            return (
              <div key={`tmp-${label}`}>
                <div
                  className="tmp-fade absolute"
                  style={{
                    left: `${(x / 1500) * 100}%`,
                    top: `${(y / 900) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${2050 + i * 80}ms`,
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
                <div
                  className="tmp-fade absolute"
                  style={{
                    left: `${(lx / 1500) * 100}%`,
                    top: `${(ly / 900) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${2150 + i * 80}ms`,
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
        </div>
      </section>

      {/* BODY COPY */}
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-10 text-center md:pt-24">
        <p className="font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          Microchips, passports and documentation already exist.
        </p>
        <p className="mt-6 font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          The next step allows information to follow the animal rather than the
          organisation storing it.
        </p>
        <p className="mt-6 font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          Track My Pet connects physical identification with digital identity,
          documentation and services.
        </p>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-3xl px-6 pt-12 pb-32 text-center md:pb-40">
        <div className="mx-auto h-px w-16 bg-border" />
        <p className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl">
          Identity becomes more valuable every time the profile is used.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
