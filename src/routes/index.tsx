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
          "Et premium consumer operating system ovenpå EU's nye traceability-infrastruktur for hunde og katte.",
      },
      { property: "og:title", content: "Track My Pet — Forretningscase" },
      {
        property: "og:description",
        content:
          "Et premium consumer operating system ovenpå EU's nye traceability-infrastruktur.",
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
    title: "Det premium fysisk-digitale lag.",
    body: "Tag, kort og folder koblet til en verificeret digital profil. Onboarding på under et minut. Pas, vaccination, rejse og emergency — i ét.",
    img: skaterImg,
  },
  {
    to: "/vision",
    no: "II",
    label: "VISION",
    title: "Chippen er råvaren. Laget ovenpå er værdien.",
    body: "Det er det digitale infrastrukturlag ovenpå. Vi forventer, at branding, tillid og økosystempartnerskaber bliver vigtigere end teknologien selv.",
    img: documentImg,
  },
  {
    to: "/market",
    no: "III",
    label: "MARKED",
    title: "198 millioner relationer venter på at blive forbundet.",
    body: "108 mio. katte og 90 mio. hunde i Europa. En international referencemodel har allerede valideret arkitektur, prismodel og målgruppesegmentering.",
    img: catImg,
  },
  {
    to: "/pricing",
    no: "IV",
    label: "PRICING",
    title: "Free → Plus → Pro → Lifetime.",
    body: "Tre tiers af klinik. To tiers af partner-API. Ingen hypotese — en prisstruktur, markedet allerede betaler.",
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
        </div>
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
                Kritisk information om dit kæledyr ligger{" "}
                <span className="italic text-accent">spredt overalt.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="max-w-sm text-sm font-light leading-relaxed text-foreground/75 md:ml-auto">
                Millioner af hunde- og katteejere i Europa håndterer stadig
                vaccinationskort, forsikringspolicer, pas, journal,
                nødkontakter, medicin, rejsedokumenter og pasningsinstrukser
                manuelt — spredt på papir, i mails, mapper, apps og
                dyrlægesystemer uden et samlet lag.
              </p>
              <div className="mt-8 h-px w-12 bg-border md:ml-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {[
              {
                tag: "FRAGMENTERING",
                title: "Otte systemer pr. dyr",
                body: "Dyrlæge, forsikring, pas, microchip-register, foderabonnement, pasningsapp, rejseattest, mails. Intet taler sammen.",
              },
              {
                tag: "EU-UDVIKLING",
                title: "En fælles europæisk udvikling er i gang",
                body: "En fælles europæisk udvikling inden for kæledyrsidentitet, registrering og dokumentation er i gang. Mikrochip, registrering og verificerbare oplysninger får en stadig større rolle på tværs af Europa.",
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
              Teknologien er midlet.{" "}
              <span className="italic text-accent">Kombinationen er styrken.</span>
            </h2>
            <p className="mt-10 max-w-md text-sm font-light leading-relaxed text-foreground/75">
              Brugeren skal forstå værdien på få sekunder. Umiddelbar. Klar.
              Renset for støj. Simpliciteten er en del af
              produktværdien.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7">
            <ul className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
              {[
                ["Et simpelt fysisk produkt", "Forklarer sig selv på 3 sekunder."],
                ["Høj følelsesmæssig relevans", "Tryghed for det dyr man elsker."],
                ["Ekstremt lav friktion", "Scan → aktivér → forbundet."],
                ["Abonnementsbaserede services", "Recurring revenue fra dag ét."],
                ["Langsigtet dataejerskab", "Ejeren ejer profilen — vi ejer relationen."],
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
            {["Tryghed", "Sikkerhed", "Kontrol", "Ansvar", "Overblik", "Bekvemmelighed"].map(
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
            høj i kæledyrsmarkedet. Vores rolle er at omsætte den til et
            produkt, der opleves uundværligt.
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
            kæledyr er en af de mest loyale og værdifulde, vi har.
            Produktet er udviklet til at beskytte, understøtte og følge dyret
            gennem livet med fokus på tryghed, kvalitet og gennemtænkte
            funktioner — uden støj, overdesign eller unødvendig kompleksitet.
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
                Glem platformen.<br />
                Start med ét objekt, folk føler de burde have.
              </h2>
              <div className="mt-10 h-px w-12 bg-border" />
              <p className="mt-10 max-w-md text-sm font-light leading-relaxed text-foreground/80">
                Vi ønsker at bygge anderledes end de fleste startups. I stedet for at lancere hele økosystemet på dag ét, ønsker vi at starte med ét fysisk objekt, der forklarer sig selv på 3 sekunder — og lade resten vokse ud af relationen bagefter.
              </p>
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
                Vi ønsker ingen super-app, ingen AI og ingen markedsplads fra dag ét. Vi ønsker ét simpelt fysisk produkt, som folk intuitivt forstår, og som åbner døren til et abonnement, et datalag og på sigt det forbrugervendte lag ovenpå EU's pet-infrastruktur.
              </p>
            </div>

            <div className="col-span-12 md:col-span-7">
              <ol className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
                {[
                  { step: "01", tag: "OBJEKT", title: "Det fysiske tag", body: "Smukt, taktilt, gaveværdigt. Sælges som et objekt, ejes som et arvestykke. Kunden forstår det med det samme." },
                  { step: "02", tag: "RELATION", title: "Den digitale profil", body: "Tagget aktiverer en konto. Dokumenter, vaccination, reminders, family sharing. Subscription begynder her." },
                  { step: "03", tag: "DATALAG", title: "Aggregeret indsigt", body: "Sundhed, adfærd, geografi og forbrug — anonymiseret og samtykke-baseret. Værdi for forsikring, foder, farma og forskning." },
                  { step: "04", tag: "INFRASTRUKTUR", title: "Forbrugerlaget ovenpå EU", body: "Når EU's chipkrav ruller ud, ligger vi som det forbrugervendte lag mellem ejer, dyrlæge, myndigheder og services." },
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
                Hvis et dyr bliver væk, kommer til skade eller har brug for akut hjælp, skal vigtig information være let tilgængelig. Identitet, kontaktoplysninger og dokumentation samlet ét sted — udviklet til hurtigere handling og mere ro i sindet.
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
                title: "Forbindelse til relevante parter",
                body: "Udviklet til at kunne integreres med dyrlæger, akutklinikker og dyreværn — så hjælpen er enkel at finde, når det betyder noget.",
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

      <WaitlistCTA />

      <SiteFooter />
    </main>
  );
}
