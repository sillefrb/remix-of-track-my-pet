import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/slides")({
  head: () => ({
    meta: [
      { title: "Track My Pet — Investor Slides" },
      {
        name: "description",
        content: "Track My Pet investor presentation slides.",
      },
    ],
  }),
  component: SlidesIndex,
});

const SLIDES = [
  { path: "/slide-journey", label: "Journey", kicker: "INVESTOR SLIDE — JOURNEY" },
  { path: "/slide-sharing", label: "Sharing", kicker: "INVESTOR SLIDE — SHARING" },
  { path: "/slide-network", label: "Network Effects", kicker: "INVESTOR SLIDE — NETWORK EFFECTS" },
  { path: "/slide-tracking-context", label: "Tracking & Context", kicker: "INVESTOR SLIDE — TRACKING & CONTEXT" },
  { path: "/slide-ecosystem", label: "Ecosystem", kicker: "INVESTOR SLIDE — ECOSYSTEM" },
  { path: "/slide-business-model", label: "Business Model", kicker: "INVESTOR SLIDE — BUSINESS MODEL" },
  { path: "/slide-timeline", label: "Timeline", kicker: "INVESTOR SLIDE — TIMELINE" },
  { path: "/slide-flywheel", label: "Flywheel", kicker: "INVESTOR SLIDE — FLYWHEEL" },
  { path: "/slide-products", label: "Products", kicker: "INVESTOR SLIDE — PRODUCTS" },
  { path: "/slide-lifetime", label: "Lifetime Value", kicker: "INVESTOR SLIDE — LIFETIME VALUE" },
  { path: "/slide-relationship", label: "Relationship", kicker: "INVESTOR SLIDE — RELATIONSHIP" },
  { path: "/slide-data", label: "Data", kicker: "INVESTOR SLIDE — DATA" },
  { path: "/slide-context", label: "Context", kicker: "INVESTOR SLIDE — CONTEXT" },
  { path: "/slide-opportunity", label: "Opportunity", kicker: "INVESTOR SLIDE — OPPORTUNITY" },
  { path: "/slide-europe", label: "Europe", kicker: "INVESTOR SLIDE — EUROPE" },
  { path: "/slide-regulation", label: "Regulation", kicker: "INVESTOR SLIDE — REGULATION" },
  { path: "/slide-partnerships", label: "Partnerships", kicker: "INVESTOR SLIDE — PARTNERSHIPS" },
  { path: "/slide-physical-digital", label: "Physical & Digital", kicker: "INVESTOR SLIDE — PHYSICAL & DIGITAL" },
  { path: "/slide-services", label: "Services", kicker: "INVESTOR SLIDE — SERVICES" },
  { path: "/slide-capabilities", label: "Capabilities", kicker: "INVESTOR SLIDE — CAPABILITIES" },
  { path: "/slide-trust", label: "Trust", kicker: "INVESTOR SLIDE — TRUST" },
  { path: "/slide-ai", label: "AI", kicker: "INVESTOR SLIDE — AI" },
  { path: "/slide-contact", label: "Contact", kicker: "INVESTOR SLIDE — CONTACT" },
  { path: "/slide-final", label: "Final", kicker: "INVESTOR SLIDE — FINAL" },
  { path: "/slide-hero-closing", label: "Hero Closing", kicker: "INVESTOR SLIDE — HERO CLOSING" },
];

function SlidesIndex() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
          TRACK MY PET
        </p>
        <h1 className="font-serif mt-8 text-5xl font-light leading-[1.0] tracking-tight md:text-6xl lg:text-7xl">
          Investor Slides
        </h1>
        <p className="mt-8 max-w-lg text-sm font-light leading-relaxed text-foreground/75">
          Alle præsentationsslides til Track My Pet investor-deck. Klik på et
          slide for at se det i fuld visning.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SLIDES.map((slide, i) => (
            <Link
              key={slide.path}
              to={slide.path}
              className="group bg-background p-8 transition-colors hover:bg-card md:p-10"
            >
              <span className="text-[10px] tracking-[0.35em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-serif mt-4 text-2xl font-light leading-tight text-foreground group-hover:text-accent">
                {slide.label}
              </h2>
              <p className="mt-2 text-[10px] tracking-[0.28em] text-foreground/50">
                {slide.kicker}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
