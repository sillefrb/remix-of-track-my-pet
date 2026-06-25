import { createFileRoute, Link } from "@tanstack/react-router";
import founderImg from "@/assets/dogpass-founder.jpg";
import craftImg from "@/assets/dogpass-craft.jpg";
import packImg from "@/assets/dogpass-pack.jpg";
import walkImg from "@/assets/dogpass-walk.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WaitlistCTA } from "@/components/WaitlistCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Om os, Track My Pet" },
      {
        name: "description",
        content:
          "Track My Pet er bygget af mennesker med omtanke for dyr. En samlet løsning til identitet, dokumentation og tryghed gennem hele dyrets liv.",
      },
      { property: "og:title", content: "Om os, Track My Pet" },
      {
        property: "og:description",
        content:
          "En beretning om hvorfor vi bygger Track My Pet, og hvem vi bygger det for.",
      },
      { property: "og:image", content: founderImg },
    ],
  }),
  component: AboutPage,
});

export function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted md:aspect-[16/9]">
          <img
            src={founderImg}
            alt="Grundlæggeren går gennem haven sammen med to sighthounds i morgenlys"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-12 text-center md:pb-20">
            <p className="text-[10px] font-light tracking-[0.45em] text-background/95">
              OM OS, N°V / FILOSOFI
            </p>
            <h1 className="font-serif mt-6 text-5xl font-light leading-[1] tracking-tight text-background sm:text-7xl md:text-8xl">
              Om Track My Pet
            </h1>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 pt-20 pb-8 text-center md:pt-28">
          <p className="font-serif text-2xl font-light italic leading-snug text-foreground sm:text-3xl md:text-4xl">
            Europas AI- og datainfrastruktur for kæledyr.
          </p>
          <p className="mx-auto mt-10 max-w-xl text-sm font-light leading-relaxed text-foreground/70">
            EU's nye regler om obligatorisk mikrochipmærkning og registrering af hunde og katte danner fundamentet for en fælles europæisk identitet for kæledyr. Det skal stoppe ulovlig handel og mishandling. Track My Pet bygger ovenpå denne standard og skaber en kritisk AI- og datainfrastruktur, der forbinder ejere, dyrlæger, forsikringer og myndigheder i et europæisk økosystem. Med 198 millioner potentielle profiler er værdien netværkseffekter, AI-baseret indsigt og en samlet identitet, der styrker sporbarhed, sundhed og tryghed for kæledyr og deres ejere på tværs af EU.
          </p>
          <a
            href="https://www.europarl.europa.eu/topics/da/article/20250618STO29003/kan-nye-eu-regler-gore-en-ende-pa-mishandlingen-af-kaeledyr"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm font-light italic text-accent underline underline-offset-4 transition hover:text-foreground"
          >
            Læs mere om EU's nye regler på Europa-Parlamentet
          </a>
        </div>
      </section>

      {/* OPRINDELSE */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 items-end gap-6 pb-16">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
                OPRINDELSEN, N°01 / 2025
              </p>
              <h2 className="font-serif mt-8 text-4xl font-light leading-[0.95] tracking-tight md:text-6xl">
                Vi startede med en{" "}
                <span className="italic text-accent">simpel undren.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="max-w-sm text-sm font-light leading-relaxed text-foreground/75 md:ml-auto">
                Hvorfor findes der intet samlet sted for det vigtigste, vi
                ved om dyret, vi elsker mest? Vaccinationer i én mappe.
                Forsikringen i en mail. Pas i en skuffe. Chip-nummeret hos
                en dyrlæge, vi for længst har skiftet. Alt det, der betyder
                noget, ligger spredt, og altid det forkerte sted, når det
                gælder.
              </p>
              <div className="mt-8 h-px w-12 bg-border md:ml-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
            <figure className="bg-background">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={walkImg}
                  alt="Hund på en gåtur i blødt morgenlys"
                  width={1080}
                  height={1350}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </figure>
            <div className="flex flex-col justify-center bg-background p-10 md:p-16">
              <p className="text-[10px] tracking-[0.4em] text-muted-foreground">
                HVORFOR VI FINDES
              </p>
              <h3 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl">
                For dyret.{" "}
                <span className="italic text-accent">For mennesket bag det.</span>
              </h3>
              <p className="mt-8 max-w-md text-sm font-light leading-relaxed text-foreground/75">
                Track My Pet eksisterer for tryghed og overblik. Vi bygger ét sted, hvor identitet, sundhed, forsikring og rejse hører hjemme, verificeret, ejet af dig, tilgængeligt for dem du vælger. Et produkt, der følger dyret gennem hele livet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MØD HOLDET */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
              MØD HOLDET
            </p>
            <h2 className="font-serif mt-8 text-4xl font-light leading-[1.0] md:text-5xl lg:text-6xl">
              Et lille hold med{" "}
              <span className="italic text-accent">stor hengivenhed.</span>
            </h2>
            <p className="mt-10 max-w-md text-sm font-light leading-relaxed text-foreground/75">
              Track My Pet er grundlagt i Danmark af mennesker med baggrund i produktdesign, hardware, dyrlægeverdenen og forsikring, og en fælles overbevisning om, at en samlet løsning til kæledyrsidentitet og dokumentation bør bygges med håndværk og omtanke, ikke hastværk.
            </p>
            <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-foreground/75">
              Vi er ejere af hunde, katte og blandinger af begge dele. Vi
              har båret for små katte hjem fra Cypern og rejst over grænser
              med store hunde. Produktet, vi bygger, er det produkt, vi
              selv har manglet.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7">
            <ul className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
              {[
                ["Design", "Premium, taktilt, gennemtænkt i hver detalje."],
                ["Hardware", "NFC, QR og chip-ID, fra prototype til produktion."],
                ["Vet-tech", "Journal, vaccination og verificering bygget med klinikker."],
                ["Forsikring", "Samarbejder og dokumentation, uden risikobæring."],
                ["Compliance", "GDPR, EU-pas, sporbarhed og grænsekrydsning."],
                ["Fællesskab", "Ejere, opdrættere, internater, dyrlæger."],
              ].map(([k, v]) => (
                <li key={k} className="bg-background p-6 md:p-7">
                  <p className="font-serif text-lg font-light italic text-foreground">
                    {k}
                  </p>
                  <p className="mt-2 text-xs font-light leading-relaxed text-foreground/70">
                    {v}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HÅNDVÆRK */}
      <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-px bg-border md:grid-cols-12">
        <figure className="bg-background md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden bg-muted">
            <img
              src={craftImg}
              alt="Detalje af premium læder og børstet metal ID-tag"
              width={1080}
              height={1350}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="px-6 py-6 text-[10px] tracking-[0.35em] text-muted-foreground">
            HÅNDVÆRK, N°02 / DETALJE
          </figcaption>
        </figure>
        <div className="flex flex-col justify-center bg-background p-10 md:col-span-7 md:p-16">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">
            BYGGET TIL AT HOLDE
          </p>
          <h2 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
            Køb mindre.<br />
            Køb <span className="italic text-accent">bedre.</span>
          </h2>
          <p className="mt-8 max-w-md text-sm font-light leading-relaxed text-foreground/75">
            Vi tror på færre, men bedre ting, og på at beholde dem længe.
            Hvert materiale og hver detalje er valgt af det interne
            designhold. Læder, der ældes smukt. Metal, der tåler vand,
            salt og år. Elektronik, der virker, når det gælder.
          </p>
          <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-foreground/75">
            Produktionen sker hos små, familieejede partnere, vi har
            udvalgt med omhu, og som deler vores værdier omkring kvalitet, ansvar og omsorg for dyr.
          </p>
          <div className="mt-10 h-px w-12 bg-border" />
        </div>
      </section>

      {/* PRINCIPPER */}
      <section className="bg-card">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">
            PRINCIPPER
          </p>
          <h2 className="font-serif mx-auto mt-8 max-w-3xl text-3xl font-light italic leading-snug md:text-5xl">
            Det vi siger ja til. Det vi siger nej til.
          </h2>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-px bg-border md:grid-cols-2">
            {[
              ["Håndværk", "Materialer, der ældes smukt. Detaljer, der står til regnskab."],
              ["Ejerskab", "Dataene tilhører ejeren. Vi forvalter, vi ejer ikke."],
              ["Lang horisont", "Vi bygger for hele dyrets liv, ikke næste kvartal."],
              ["Stilhed", "Ingen push, ingen støj. Værktøjet skal være der, når det gælder."],
              ["Partnerskaber", "Klinikker, forsikring og myndigheder som ligeværdige."],
              ["Bæredygtighed", "Genanvendte materialer, fair produktion, færre ting."],
            ].map(([k, v]) => (
              <div key={k} className="bg-background p-8 text-left">
                <p className="font-serif text-xl font-light italic text-accent">
                  {k}
                </p>
                <p className="mt-3 text-xs font-light leading-relaxed text-foreground/75">
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN THE PACK */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
          <img
            src={packImg}
            alt="En flok dyr af forskellige størrelser sidder samlet på en trappe"
            width={1920}
            height={1080}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-[10px] tracking-[0.5em] text-foreground/80">
              N°03, FÆLLESSKABET
            </p>
            <h2 className="font-serif mt-8 text-5xl font-light leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
              Join <span className="italic text-accent">the</span> Pack
            </h2>
            <p className="mx-auto mt-10 max-w-xl text-sm font-light leading-relaxed text-foreground/80">
              Track My Pet bygges sammen med ejere, opdrættere, internater og dyrlæger. Skriv dig op til ventelisten og bliv en del af det fællesskab, der former en samlet løsning til kæledyrsidentitet og dokumentation i Europa.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-[11px] tracking-[0.25em]">
              <Link
                to="/product"
                className="rounded-full bg-foreground px-6 py-3 text-background hover:bg-accent"
              >
                SE PRODUKTET
              </Link>
              <Link
                to="/vision"
                className="rounded-full border border-border px-6 py-3 text-foreground hover:border-accent hover:text-accent"
              >
                LÆS VISIONEN
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WaitlistCTA />

      <SiteFooter />
    </main>
  );
}
