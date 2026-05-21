import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Vision — Track My Pet" },
      {
        name: "description",
        content:
          "En samlet løsning til identitet, dokumentation og tryghed. Europæisk udvikling, principper og rækkefølgen.",
      },
      { property: "og:title", content: "Vision — Track My Pet" },
      { property: "og:description", content: "Tillid, omsorg og langsigtede relationer er vigtigere end teknologien." },
    ],
  }),
  component: VisionPage,
});

const euLayers = [
  { k: "Identitet", v: "Obligatorisk mikrochip og ejerskab" },
  { k: "Registrering", v: "Fælles registre på tværs af europæiske lande" },
  { k: "Registrering", v: "Bevægelse mellem europæiske lande" },
  { k: "Sundhedsdata", v: "Vaccination og medicinsk historik" },
  { k: "Digitalt pas", v: "Standardiseret dokumentation" },
  { k: "Beskyttelse", v: "Beskyttelse mod ulovlig handel" },
];

const chipPlayers = ["Datamars", "HomeAgain", "AVID Identification Systems", "Pet-ID Microchips", "Virbac BackHome", "AEGID RFID Solutions"];
const chipReality = [
  { k: "Passiv RFID", v: "Intet batteri — aktiveres magnetisk af scanner" },
  { k: "Lille hukommelse", v: "Returnerer typisk kun et statisk ID-nummer" },
  { k: "Ingen live tracking", v: "GPS, eSIM og Bluetooth kræver batteri" },
  { k: "Statisk identifikator", v: "Data lever i databaser, ikke på chippen" },
];
const chipFuture = ["Adresse og ejerhistorik", "Forsikring og dyrlæge", "Vaccinationer og medicin", "EU rejseinformation", "Allergier og advarsler", "Stjålet- eller bortløbet-status"];
const chipRisks = ["GDPR og dataejerskab", "Veterinær- og biologisk godkendelse", "Hacking og spoofing af RFID", "Hvem må ændre oplysningerne?"];

const principles = ["Simpelt fysisk objekt", "Løser én konkret irritation", "Følelsesmæssig relevans", "”Hvorfor findes det ikke allerede?”-effekt", "Lav produktionskompleksitet", "Høj oplevet værdi", "Let at forklare i video", "Globalt problem", "Enkel at bruge", "Kan blive vane og adfærd"];

const phases = [
  { no: "Fase 01", title: "Elegant fysisk identitetsprodukt", body: "Et gennemtænkt tag og kort koblet til mikrochip-ID. En enkel digital profil. Enkel opsætning, høj praktisk værdi." },
  { no: "Fase 02", title: "Løbende adgang og digital relation", body: "Dokumenter, vaccination, påmindelser, familieadgang og nødprofil." },
  { no: "Fase 03", title: "Forsikring, rejse og verificeret ejerskabsoverdragelse", body: "Samarbejder omkring forsikring, rejsedokumentation og verificeret ejerskifte." },
  { no: "Fase 04", title: "En samlet løsning til kæledyrsidentitet", body: "En samlet løsning til identitet, dokumentation og tryghed — udviklet i takt med den europæiske udvikling inden for kæledyrsidentitet." },
];

const risks = [
  { title: "For lille", body: "Hvis det bare bliver “scan min hund”, kommer produktet aldrig til at betyde nok. Det skal være en del af hele relationen mellem ejer og dyr." },
  { title: "Feature-risiko", body: "Simple QR-løsninger er lette at kopiere. Værdien ligger i at være en del af hverdagen, relationen og dokumentationen." },
  { title: "Svag fastholdelse", body: "Hvis produktet kun bruges i nødsituationer, mister det relevans. Det skal være en naturlig del af hverdagen." },
  { title: "Regulatorisk afhængighed", body: "Produktet skal fungere uanset hvilken vej den europæiske udvikling går." },
  { title: "For bred vision for tidligt", body: "Vi begynder enkelt. Ét gennemtænkt fysisk produkt, der vokser i takt med relationen." },
];

const operatingModel = [
  { title: "Et marked med friktion", body: "Kæledyrsmarkedet er fragmenteret og analogt. Den europæiske udvikling åbner for en mere sammenhængende løsning." },
  { title: "Stærk intern overbevisning", body: "Vi tror på, at en samlet løsning til kæledyrsidentitet og dokumentation har en naturlig plads i moderne kæledyrsejerskab." },
  { title: "Dygtige folk, der vil bygge sammen", body: "Vi samler mennesker med erfaring fra design, hardware, dyrlægeverdenen og forsikring — og giver dem rammerne til at bygge noget langsigtet." },
  { title: "Reelt ejerskab og reel medbestemmelse", body: "Reelt ejerskab og reel beslutningsret fra start — fordi langsigtede produkter bygges af mennesker, der selv er en del af dem." },
  { title: "Erfaring, talent og distribution", body: "Erfarne folk, ungt produkttalent og eksisterende relationer i branchen." },
  { title: "Eksisterende relationer som fundament", body: "Vi bygger videre på eksisterende relationer i dyrlægebranchen, forsikringsverdenen og europæiske detailkanaler." },
  { title: "Fokus før drift", body: "Vi holder fokus på kernen. Produktion, levering og support varetages af pålidelige partnere." },
];

const blueprint = [
  { p: "Markedet før idéen", a: "Kæledyrsmarkedet er stort, gammelt og fragmenteret. Behovet for et samlet sted er allerede til stede." },
  { p: "Friktion med økonomisk volumen", a: "Ejere bruger store beløb årligt. Hver beslutning kræver dokumenter, login og opslag flere steder." },
  { p: "Hele processer — fra ende til ende", a: "Identitet → dokumentation → vaccination → forsikring → rejser → akut hjælp → ejerskifte." },
  { p: "Byg ovenpå eksisterende adfærd", a: "Hunde har allerede halsbånd, chip og papirer. Vi gør hverdagen enklere omkring noget, folk allerede gør." },
  { p: "Distribution før produkt", a: "Naturlig distribution gennem dyrlæger, opdrættere, forsikringsselskaber og detail." },
  { p: "Tydelig kontrast i positionering", a: "I kontrast til et bureaukratisk register: enkelt, gennemtænkt, og ejeren beholder sine egne oplysninger." },
  { p: "Tænk i samlet løsning", a: "Tag → profil → dokumentation → forsikring → rejser → samlet identitet." },
  { p: "Hvorfor bliver det stort?", a: "Langsigtede relationer, tillid, eksisterende behov og praktisk værdi gennem hele dyrets liv." },
];

export function VisionPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO TESE */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <p className="text-[10px] tracking-[0.4em] text-muted-foreground">II — KERNETESEN</p>
        <h1 className="font-serif mt-8 text-3xl font-light italic leading-snug md:text-5xl lg:text-6xl">
          Et samlet sted for<br /><span className="text-accent not-italic">identitet og dokumentation.</span>
        </h1>
        <div className="mx-auto mt-12 h-px w-12 bg-border" />
        <p className="mt-12 text-base font-light leading-relaxed text-foreground/80">
          Mikrochippen er et udgangspunkt. Det egentlige behov er adgang, dokumentation, registrering, sammenhæng på tværs af europæiske lande og hurtig hjælp, når det er nødvendigt. En fælles europæisk udvikling skaber behov for ét samlet sted at samle det hele.
        </p>
        <p className="mt-8 font-serif text-lg font-light italic leading-relaxed text-foreground/90 md:text-xl">
          Tillid, omsorg og langsigtede relationer er det, der bærer et produkt som dette gennem hele dyrets liv.
        </p>
      </section>

      {/* VALUE LAYERS */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">DEN EGENTLIGE VÆRDI</p>
            <h2 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl">
              Et samlet sted for<br /><span className="italic text-accent">vigtig information om dyret.</span>
            </h2>
            <p className="mt-8 text-sm font-light leading-relaxed text-foreground/75">
              Værdien ligger i den samlede løsning — i at samle dokumentation, identitet og adgang ét sted og skabe mere sammenhæng mellem ejer, klinik, forsikring og myndigheder.
            </p>
          </div>
          <div className="md:col-span-7">
            <ul className="grid grid-cols-2 gap-px bg-border">
              {[
                ["Adgang og ejerskab", "Profilen tilhører ejeren. Chippen er blot nøglen."],
                ["Verificering", "Tillid mellem ejer, klinik og myndigheder"],
                ["Sammenhæng", "På tværs af europæiske registre"],
                ["Opsætning", "Fra papir til profil på få sekunder"],
                ["Løbende opdatering", "Vaccination, ID og status"],
                ["Tillid", "Klinik, forsikring, told og ejer"],
                ["Europæisk udvikling", "Udviklet til fælles regelsæt"],
                ["Akutadgang", "Når vigtig information skal være let tilgængelig"],
                ["Forsikring", "Forbindelse og dokumentation — uden risikobæring"],
                ["Verificeret dokumentation", "Sammenhæng på tværs af formater"],
              ].map(([k, v]) => (
                <li key={k} className="bg-background p-6">
                  <p className="font-serif text-lg font-light italic text-accent">{k}</p>
                  <p className="mt-2 text-xs font-light leading-relaxed text-foreground/70">{v}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EU INFRASTRUCTURE */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-[10px] tracking-[0.4em] text-muted-foreground">EUROPÆISK UDVIKLING</p>
              <h2 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl">
                En fælles europæisk udvikling inden for registrering og identitet er i gang.
              </h2>
              <p className="mt-8 text-sm font-light leading-relaxed text-foreground/75">
                EU bevæger sig mod obligatorisk mikrochip, fælles registre, digital registrering og fælles passystemer. Det er mere end nye chipregler — det er en samlet europæisk udvikling.
              </p>
            </div>
            <div className="md:col-span-8">
              <ul>
                {euLayers.map((l, i) => (
                  <li key={l.k} className="flex items-baseline gap-6 border-t border-border py-5 last:border-b">
                    <span className="font-serif w-6 text-xs italic text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-serif w-44 shrink-0 text-lg font-light md:text-xl">{l.k}</span>
                    <span className="text-sm font-light text-foreground/70">{l.v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CHIP REALITY */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">CHIP-VIRKELIGHEDEN</p>
            <h2 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
              Hvad chippen <span className="italic text-accent">bruges til</span> i dag.
            </h2>
            <p className="mt-8 text-sm font-light leading-relaxed text-foreground/75">
              Markedet domineres af et lille antal aktører. Stort set alle bygger på samme teknologi: passiv RFID under huden. Lille hukommelse, ingen sporing, ingen opdatering.
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3">
              {chipPlayers.map((p) => (
                <li key={p} className="font-serif border-t border-border pt-3 text-sm font-light italic text-foreground/70">{p}</li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-7">
            <ul>
              {chipReality.map((r, i) => (
                <li key={r.k} className="flex items-baseline gap-6 border-t border-border py-5 last:border-b">
                  <span className="font-serif w-6 text-xs italic text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-serif w-44 shrink-0 text-lg font-light md:text-xl">{r.k}</span>
                  <span className="text-sm font-light text-foreground/70">{r.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          <div className="bg-background p-10 md:p-14">
            <p className="text-[10px] tracking-[0.4em] text-accent">HVIS CHIPPEN UDVIKLER SIG</p>
            <h3 className="font-serif mt-6 text-2xl font-light leading-tight md:text-3xl">En hybrid identitet</h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-foreground/75">
              ISO 14223 og avancerede transpondere peger mod chips med flere datafelter, opdaterbar info og kobling til cloud, app, dyrlæge- og forsikringsdata.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {chipFuture.map((f) => (
                <li key={f} className="flex items-baseline gap-3 text-[13px] font-light text-foreground/75">
                  <span className="h-px w-3 translate-y-[-4px] bg-border" />{f}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background p-10 md:p-14">
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">HVIS CHIPPEN IKKE KAN</p>
            <h3 className="font-serif mt-6 text-2xl font-light leading-tight md:text-3xl">Uafhængig af chipudviklingen</h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-foreground/75">
              Modner chip-teknologien langsommere end ventet, kører Track My Pet uændret videre. Vi peger på det eksisterende chip-ID og bygger hele værdien i tag, app og cloudprofil.
            </p>
            <ul className="mt-8 space-y-2">
              {chipRisks.map((r) => (
                <li key={r} className="flex items-baseline gap-3 text-[13px] font-light text-foreground/75">
                  <span className="h-px w-3 translate-y-[-4px] bg-border" />{r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-card">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-[10px] tracking-[0.4em] text-muted-foreground">PRINCIPPERNE</p>
              <h2 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl">Hvad gør et produkt værdifuldt over tid?</h2>
            </div>
            <div className="md:col-span-8">
              <ul className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                {principles.map((p, i) => (
                  <li key={p} className="flex items-baseline gap-4 border-t border-border pt-4 text-sm font-light text-foreground/80">
                    <span className="font-serif text-xs italic text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PHASES */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="text-center">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">RÆKKEFØLGEN</p>
          <h2 className="font-serif mt-6 text-4xl font-light md:text-5xl">Fra objekt til samlet løsning</h2>
        </div>
        <ol className="mt-20">
          {phases.map((p) => (
            <li key={p.no} className="grid grid-cols-12 gap-6 border-t border-border py-10 last:border-b">
              <div className="col-span-12 md:col-span-3">
                <p className="font-serif text-sm italic text-muted-foreground">{p.no}</p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-serif text-2xl font-light md:text-3xl">{p.title}</h3>
                <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-foreground/75">{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* RISKS */}
      <section className="bg-card">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-[10px] tracking-[0.4em] text-muted-foreground">DEN ÆRLIGE KRITIK</p>
              <h2 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl">Hvor kan casen dø?</h2>
              <p className="mt-8 text-sm font-light leading-relaxed text-foreground/70">
                Vi skal være realistiske. Idéen er stærk, men der er fem reelle risici, vi skal designe os ud af fra dag ét.
              </p>
            </div>
            <div className="md:col-span-8">
              <ul>
                {risks.map((r, i) => (
                  <li key={r.title} className="border-t border-border py-6 last:border-b">
                    <div className="flex items-baseline gap-6">
                      <span className="font-serif text-xs italic text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 className="font-serif text-xl font-light md:text-2xl">{r.title}</h3>
                        <p className="mt-2 text-sm font-light leading-relaxed text-foreground/70">{r.body}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATING MODEL */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="text-center">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">OPSÆTNINGEN</p>
          <h2 className="font-serif mt-6 text-4xl font-light md:text-5xl">Sådan bygges selskabet</h2>
        </div>
        <ol className="mt-20 grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          {operatingModel.map((m, i) => (
            <li key={m.title} className="flex flex-col bg-background p-8 sm:p-10 md:p-12">
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-sm italic text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[10px] tracking-[0.35em] text-accent">OPSÆTNING</span>
              </div>
              <h3 className="font-serif mt-6 text-2xl font-light leading-tight md:text-3xl">{m.title}</h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-foreground/75">{m.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* BLUEPRINT */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-[10px] tracking-[0.4em] text-muted-foreground">CASEN MOD KENDTE MØNSTRE</p>
              <h2 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
                Holder casen mod kendte mønstre for langsigtede produkter?
              </h2>
              <p className="font-serif mt-10 text-xl font-light italic leading-snug text-accent md:text-2xl">
                Ét marked. Én relation. Ét samlet sted. Gennem hele dyrets liv.
              </p>
            </div>
            <div className="md:col-span-7">
              <ol>
                {blueprint.map((b, i) => (
                  <li key={b.p} className="border-t border-border py-6 last:border-b">
                    <div className="flex items-baseline gap-6">
                      <span className="font-serif w-6 text-xs italic text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                      <div className="flex-1">
                        <p className="text-[10px] tracking-[0.35em] text-muted-foreground">PRINCIP</p>
                        <h3 className="font-serif mt-2 text-xl font-light leading-tight md:text-2xl">{b.p}</h3>
                        <p className="text-[10px] mt-5 tracking-[0.35em] text-accent">TRACK MY PET</p>
                        <p className="mt-2 text-sm font-light leading-relaxed text-foreground/75">{b.a}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* THE BIG QUESTION */}
      <section className="bg-foreground">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
          <p className="text-[10px] tracking-[0.4em] text-background/60">DET VIGTIGSTE SPØRGSMÅL</p>
          <h2 className="font-serif mt-10 text-3xl font-light italic leading-snug text-background md:text-4xl lg:text-5xl">
            Hvis det her lykkes ekstremt godt — hvorfor skulle det så blive stort?
          </h2>
          <div className="mx-auto mt-12 h-px w-12 bg-background/30" />
          <p className="mt-12 text-sm font-light leading-relaxed text-background/80">
            Langsigtede relationer. Tillid. Eksisterende behov. Regulatorisk medvind. Praktisk anvendelighed. En relation, der varer 10–15 år pr. dyr.
          </p>
        </div>
      </section>

      {/* CONCLUSION CTA */}
      <section className="bg-card">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">NÆSTE</p>
          <h2 className="font-serif mt-6 text-3xl font-light italic leading-snug md:text-4xl">
            Hvor stort er markedet — og hvem har allerede valideret det?
          </h2>
          <Link to="/market" className="mt-10 inline-block rounded-full bg-foreground px-8 py-3 text-[11px] tracking-[0.25em] text-background hover:bg-accent">
            SE MARKEDET
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
