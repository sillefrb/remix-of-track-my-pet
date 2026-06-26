import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-opportunity")({
  head: () => ({
    meta: [
      { title: "Track My Pet — 198 Million Animals. One Missing Infrastructure Layer." },
      {
        name: "description",
        content:
          "A category-defining opportunity is emerging. Track My Pet is building the identity layer connecting Europe's pet ecosystem.",
      },
    ],
  }),
  component: SlideOpportunity;
});

// --- Visual constants ---
const STROKE = 1.1;

function SlideOpportunity() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <style>{`
        @keyframes tmpFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tmpScaleIn {
          from { opacity: 0; transform: scale(0.94); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes tmpDraw {
          from { stroke-dashoffset: 600; }
          to { stroke-dashoffset: 0; }
        }
        .tmp-fade { animation: tmpFadeIn 900ms ease-out both; opacity: 0; }
        .tmp-scale { animation: tmpScaleIn 1000ms ease-out both; opacity: 0; transform-origin: center; }
        .tmp-draw {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: tmpDraw 1400ms ease-out forwards;
        }
      `}</style>

      {/* KICKER */}
      <section className="mx-auto max-w-[1500px] px-6 pt-20 pb-2 md:pt-28">
        <p
          className="text-[10px] tracking-[0.45em] text-muted-foreground text-center tmp-fade"
          style={{ animationDelay: "200ms" }}
        >
          INVESTOR SLIDE — OPPORTUNITY
        </p>
      </section>

      {/* THREE COLUMN COMPOSITION */}
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-10 md:pt-24">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-12 lg:gap-20">
          {/* COLUMN 1 — MARKET */}
          <div className="tmp-fade flex flex-col items-center text-center" style={{ animationDelay: "400ms" }}>
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">MARKET</p>
            <div className="mt-12 h-px w-10 bg-border" />

            <div className="relative mt-14 flex h-[220px] w-full items-center justify-center">
              <svg viewBox="0 0 300 220" className="absolute inset-0 h-full w-full" aria-hidden>
                {/* very soft Europe silhouette suggestion */}
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={0.6}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  className="text-foreground/15 tmp-scale"
                  style={{ animationDelay: "600ms" }}
                >
                  <path d="M 90 60 C 110 50 140 52 158 60 L 178 56 C 196 60 208 72 206 86 L 214 96 C 220 108 214 120 204 124 L 196 138 C 188 150 172 158 158 156 L 144 168 C 130 174 116 168 112 158 L 96 152 C 84 146 80 134 86 124 L 78 112 C 74 100 80 86 92 80 L 90 60 Z" />
                  <path d="M 168 70 L 184 66" />
                  <path d="M 132 150 L 140 162" />
                </g>
              </svg>
              <div className="relative">
                <p
                  className="font-serif text-7xl font-light leading-none tracking-tight text-foreground md:text-8xl tmp-fade"
                  style={{ animationDelay: "700ms" }}
                >
                  198M
                </p>
              </div>
            </div>

            <p
              className="font-serif mt-12 max-w-xs text-base font-light leading-relaxed text-foreground/80 md:text-lg tmp-fade"
              style={{ animationDelay: "900ms" }}
            >
              Dogs and cats living across Europe today.
            </p>
          </div>

          {/* COLUMN 2 — GAP */}
          <div className="tmp-fade flex flex-col items-center text-center" style={{ animationDelay: "1100ms" }}>
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">GAP</p>
            <div className="mt-12 h-px w-10 bg-border" />

            <div className="relative mt-14 flex h-[220px] w-full items-center justify-center">
              <svg viewBox="0 0 300 220" className="h-full w-full" aria-hidden>
                {/* fragmented systems — disconnected tick lines around a small animal */}
                {Array.from({ length: 8 }).map((_, i) => {
                  const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
                  const r1 = 70;
                  const r2 = 86;
                  const cx = 150, cy = 110;
                  const x1 = cx + r1 * Math.cos(a);
                  const y1 = cy + r1 * Math.sin(a);
                  const x2 = cx + r2 * Math.cos(a);
                  const y2 = cy + r2 * Math.sin(a);
                  return (
                    <g key={i} className="tmp-fade" style={{ animationDelay: `${1300 + i * 80}ms` }}>
                      <line
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="currentColor"
                        strokeWidth={0.7}
                        className="text-foreground/35"
                      />
                      <circle cx={x2 + 4 * Math.cos(a)} cy={y2 + 4 * Math.sin(a)} r={1.2} className="fill-foreground/30" />
                    </g>
                  );
                })}

                {/* central animal — minimal cat silhouette */}
                <g
                  transform="translate(150 110)"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={STROKE}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground tmp-scale"
                  style={{ animationDelay: "1200ms" }}
                >
                  <path d="M -22 10 C -22 0 -14 -8 -4 -8 L 10 -8 C 20 -8 24 0 24 8 L 24 16 C 24 22 20 24 14 24 L -16 24 C -20 24 -22 20 -22 16 Z" />
                  <path d="M 14 -6 C 22 -10 28 -6 28 2 C 28 10 22 12 16 10" />
                  <path d="M 18 -8 L 22 -18 L 26 -8" />
                  <path d="M 24 -8 L 28 -16 L 30 -6" />
                  <circle cx={24} cy={0} r={0.9} fill="currentColor" />
                  <line x1={-2} y1={24} x2={-2} y2={40} />
                  <line x1={6} y1={24} x2={6} y2={40} />
                  <path d="M -22 12 C -32 14 -38 22 -34 32" />
                </g>

                {/* break marks between halo segments to suggest fragmentation */}
                {Array.from({ length: 8 }).map((_, i) => {
                  const a1 = (i / 8) * Math.PI * 2 - Math.PI / 2 + 0.06;
                  const a2 = ((i + 1) / 8) * Math.PI * 2 - Math.PI / 2 - 0.06;
                  const r = 60;
                  const cx = 150, cy = 110;
                  const x1 = cx + r * Math.cos(a1);
                  const y1 = cy + r * Math.sin(a1);
                  const x2 = cx + r * Math.cos(a2);
                  const y2 = cy + r * Math.sin(a2);
                  return (
                    <path
                      key={`arc-${i}`}
                      d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={0.5}
                      className="text-foreground/25 tmp-fade"
                      style={{ animationDelay: `${1400 + i * 60}ms` }}
                    />
                  );
                })}
              </svg>
            </div>

            <p
              className="font-serif mt-12 max-w-xs text-base font-light leading-relaxed text-foreground/80 md:text-lg tmp-fade"
              style={{ animationDelay: "1700ms" }}
            >
              No shared digital identity layer exists today.
            </p>
          </div>

          {/* COLUMN 3 — OPPORTUNITY */}
          <div className="tmp-fade flex flex-col items-center text-center" style={{ animationDelay: "1900ms" }}>
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">OPPORTUNITY</p>
            <div className="mt-12 h-px w-10 bg-border" />

            <div className="relative mt-14 flex h-[220px] w-full items-center justify-center">
              <svg viewBox="0 0 300 220" className="h-full w-full" aria-hidden>
                {(() => {
                  const cx = 150, cy = 110;
                  const nodes = Array.from({ length: 8 }).map((_, i) => {
                    const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
                    const r = 80;
                    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a), i };
                  });
                  return (
                    <>
                      {/* continuous identity ring */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={60}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={0.6}
                        className="text-accent/40 tmp-scale"
                        style={{ animationDelay: "2000ms" }}
                      />
                      <circle
                        cx={cx}
                        cy={cy}
                        r={48}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={0.5}
                        className="text-accent/25 tmp-scale"
                        style={{ animationDelay: "2100ms" }}
                      />

                      {/* connection lines (drawn) */}
                      {nodes.map((n) => (
                        <line
                          key={`l-${n.i}`}
                          x1={cx}
                          y1={cy}
                          x2={n.x}
                          y2={n.y}
                          stroke="currentColor"
                          strokeWidth={0.6}
                          className="text-foreground/30 tmp-draw"
                          style={{ animationDelay: `${2300 + n.i * 80}ms` }}
                        />
                      ))}

                      {/* nodes */}
                      {nodes.map((n) => (
                        <circle
                          key={`n-${n.i}`}
                          cx={n.x}
                          cy={n.y}
                          r={2.2}
                          className="fill-foreground/70 tmp-fade"
                          style={{ animationDelay: `${2400 + n.i * 80}ms` }}
                        />
                      ))}

                      {/* central verified profile mark — minimal dog head + check */}
                      <g
                        transform={`translate(${cx} ${cy})`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={STROKE}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-foreground tmp-scale"
                        style={{ animationDelay: "2000ms" }}
                      >
                        {/* small profile circle */}
                        <circle cx={0} cy={0} r={22} className="text-foreground/20" />
                        {/* pet head */}
                        <path d="M -10 -2 C -10 -10 -4 -14 2 -14 C 8 -14 14 -10 14 -2 L 14 4 C 14 10 8 14 2 14 C -4 14 -10 10 -10 4 Z" />
                        <path d="M -8 -14 L -10 -20 L -4 -16" />
                        <path d="M 8 -14 L 10 -20 L 4 -16" />
                        <circle cx={-3} cy={-2} r={0.9} fill="currentColor" />
                        <circle cx={6} cy={-2} r={0.9} fill="currentColor" />
                        {/* verified tick — small accent */}
                        <g transform="translate(16 -16)" className="text-accent" stroke="currentColor">
                          <circle cx={0} cy={0} r={5} fill="none" strokeWidth={0.8} />
                          <path d="M -2 0 L -0.5 1.5 L 2 -1.5" strokeWidth={0.9} />
                        </g>
                      </g>
                    </>
                  );
                })()}
              </svg>
            </div>

            <p
              className="font-serif mt-12 max-w-xs text-base font-light leading-relaxed text-foreground/80 md:text-lg tmp-fade"
              style={{ animationDelay: "2700ms" }}
            >
              Track My Pet creates the identity layer connecting the ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* HEADLINE */}
      <section className="mx-auto max-w-[1300px] px-6 pt-24 pb-4 md:pt-32">
        <h1
          className="font-serif mx-auto max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl tmp-fade"
          style={{ animationDelay: "2900ms" }}
        >
          198 MILLION ANIMALS.
          <br />
          ONE MISSING INFRASTRUCTURE LAYER.
        </h1>
      </section>

      {/* BODY COPY */}
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-6 text-center md:pt-20">
        <p
          className="font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl tmp-fade"
          style={{ animationDelay: "3100ms" }}
        >
          Europe already has owners, veterinarians, insurers, registries, travel services and tracking providers.
        </p>
        <p
          className="mt-6 font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl tmp-fade"
          style={{ animationDelay: "3250ms" }}
        >
          The identity layer connecting them remains open territory.
        </p>
        <p
          className="mt-6 font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl tmp-fade"
          style={{ animationDelay: "3400ms" }}
        >
          Track My Pet is building the infrastructure that allows information to follow the animal throughout life.
        </p>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-32 text-center md:pb-40">
        <div className="mx-auto h-px w-16 bg-border tmp-fade" style={{ animationDelay: "3600ms" }} />
        <p
          className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl tmp-fade"
          style={{ animationDelay: "3800ms" }}
        >
          Category leaders are often created when infrastructure shifts create new ecosystems.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
