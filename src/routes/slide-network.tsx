import { createFileRoute } from "@tanstack/react-router";
import { Fingerprint } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-network")({
  head: () => ({
    meta: [
      { title: "Track My Pet — Every Profile Strengthens the Network" },
      {
        name: "description",
        content:
          "Every new profile strengthens the entire ecosystem.",
      },
    ],
  }),
  component: SlideNetwork,
});

const STROKE = 1.1;

type Ring = {
  label: string;
  radius: number;
  opacity: number;
  items: string[];
};

const RINGS: Ring[] = [
  {
    label: "IDENTITY",
    radius: 180,
    opacity: 0.55,
    items: ["OWNERS", "DOGS", "CATS", "FAMILIES"],
  },
  {
    label: "SERVICES",
    radius: 270,
    opacity: 0.42,
    items: [
      "VETERINARY",
      "INSURANCE",
      "TRAVEL",
      "EMERGENCY",
      "PET SITTING",
      "TRACKING",
    ],
  },
  {
    label: "PARTNERS",
    radius: 360,
    opacity: 0.3,
    items: [
      "CLINICS",
      "INSURERS",
      "TECHNOLOGY",
      "RESEARCH",
      "RETAIL",
    ],
  },
  {
    label: "INTELLIGENCE",
    radius: 450,
    opacity: 0.2,
    items: [
      "POPULATION INSIGHTS",
      "HEALTH TRENDS",
      "AI RECOMMENDATIONS",
      "BENCHMARKING",
      "PREDICTIVE SERVICES",
    ],
  },
];

function SlideNetwork() {
  const vbW = 1500;
  const vbH = 1050;
  const cx = 750;
  const cy = 520;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* KICKER */}
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-2 md:pt-24">
        <p className="text-[10px] tracking-[0.45em] text-muted-foreground text-center">
          INVESTOR SLIDE — NETWORK EFFECTS
        </p>
      </section>

      {/* HEADLINE */}
      <section className="mx-auto max-w-[1500px] px-6 pt-8 pb-4">
        <h1 className="font-serif mx-auto max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          EVERY PROFILE
          <br />
          STRENGTHENS THE NETWORK.
        </h1>
      </section>

      {/* RING VISUAL */}
      <section className="mx-auto max-w-[1500px] px-6 pt-10 pb-6 md:pt-14">
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
                  from { opacity: 0; transform: scale(0.85); }
                  to { opacity: 1; transform: scale(1); }
                }
                @keyframes tmpDraw {
                  from { stroke-dashoffset: 600; }
                  to { stroke-dashoffset: 0; }
                }
                .tmp-fade {
                  animation: tmpFadeIn 800ms ease-out both;
                  opacity: 0;
                }
                .tmp-scale {
                  animation: tmpScaleIn 1000ms ease-out both;
                  opacity: 0;
                  transform-origin: center;
                  transform-box: fill-box;
                }
                .tmp-line {
                  stroke-dasharray: 600;
                  stroke-dashoffset: 600;
                  animation: tmpDraw 1400ms ease-out forwards;
                }
              `}</style>
              <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Subtle center glow */}
            <circle
              cx={cx}
              cy={cy}
              r={460}
              fill="url(#ringGlow)"
              className="text-accent"
            />

            {/* ============ RINGS ============ */}
            {RINGS.map((ring, i) => {
              const count = ring.items.length;
              return (
                <g key={`ring-${ring.label}`}>
                  {/* Ring circle */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={ring.radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={STROKE * 0.65}
                    className="text-foreground tmp-scale"
                    style={{
                      opacity: ring.opacity,
                      animationDelay: `${800 + i * 350}ms`,
                      transformOrigin: `${cx}px ${cy}px`,
                    }}
                  />

                  {/* Item dots on ring */}
                  {ring.items.map((_, j) => {
                    const angle =
                      -Math.PI / 2 + (j * 2 * Math.PI) / count;
                    const x = cx + ring.radius * Math.cos(angle);
                    const y = cy + ring.radius * Math.sin(angle);
                    return (
                      <circle
                        key={`ring-${i}-dot-${j}`}
                        cx={x}
                        cy={y}
                        r={3}
                        fill="currentColor"
                        className="text-accent tmp-fade"
                        style={{
                          animationDelay: `${1100 + i * 350 + j * 70}ms`,
                        }}
                      />
                    );
                  })}

                  {/* Ring outward connection lines (to next ring) */}
                  {i < RINGS.length - 1 &&
                    ring.items.map((_, j) => {
                      const angle =
                        -Math.PI / 2 + (j * 2 * Math.PI) / count;
                      const x1 = cx + ring.radius * Math.cos(angle);
                      const y1 = cy + ring.radius * Math.sin(angle);
                      const x2 =
                        cx + RINGS[i + 1].radius * Math.cos(angle);
                      const y2 =
                        cy + RINGS[i + 1].radius * Math.sin(angle);
                      return (
                        <line
                          key={`conn-${i}-${j}`}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="currentColor"
                          strokeWidth={0.5}
                          className="text-foreground/20 tmp-line"
                          style={{
                            animationDelay: `${2400 + i * 200 + j * 50}ms`,
                          }}
                        />
                      );
                    })}
                </g>
              );
            })}

            {/* ============ CENTRAL IDENTITY NODE ============ */}
            <g
              className="tmp-scale"
              style={{
                animationDelay: "300ms",
                transformOrigin: `${cx}px ${cy}px`,
              }}
            >
              <circle
                cx={cx}
                cy={cy}
                r={70}
                fill="hsl(var(--background))"
                stroke="currentColor"
                strokeWidth={STROKE}
                className="text-foreground/70"
              />
              <circle
                cx={cx}
                cy={cy}
                r={56}
                fill="none"
                stroke="currentColor"
                strokeWidth={0.5}
                className="text-foreground/30"
              />
            </g>

            {/* Ring labels (right side, on the ring) */}
            {RINGS.map((ring, i) => (
              <text
                key={`label-${ring.label}`}
                x={cx + ring.radius}
                y={cy - 10}
                textAnchor="middle"
                fontSize={9}
                letterSpacing={4}
                className="fill-muted-foreground tmp-fade"
                style={{ animationDelay: `${1300 + i * 350}ms` }}
              >
                {ring.label}
              </text>
            ))}
          </svg>

          {/* Center icon overlay */}
          <div
            className="tmp-fade absolute"
            style={{
              left: `${(cx / vbW) * 100}%`,
              top: `${(cy / vbH) * 100}%`,
              transform: "translate(-50%, -50%)",
              animationDelay: "600ms",
            }}
          >
            <Fingerprint
              className="text-accent"
              strokeWidth={STROKE}
              size={44}
              aria-hidden
            />
          </div>

          {/* Center label below icon */}
          <div
            className="tmp-fade absolute"
            style={{
              left: `${(cx / vbW) * 100}%`,
              top: `${((cy + 90) / vbH) * 100}%`,
              transform: "translate(-50%, -50%)",
              animationDelay: "800ms",
            }}
          >
            <span className="block text-center text-[9px] tracking-[0.4em] text-foreground/70 whitespace-nowrap">
              TRACK MY PET
            </span>
          </div>

          {/* Item labels on rings */}
          {RINGS.map((ring, i) => {
            const count = ring.items.length;
            return ring.items.map((item, j) => {
              const angle = -Math.PI / 2 + (j * 2 * Math.PI) / count;
              const labelR = ring.radius + 22;
              const x = cx + labelR * Math.cos(angle);
              const y = cy + labelR * Math.sin(angle);
              return (
                <div
                  key={`label-${i}-${j}`}
                  className="tmp-fade absolute"
                  style={{
                    left: `${(x / vbW) * 100}%`,
                    top: `${(y / vbH) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${1200 + i * 350 + j * 70}ms`,
                  }}
                >
                  <span className="block text-center text-[8px] tracking-[0.28em] text-foreground/65 whitespace-nowrap">
                    {item}
                  </span>
                </div>
              );
            });
          })}
        </div>
      </section>

      {/* BODY COPY */}
      <section className="mx-auto max-w-3xl px-6 pt-14 pb-6 text-center md:pt-20">
        <p className="font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          The value of the ecosystem grows every time a new owner, partner or
          service joins the platform.
        </p>
        <p className="mt-6 font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          The identity layer becomes stronger, smarter and more valuable over
          time.
        </p>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="mx-auto max-w-3xl px-6 pt-14 pb-32 text-center md:pb-40">
        <div className="mx-auto h-px w-16 bg-border" />
        <p className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl">
          Scale creates intelligence.
          <br />
          Intelligence creates value.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
