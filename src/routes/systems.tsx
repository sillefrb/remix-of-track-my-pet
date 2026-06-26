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

export const Route = createFileRoute("/systems")({
  head: () => ({
    meta: [
      { title: "Data følger systemer, Track My Pet" },
      {
        name: "description",
        content:
          "Data følger systemer. Data følger sjældent dyret. 198 millioner hunde og katte bevæger sig mellem tusindvis af systemer i Europa uden en fælles digital identitet.",
      },
      { property: "og:title", content: "Data følger systemer, Track My Pet" },
      {
        property: "og:description",
        content:
          "198 millioner hunde og katte bevæger sig mellem tusindvis af systemer i Europa uden en fælles digital identitet.",
      },
    ],
  }),
  component: SystemsPage,
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

function SystemsPage() {
  // Geometry for the constellation. Coordinate system is 1000 x 1000.
  const cx = 500;
  const cy = 500;
  const radius = 360;
  const animalRadius = 70; // gap between center and where the line starts
  const nodeRadius = 46; // visual circle around each icon

  const positions = nodes.map((n, i) => {
    const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
    return {
      ...n,
      x: cx + Math.cos(angle) * radius,
      y: cy + Math.sin(angle) * radius,
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
            IV, INFRASTRUCTURE · THE PROBLEM
          </p>

          {/* Headline */}
          <h1 className="font-serif mt-10 max-w-5xl text-4xl font-light leading-[1.0] tracking-tight md:text-6xl lg:text-7xl">
            Data follows systems.{" "}
            <span className="italic text-accent">Data rarely follows the animal.</span>
          </h1>

          {/* Constellation */}
          <div className="relative mx-auto mt-24 w-full max-w-[900px]">
            <div className="relative aspect-square w-full">
              <svg
                viewBox="0 0 1000 1000"
                className="absolute inset-0 h-full w-full"
                aria-hidden
              >
                {/* Connection lines: animal -> each node, no node-to-node */}
                {positions.map((p, i) => {
                  const dx = p.x - cx;
                  const dy = p.y - cy;
                  const len = Math.hypot(dx, dy);
                  const ux = dx / len;
                  const uy = dy / len;
                  const x1 = cx + ux * animalRadius;
                  const y1 = cy + uy * animalRadius;
                  const x2 = p.x - ux * nodeRadius;
                  const y2 = p.y - uy * nodeRadius;
                  return (
                    <line
                      key={i}
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
                  size={112}
                  aria-hidden
                />
                <p className="mt-4 text-[10px] tracking-[0.35em] text-muted-foreground">
                  THE ANIMAL
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
                Dogs and cats move through a lifetime of owners, veterinarians,
                insurance companies, travel providers, authorities and digital
                services.
              </p>
              <p className="mt-8 max-w-xl text-sm font-light leading-relaxed text-foreground/70">
                Information remains attached to individual systems rather than
                the animal itself. This creates administration, duplicate
                registrations and loss of knowledge between the people and
                organisations working around the same animal.
              </p>
            </div>

            <div className="col-span-12 md:col-span-5">
              <div className="h-px w-12 bg-border" />
              <p className="mt-8 text-[10px] tracking-[0.4em] text-muted-foreground">
                EUROPE · 2025
              </p>
              <p className="font-serif mt-6 text-2xl font-light leading-snug tracking-tight md:text-3xl">
                <span className="text-accent">198 million</span> dogs and cats
                move between thousands of systems across Europe without a
                shared digital identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
