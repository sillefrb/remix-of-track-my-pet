import { createFileRoute } from "@tanstack/react-router";
import {
  Stethoscope,
  ShieldCheck,
  MapPin,
  Globe,
  BookOpen,
  ShoppingBag,
  Cpu,
  TrendingUp,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slide-contact")({
  head: () => ({
    meta: [
      { title: "Track My Pet — Building the Future of Pet Identity Together" },
      {
        name: "description",
        content:
          "Partners, investors and industry leaders are invited to help shape the next chapter of the European pet ecosystem.",
      },
    ],
  }),
  component: SlideContact,
});

const PARTNERS = [
  { label: "Veterinary partners", Icon: Stethoscope },
  { label: "Insurance partners", Icon: ShieldCheck },
  { label: "Tracking partners", Icon: MapPin },
  { label: "Travel partners", Icon: Globe },
  { label: "Research partners", Icon: BookOpen },
  { label: "Retail partners", Icon: ShoppingBag },
  { label: "Technology partners", Icon: Cpu },
  { label: "Investors", Icon: TrendingUp },
];

function QrCodePlaceholder() {
  const modules = [
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  ];
  const size = 76;
  const modSize = size / modules.length;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-label="QR code" className="text-foreground">
      <rect width={size} height={size} fill="currentColor" fillOpacity={0.03} />
      {modules.map((row, y) =>
        row.map((cell, x) =>
          cell ? (
            <rect
              key={`${x}-${y}`}
              x={x * modSize}
              y={y * modSize}
              width={modSize - 0.5}
              height={modSize - 0.5}
              fill="currentColor"
              fillOpacity={0.75}
            />
          ) : null
        )
      )}
    </svg>
  );
}

function SlideContact() {
  const cx = 600;
  const cy = 420;
  const centerR = 68;
  const nodeR = 300;
  const nodeHit = 46;

  const positions = PARTNERS.map((_, i) => {
    const angle = (-Math.PI / 2) + (i * 2 * Math.PI) / PARTNERS.length;
    return {
      x: cx + nodeR * Math.cos(angle),
      y: cy + nodeR * Math.sin(angle),
      angle,
    };
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <style>{`
        @keyframes tmpFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tmpScaleIn {
          from { opacity: 0; transform: scale(0.88); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes tmpDraw {
          from { stroke-dashoffset: 600; }
          to { stroke-dashoffset: 0; }
        }
        .tmp-fade {
          animation: tmpFadeIn 900ms ease-out both;
          opacity: 0;
        }
        .tmp-scale {
          animation: tmpScaleIn 900ms ease-out both;
          opacity: 0;
          transform-origin: center;
        }
        .tmp-line {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: tmpDraw 1200ms ease-out forwards;
        }
      `}</style>

      {/* KICKER + HEADLINE */}
      <section className="mx-auto max-w-[1500px] px-6 pt-20 pb-4 md:pt-28">
        <p
          className="text-[10px] tracking-[0.45em] text-muted-foreground text-center tmp-fade"
          style={{ animationDelay: "200ms" }}
        >
          INVESTOR SLIDE — CONTACT
        </p>
        <h1
          className="font-serif mx-auto mt-10 max-w-5xl text-center text-3xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl tmp-fade"
          style={{ animationDelay: "400ms" }}
        >
          BUILDING THE FUTURE OF PET IDENTITY TOGETHER.
        </h1>
      </section>

      {/* ECOSYSTEM VISUAL */}
      <section className="mx-auto max-w-[1000px] px-6 pt-12 pb-4 md:pt-16">
        <div className="relative mx-auto w-full" style={{ aspectRatio: "1200 / 900" }}>
          <svg viewBox="0 0 1200 900" className="h-full w-full" aria-hidden>
            <defs>
              <style>{`
                .tmp-node { animation: tmpFadeIn 700ms ease-out both; opacity: 0; }
              `}</style>
            </defs>

            {/* Soft outer halo */}
            <circle
              cx={cx}
              cy={cy}
              r={nodeR + 60}
              fill="none"
              stroke="currentColor"
              strokeWidth={0.3}
              className="tmp-scale text-foreground/8"
              style={{ animationDelay: "200ms" }}
            />

            {/* Connection lines: center -> each partner node */}
            {positions.map((p, i) => {
              const dx = p.x - cx;
              const dy = p.y - cy;
              const len = Math.hypot(dx, dy);
              const ux = dx / len;
              const uy = dy / len;
              const x1 = cx + ux * (centerR + 8);
              const y1 = cy + uy * (centerR + 8);
              const x2 = p.x - ux * (nodeHit - 4);
              const y2 = p.y - uy * (nodeHit - 4);
              return (
                <line
                  key={`l-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth={0.8}
                  className="tmp-line text-foreground/18"
                  style={{ animationDelay: `${1600 + i * 100}ms` }}
                />
              );
            })}

            {/* Central Track My Pet identity layer */}
            <g
              className="tmp-scale text-foreground"
              transform={`translate(${cx} ${cy})`}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animationDelay: "200ms" }}
            >
              <circle r={100} strokeWidth={0.35} className="text-foreground/10" />
              <circle r={centerR} strokeWidth={1.3} />
              <circle r={56} strokeWidth={0.45} className="text-accent/30" />
              <path d="M-20 2 L-8 12 L18 -10" strokeWidth={2} />
              <circle r={2} fill="currentColor" stroke="none" />
            </g>

            {/* Center label */}
            <g className="tmp-fade" fill="currentColor" style={{ animationDelay: "600ms" }}>
              <text
                x={cx}
                y={cy + centerR + 30}
                textAnchor="middle"
                fontSize={12}
                letterSpacing={5}
                className="text-foreground/70"
              >
                TRACK MY PET
              </text>
            </g>
          </svg>

          {/* Partner node icons */}
          {PARTNERS.map(({ label, Icon }, i) => {
            const p = positions[i];
            const leftPct = (p.x / 1200) * 100;
            const topPct = (p.y / 900) * 100;
            return (
              <div
                key={label}
                className="tmp-node absolute flex flex-col items-center"
                style={{
                  left: `${leftPct}%`,
                  top: `${topPct}%`,
                  transform: "translate(-50%, -50%)",
                  animationDelay: `${400 + i * 140}ms`,
                }}
              >
                <Icon
                  className="text-accent"
                  strokeWidth={1.2}
                  size={28}
                  aria-hidden
                />
              </div>
            );
          })}

          {/* Partner labels */}
          {PARTNERS.map(({ label }, i) => {
            const p = positions[i];
            const dx = p.x - cx;
            const dy = p.y - cy;
            const len = Math.hypot(dx, dy);
            const offset = 60;
            const lx = ((p.x + (dx / len) * offset) / 1200) * 100;
            const ly = ((p.y + (dy / len) * offset) / 900) * 100;
            return (
              <div
                key={`label-${label}`}
                className="tmp-node absolute"
                style={{
                  left: `${lx}%`,
                  top: `${ly}%`,
                  transform: "translate(-50%, -50%)",
                  animationDelay: `${500 + i * 140}ms`,
                }}
              >
                <span className="block text-center text-[9px] tracking-[0.28em] text-foreground/70 whitespace-nowrap">
                  {label.toUpperCase()}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* BODY COPY */}
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-6 text-center md:pt-20">
        <p
          className="font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl tmp-fade"
          style={{ animationDelay: "1200ms" }}
        >
          The next generation of pet services will be built through collaboration
          between owners, veterinarians, insurers, researchers, technology companies
          and strategic partners.
        </p>
        <p
          className="mt-6 font-serif text-lg font-light leading-relaxed text-foreground/85 md:text-xl tmp-fade"
          style={{ animationDelay: "1400ms" }}
        >
          Track My Pet creates the shared identity layer that allows those services
          to work together around the animal.
        </p>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-6 text-center">
        <div className="mx-auto h-px w-16 bg-border tmp-fade" style={{ animationDelay: "1600ms" }} />
        <p
          className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl tmp-fade"
          style={{ animationDelay: "1800ms" }}
        >
          Partners, investors and industry leaders are invited to help shape the next
          chapter of the European pet ecosystem.
        </p>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-32 md:pb-40">
        <div className="tmp-fade flex flex-col items-center gap-14 md:flex-row md:items-start md:justify-center md:gap-24" style={{ animationDelay: "2200ms" }}>
          {/* Text contact info */}
          <div className="text-center md:text-left">
            <p className="text-[10px] tracking-[0.45em] text-muted-foreground uppercase">
              Contact
            </p>
            <div className="mt-8 space-y-4">
              <p className="font-serif text-lg font-light text-foreground">
                Founder Name
              </p>
              <p className="text-sm tracking-wide text-foreground/60">
                Founder &amp; CEO
              </p>
              <div className="mt-6 space-y-2">
                <p className="text-sm tracking-wide text-foreground/70">
                  hello@trackmypet.com
                </p>
                <p className="text-sm tracking-wide text-foreground/70">
                  trackmypet.com
                </p>
                <p className="text-sm tracking-wide text-foreground/70">
                  linkedin.com/company/trackmypet
                </p>
              </div>
            </div>
          </div>

          {/* Divider for mobile */}
          <div className="h-px w-16 bg-border md:hidden" />

          {/* QR code */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[10px] tracking-[0.45em] text-muted-foreground uppercase">
              Scan to connect
            </p>
            <div className="mt-8">
              <QrCodePlaceholder />
            </div>
            <p className="mt-4 text-[10px] tracking-[0.2em] text-muted-foreground">
              TRACKMYPET.COM
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
