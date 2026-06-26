import { createFileRoute } from "@tanstack/react-router";
import {
  Stethoscope,
  ShieldCheck,
  Cpu,
  Syringe,
  Plane,
  Home,
  HeartHandshake,
  MapPin,
  Landmark,
  Dog,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/ecosystem")({
  head: () => ({
    meta: [
      { title: "One identity. One trust layer. One ecosystem, Track My Pet" },
      {
        name: "description",
        content:
          "Track My Pet connects the services already surrounding pets into a single trusted infrastructure. One identity. One trust layer. One ecosystem.",
      },
      {
        property: "og:title",
        content: "One identity. One trust layer. One ecosystem, Track My Pet",
      },
      {
        property: "og:description",
        content:
          "Track My Pet connects veterinarians, insurance, travel, shelters and authorities into a single trusted infrastructure around the animal.",
      },
    ],
  }),
  component: EcosystemPage,
});

const nodes = [
  { label: "Veterinarian", Icon: Stethoscope },
  { label: "Insurance", Icon: ShieldCheck },
  { label: "Microchip", Icon: Cpu },
  { label: "Vaccinations", Icon: Syringe },
  { label: "Travel", Icon: Plane },
  { label: "Pet sitting", Icon: Home },
  { label: "Shelter", Icon: HeartHandshake },
  { label: "Tracking", Icon: MapPin },
  { label: "Authorities", Icon: Landmark },
];

function EcosystemPage() {
  const cx = 500;
  const cy = 500;
  const outerRadius = 360;
  const trustRadius = 140;
  const nodeRadius = 46;

  const positions = nodes.map((n, i) => {
    const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
    return {
      ...n,
      x: cx + Math.cos(angle) * outerRadius,
      y: cy + Math.sin(angle) * outerRadius,
      angle,
    };
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          {/* Eyebrow */}
          <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
            V, INFRASTRUCTURE · THE ECOSYSTEM
          </p>

          {/* Headline */}
          <h1 className="font-serif mt-10 max-w-5xl text-4xl font-light leading-[1.0] tracking-tight md:text-6xl lg:text-7xl">
            One identity.{" "}
            <span className="italic text-accent">One trust layer.</span>{" "}
            One ecosystem.
          </h1>

          {/* Subtitle */}
          <p className="mt-8 max-w-3xl font-serif text-xl font-light leading-relaxed text-foreground/70 md:text-2xl">
            Track My Pet connects the services already surrounding pets into a
            single trusted infrastructure.
          </p>

          {/* Ecosystem diagram */}
          <div className="relative mx-auto mt-24 w-full max-w-[900px]">
            <div className="relative aspect-square w-full">
              <svg
                viewBox="0 0 1000 1000"
                className="absolute inset-0 h-full w-full"
                aria-hidden
              >
                {/* Connection lines: outer node -> TMP ring */}
                {positions.map((p, i) => {
                  const dx = p.x - cx;
                  const dy = p.y - cy;
                  const len = Math.hypot(dx, dy);
                  const ux = dx / len;
                  const uy = dy / len;
                  const x1 = p.x - ux * nodeRadius;
                  const y1 = p.y - uy * nodeRadius;
                  const x2 = cx + ux * trustRadius;
                  const y2 = cy + uy * trustRadius;
                  return (
                    <line
                      key={`outer-${i}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="currentColor"
                      strokeWidth={1}
                      className="text-foreground/25"
                    />
                  );
                })}

                {/* Inner connection lines: TMP ring -> animal */}
                {positions.map((p, i) => {
                  const dx = p.x - cx;
                  const dy = p.y - cy;
                  const len = Math.hypot(dx, dy);
                  const ux = dx / len;
                  const uy = dy / len;
                  const x1 = cx + ux * trustRadius;
                  const y1 = cy + uy * trustRadius;
                  const x2 = cx + ux * 62;
                  const y2 = cy + uy * 62;
                  return (
                    <line
                      key={`inner-${i}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="currentColor"
                      strokeWidth={1}
                      className="text-accent/30"
                    />
                  );
                })}

                {/* Trust layer ring */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={trustRadius}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  className="text-foreground/20"
                />
              </svg>

              {/* Center animal */}
              <div
                className="absolute flex flex-col items-center justify-center"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Dog
                  className="text-accent"
                  strokeWidth={1}
                  size={96}
                  aria-hidden
                />
                <p className="mt-3 text-[10px] tracking-[0.35em] text-muted-foreground">
                  THE ANIMAL
                </p>
              </div>

              {/* TMP label around the ring */}
              <div
                className="absolute flex items-center justify-center"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: `${(trustRadius * 2 / 1000) * 100}%`,
                  height: `${(trustRadius * 2 / 1000) * 100}%`,
                }}
              >
                <p className="text-[9px] tracking-[0.4em] text-foreground/40">
                  TRACK MY PET
                </p>
              </div>

              {/* Nodes */}
              {positions.map(({ label, Icon, x, y }, i) => {
                const leftPct = (x / 1000) * 100;
                const topPct = (y / 1000) * 100;
                return (
                  <div
                    key={i}
                    className="absolute flex flex-col items-center"
                    style={{
                      left: `${leftPct}%`,
                      top: `${topPct}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-border bg-background">
                      <Icon
                        strokeWidth={1}
                        size={28}
                        className="text-foreground/80"
                        aria-hidden
                      />
                    </div>
                    <p className="mt-3 whitespace-nowrap text-[10px] tracking-[0.3em] text-foreground/70">
                      {label.toUpperCase()}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Body copy */}
          <div className="mx-auto mt-24 grid max-w-5xl grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-7">
              <p className="font-serif text-xl font-light leading-relaxed text-foreground/85 md:text-2xl">
                Today every stakeholder maintains its own version of the truth.
              </p>
              <p className="mt-8 max-w-xl text-sm font-light leading-relaxed text-foreground/70">
                Track My Pet introduces a shared trust layer where identity,
                ownership, health records and permissions travel with the animal
                instead of remaining fragmented across organisations and borders.
              </p>
            </div>

            <div className="col-span-12 md:col-span-5">
              <div className="h-px w-12 bg-border" />
              <p className="mt-8 text-[10px] tracking-[0.4em] text-muted-foreground">
                THE OUTCOME
              </p>
              <p className="font-serif mt-6 text-2xl font-light leading-snug tracking-tight md:text-3xl">
                Infrastructure creates ecosystems.{" "}
                <span className="text-accent">Ecosystems create category leaders.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
