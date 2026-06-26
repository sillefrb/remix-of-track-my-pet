import { createFileRoute } from "@tanstack/react-router";
import {
  HeartPulse,
  ShieldCheck,
  Plane,
  MapPin,
  Siren,
  Stethoscope,
  Home,
  Sparkles,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import productsImg from "@/assets/dogpass-products.jpg";

export const Route = createFileRoute("/slide-products")({
  head: () => ({
    meta: [
      { title: "Track My Pet, The first contact point with the infrastructure." },
      {
        name: "description",
        content:
          "The physical products create access to the digital infrastructure.",
      },
    ],
  }),
  component: SlideProducts,
});

const SERVICES = [
  { label: "Health records", Icon: HeartPulse },
  { label: "Insurance", Icon: ShieldCheck },
  { label: "Travel", Icon: Plane },
  { label: "Tracking", Icon: MapPin },
  { label: "Emergency access", Icon: Siren },
  { label: "Veterinary care", Icon: Stethoscope },
  { label: "Pet sitting", Icon: Home },
  { label: "AI services", Icon: Sparkles },
];

function SlideProducts() {
  // SVG viewBox: 1400 x 1000
  const W = 1400;
  const cx = W / 2;

  // Three physical products across the top
  const productY = 220;
  const productXs = [cx - 360, cx, cx + 360];

  // Verified profile at center
  const profileY = 520;
  const centerR = 78;

  // Services along the bottom arc
  const serviceY = 880;
  const serviceSpan = 1180; // total width spanned
  const serviceStart = cx - serviceSpan / 2;
  const servicePositions = SERVICES.map((_, i) => ({
    x: serviceStart + (i * serviceSpan) / (SERVICES.length - 1),
    y: serviceY,
  }));

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HEADLINE */}
      <section className="mx-auto max-w-[1500px] px-6 pt-16 pb-6 md:pt-24">
        <p className="text-[10px] tracking-[0.45em] text-muted-foreground text-center">
          INVESTOR SLIDE — 05
        </p>
        <h1 className="font-serif mx-auto mt-10 max-w-5xl text-center text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          THE RELATIONSHIP BEGINS HERE.
        </h1>
      </section>

      {/* PRODUCT PHOTO */}
      <section className="relative aspect-[21/9] w-full overflow-hidden bg-muted">
        <img src={productsImg} alt="Track My Pet premium tag, card and welcome folder" className="h-full w-full object-cover object-center" />
      </section>

      {/* DIAGRAM */}
      <section className="mx-auto max-w-[1280px] px-6 pt-10 pb-6">
        <div className="relative mx-auto w-full" style={{ aspectRatio: `${W} / 1000` }}>
          <svg viewBox={`0 0 ${W} 1000`} className="h-full w-full" aria-hidden>
            <defs>
              <style>{`
                @keyframes tmpFadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes tmpScaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
                @keyframes tmpDraw { from { stroke-dashoffset: 700; } to { stroke-dashoffset: 0; } }
                .tmp-product { animation: tmpFadeIn 800ms ease-out both; opacity: 0; transform-box: fill-box; transform-origin: center; }
                .tmp-center { animation: tmpScaleIn 900ms ease-out both; transform-box: fill-box; transform-origin: center; }
                .tmp-node { animation: tmpFadeIn 700ms ease-out both; opacity: 0; }
                .tmp-line {
                  stroke-dasharray: 700;
                  stroke-dashoffset: 700;
                  animation: tmpDraw 1100ms ease-out forwards;
                }
              `}</style>
            </defs>

            {/* Primary connections: products -> verified profile */}
            {productXs.map((px, i) => {
              const dx = cx - px;
              const dy = profileY - productY;
              const len = Math.hypot(dx, dy);
              const ux = dx / len;
              const uy = dy / len;
              const x1 = px + ux * 70;
              const y1 = productY + uy * 70;
              const x2 = cx - ux * (centerR + 8);
              const y2 = profileY - uy * (centerR + 8);
              return (
                <line
                  key={`p-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth={1}
                  className="tmp-line text-foreground/25"
                  style={{ animationDelay: `${1400 + i * 150}ms` }}
                />
              );
            })}

            {/* Secondary connections: verified profile -> services */}
            {servicePositions.map((p, i) => {
              const dx = p.x - cx;
              const dy = p.y - profileY;
              const len = Math.hypot(dx, dy);
              const ux = dx / len;
              const uy = dy / len;
              const x1 = cx + ux * (centerR + 8);
              const y1 = profileY + uy * (centerR + 8);
              const x2 = p.x - ux * 48;
              const y2 = p.y - uy * 48;
              return (
                <line
                  key={`s-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth={1}
                  className="tmp-line text-foreground/20"
                  style={{ animationDelay: `${2200 + i * 90}ms` }}
                />
              );
            })}

            {/* PHYSICAL PRODUCTS */}

            {/* Tag (left) — circular pendant with hole */}
            <g
              className="tmp-product text-foreground"
              transform={`translate(${productXs[0]} ${productY})`}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animationDelay: "200ms" }}
            >
              <circle r={62} strokeWidth={1.4} />
              <circle r={50} strokeWidth={0.5} className="text-accent/40" />
              <circle cy={-62} r={6} strokeWidth={1.2} />
              <path d="M-18 -4 L18 -4 M-22 10 L22 10 M-14 24 L14 24" strokeWidth={1.1} className="text-foreground/60" />
            </g>

            {/* Card (center) — rounded rectangle */}
            <g
              className="tmp-product text-foreground"
              transform={`translate(${productXs[1]} ${productY})`}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animationDelay: "400ms" }}
            >
              <rect x={-86} y={-54} width={172} height={108} rx={10} strokeWidth={1.4} />
              <rect x={-78} y={-46} width={156} height={92} rx={6} strokeWidth={0.4} className="text-accent/40" />
              <path d="M-66 -22 L-30 -22" strokeWidth={1.2} className="text-foreground/70" />
              <path d="M-66 -4 L40 -4 M-66 12 L26 12 M-66 28 L10 28" strokeWidth={1} className="text-foreground/50" />
              <circle cx={56} cy={28} r={10} strokeWidth={1.2} className="text-accent/70" />
            </g>

            {/* Folder (right) — opened welcome folder */}
            <g
              className="tmp-product text-foreground"
              transform={`translate(${productXs[2]} ${productY})`}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animationDelay: "600ms" }}
            >
              <path d="M-78 -56 L78 -56 L78 56 L-78 56 Z" strokeWidth={1.4} />
              <path d="M-78 -36 L78 -36" strokeWidth={0.6} className="text-accent/40" />
              <path d="M-58 -16 L58 -16 M-58 4 L58 4 M-58 24 L20 24" strokeWidth={1} className="text-foreground/55" />
              <path d="M-58 -44 L-20 -44" strokeWidth={1.2} className="text-foreground/70" />
            </g>

            {/* PRODUCT LABELS */}
            <g
              fill="currentColor"
              className="text-foreground/70"
              style={{ fontFamily: "inherit" }}
            >
              {[
                { x: productXs[0], label: "PREMIUM TAG", delay: 300 },
                { x: productXs[1], label: "PREMIUM CARD", delay: 500 },
                { x: productXs[2], label: "WELCOME FOLDER", delay: 700 },
              ].map((p) => (
                <text
                  key={p.label}
                  x={p.x}
                  y={productY + 110}
                  textAnchor="middle"
                  fontSize={14}
                  letterSpacing={5}
                  className="tmp-product"
                  style={{ animationDelay: `${p.delay}ms` }}
                >
                  {p.label}
                </text>
              ))}
            </g>

            {/* VERIFIED PROFILE (center) */}
            <g
              className="tmp-center text-foreground"
              transform={`translate(${cx} ${profileY})`}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animationDelay: "1000ms" }}
            >
              <circle r={104} strokeWidth={0.4} className="text-foreground/12" />
              <circle r={centerR} strokeWidth={1.4} />
              <circle r={70} strokeWidth={0.5} className="text-accent/35" />
              <path d="M-22 2 L-8 16 L22 -14" strokeWidth={2.2} />
              <circle r={2.5} fill="currentColor" stroke="none" />
            </g>

            {/* VERIFIED PROFILE LABEL */}
            <g
              className="tmp-center"
              fill="currentColor"
              style={{ animationDelay: "1100ms" }}
            >
              <text
                x={cx}
                y={profileY + centerR + 36}
                textAnchor="middle"
                fontSize={14}
                letterSpacing={6}
                className="text-foreground/70"
              >
                VERIFIED IDENTITY
              </text>
              <text
                x={cx}
                y={profileY + centerR + 58}
                textAnchor="middle"
                fontSize={11}
                letterSpacing={4}
                className="text-muted-foreground"
              >
                TRACK MY PET
              </text>
            </g>
          </svg>

          {/* SERVICE NODES */}
          {SERVICES.map(({ label, Icon }, i) => {
            const p = servicePositions[i];
            const leftPct = (p.x / W) * 100;
            const topPct = (p.y / 1000) * 100;
            return (
              <div
                key={label}
                className="tmp-node absolute flex flex-col items-center"
                style={{
                  left: `${leftPct}%`,
                  top: `${topPct}%`,
                  transform: "translate(-50%, -50%)",
                  animationDelay: `${2600 + i * 110}ms`,
                }}
              >
                <Icon
                  className="text-accent"
                  strokeWidth={1.2}
                  size={32}
                  aria-hidden
                />
                <span className="mt-3 whitespace-nowrap text-[10px] tracking-[0.32em] text-foreground/70">
                  {label.toUpperCase()}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-3xl px-6 pt-12 pb-24 text-center md:pb-24">
        <div className="mx-auto h-px w-16 bg-border" />
        <p className="font-serif mt-10 text-xl font-light italic leading-snug tracking-tight text-foreground md:text-2xl">
          The physical products create access.
          <br />
          The digital identity creates long-term value.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
