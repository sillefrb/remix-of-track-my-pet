import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WaitlistCTA } from "@/components/WaitlistCTA";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Track My Pet — Medlemskab" },
      {
        name: "description",
        content:
          "Enkle og gennemsigtige medlemskaber for ejere, klinikker og samarbejdspartnere — udviklet til moderne kæledyrsejerskab.",
      },
      { property: "og:title", content: "Track My Pet — Medlemskab" },
      {
        property: "og:description",
        content:
          "Gratis, Plus, Pro og Livstid for ejere. Pakker til klinikker og samarbejdspartnere.",
      },
    ],
  }),
  component: PricingPage,
});

const consumerPlans = [
  {
    name: "Gratis",
    price: "Gratis",
    cadence: "/altid",
    tagline: "Et enkelt udgangspunkt for én verificeret profil.",
    cta: "Kom i gang gratis",
    features: [
      "1 kæledyrsprofil",
      "Basis-helbredsjournal",
      "QR-verificering",
      "50MB plads",
    ],
    highlight: false,
  },
  {
    name: "Plus",
    price: "$9.99",
    cadence: "/month",
    tagline: "Udvidede funktioner til rejser, dokumenter og mere.",
    cta: "Prøv 14 dage",
    features: [
      "2 kæledyrsprofiler",
      "Fuld adgang til dokumentation",
      "Upload af journal",
      "Rejsedokumentation og tjekliste",
      "Verificeret mærke",
      "Akutprofil",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    price: "$19.99",
    cadence: "/month",
    tagline: "Til den engagerede ejer med flere dyr.",
    cta: "Prøv 14 dage",
    features: [
      "Ubegrænset antal dyr",
      "Sundhedsindsigt",
      "Besked ved bortløbet dyr",
      "Premium rejsedokumentation",
      "Prioriteret hjælp",
      "5GB plads",
    ],
    highlight: false,
  },
  {
    name: "Livstid",
    price: "$299",
    cadence: "engangsbeløb",
    tagline: "Én betaling. Adgang hele livet.",
    cta: "Køb livstidsadgang",
    features: [
      "1 kæledyrsprofil for livet",
      "Fuld adgang til dokumentation",
      "Journal",
      "Rejsefunktioner",
      "Engangsbeløb på $299",
    ],
    highlight: false,
  },
];

const orgPlans = [
  {
    name: "Klinik Start",
    price: "$49",
    cadence: "/mo",
    features: [
      "Op til 50 dyr",
      "Oprettelse af profil",
      "Manuelt upload af journal",
      "3 medarbejderadgange",
      "Basis-dashboard",
    ],
  },
  {
    name: "Klinik Professionel",
    price: "$99",
    cadence: "/mo",
    features: [
      "Ubegrænset antal dyr",
      "Masseupload og automatisering",
      "Levering af profil pr. e-mail",
      "Klinikkens egen branding",
      "5 medarbejderadgange",
      "Skabeloner til journaler",
    ],
  },
  {
    name: "Klinik Udvidet",
    price: "$299",
    cadence: "/mo",
    features: [
      "Alt fra Professional",
      "White label",
      "API-adgang",
      "Revisionslog",
      "Flere lokationer",
      "25 medarbejderadgange",
    ],
  },
  {
    name: "Internat Basis",
    price: "Free",
    cadence: "/mo",
    features: [
      "Masseoprettelse af dyr",
      "Styring af adoption",
      "Forhåndsgenererede profiler",
      "3 medarbejderadgange",
      "Gratis for internater",
    ],
  },
  {
    name: "Partner Verificering",
    price: "$500",
    cadence: "/mo",
    features: [
      "Profilscanner",
      "Verificeringsdashboard",
      "Compliance-overblik",
      "API-adgang (50K/md)",
    ],
  },
  {
    name: "Partner API-adgang",
    price: "$1,000",
    cadence: "/mo",
    features: [
      "API-adgang (500K/md)",
      "API-logning",
      "White label",
      "10 medarbejderadgange",
    ],
  },
];

export function PricingPage() {
  return (
    <div className="bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <p className="text-[10px] tracking-[0.4em] text-muted-foreground">
          MEDLEMSKAB
        </p>
        <h1 className="font-serif mt-8 text-4xl font-light leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          Enkle og{" "}
          <span className="italic text-accent">gennemsigtige</span> medlemskaber.
        </h1>
        <p className="mx-auto mt-10 max-w-xl text-sm font-light leading-relaxed text-foreground/75">
          Start enkelt — udvid når dyret, husstanden, klinikken eller organisationen vokser. Et samlet produkt udviklet til hele dyrets liv.
        </p>
        <div className="mx-auto mt-12 inline-flex items-center gap-2 rounded-full border border-border px-2 py-1 text-[11px] tracking-[0.25em] text-muted-foreground">
          <span className="rounded-full bg-foreground px-4 py-2 text-background">
            MÅNEDLIGT
          </span>
          <span className="px-4 py-2">ÅRLIGT · SPAR 17%</span>
        </div>
      </section>

      {/* STARTER KIT — engangsdelen */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-24">
          <div className="grid grid-cols-12 items-end gap-6 pb-12">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
                STARTPAKKE — N°00 / ENGANGSDEL
              </p>
              <h2 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
                Det fysiske udgangspunkt.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="max-w-sm text-sm font-light leading-relaxed text-foreground/75 md:ml-auto">
                Det løbende medlemskab begynder ved aktivering. Engangsdelen er det fysiske produkt — smukt, taktilt, gaveværdigt.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {[
              {
                name: "NFC/QR Tag",
                price: "kr. 249",
                body: "Premium tag i børstet metal. Ingen batteri, ingen GPS, ingen logistik. Aktiveres på sekunder.",
              },
              {
                name: "Startpakke",
                price: "kr. 449",
                body: "Tag, kort til pung og folder til pas og dokumenter. Designet som en gave — også til sig selv.",
              },
              {
                name: "Personalisering",
                price: "kr. +79",
                body: "Gravering med navn og nødtelefon. Valgfri farve på remmen. Leveres i præsentationsæske.",
              },
            ].map((k) => (
              <article key={k.name} className="bg-background p-8 md:p-10">
                <h3 className="font-serif text-xl font-light italic">
                  {k.name}
                </h3>
                <p className="font-serif mt-6 text-3xl font-light">
                  {k.price}
                </p>
                <p className="mt-6 text-sm font-light leading-relaxed text-foreground/70">
                  {k.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:pb-32">
        <p className="text-[10px] tracking-[0.4em] text-muted-foreground">
          FOR EJERE — N°01 / DYREEJERE
        </p>
        <h2 className="font-serif mt-6 max-w-2xl text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
          Fire medlemskaber.{" "}
          <span className="italic text-accent">Ét samlet sted.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {consumerPlans.map((p) => (
            <article
              key={p.name}
              className={`flex flex-col bg-background p-8 ${
                p.highlight ? "ring-1 ring-accent" : ""
              }`}
            >
              {p.highlight && (
                <span className="mb-4 inline-block w-fit rounded-full bg-accent/10 px-3 py-1 text-[10px] tracking-[0.3em] text-accent">
                  MEST POPULÆR
                </span>
              )}
              <h3 className="font-serif text-2xl font-light italic">
                {p.name}
              </h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-serif text-4xl font-light">
                  {p.price}
                </span>
                <span className="text-xs font-light text-muted-foreground">
                  {p.cadence}
                </span>
              </div>
              <p className="mt-4 text-sm font-light leading-relaxed text-foreground/70">
                {p.tagline}
              </p>
              <ul className="mt-8 flex-1 space-y-3 text-[13px] font-light text-foreground/75">
                {p.features.map((f) => (
                  <li key={f} className="flex items-baseline gap-3">
                    <span className="h-px w-3 translate-y-[-4px] bg-border" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-10 w-full rounded-full px-6 py-3 text-xs tracking-[0.2em] transition ${
                  p.highlight
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                {p.cta}
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* ORG PLANS */}
      <section className="bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">
            FOR KLINIKKER, INTERNATER OG SAMARBEJDSPARTNERE — N°02
          </p>
          <h2 className="font-serif mt-6 max-w-3xl text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
            Forbundne arbejdsgange for{" "}
            <span className="italic text-accent">klinikker, internater og samarbejdspartnere.</span>
          </h2>
          <p className="mt-8 max-w-xl text-sm font-light leading-relaxed text-foreground/75">
            Flere niveauer for klinikker, gratis adgang for internater og to niveauer for samarbejdspartnere — forsikring, rejsedokumentation, pasning og relevante funktioner.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {orgPlans.map((p) => (
              <article
                key={p.name}
                className="flex flex-col bg-card p-8"
              >
                <h3 className="font-serif text-xl font-light italic">
                  {p.name}
                </h3>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-serif text-3xl font-light">
                    {p.price}
                  </span>
                  <span className="text-xs font-light text-muted-foreground">
                    {p.cadence}
                  </span>
                </div>
                <ul className="mt-8 flex-1 space-y-3 text-[13px] font-light text-foreground/75">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-baseline gap-3">
                      <span className="h-px w-3 translate-y-[-4px] bg-border" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="mt-10 w-full rounded-full border border-border bg-background px-6 py-3 text-xs tracking-[0.2em] text-foreground transition hover:bg-muted"
                >
                  {p.name.startsWith("Partner") ||
                  p.name.endsWith("Udvidet")
                    ? "Kontakt os"
                    : "Prøv"}
                </button>
              </article>
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-xs font-light leading-relaxed text-muted-foreground">
            Internater og dyreværn kan kvalificere sig til gratis eller subsidieret adgang. Kontakt os for at høre mere.
          </p>
        </div>
      </section>

      <WaitlistCTA
        eyebrow="VENTELISTE — TIDLIG ADGANG"
        title="Skriv dig op til førlanceringsprisen."
        body="Tidlige ejere får adgang før alle andre — og en reduceret pris på startpakken og første års medlemskab."
      />

      <SiteFooter />
    </div>
  );
}
