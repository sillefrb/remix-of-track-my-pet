import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/market")({
  head: () => ({
    meta: [
      { title: "Marked, Track My Pet" },
      {
        name: "description",
        content:
          "198 millioner hunde og katte i Europa. Internationale løsninger viser, hvordan en samlet løsning til kæledyrsidentitet kan se ud.",
      },
      { property: "og:title", content: "Marked, Track My Pet" },
      { property: "og:description", content: "108 millioner katte og 90 millioner hunde i Europa." },
    ],
  }),
  component: MarketPage,
});

const analogies = [
  { name: "Stripe", layer: "ovenpå betalinger" },
  { name: "Shopify", layer: "ovenpå e-commerce" },
  { name: "AirHelp", layer: "ovenpå flyrettigheder" },
  { name: "MitID", layer: "ovenpå digital identitet" },
  { name: "Track My Pet", layer: "udviklet til moderne kæledyrsidentitet" },
];

const revenueAreas: { title: string; body: string; type: "no" | "yes" }[] = [
  { type: "no", title: "Uden for fokus", body: "Selve tagget. Chippen. Engangssalget. Det fysiske bliver hurtigt en standardvare." },
  { type: "yes", title: "Løbende adgang", body: "Premium digital profil med dokumenter, påmindelser og familieadgang." },
  { type: "yes", title: "Forsikringssamarbejder", body: "Verificeret identitet og sundhedsoplysninger gør forsikring enklere og mere præcis." },
  { type: "yes", title: "Verificeret identitet", body: "Tillid mellem ejer, dyrlæge, pasning og myndigheder." },
  { type: "yes", title: "Samlet dokumentation", body: "Vaccination, pas, medicin og historik, samlet ét sted." },
  { type: "yes", title: "Løbende funktioner", body: "Rejsedokumentation, ejerskifte, akutadgang og dyrlægehistorik." },
  { type: "yes", title: "Anonymiseret indsigt", body: "Anonymiseret og samtykke-baseret indsigt om sundhed, hverdag og adfærd, værdifuldt for forsikring, dyrlæger og forskning. Ejeren beholder kontrollen." },
];

const winners = ["Track My Pet", "Samlet dokumentation", "Rejsedokumentation"];

export function MarketPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* MARKET SIZE */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[10px] tracking-[0.45em] text-muted-foreground">III, MARKET · EUROPA 2023</p>
              <h1 className="font-serif mt-8 text-4xl font-light leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
                198 millioner <span className="italic text-accent">hunde og katte</span> i Europa.
              </h1>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="max-w-sm text-sm font-light leading-relaxed text-foreground/75 md:ml-auto">
                Europæisk bestand af hunde og katte. Målgruppen for en samlet løsning til kæledyrsidentitet. Kilde: FEDIAF 2025.
              </p>
              <div className="mt-8 h-px w-12 bg-border md:ml-auto" />
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            <div className="bg-card p-10 md:p-14">
              <p className="text-[10px] tracking-[0.4em] text-muted-foreground">N°01, KATTE</p>
              <p className="font-serif mt-8 text-6xl font-light leading-none tracking-tight md:text-8xl">
                108<span className="text-accent">M</span>
              </p>
              <p className="mt-6 text-xs font-light tracking-[0.2em] text-foreground/70">FELIS CATUS · EU</p>
              <div className="mt-10 h-1 w-full bg-border">
                <div className="h-full bg-accent" style={{ width: `${(108 / 198) * 100}%` }} />
              </div>
              <p className="mt-3 text-[10px] tracking-[0.3em] text-muted-foreground">54.5% AF BESTANDEN</p>
              <div className="mt-10 grid grid-cols-12 gap-[3px]">
                {Array.from({ length: 108 }).map((_, i) => (
                  <span key={`c-${i}`} className="h-[6px] w-[6px] rounded-full bg-accent/80" />
                ))}
              </div>
            </div>

            <div className="bg-card p-10 md:p-14">
              <p className="text-[10px] tracking-[0.4em] text-muted-foreground">N°02, HUNDE</p>
              <p className="font-serif mt-8 text-6xl font-light leading-none tracking-tight md:text-8xl">
                90<span className="text-accent">M</span>
              </p>
              <p className="mt-6 text-xs font-light tracking-[0.2em] text-foreground/70">CANIS FAMILIARIS · EU</p>
              <div className="mt-10 h-1 w-full bg-border">
                <div className="h-full bg-foreground" style={{ width: `${(90 / 198) * 100}%` }} />
              </div>
              <p className="mt-3 text-[10px] tracking-[0.3em] text-muted-foreground">45.5% AF BESTANDEN</p>
              <div className="mt-10 grid grid-cols-12 gap-[3px]">
                {Array.from({ length: 90 }).map((_, i) => (
                  <span key={`d-${i}`} className="h-[6px] w-[6px] rounded-full bg-foreground/80" />
                ))}
              </div>
            </div>

            <div className="bg-background p-10 md:p-14">
              <p className="text-[10px] tracking-[0.4em] text-muted-foreground">N°03, TOTAL</p>
              <p className="font-serif mt-8 text-6xl font-light leading-none tracking-tight md:text-8xl">
                198<span className="text-accent">M</span>
              </p>
              <p className="mt-6 text-xs font-light tracking-[0.2em] text-foreground/70">ADRESSERBAR MÅLGRUPPE · EU</p>
              <div className="mt-10 flex h-1 w-full overflow-hidden">
                <div className="h-full bg-accent" style={{ width: `${(108 / 198) * 100}%` }} />
                <div className="h-full bg-foreground" style={{ width: `${(90 / 198) * 100}%` }} />
              </div>
              <div className="mt-3 flex justify-between text-[10px] tracking-[0.3em] text-muted-foreground">
                <span>KATTE</span><span>HUNDE</span>
              </div>
              <p className="mt-10 font-serif text-base font-light italic leading-relaxed text-foreground/85">
                Én prik = én million dyr = én million mulige verificerede profiler.
              </p>
              <p className="mt-6 text-[10px] tracking-[0.35em] text-muted-foreground">
                KILDE, FEDIAF FACTS &amp; FIGURES 2025 (DATA: 2023)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REFERENCE MODEL */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">INTERNATIONALE LØSNINGER</p>
          <h2 className="font-serif mt-6 max-w-3xl text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
            Et eksisterende produkt viser præcis,{" "}
            <span className="italic text-accent">hvordan løsningen kan se ud.</span>
          </h2>
          <p className="mt-8 max-w-3xl text-sm font-light leading-relaxed text-foreground/75">
            Et tilsvarende produkt er allerede bygget internationalt under navnet <span className="italic">The Identity Layer for Pets</span>. Samme arkitektur. Samme målgrupper. Samme prisstruktur.
          </p>

          <div className="mt-20 grid gap-px bg-border md:grid-cols-2">
            <div className="bg-background p-10">
              <p className="text-[10px] tracking-[0.35em] text-muted-foreground">HVAD PRODUKTET ER</p>
              <h3 className="font-serif mt-6 text-2xl font-light italic leading-snug">En digital løsning til kæledyrsidentitet</h3>
              <p className="mt-6 text-sm font-light leading-relaxed text-foreground/75">
                Ejerskab, journal, dokumenter og historik samlet i ét verificeret system. Ét samlet sted, ejere, dyrlæger, klinikker, internater og relevante funktioner trækker på samme oplysninger.
              </p>
            </div>
            <div className="bg-background p-10">
              <p className="text-[10px] tracking-[0.35em] text-muted-foreground">KERNEPROPOSITION</p>
              <h3 className="font-serif mt-6 text-2xl font-light italic leading-snug">Verified Pet Profiles · Secure Records · Real-Time Access</h3>
              <p className="mt-6 text-sm font-light leading-relaxed text-foreground/75">
                Verificerede profiler · sikre journaler · hurtig adgang · deling efter samtykke. Ét sted, mange parter, samme oplysninger.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">FIRE PARTER, ÉT SAMLET STED</p>
            <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
              {[
                ["Pet Owners", "Administrer dyrets identitet, journal og dokumenter sikkert ét sted."],
                ["Vets & Clinics", "Adgang til verificerede profiler, opdater journaler, reducér administrativ overhead."],
                ["Shelters & Rescues", "Verificerede profiler på tværs af intake, pleje og adoption."],
                ["Services & Travel", "Verificér pet-information hurtigere, streamline onboarding."],
              ].map(([k, v]) => (
                <div key={k} className="bg-background p-8">
                  <h4 className="font-serif text-xl font-light italic">{k}</h4>
                  <p className="mt-4 text-xs font-light leading-relaxed text-foreground/70">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 border-t border-border pt-16">
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">IMPLIKATIONEN</p>
            <h3 className="font-serif mt-6 max-w-4xl text-3xl font-light italic leading-tight md:text-4xl">
              Spørgsmålet er ikke længere <span className="text-accent">om</span> en samlet løsning bliver bygget, men hvem der bygger den i Norden med den rette omtanke.
            </h3>
            <p className="mt-8 max-w-3xl text-sm font-light leading-relaxed text-foreground/75">
              Modellen er allerede vist internationalt. Vi har den europæiske udvikling, det danske kliniknetværk og et sprog, som internationale aktører ikke taler. Tiden er den rette.
            </p>
          </div>
        </div>
      </section>

      {/* ANALOGIES */}
      <section className="bg-card">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">PARALLELLER</p>
          <h2 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl">
            Hver gang regulering samler identitet, opstår der et nyt forbrugervendt produkt.
          </h2>
          <ul className="mt-16 border-t border-border">
            {analogies.map((a) => (
              <li key={a.name} className={`flex items-baseline justify-between border-b border-border py-6 ${a.name === "Track My Pet" ? "bg-background px-6" : ""}`}>
                <span className={`font-serif text-2xl font-light md:text-3xl ${a.name === "Track My Pet" ? "italic text-accent" : ""}`}>{a.name}</span>
                <span className="text-xs font-light tracking-wide text-muted-foreground sm:text-sm">{a.layer}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* REVENUE */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="text-center">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">HVOR ER PENGENE?</p>
          <h2 className="font-serif mt-6 text-4xl font-light md:text-5xl">Værdien ligger i relationen, ikke i hardwaren.</h2>
          <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
            Det fysiske produkt er udgangspunktet. Værdien ligger i løbende adgang, samarbejder og samlet dokumentation gennem hele dyrets liv.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {revenueAreas.map((r) => (
            <div key={r.title} className="flex flex-col bg-background p-8 sm:p-10">
              <span className={`text-[10px] tracking-[0.35em] ${r.type === "yes" ? "text-accent" : "text-muted-foreground"}`}>
                {r.type === "yes" ? "VÆRDI" : "IKKE HER"}
              </span>
              <h3 className="font-serif mt-4 text-2xl font-light md:text-3xl">{r.title}</h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-foreground/70">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BIG DATA */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-5">
              <p className="text-[10px] tracking-[0.45em] text-muted-foreground">SAMLET INDSIGT</p>
              <h2 className="font-serif mt-8 text-4xl font-light leading-[1.0] md:text-5xl lg:text-6xl">
                Hver relation skaber <span className="italic text-accent">samlet indsigt.</span>
              </h2>
              <p className="mt-8 max-w-md text-sm font-light leading-relaxed text-foreground/75">
                198 millioner digitale profiler giver et samlet billede af kæledyrenes hverdag. Sundhed, vaccination, livsfaser og rejser, på tværs af europæiske lande, racer og aldre.
              </p>
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
                Aggregeret, anonymiseret og samtykke-baseret. Ejeren beholder kontrollen.
              </p>
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
                {[
                  { tag: "FORSIKRING", body: "Risikomodeller baseret på reelle sundheds- og adfærdsdata frem for skøn." },
                  { tag: "FODER & FARMA", body: "Indsigt i livsfaser, allergier og produktforbrug på tværs af markeder." },
                  { tag: "DYRLÆGER", body: "Benchmark, populationssundhed og tidlig opsporing af sygdomsmønstre." },
                  { tag: "MYNDIGHEDER", body: "Realtidsbillede af bestand, vaccinationsdækning og smittespredning." },
                  { tag: "FORSKNING", body: "Et europæisk longitudinelt datasæt om kæledyrs sundhed og levealder." },
                  { tag: "PRODUKTER OG FUNKTIONER", body: "Forbrugsmønstre, geografi og loyalitet til segmentering og produktudvikling." },
                ].map((d) => (
                  <div key={d.tag} className="bg-background p-8">
                    <span className="text-[10px] tracking-[0.35em] text-accent">{d.tag}</span>
                    <p className="mt-4 text-sm font-light leading-relaxed text-foreground/80">{d.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-[11px] tracking-[0.25em] text-muted-foreground">
                GDPR-compliant · ejer-samtykke · anonymiseret aggregering
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WINNERS */}
      <section className="bg-card">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="text-center">
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">DE TRE STÆRKESTE</p>
            <h2 className="font-serif mt-6 text-4xl font-light md:text-5xl">Hvor vi starter</h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            {winners.map((w, i) => (
              <div key={w} className="flex flex-col items-center text-center">
                <span className="font-serif text-xs italic text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <div className="mt-4 h-px w-8 bg-border" />
                <h3 className="font-serif mt-6 text-3xl font-light">{w}</h3>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-20 max-w-2xl text-center">
            <p className="text-base font-light leading-relaxed text-foreground/80">
              Tre dele. Hver enkel nok til at stå alene. Tilsammen fundamentet for en samlet løsning til kæledyrsidentitet i Europa.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">NÆSTE</p>
          <h2 className="font-serif mt-6 text-3xl font-light italic leading-snug md:text-4xl">
            Hvad koster det, og hvor betaler markedet allerede?
          </h2>
          <Link to="/pricing" className="mt-10 inline-block rounded-full bg-foreground px-8 py-3 text-[11px] tracking-[0.25em] text-background hover:bg-accent">
            SE PRISMODELLEN
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
