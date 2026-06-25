import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/dogpass-hero.jpg";
import catImg from "@/assets/dogpass-cat-editorial.jpg";
import catEditorialImg from "@/assets/dogpass-cat.jpg";
import skaterImg from "@/assets/dogpass-aktiv-skater.jpg";
import documentImg from "@/assets/dogpass-document.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WaitlistCTA } from "@/components/WaitlistCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Track My Pet, Forretningscase" },
      {
        name: "description",
        content:
          "Et samlet produkt til identitet, dokumentation og tryghed gennem hele dyrets liv. Et fysisk tag og en digital profil samlet ét sted.",
      },
      { property: "og:title", content: "Track My Pet, Forretningscase" },
      {
        property: "og:description",
        content:
          "En samlet løsning til identitet og dokumentation, udviklet til moderne kæledyrsejerskab.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const sections: {
  to: "/product" | "/vision" | "/market" | "/pricing";
  no: string;
  label: string;
  title: string;
  body: string;
  img?: string;
}[] = [
  {
    to: "/product",
    no: "I",
    label: "PRODUKT",
    title: "Et samlet fysisk og digitalt produkt.",
    body: "Tag, kort og folder koblet til en verificeret digital profil. Opsætning på under ét minut. Pas, vaccinationer, rejser og nødinformation, i ét.",
    img: skaterImg,
  },
  {
    to: "/vision",
    no: "II",
    label: "HVORFOR DET ER NØDVENDIGT",
    title: "Et samlet sted for vigtig information om dit kæledyr.",
    body: "Identitet, dokumentation og adgang samlet ét sted. Tillid, omsorg og langsigtede relationer er vigtigere end teknologien selv.",
    img: documentImg,
  },
  {
    to: "/market",
    no: "III",
    label: "BAGGRUND",
    title: "198 millioner hunde og katte i Europa.",
    body: "108 mio. katte og 90 mio. hunde. Internationale løsninger viser, hvordan en samlet løsning til kæledyrsidentitet kan se ud.",
    img: catImg,
  },
  {
    to: "/pricing",
    no: "IV",
    label: "MEDLEMSKAB",
    title: "Gratis → Plus → Pro → Livstid.",
    body: "Flere medlemsniveauer til ejere, klinikker og samarbejdspartnere. Enkel og gennemsigtig adgang.",
  },
];

export function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO, full-bleed editorial */}
      <section className="relative">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted md:aspect-[16/9]">
          <img
            src={heroImg}
            alt="Sighthound i en have med vilde blomster"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-12 text-center md:pb-20">
            <p className="text-[10px] font-light tracking-[0.45em] text-background/95">
              IN LOVE WITH ANIMALS, JOIN THE PACK
            </p>
            <h1 className="font-serif mt-6 text-5xl font-light leading-[1] tracking-tight text-background sm:text-7xl md:text-8xl lg:text-[9rem]">
              Track My Pet
            </h1>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 pt-20 pb-8 text-center md:pt-28">
          <p className="text-[10px] tracking-[0.45em] text-muted-foreground">TESEN</p>
          <p className="font-serif mt-8 text-2xl font-light italic leading-snug text-foreground sm:text-3xl md:text-4xl">
            Europas <span className="not-italic text-accent">AI- og datainfrastruktur</span> for kæledyr.
          </p>
          <p className="mx-auto mt-10 max-w-xl text-sm font-light leading-relaxed text-foreground/70">
            Én verificeret identitet forbinder hunde, katte, deres ejere og de aktører, der følger dem gennem livet. Dyrlæger, forsikringsselskaber, internater, myndigheder, rejseaktører, forskere og teknologipartnere arbejder ud fra den samme profil.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-[11px] tracking-[0.25em]">
            <Link to="/product" className="rounded-full bg-foreground px-6 py-3 text-background transition hover:bg-accent">
              FÅ DIT PET ID
            </Link>
            <Link to="/pricing" className="rounded-full border border-border px-6 py-3 text-foreground transition hover:border-accent hover:text-accent">
              FOR KLINIKKER OG ORGANISATIONER
            </Link>
          </div>
        </div>

        {/* DET ER */}
        <div className="border-t border-border bg-background">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="text-[10px] tracking-[0.45em] text-accent">DET ER</p>
            <p className="font-serif mt-8 text-3xl font-light italic leading-snug md:text-4xl">
              Det lag, som forbinder alle aktører omkring kæledyret.
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-2 text-sm font-light text-foreground/75 sm:grid-cols-3">
              {["Ejeren","Dyrlægen","Forsikringen","Internatet","Myndigheder","Rejser","Tracking","Online veterinær","Forskning"].map((t) => (
                <li key={t} className="border-t border-border pt-3 font-serif italic">{t}</li>
              ))}
            </ul>
            <p className="mt-10 text-sm font-light leading-relaxed text-foreground/70">
              Én verificeret identitet skaber fælles adgang til data, dokumentation og AI-baserede services. Hver ny profil, integration og samarbejdspartner styrker platformen og øger værdien for hele økosystemet.
            </p>
            <p className="mt-6 text-sm font-light leading-relaxed text-foreground/70">
              198 millioner potentielle digitale identiteter danner fundamentet for Europas førende AI- og datainfrastruktur for hunde, katte og deres ejere.
            </p>
          </div>
        </div>

        {/* TILLIDSBJÆLKE */}
        <div className="border-y border-border bg-card">
          <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-6 text-[10px] tracking-[0.35em] text-muted-foreground">
            <span>BRUGT AF EJERE</span>
            <span aria-hidden className="h-px w-6 bg-border" />
            <span>KLINIKKER</span>
            <span aria-hidden className="h-px w-6 bg-border" />
            <span>INTERNATER</span>
            <span aria-hidden className="h-px w-6 bg-border" />
            <span>SAMARBEJDSPARTNERE</span>
          </div>
        </div>
      </section>

      {/* PROBLEM, FRAGMENTERING */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-12 lg:gap-20">
            <div className="col-span-12 lg:col-span-5">
              <p className="text-[10px] tracking-[0.45em] text-accent">
                PROBLEMET
              </p>
              <h2 className="font-serif mt-8 text-4xl font-light leading-[1.0] tracking-tight md:text-5xl">
                Intet taler <span className="italic text-accent">sammen.</span>
              </h2>
              <p className="mt-8 max-w-md text-sm font-light leading-relaxed text-foreground/70">
                Identitet, sundhedsoplysninger, forsikring, rejser og dokumentation ligger spredt på tværs af registre, klinikker, mails og fysiske dokumenter. Hver aktør arbejder med sit eget datasæt, selv om oplysningerne handler om det samme dyr.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <ul className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3">
                {[
                  "Dyrlæge",
                  "Medicin",
                  "Forsikring",
                  "Pas",
                  "Microchip-register",
                  "Foderabonnement",
                  "Pasningsapp",
                  "Rejseattest",
                  "Mails",
                ].map((item) => (
                  <li
                    key={item}
                    className="bg-background px-5 py-8 text-center"
                  >
                    <span className="font-serif text-base font-light italic text-foreground md:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-serif text-lg font-light italic leading-snug text-foreground/85 md:text-xl">
                Ni systemer. Én identitet. Ét fælles datalag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SÅDAN FUNGERER DET, 3 TRIN */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">

        <div className="grid grid-cols-12 items-end gap-6 pb-16">
          <div className="col-span-12 md:col-span-7">
            <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
              SÅDAN FUNGERER DET, N°0A / TRE TRIN
            </p>
            <h2 className="font-serif mt-8 text-4xl font-light leading-[0.95] tracking-tight md:text-6xl">
              Enkel at komme i gang. <span className="italic text-accent">Enkel at bruge.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="max-w-sm text-sm font-light leading-relaxed text-foreground/75 md:ml-auto">
              Tre trin etablerer en verificeret digital identitet, som samler dokumentation, data og AI-baserede services gennem hele kæledyrets liv.
            </p>
            <div className="mt-8 h-px w-12 bg-border md:ml-auto" />
          </div>
        </div>

        <ol className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {[
            {
              step: "01",
              tag: "OPRET",
              title: "Opret en verificeret profil",
              body: "Tilføj billede, identitet og ejeroplysninger. Den verificerede profil bliver fundamentet for identitet, dokumentation og fremtidige services.",
            },
            {
              step: "02",
              tag: "SAMLE",
              title: "Saml dokumenter og journal",
              body: "Vaccinationer, journal, rejsedokumenter og øvrig dokumentation forbindes til én verificeret profil, som følger dyret gennem hele livet.",
            },
            {
              step: "03",
              tag: "DEL",
              title: "Del sikkert, når det er nødvendigt",
              body: "Del verificerede oplysninger med dyrlæger, pasning, rejseaktører og øvrige samarbejdspartnere via QR, link eller eksport. Ejeren styrer adgangen.",
            },
          ].map((s) => (
            <li key={s.step} className="bg-background p-10 md:p-12">
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-sm italic text-muted-foreground">{s.step}</span>
                <span className="text-[10px] tracking-[0.35em] text-accent">{s.tag}</span>
              </div>
              <h3 className="font-serif mt-6 text-2xl font-light leading-tight md:text-3xl">
                {s.title}
              </h3>
              <p className="mt-6 text-sm font-light leading-relaxed text-foreground/75">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* KONTEKST, EUROPÆISK UDVIKLING */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 items-end gap-6 pb-16">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
                KONTEKST, N°00 / EUROPA
              </p>
              <h2 className="font-serif mt-8 text-4xl font-light leading-[0.95] tracking-tight md:text-6xl">
                Kæledyrsidentitet bevæger sig{" "}
                <span className="italic text-accent">mod én standard.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="max-w-sm text-sm font-light leading-relaxed text-foreground/75 md:ml-auto">
                EU bevæger sig mod fælles standarder for identitet, registrering og dokumentation. Udviklingen skaber fundamentet for en digital infrastruktur, der forbinder data på tværs af Europa.
              </p>
              <div className="mt-8 h-px w-12 bg-border md:ml-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
            {[
              {
                tag: "EU-UDVIKLING",
                title: "En fælles europæisk udvikling er i gang",
                body: "Mikrochip, registrering og vigtige oplysninger får en stadig større rolle på tværs af europæiske lande.",
              },
              {
                tag: "BEHOVET",
                title: "Behov for en enklere adgang",
                body: "Ejere, dyrlæger og myndigheder får værdi af en fælles digital identitet, hvor dokumentation, sundhedsdata og ejerskab følger dyret på tværs af hele Europa.",
              },
            ].map((p) => (
              <div key={p.tag} className="bg-background p-10 md:p-12">
                <span className="text-[10px] tracking-[0.35em] text-accent">
                  {p.tag}
                </span>
                <h3 className="font-serif mt-6 text-2xl font-light leading-tight md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-6 text-sm font-light leading-relaxed text-foreground/75">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HVORFOR MODELLEN VIRKER */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
              HVORFOR MODELLEN VIRKER
            </p>
            <h2 className="font-serif mt-8 text-4xl font-light leading-[1.0] md:text-5xl lg:text-6xl">
              Teknologien skal gøre <span className="italic text-accent">hverdagen enklere.</span>
            </h2>
            <p className="mt-10 max-w-md text-sm font-light leading-relaxed text-foreground/75">
              En enkel oplevelse skaber høj aktivering. Platformen vokser gennem relationen mellem ejeren, kæledyret og de aktører, der bruger den.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7">
            <ul className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
              {[
                ["Et simpelt fysisk produkt", "Skaber den første relation til platformen på få sekunder."],
                ["Høj følelsesmæssig relevans", "Tryghed, overblik og dokumentation gennem hele kæledyrets liv."],
                ["Ekstremt lav friktion", "Scan → opret profil → forbind identitet, dokumentation og services."],
                ["Løbende funktioner og adgang", "Platformen udvikler sig med nye services, data og samarbejdspartnere."],
                ["Langsigtet adgang og dokumentation", "Den verificerede profil følger dyret gennem hele livet og danner grundlag for dokumentation, AI og fremtidige services."],
                ["Løbende kunderelationer", "Hver ny service styrker relationen mellem ejeren og platformen."],
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

      {/* EMOTIONEL POSITIONERING */}
      <section className="bg-card">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">
            EMOTIONEL POSITIONERING
          </p>
          <h2 className="font-serif mx-auto mt-8 max-w-3xl text-3xl font-light italic leading-snug md:text-5xl">
            Det handler om tryghed.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm font-light leading-relaxed text-foreground/75">
            Verificeret identitet, dokumentation og AI skaber tryghed i hverdagen, på rejsen og når situationen kræver hurtig adgang til vigtige oplysninger.
          </p>
          <ul className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-6 font-serif text-2xl font-light md:text-4xl">
            {["Tryghed", "Sikkerhed", "Overblik", "Ansvar", "Omsorg", "Enklere hverdag"].map(
              (w, i) => (
                <li key={w} className="flex items-center gap-10">
                  <span className={i % 2 === 1 ? "text-accent italic" : ""}>
                    {w}
                  </span>
                  {i < 5 && (
                    <span aria-hidden className="h-px w-6 bg-border" />
                  )}
                </li>
              ),
            )}
          </ul>
          <p className="mx-auto mt-16 max-w-xl text-sm font-light leading-relaxed text-foreground/75">
            Kæledyr er en del af familien. Derfor investerer ejere allerede i sundhed, forsikring, sikkerhed og pleje. Track My Pet forbinder disse områder i én verificeret platform, hvor identitet, dokumentation og data skaber værdi for både ejere og samarbejdspartnere.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-px bg-border md:grid-cols-12">
        <figure className="bg-background md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden bg-muted">
            <img
              src={catEditorialImg}
              alt="Hvid plettet kat siddende i profil foran en mørk træport"
              width={1080}
              height={1350}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="px-6 py-6 text-[10px] tracking-[0.35em] text-muted-foreground">
            EDITORIAL, N°01 / FELINE
          </figcaption>
        </figure>
        <div className="flex flex-col justify-center bg-background p-10 md:col-span-7 md:p-16">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">
            DESIGN PHILOSOPHY
          </p>
          <h2 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
            Smukke relationer fortjener<br />
            <span className="italic text-accent">omtanke.</span>
          </h2>
          <p className="mt-8 max-w-md text-sm font-light leading-relaxed text-foreground/75">
            Skabt ud fra filosofien om, at relationen mellem mennesket og
            kæledyr er en af de mest nære og betydningsfulde, vi har.
            Produktet er udviklet til at beskytte og følge dyret gennem livet med fokus på tryghed, kvalitet og funktioner udviklet med omtanke, uden støj, overdesign eller unødvendig kompleksitet.
          </p>
          <div className="mt-10 h-px w-12 bg-border" />
        </div>
      </section>

      {/* INDEX, fire sider */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-12 items-end gap-6 pb-16">
          <div className="col-span-12 md:col-span-7">
            <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
              INDHOLD, N°00 / FORRETNINGSCASE
            </p>
            <h2 className="font-serif mt-8 text-4xl font-light leading-[0.95] tracking-tight md:text-6xl">
              Casen i fire <span className="italic text-accent">kapitler.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="max-w-sm text-sm font-light leading-relaxed text-foreground/75 md:ml-auto">
              Produkt, vision, marked og prismodel, hver del kan læses og
              deles for sig. Følg rækkefølgen, eller spring direkte til det,
              der interesserer dig.
            </p>
            <div className="mt-8 h-px w-12 bg-border md:ml-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          {sections.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group flex flex-col bg-background p-8 transition-colors duration-500 hover:bg-card sm:p-10 md:p-14"
            >
              {s.img && (
                <div className="mb-10 aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={s.img}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-sm italic text-muted-foreground">
                  {s.no}
                </span>
                <span className="text-[10px] tracking-[0.35em] text-muted-foreground">
                  {s.label}
                </span>
              </div>
              <h3 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl">
                {s.title}
              </h3>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-foreground/75">
                {s.body}
              </p>
              <span className="mt-10 inline-flex items-center gap-3 text-[10px] tracking-[0.35em] text-accent">
                LÆS KAPITEL
                <span aria-hidden className="h-px w-8 bg-accent" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CONCLUSION, strategi */}
      <section className="bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-5">
              <p className="text-[10px] tracking-[0.45em] text-muted-foreground">STRATEGIEN</p>
              <h2 className="font-serif mt-8 text-4xl font-light italic leading-[1.0] md:text-5xl lg:text-6xl">
                Vi begynder ét sted.<br />
                Med én verificeret identitet, der samler alt omkring hunden eller katten.
              </h2>
              <div className="mt-10 h-px w-12 bg-border" />
              <p className="mt-10 max-w-md text-sm font-light leading-relaxed text-foreground/80">
                Vi begynder med en verificeret identitet og bygger løbende nye services oven på den samme profil. Hver ny funktion styrker værdien for ejeren og hele økosystemet.
              </p>
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
                Det fysiske produkt etablerer den første relation til platformen. Herfra udvikler profilen sig med dokumentation, AI, partnerskaber og services i takt med kæledyrets liv.
              </p>
            </div>

            <div className="col-span-12 md:col-span-7">
              <ol className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
                {[
                  { step: "01", tag: "IDENTITET", title: "Det fysiske tag", body: "Premium tag med QR og NFC, udviklet som det første kontaktpunkt til en verificeret digital identitet. Aktiveres på få sekunder og følger kæledyret gennem hele livet." },
                  { step: "02", tag: "PLATFORM", title: "Den digitale profil", body: "Den verificerede profil samler identitet, dokumentation, sundhedsdata og ejerskab. Platformen udvikler sig løbende med nye AI-services og integrationer." },
                  { step: "03", tag: "DATA", title: "Samlet indsigt", body: "Aggregerede og samtykkebaserede data skaber indsigt i sundhed, sygdomsmønstre og adfærd. Det styrker AI-modeller, forskning, forsikring og veterinærsektoren, mens ejeren bevarer kontrollen over egne oplysninger." },
                  { step: "04", tag: "EUROPA", title: "Et samlet produkt til kæledyrsidentitet", body: "EU skaber fælles rammer for identitet og registrering. Track My Pet forbinder dokumentation, sundhedsdata og digitale services på tværs af ejere, dyrlæger, myndigheder og samarbejdspartnere." },
                ].map((s) => (
                  <li key={s.step} className="bg-background p-8 md:p-10">
                    <div className="flex items-baseline justify-between">
                      <span className="font-serif text-xs italic text-muted-foreground">{s.step}</span>
                      <span className="text-[10px] tracking-[0.35em] text-accent">{s.tag}</span>
                    </div>
                    <h3 className="font-serif mt-6 text-2xl font-light leading-tight md:text-3xl">{s.title}</h3>
                    <p className="mt-4 text-sm font-light leading-relaxed text-foreground/70">{s.body}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-10 flex flex-wrap gap-4 text-[11px] tracking-[0.25em]">
                <Link to="/product" className="rounded-full bg-foreground px-6 py-3 text-background hover:bg-accent">
                  SE PRODUKTET
                </Link>
                <Link to="/vision" className="rounded-full border border-border px-6 py-3 text-foreground hover:border-accent hover:text-accent">
                  LÆS VISIONEN
                </Link>
                <Link to="/market" className="rounded-full border border-border px-6 py-3 text-foreground hover:border-accent hover:text-accent">
                  SE MARKEDET
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HJÆLP, SOS */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 items-end gap-6 pb-16">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
                HJÆLP, N°05 / NÅR DET ER NØDVENDIGT
              </p>
              <h2 className="font-serif mt-8 text-4xl font-light leading-[0.95] tracking-tight md:text-6xl">
                Hjælp, med <span className="italic text-accent">et enkelt klik.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="max-w-sm text-sm font-light leading-relaxed text-foreground/75 md:ml-auto">
                Vigtige oplysninger bliver tilgængelige på få sekunder. Identitet, kontaktpersoner, sundhedsoplysninger og dokumentation følger den verificerede profil og kan deles med de rette personer, når situationen kræver det.
              </p>
              <div className="mt-8 h-px w-12 bg-border md:ml-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                tag: "ONLINE VET",
                title: "Online dyrlæge",
                body: "Dyrlægen får adgang til den verificerede profil med journal, medicin og historik før konsultationen begynder.",
              },
              {
                tag: "DYRENES 112",
                title: "Akut hjælp til dyret",
                body: "Akutpersonale får adgang til de oplysninger, der skaber hurtigere og mere sikre beslutninger.",
              },
              {
                tag: "VI FINDER HUND",
                title: "Når dyret er væk",
                body: "QR eller NFC forbinder finder og ejer på få sekunder. Den verificerede profil giver adgang til de oplysninger, ejeren har valgt at dele.",
              },
              {
                tag: "POLITIET",
                title: "Kontakt til myndigheder",
                body: "Verificerede oplysninger kan deles med relevante myndigheder, når situationen kræver dokumentation eller identifikation.",
              },
            ].map((p) => (
              <div key={p.tag} className="bg-background p-10 md:p-12">
                <span className="text-[10px] tracking-[0.35em] text-accent">
                  {p.tag}
                </span>
                <h3 className="font-serif mt-6 text-2xl font-light leading-tight md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-6 text-sm font-light leading-relaxed text-foreground/75">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-2xl border-t border-border pt-12 text-center">
            <p className="text-[10px] tracking-[0.4em] text-accent">
              HVIS NOGET SKER MED EJEREN
            </p>
            <p className="mt-6 font-serif text-lg font-light italic leading-snug text-foreground/85 md:text-xl">
              Vigtig information om dyret skal være let at finde.
            </p>
            <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-foreground/75">
              Kontaktpersoner, medicin, rutiner og ønsker omkring omsorg samlet ét sted, tilgængeligt for de mennesker, du vælger.
            </p>
          </div>

          <p className="mx-auto mt-16 max-w-2xl text-center font-serif text-lg font-light italic leading-snug text-foreground/85 md:text-xl">
            Skabt til både hverdag og uforudsete situationer.
          </p>
        </div>
      </section>

      {/* OMSORG, HVIS LIVET ÆNDRER SIG */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-12 lg:gap-20">
            <div className="col-span-12 lg:col-span-5">
              <p className="text-[10px] tracking-[0.45em] text-accent">
                OMSORG, HVIS LIVET ÆNDRER SIG
              </p>
              <h2 className="font-serif mt-8 text-4xl font-light leading-[1.0] tracking-tight md:text-5xl lg:text-6xl">
                Et kæledyr er en del af{" "}
                <span className="italic text-accent">familien.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-foreground/75">
                Derfor følger omsorgsprofilen også de situationer, hvor andre skal tage over. Kontaktpersoner, rutiner, medicin og ønsker ligger på den verificerede profil og bliver tilgængelige for de mennesker, ejeren har udpeget.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="rounded-2xl border border-border bg-background p-8 md:p-12">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-sm italic text-muted-foreground">
                    N°08
                  </span>
                  <span className="text-[10px] tracking-[0.35em] text-accent">
                    OMSORGSPROFIL
                  </span>
                </div>
                <h3 className="font-serif mt-6 text-2xl font-light leading-tight md:text-3xl">
                  En privat profil for dyrets videre omsorg.
                </h3>
                <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-foreground/75">
                  Kontaktpersoner, pasningsønsker og vigtig information om dyret, ved sygdom, indlæggelse eller dødsfald. Synlig kun for de mennesker, du vælger.
                </p>

                <ul className="mt-10 grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
                  {[
                    { tag: "NØDKONTAKTER", body: "Familie, venner eller udvalgte personer." },
                    { tag: "MIDLERTIDIG PASNING", body: "Den, du ønsker, skal træde til først." },
                    { tag: "ØNSKER", body: "Dine ønsker for dyrets omsorg." },
                    { tag: "MEDICIN OG RUTINER", body: "Det daglige, der gør hverdagen tryg." },
                    { tag: "FAMILIE OG NÆRE", body: "Kontakt til de mennesker, der står dyret nær." },
                    { tag: "ADGANG", body: "Kontrolleret adgang til dokumentation, kontaktpersoner og omsorgsprofil." },
                  ].map((f) => (
                    <li key={f.tag} className="bg-background px-5 py-6">
                      <p className="text-[10px] tracking-[0.3em] text-muted-foreground">
                        {f.tag}
                      </p>
                      <p className="mt-3 font-serif text-base font-light italic text-foreground">
                        {f.body}
                      </p>
                    </li>
                  ))}
                </ul>

                <p className="mt-10 text-xs font-light leading-relaxed text-foreground/70">
                  Vigtig information tilgængelig for de mennesker, du vælger, varmt, værdigt og samlet ét sted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR EJERE, split med profilkort */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 items-center gap-12 lg:gap-20">
            <div className="col-span-12 lg:col-span-7">
              <p className="text-[10px] tracking-[0.45em] text-accent">
                FOR EJERE
              </p>
              <h2 className="font-serif mt-8 text-4xl font-light leading-[1.0] tracking-tight md:text-5xl lg:text-6xl">
                Én verificeret identitet samler{" "}
                <span className="italic text-accent">dokumentation, sundhedsdata og services gennem hele kæledyrets liv.</span>
              </h2>

              <ul className="mt-14 space-y-10">
                {[
                  {
                    title: "Verificeret identitet",
                    body: "Dokumentation, ejerskab og sundhedsoplysninger følger den samme profil.",
                  },
                  {
                    title: "Sundhedsprofil",
                    body: "Vaccinationer, journal, medicin og historik udvikler sig i takt med kæledyrets liv.",
                  },
                  {
                    title: "Kontrolleret deling",
                    body: "Del verificerede oplysninger med klinikker, pasning, rejseaktører og øvrige samarbejdspartnere.",
                  },
                  {
                    title: "Platform på tværs af enheder",
                    body: "Profilen følger ejeren på tværs af mobil, tablet og computer.",
                  },
                ].map((f) => (
                  <li key={f.title} className="flex items-start gap-5">
                    <span aria-hidden className="mt-2 h-px w-6 shrink-0 bg-accent" />
                    <div>
                      <h3 className="font-serif text-lg font-light italic text-foreground md:text-xl">
                        {f.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm font-light leading-relaxed text-foreground/70">
                        {f.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-14">
                <Link
                  to="/product"
                  className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-[11px] tracking-[0.25em] text-background transition hover:bg-accent"
                >
                  OPRET DIN PROFIL
                </Link>
              </div>
            </div>

            {/* PROFILKORT */}
            <div className="col-span-12 lg:col-span-5">
              <div className="mx-auto max-w-sm rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-muted">
                    <span className="font-serif text-3xl font-light italic text-foreground/70">
                      M
                    </span>
                  </div>
                  <p className="font-serif mt-6 text-2xl font-light text-foreground">
                    Mikko
                  </p>
                  <p className="mt-1 text-xs font-light tracking-wide text-muted-foreground">
                    Siberian Husky · 4 år
                  </p>
                </div>

                <ul className="mt-10 space-y-3">
                  {[
                    { name: "Rabies", status: "Gyldig", tone: "ok" },
                    { name: "DHPP", status: "Gyldig", tone: "ok" },
                    { name: "Bordetella", status: "Udløber snart", tone: "warn" },
                  ].map((v) => (
                    <li
                      key={v.name}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-light ${
                        v.tone === "ok"
                          ? "bg-accent/10 text-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <span>{v.name}</span>
                      <span
                        className={`text-xs tracking-wide ${
                          v.tone === "ok" ? "text-accent" : "text-foreground/60"
                        }`}
                      >
                        {v.status}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 text-center text-[10px] tracking-[0.35em] text-muted-foreground">
                  VERIFICERET PROFIL · PP-A4F29B1C
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SØG PASNING, split med pasningskort */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 items-center gap-12 lg:gap-20">
            <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
              <div className="mx-auto max-w-sm rounded-2xl border border-border bg-background p-8 shadow-sm md:p-10">
                <p className="text-[10px] tracking-[0.35em] text-accent">
                  PASNING I NÆRHEDEN
                </p>
                <ul className="mt-8 space-y-5">
                  {[
                    { name: "Anna L.", role: "Hundepasser · København K", dist: "1,2 km", rating: "4.9" },
                    { name: "Mads B.", role: "Dyrepension · Frederiksberg", dist: "2,8 km", rating: "4.8" },
                    { name: "Sofie H.", role: "Luftetur & dagpasning", dist: "3,4 km", rating: "5.0" },
                  ].map((s) => (
                    <li
                      key={s.name}
                      className="flex items-center justify-between gap-4 border-b border-border pb-5 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-muted">
                          <span className="font-serif text-sm font-light italic text-foreground/70">
                            {s.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-serif text-base font-light text-foreground">
                            {s.name}
                          </p>
                          <p className="text-xs font-light text-muted-foreground">
                            {s.role}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs tracking-wide text-accent">★ {s.rating}</p>
                        <p className="mt-1 text-[10px] text-muted-foreground">{s.dist}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-center text-[10px] tracking-[0.35em] text-muted-foreground">
                  VERIFICEREDE PASSERE · TRACK MY PET
                </p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
              <p className="text-[10px] tracking-[0.45em] text-accent">
                SØG PASNING
              </p>
              <h2 className="font-serif mt-8 text-4xl font-light leading-[1.0] tracking-tight md:text-5xl lg:text-6xl">
                Find tryg pasning,{" "}
                <span className="italic text-accent">når livet kalder.</span>
              </h2>
              <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-foreground/75">
                Et netværk af verificerede passere med adgang til relevante oplysninger fra den verificerede profil. Hurtigere onboarding, færre spørgsmål og større tryghed for både ejer og passer.
              </p>

              <ul className="mt-12 space-y-10">
                {[
                  {
                    title: "Verificerede passere",
                    body: "Alle passere er identitetsbekræftet og anmeldt af andre ejere, ingen anonyme profiler.",
                  },
                  {
                    title: "Profilen følger relationen",
                    body: "Ejeren vælger, hvilke oplysninger passeren får adgang til før første møde.",
                  },
                  {
                    title: "Hverdag og rejse",
                    body: "Dagpasning, luftetur, weekendophold eller længere ferier, find det match, der passer dit dyr.",
                  },
                  {
                    title: "Fælles udgangspunkt",
                    body: "Kommunikation, dokumentation og relevante oplysninger følger den samme profil gennem hele pasningsforløbet.",
                  },
                ].map((f) => (
                  <li key={f.title} className="flex items-start gap-5">
                    <span aria-hidden className="mt-2 h-px w-6 shrink-0 bg-accent" />
                    <div>
                      <h3 className="font-serif text-lg font-light italic text-foreground md:text-xl">
                        {f.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm font-light leading-relaxed text-foreground/70">
                        {f.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-14 flex flex-wrap gap-4">
                <Link
                  to="/product"
                  className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-[11px] tracking-[0.25em] text-background transition hover:bg-accent"
                >
                  SØG PASNING
                </Link>
                <Link
                  to="/b2b"
                  className="inline-flex items-center rounded-full border border-border px-6 py-3 text-[11px] tracking-[0.25em] text-foreground transition hover:border-accent hover:text-accent"
                >
                  BLIV PASSER
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* FUNKTIONER, 6 KERNEEGENSKABER */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 items-end gap-6 pb-16">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
                FUNKTIONER, N°06 / KERNEN
              </p>
              <h2 className="font-serif mt-8 text-4xl font-light leading-[0.95] tracking-tight md:text-6xl">
                Alt det vigtige <span className="italic text-accent">samlet ét sted.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="max-w-sm text-sm font-light leading-relaxed text-foreground/75 md:ml-auto">
                Seks gennemtænkte funktioner udviklet til identitet, dokumentation og tryghed gennem hele dyrets liv.
              </p>
              <div className="mt-8 h-px w-12 bg-border md:ml-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                tag: "IDENTITET",
                title: "Verificeret profil",
                body: "En sikker digital profil med identitet, ejerskab og vigtige oplysninger, dyrets digitale pas.",
              },
              {
                tag: "JOURNAL",
                title: "Sundhedstidslinje",
                body: "Vaccinationer, behandlinger og vigtige helbredshændelser samlet i én enkel tidslinje med påmindelser.",
              },
              {
                tag: "DOKUMENTER",
                title: "Samlet dokumentation",
                body: "Attester, rejsedokumenter, indtagsskemaer og bilag opbevaret ét sted.",
              },
              {
                tag: "DELING",
                title: "QR- og linkverificering",
                body: "Del adgang til vigtige oplysninger med klinik, pasning eller hjælper, enkelt og kontrolleret.",
              },
              {
                tag: "REJSE",
                title: "Rejsedokumentation",
                body: "Rejserelaterede oplysninger og dokumenter samlet til enklere bevægelse på tværs af europæiske lande.",
              },
              {
                tag: "ADGANG",
                title: "Adgangskontrol",
                body: "Samtykke-baseret deling, historik og rolleadgang, ejeren bestemmer, hvem der ser hvad.",
              },
              {
                tag: "ONLINE VET",
                title: "Online dyrlæge",
                body: "Hurtig adgang til en dyrlæge via video eller chat, med dyrets profil og journal som udgangspunkt for samtalen.",
              },
            ].map((f) => (
              <article key={f.tag} className="bg-background p-10 md:p-12">
                <span className="text-[10px] tracking-[0.35em] text-accent">
                  {f.tag}
                </span>
                <h3 className="font-serif mt-6 text-2xl font-light leading-tight md:text-3xl">
                  {f.title}
                </h3>
                <p className="mt-6 text-sm font-light leading-relaxed text-foreground/75">
                  {f.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OPLEVELSEN, DET LEVENDE ID */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
              OPLEVELSEN, N°07 / ET LEVENDE ID
            </p>
            <h2 className="font-serif mt-8 text-4xl font-light leading-[1.0] md:text-5xl lg:text-6xl">
              En digital identitet, der <span className="italic text-accent">følger dyret</span> gennem livet.
            </h2>
            <p className="mt-10 max-w-md text-sm font-light leading-relaxed text-foreground/75">
              Interaktiv, verificerbar og altid opdateret. Et enkelt sted at vende tilbage til, fra første scan til sidste rejse.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7">
            <ul className="grid grid-cols-1 gap-px bg-border sm:grid-cols-1">
              {[
                ["Samlet profilvisning", "Identitet, journal, verificering og dokumenter set i ét roligt overblik."],
                ["Enkel navigation", "Bevæg dig mellem helbred, dokumenter, services og aktivitet uden friktion."],
                ["Bygget til at vokse", "Udviklet til at følge den europæiske udvikling og udvide sig over tid."],
              ].map(([k, v]) => (
                <li key={k} className="bg-background p-8 md:p-10">
                  <p className="font-serif text-xl font-light italic text-foreground">
                    {k}
                  </p>
                  <p className="mt-3 text-sm font-light leading-relaxed text-foreground/70">
                    {v}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <WaitlistCTA />

      <SiteFooter />
    </main>
  );
}
