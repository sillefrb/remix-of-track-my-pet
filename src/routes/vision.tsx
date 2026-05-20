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
          "Chippen er råvaren — værdien ligger i det digitale infrastrukturlag ovenpå. EU's medvind, chipvirkeligheden, principper og rækkefølgen.",
      },
      { property: "og:title", content: "Vision — Track My Pet" },
      { property: "og:description", content: "Branding, tillid og økosystempartnerskaber bliver vigtigere end teknologien." },
    ],
  }),
  component: VisionPage,
});

const euLayers = [
  { k: "Identitet", v: "Obligatorisk mikrochip og ejerskab" },
  { k: "Registrering", v: "Interoperable databaser på tværs af EU" },
  { k: "Sporbarhed", v: "Bevægelse mellem medlemslande" },
  { k: "Sundhedsdata", v: "Vaccination og medicinsk historik" },
  { k: "Digitalt pas", v: "Standardiseret dokumentation" },
  { k: "Anti-fraud", v: "Beskyttelse mod illegal handel" },
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

const principles = ["Simpelt fysisk objekt", "Løser én konkret irritation", "Følelsesmæssig relevans", "”Hvorfor findes det ikke allerede?”-effekt", "Lav produktionskompleksitet", "Høj oplevet værdi", "Let at forklare i video", "Globalt problem", "Fri af tung software", "Kan blive vane og adfærd"];

const phases = [
  { no: "Fase 01", title: "Elegant fysisk identitetsprodukt", body: "Premium tag og kort koblet til chip-ID. En enkel digital profil. Lav friktion i opsætningen, høj oplevet værdi." },
  { no: "Fase 02", title: "Abonnement og digital relation", body: "Dokumenter, vaccination, påmindelser, familieadgang og nødprofil. Begyndelsen på løbende indtægter." },
  { no: "Fase 03", title: "Forsikring, rejse og verificeret ejerskabsoverdragelse", body: "Partnerskaber ovenpå data og identitet. Compliance i grænsekrydsning. Verificeret ejerskabsoverdragelse." },
  { no: "Fase 04", title: "Europæisk infrastrukturlag for kæledyrsidentitet", body: "Det forbrugervendte lag ovenpå EU's sporbarhedsinfrastruktur." },
];

const risks = [
  { title: "For lille", body: "Hvis det bare bliver ”scan min hund”, bliver casen aldrig stor nok. Vi skal eje hele relationen." },
  { title: "Feature-risiko", body: "Apple og Google kan kopiere simple QR-løsninger. Vi skal eje arbejdsgangen, relationen og dataene." },
  { title: "Svag fastholdelse", body: "Hvis produktet kun bruges, når hunden er væk, dør abonnementet. Vi skal skabe løbende relevans." },
  { title: "Regulatorisk afhængighed", body: "Produktet skal fungere, uanset hvilken vej EU's regulering går." },
  { title: "For bred vision for tidligt", body: "Ingen super-app, ingen AI, ingen markedsplads fra dag ét. Ét fysisk produkt først." },
];

const operatingModel = [
  { title: "Et marked med friktion", body: "Pet-sektoren er fragmenteret, analog og emotionel. EU's nye krav skaber en åbning." },
  { title: "Stærk intern overbevisning", body: "Vi tror selv på, at det forbrugervendte lag ovenpå pet-infrastrukturen bliver et reelt selskab." },
  { title: "Dygtige folk, der vil bygge sammen", body: "Vi samler folk med ekspertise i hardware, design, vet-tech og forsikring — og giver dem en platform." },
  { title: "Reelt ejerskab og reel magt", body: "Reel equity og reel beslutningsret fra dag ét — det eneste der tiltrækker A-spillere." },
  { title: "Erfaring, talent og distribution", body: "Erfarne operatører + ungt produkttalent + eksisterende distributionskanaler." },
  { title: "Eksisterende relationer som fundament", body: "Vi bygger ovenpå relationer i dyrlægebranchen, forsikringsselskaber og europæiske retail-kanaler." },
  { title: "Fokus før drift", body: "Outsource alt uden for kernen. Hardware, fulfilment og support håndteres af partnere." },
];

const blueprint = [
  { p: "Markedet før idéen", a: "Pet-markedet er stort, gammelt, fragmenteret og emotionelt. Pengeflow og frustration eksisterer allerede." },
  { p: "Friktion med økonomisk volumen", a: "Ejere bruger tusindvis af euro årligt. Hver beslutning kræver dokumenter, login og opslag." },
  { p: "Hele processer — fra ende til ende", a: "Identitet → dokumenter → vaccination → forsikring → travel → emergency → ownership transfer." },
  { p: "Byg ovenpå eksisterende adfærd", a: "Hunde har allerede halsbånd, chip og papirer. Vi reducerer friktion på noget folk allerede gør." },
  { p: "Distribution før produkt", a: "Indbygget distribution gennem dyrlæger, opdrættere, forsikringsselskaber, retail og pet-influencers." },
  { p: "Tydelig kontrast i positionering", a: "Modsat et bureaukratisk EU-register: smukt, simpelt, ejeren ejer sine egne data." },
  { p: "Tænk platform og lagdeling", a: "Tag → profil → dokumenter → forsikring → travel → identity infrastructure." },
  { p: "Hvorfor bliver det stort?", a: "Workflow ownership, data lock-in, regulatorisk medvind, indbygget distribution og høj emotional retention." },
];

function VisionPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO TESE */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <p className="text-[10px] tracking-[0.4em] text-muted-foreground">II — KERNETESEN</p>
        <h1 className="font-serif mt-8 text-3xl font-light italic leading-snug md:text-5xl lg:text-6xl">
          Chippen er råvaren.<br />
          Værdien ligger i det <span className="text-accent not-italic">digitale infrastrukturlag</span> ovenpå.
        </h1>
        <div className="mx-auto mt-12 h-px w-12 bg-border" />
        <p className="mt-12 text-base font-light leading-relaxed text-foreground/80">
          Chippen er en råvare. Det interessante er dataejerskab, verificering, interoperabilitet, opsætning, realtidsopdateringer, tillidslag, EU-kompatibilitet, akutadgang, forsikringsintegration og AI-understøttet dokumentation. Når regulering standardiserer identitet, opstår der altid et nyt software- og infrastrukturlag ovenpå.
        </p>
        <p className="mt-8 font-serif text-lg font-light italic leading-relaxed text-foreground/90 md:text-xl">
          Vi forventer, at branding, tillid og økosystempartnerskaber sandsynligvis bliver vigtigere end selve teknologien.
        </p>
      </section>

      {/* VALUE LAYERS */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">DET EGENTLIGE VÆRDILAG</p>
            <h2 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl">
              Chippen er en råvare.<br /><span className="italic text-accent">Laget ovenpå</span> er forretningen.
            </h2>
            <p className="mt-8 text-sm font-light leading-relaxed text-foreground/75">
              Værdien ligger i softwarelaget ovenpå hardware — i at operationalisere kompleks regulering, eje den digitale identitet og reducere informationsasymmetri mellem ejer, klinik, forsikring og myndigheder.
            </p>
          </div>
          <div className="md:col-span-7">
            <ul className="grid grid-cols-2 gap-px bg-border">
              {[
                ["Dataejerskab", "Profilen tilhører ejeren. Chippen er blot nøglen."],
                ["Verificering", "Realtime trust mellem parter"],
                ["Interoperabilitet", "På tværs af EU-databaser"],
                ["Onboarding", "Fra papir til profil på sekunder"],
                ["Realtidsopdatering", "Vaccination, ID, status — live"],
                ["Tillidslag", "Klinik, forsikring, told, ejer"],
                ["EU-kompatibilitet", "Bygget til fælles regelsæt"],
                ["Akutadgang", "Når sekunder afgør udfaldet"],
                ["Forsikringsintegration", "Distribution og data — uden risikobæring"],
                ["AI-dokumentation", "Verificering på tværs af formater"],
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
              <p className="text-[10px] tracking-[0.4em] text-muted-foreground">EU TAILWIND</p>
              <h2 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl">
                Et fælles europæisk datalag er på vej.
              </h2>
              <p className="mt-8 text-sm font-light leading-relaxed text-foreground/75">
                EU bevæger sig mod obligatorisk mikrochip, interoperable databaser, digital sporbarhed og fælles passystemer. Det er mere end nye chipregler — det er et nyt infrastrukturlag.
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
              Hvad chippen <span className="italic text-accent">faktisk</span> kan i dag.
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
              <h2 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl">Hvad gør et produkt uundgåeligt?</h2>
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
          <h2 className="font-serif mt-6 text-4xl font-light md:text-5xl">Fra objekt til infrastruktur</h2>
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
                Vi skal være brutalt realistiske. Idéen er stærk, men der er fem reelle risici, vi skal designe os ud af fra dag ét.
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
              <p className="text-[10px] tracking-[0.4em] text-muted-foreground">BLUEPRINT-CHECK</p>
              <h2 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
                Holder casen op imod blueprintet for skalerbare selskaber?
              </h2>
              <p className="font-serif mt-10 text-xl font-light italic leading-snug text-accent md:text-2xl">
                Et marked. En proces. En position. En relation, der varer hele dyrets liv.
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
            Workflow ownership. Data lock-in. Regulatorisk medvind. Indbygget distribution. Høj emotional retention. En relation, der varer 10–15 år pr. dyr.
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
