import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/dogpass-hero.jpg";
import catImg from "@/assets/dogpass-cat.jpg";
import catEditorialImg from "@/assets/dogpass-cat-editorial.jpg";
import skaterImg from "@/assets/dogpass-aktiv-skater.jpg";
import documentImg from "@/assets/dogpass-document.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WaitlistCTA } from "@/components/WaitlistCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Track My Pet — Forretningscase" },
      {
        name: "description",
        content:
          "Et samlet produkt til identitet, dokumentation og tryghed gennem hele dyrets liv. Et fysisk tag og en digital profil samlet ét sted.",
      },
      { property: "og:title", content: "Track My Pet — Forretningscase" },
      {
        property: "og:description",
        content:
          "En samlet løsning til identitet og dokumentation — udviklet til moderne kæledyrsejerskab.",
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
    body: "Tag, kort og folder koblet til en verificeret digital profil. Opsætning på under ét minut. Pas, vaccinationer, rejser og nødinformation — i ét.",
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

      {/* HERO — full-bleed editorial */}
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
              IN LOVE WITH ANIMALS — JOIN THE PACK
            </p>
            <h1 className="font-serif mt-6 text-5xl font-light leading-[1] tracking-tight text-background sm:text-7xl md:text-8xl lg:text-[9rem]">
              Track My Pet
            </h1>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 pt-20 pb-8 text-center md:pt-28">
          <p className="font-serif text-2xl font-light italic leading-snug text-foreground sm:text-3xl md:text-4xl">
            Fra pas til digital identitet.
          </p>
          <p className="mx-auto mt-10 max-w-xl text-sm font-light leading-relaxed text-foreground/70">
            Et samlet produkt til identitet, dokumentation og tryghed gennem
            hele dyrets liv. Et fysisk tag og en digital profil — samlet ét sted.
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

      {/* SÅDAN FUNGERER DET — 3 TRIN */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-12 items-end gap-6 pb-16">
          <div className="col-span-12 md:col-span-7">
            <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
              SÅDAN FUNGERER DET — N°0A / TRE TRIN
            </p>
            <h2 className="font-serif mt-8 text-4xl font-light leading-[0.95] tracking-tight md:text-6xl">
              Enkel at komme i gang. <span className="italic text-accent">Enkel at bruge.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="max-w-sm text-sm font-light leading-relaxed text-foreground/75 md:ml-auto">
              Tre rolige trin fra fysisk tag til en samlet digital profil — klar til hverdag og uforudsete situationer.
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
              body: "Tilføj billede, identitet og ejeroplysninger. Profilen er udgangspunktet for dyrets digitale identitet.",
            },
            {
              step: "02",
              tag: "SAMLE",
              title: "Saml dokumenter og journal",
              body: "Vaccinationer, journal, rejsedokumenter og vigtige oplysninger samlet ét sted — roligt og struktureret.",
            },
            {
              step: "03",
              tag: "DEL",
              title: "Del sikkert, når det er nødvendigt",
              body: "Giv dyrlæge, klinik, pasning eller rejseudbyder adgang via QR, link eller eksport — kun når du vælger det.",
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

      {/* PROBLEMET */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 items-end gap-6 pb-16">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
                PROBLEMET — N°00 / I DAG
              </p>
              <h2 className="font-serif mt-8 text-4xl font-light leading-[0.95] tracking-tight md:text-6xl">
                Vigtig information om dit kæledyr ligger{" "}
                <span className="italic text-accent">spredt overalt.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="max-w-sm text-sm font-light leading-relaxed text-foreground/75 md:ml-auto">
                Information om kæledyr ligger stadig spredt på tværs af pas, mails, klinikker, forsikringer og registre. Vigtige oplysninger er ofte svære at finde, når de skal bruges hurtigt.
              </p>
              <div className="mt-8 h-px w-12 bg-border md:ml-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {[
              {
                tag: "FRAGMENTERING",
                title: "For mange steder at holde styr på",
                body: "Dyrlæge, forsikring, pas, microchip-register, foderabonnement, pasningsapp, rejseattest, mails. Intet taler sammen.",
              },
              {
                tag: "EU-UDVIKLING",
                title: "En fælles europæisk udvikling er i gang",
                body: "En fælles europæisk udvikling inden for kæledyrsidentitet, registrering og dokumentation er i gang. Mikrochip, registrering og vigtige oplysninger får en stadig større rolle på tværs af europæiske lande.",
              },
              {
                tag: "BEHOVET",
                title: "Behov for en enklere adgang",
                body: "Kæledyrsidentitet bevæger sig gradvist fra fysiske dokumenter til mere sammenhængende digitale løsninger. Det skaber behov for enklere adgang til dokumentation, registrering og identitet samlet ét sted.",
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
              Et produkt der er enkelt at forstå. Enkelt at bruge. Enkelheden er en del af værdien.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7">
            <ul className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
              {[
                ["Et simpelt fysisk produkt", "Forklarer sig selv på 3 sekunder."],
                ["Høj følelsesmæssig relevans", "Tryghed for det dyr man elsker."],
                ["Ekstremt lav friktion", "Scan → aktivér → forbundet."],
                ["Løbende funktioner og adgang", "Adgang der udvikler sig sammen med dyret."],
                ["Langsigtet adgang og dokumentation", "Ejeren ejer profilen. Relationen følger dyret gennem livet."],
                ["Løbende kunderelationer", "Hele dyrets liv — fra første scan til sidste rejse."],
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
            Ro i sindet gennem hele dyrets liv. Samlet ét sted, når det betyder noget.
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
            Den følelsesmæssige tilknytning og betalingsvilligheden er allerede
            høj i kæledyrsmarkedet. Vores rolle er at samle det i et produkt, der skaber tryghed og overblik.
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
            EDITORIAL — N°01 / FELINE
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
            Produktet er udviklet til at beskytte og følge dyret gennem livet med fokus på tryghed, kvalitet og funktioner udviklet med omtanke — uden støj, overdesign eller unødvendig kompleksitet.
          </p>
          <div className="mt-10 h-px w-12 bg-border" />
        </div>
      </section>

      {/* INDEX — fire sider */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-12 items-end gap-6 pb-16">
          <div className="col-span-12 md:col-span-7">
            <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
              INDHOLD — N°00 / FORRETNINGSCASE
            </p>
            <h2 className="font-serif mt-8 text-4xl font-light leading-[0.95] tracking-tight md:text-6xl">
              Casen i fire <span className="italic text-accent">kapitler.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="max-w-sm text-sm font-light leading-relaxed text-foreground/75 md:ml-auto">
              Produkt, vision, marked og prismodel — hver del kan læses og
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

      {/* CONCLUSION — strategi */}
      <section className="bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-5">
              <p className="text-[10px] tracking-[0.45em] text-muted-foreground">STRATEGIEN</p>
              <h2 className="font-serif mt-8 text-4xl font-light italic leading-[1.0] md:text-5xl lg:text-6xl">
                Vi begynder ét sted.<br />
                Med ét objekt, folk føler de burde have.
              </h2>
              <div className="mt-10 h-px w-12 bg-border" />
              <p className="mt-10 max-w-md text-sm font-light leading-relaxed text-foreground/80">
                Vi begynder med ét gennemtænkt fysisk produkt, der forklarer sig selv — og lader resten vokse roligt ud af relationen mellem ejer og dyr.
              </p>
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
                Et enkelt fysisk produkt, som er let at forstå — og som åbner for løbende adgang, dokumentation og en samlet løsning, der følger den europæiske udvikling inden for kæledyrsidentitet.
              </p>
            </div>

            <div className="col-span-12 md:col-span-7">
              <ol className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
                {[
                  { step: "01", tag: "OBJEKT", title: "Det fysiske tag", body: "Smukt, taktilt, gaveværdigt. Sælges som et objekt, ejes som et arvestykke. Kunden forstår det med det samme." },
                  { step: "02", tag: "RELATION", title: "Den digitale profil", body: "Tagget aktiverer en konto. Dokumenter, vaccination, påmindelser, familieadgang. Her samles dokumentation og adgang." },
                  { step: "03", tag: "INDSIGT", title: "Samlet indsigt", body: "Anonymiseret og samtykke-baseret indsigt om sundhed og hverdag. Værdifuldt for forsikring, dyrlæger og forskning — uden at ejeren mister kontrollen." },
                  { step: "04", tag: "EUROPÆISK UDVIKLING", title: "Et samlet produkt til kæledyrsidentitet", body: "I takt med den europæiske udvikling inden for kæledyrsidentitet samler vi adgang og dokumentation mellem ejer, dyrlæge, myndigheder og relevante funktioner." },
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

      {/* HJÆLP — SOS */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 items-end gap-6 pb-16">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
                HJÆLP — N°05 / NÅR DET ER NØDVENDIGT
              </p>
              <h2 className="font-serif mt-8 text-4xl font-light leading-[0.95] tracking-tight md:text-6xl">
                Hjælp, når det <span className="italic text-accent">er nødvendigt.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="max-w-sm text-sm font-light leading-relaxed text-foreground/75 md:ml-auto">
                Hvis et dyr bliver væk, kommer til skade eller har brug for akut hjælp, skal vigtig information være let tilgængelig. Identitet, kontaktoplysninger og dokumentation samlet ét sted — udviklet til hurtigere adgang til vigtig information og mere ro i sindet.
              </p>
              <div className="mt-8 h-px w-12 bg-border md:ml-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {[
              {
                tag: "AKUTPROFIL",
                title: "Vigtig information, hurtigt fundet",
                body: "Navn, alder, mikrochip-ID, allergier, medicin og kontaktoplysninger samlet ét sted — synligt med ét scan.",
              },
              {
                tag: "VI FINDER HUND",
                title: "Når dyret er væk",
                body: "Et scan på taget åbner direkte kontakt til ejeren. Enkel handling for finderen, hurtig forbindelse for ejeren.",
              },
              {
                tag: "HJÆLPETJENESTER",
                title: "Hjælp og kontaktmuligheder",
                body: "Udviklet til at kunne forbindes med dyrlæger, akutklinikker og dyreværn — så hjælpen er enkel at finde, når det betyder noget.",
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

          <p className="mx-auto mt-16 max-w-2xl text-center font-serif text-lg font-light italic leading-snug text-foreground/85 md:text-xl">
            Et produkt udviklet til både hverdag og uforudsete situationer.
          </p>
        </div>
      </section>

      {/* FUNKTIONER — 6 KERNEEGENSKABER */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 items-end gap-6 pb-16">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
                FUNKTIONER — N°06 / KERNEN
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
                body: "En sikker digital profil med identitet, ejerskab og vigtige oplysninger — dyrets digitale pas.",
              },
              {
                tag: "JOURNAL",
                title: "Sundhedstidslinje",
                body: "Vaccinationer, behandlinger og vigtige helbredshændelser samlet i én rolig tidslinje med påmindelser.",
              },
              {
                tag: "DOKUMENTER",
                title: "Samlet dokumentation",
                body: "Attester, rejsedokumenter, indtagsskemaer og bilag opbevaret ét sted.",
              },
              {
                tag: "DELING",
                title: "QR- og linkverificering",
                body: "Del adgang til vigtige oplysninger med klinik, pasning eller hjælper — enkelt og kontrolleret.",
              },
              {
                tag: "REJSE",
                title: "Rejsedokumentation",
                body: "Rejserelaterede oplysninger og dokumenter samlet til roligere bevægelse på tværs af europæiske lande.",
              },
              {
                tag: "ADGANG",
                title: "Adgangskontrol",
                body: "Samtykke-baseret deling, historik og rolleadgang — ejeren bestemmer, hvem der ser hvad.",
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

      {/* OPLEVELSEN — DET LEVENDE ID */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
              OPLEVELSEN — N°07 / ET LEVENDE ID
            </p>
            <h2 className="font-serif mt-8 text-4xl font-light leading-[1.0] md:text-5xl lg:text-6xl">
              En digital identitet, der <span className="italic text-accent">følger dyret</span> gennem livet.
            </h2>
            <p className="mt-10 max-w-md text-sm font-light leading-relaxed text-foreground/75">
              Interaktiv, verificerbar og altid opdateret. Et roligt sted at vende tilbage til — fra første scan til sidste rejse.
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
