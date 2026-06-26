import { createFileRoute } from "@tanstack/react-router";
import { Users, Database, Sparkles, Heart, Handshake, Layers } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-flywheel")({
  head: () => ({
    meta: [
      { title: "Track My Pet, Network effects create compounding value." },
      {
        name: "description",
        content:
          "The value of the platform increases with every new profile.",
      },
    ],
  }),
  component: SlideFlywheel,
});

const STAGES = [
  { label: "More profiles", Icon: Users },
  { label: "More data", Icon: Database },
  { label: "Better AI", Icon: Sparkles },
  { label: "Better experiences", Icon: Heart },
  { label: "More partners", Icon: Handshake },
  { label: "More services", Icon: Layers },
];

function SlideFlywheel() {
  const cx = 700;
  const cy = 560;
  const ringR = 320;
  const nodeR = 44;
  const n = STAGES.length;

  const positions = STAGES.map((_, i) => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / n;
    return {
      x: cx + ringR * Math.cos(angle),
      y: cy + ringR * Math.sin(angle),
      angle,
    };
  });

  // Build arc segments between consecutive nodes (clockwise on visible ring)
  const arcs = positions.map((p, i) => {
    const next = positions[(i + 1) % n];
    // shorten endpoints away from node centers
    const a1 = Math.atan2(p.y - cy, p.x - cx);
    const a2 = Math.atan2(next.y - cy, next.x - cx);
    const pad = nodeR / ringR + 0.04;
    const s1 = a1 + pad;
    const s2 = a2 - pad;
    const sx = cx + ringR * Math.cos(s1);
    const sy = cy + ringR * Math.sin(s1);
    const ex = cx + ringR * Math.cos(s2);
    const ey = cy + ringR * Math.sin(s2);
    return { d: `M ${sx} ${sy} A ${ringR} ${ringR} 0 0 1 ${ex} ${ey}`, ex, ey, ang: s2 };
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-6 md:pt-24">
        <p className="text-[10px] tracking-[0.45em] text-muted-foreground text-center">
          INVESTOR SLIDE — 09
        </p>
        <h1 className="font-serif mx-auto mt-10 max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          NETWORK EFFECTS
          <br />
          CREATE COMPOUNDING VALUE.
        </h1>
      </section>

      <section className="mx-auto max-w-[1300px] px-6 pt-10 pb-6">
        <div className="relative mx-auto w-full" style={{ aspectRatio: "1400 / 1180" }}>
          <svg viewBox="0 0 1400 1180" className="h-full w-full" aria-hidden>
            <defs>
              <style>{`
                @keyframes tmpFadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes tmpDraw { from { stroke-dashoffset: 900; } to { stroke-dashoffset: 0; } }
                @keyframes tmpScaleIn { from { opacity: 0; transform: scale(0.85); } to { opacity: 1; transform: scale(1); } }
                @keyframes tmpSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                .tmp-center { animation: tmpScaleIn 900ms ease-out both; transform-origin: center; }
                .tmp-node { animation: tmpFadeIn 700ms ease-out both; opacity: 0; }
                .tmp-arc { stroke-dasharray: 900; stroke-dashoffset: 900; animation: tmpDraw 1100ms ease-out forwards; }
                .tmp-arrow { animation: tmpFadeIn 600ms ease-out both; opacity: 0; }
                .tmp-spin { transform-origin: ${cx}px ${cy}px; animation: tmpSpin 60s linear infinite; }
              `}</style>
            </defs>

            {/* Subtle halo ring */}
            <g className="tmp-center text-foreground" fill="none" stroke="currentColor" strokeLinecap="round">
              <circle cx={cx} cy={cy} r={ringR + 60} strokeWidth={0.3} className="text-foreground/10" />
            </g>

            {/* Arcs (flywheel) */}
            <g fill="none" stroke="currentColor" strokeLinecap="round" className="text-foreground/35">
              {arcs.map((a, i) => (
                <path
                  key={`arc-${i}`}
                  d={a.d}
                  strokeWidth={1.1}
                  className="tmp-arc"
                  style={{ animationDelay: `${900 + i * 220}ms` }}
                />
              ))}
            </g>

            {/* Arrowheads at end of each arc */}
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/55">
              {arcs.map((a, i) => {
                // tangent direction at end angle (clockwise on this ring -> +tangent)
                const tx = -Math.sin(a.ang);
                const ty = Math.cos(a.ang);
                const size = 9;
                const back = 4;
                const bx = a.ex - tx * back;
                const by = a.ey - ty * back;
                // perpendicular
                const px = -ty;
                const py = tx;
                const x1 = bx - tx * size + px * size * 0.55;
                const y1 = by - ty * size + py * size * 0.55;
                const x2 = bx - tx * size - px * size * 0.55;
                const y2 = by - ty * size - py * size * 0.55;
                return (
                  <polyline
                    key={`arr-${i}`}
                    points={`${x1},${y1} ${a.ex},${a.ey} ${x2},${y2}`}
                    strokeWidth={1.1}
                    className="tmp-arrow"
                    style={{ animationDelay: `${1100 + i * 220}ms` }}
                  />
                );
              })}
            </g>

            {/* Slow rotating motion indicator (appears last) */}
            <g
              className="tmp-arrow tmp-spin text-accent"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              style={{ animationDelay: `${900 + n * 220 + 400}ms` }}
            >
              <circle cx={cx} cy={cy} r={ringR - 70} strokeWidth={0.5} strokeDasharray="2 10" className="text-foreground/25" />
            </g>

            {/* Center label */}
            <g className="tmp-center" fill="currentColor">
              <text x={cx} y={cy - 6} textAnchor="middle" fontSize={14} letterSpacing={6} className="text-foreground/70">
                COMPOUNDING
              </text>
              <text x={cx} y={cy + 18} textAnchor="middle" fontSize={14} letterSpacing={6} className="text-foreground/70">
                VALUE
              </text>
              <line x1={cx - 30} y1={cy + 34} x2={cx + 30} y2={cy + 34} stroke="currentColor" strokeWidth={0.6} className="text-border" />
              <text x={cx} y={cy + 54} textAnchor="middle" fontSize={11} letterSpacing={4} className="text-muted-foreground">
                TRACK MY PET
              </text>
            </g>
          </svg>

          {/* Stage nodes */}
          {STAGES.map(({ label, Icon }, i) => {
            const p = positions[i];
            const leftPct = (p.x / 1400) * 100;
            const topPct = (p.y / 1180) * 100;
            const dx = p.x - cx;
            const dy = p.y - cy;
            const len = Math.hypot(dx, dy);
            const offset = 64;
            const lx = (p.x + (dx / len) * offset) / 1400 * 100;
            const ly = (p.y + (dy / len) * offset) / 1180 * 100;
            return (
              <div key={label}>
                <div
                  className="tmp-node absolute flex items-center justify-center"
                  style={{
                    left: `${leftPct}%`,
                    top: `${topPct}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${500 + i * 220}ms`,
                  }}
                >
                  <Icon className="text-accent" strokeWidth={1.2} size={34} aria-hidden />
                </div>
                <div
                  className="tmp-node absolute"
                  style={{
                    left: `${lx}%`,
                    top: `${ly}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${600 + i * 220}ms`,
                  }}
                >
                  <span className="block text-center text-[10px] tracking-[0.32em] text-foreground/75 whitespace-nowrap">
                    {label.toUpperCase()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-16 pb-10 text-center md:pt-24">
        <p className="font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          Every new profile contributes information, context and relationships
          that strengthen the ecosystem.
        </p>
        <p className="mt-6 font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          More data improves AI. Better AI improves services. Better services
          attract more users and partners.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-12 pb-32 text-center md:pb-40">
        <div className="mx-auto h-px w-16 bg-border" />
        <p className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl">
          The platform becomes more valuable
          <br />
          with every new profile that joins the ecosystem.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
