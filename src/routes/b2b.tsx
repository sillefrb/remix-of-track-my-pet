import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WaitlistCTA } from "@/components/WaitlistCTA";

export const Route = createFileRoute("/b2b")({
  head: () => ({
    meta: [
      { title: "Track My Pet — Pilotprojekt med dyrlæger" },
      {
        name: "description",
        content:
          "Et samarbejde om at udvikle en samlet løsning til identitet, dokumentation og tryghed omkring kæledyr — afprøvet i klinisk hverdag.",
      },
      { property: "og:title", content: "Track My Pet — Pilotprojekt for dyrlæger" },
      {
        property: "og:description",
        content:
          "Inviterer dyrlæger og klinikker til et pilotsamarbejde om en moderne identitets- og dokumentationsløsning.",
      },
    ],
  }),
  component: B2BPage,
});

function B2BPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
            B2B — PILOTPROJEKT MED DYRLÆGER
          </p>
          <h1 className="font-serif mt-8 text-4xl font-light leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Et samarbejde om{" "}
            <span className="italic text-accent">moderne kæledyrsejerskab.</span>
          </h1>
          <p className="mx-auto mt-10 max-w-xl text-sm font-light leading-relaxed text-foreground/75">
            Vi inviterer udvalgte dyrlæger og klinikker til at udvikle og afprøve
            en samlet løsning til identitet, dokumentation og tryghed omkring
            kæledyr — sammen med os, i klinisk hverdag.
          </p>
        </div>
      </section>

      {/* HVORFOR */}
      <section className="bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 items-end gap-6 pb-16">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
                BAGGRUND — N°01 / HVORFOR NU
              </p>
              <h2 className="font-serif mt-8 text-4xl font-light leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
                Dyrlægen står{" "}
                <span className="italic text-accent">tættest på dyret.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="max-w-sm text-sm font-light leading-relaxed text-foreground/75 md:ml-auto">
                Et samlet identitets- og dokumentationsprodukt giver kun værdi,
                hvis det fungerer i den hverdag, hvor dyret og ejeren rent
                faktisk møder fagligheden. Derfor begynder vi hos dyrlægen.
              </p>
              <div className="mt-8 h-px w-12 bg-border md:ml-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {[
              {
                tag: "FAGLIGHED",
                title: "Bygget med dyrlæger, ikke kun for dem",
                body: "Vi vil udvikle produktet i tæt dialog med de fagfolk, der bruger det — så det giver mening i konsultation, journalføring og daglig drift.",
              },
              {
                tag: "HVERDAG",
                title: "Afprøvet i rigtige situationer",
                body: "Vaccination, kontrol, akutbesøg, rejseattester, henvisninger. Pilotprojektet handler om at se, hvor produktet skaber værdi — og hvor det skal justeres.",
              },
              {
                tag: "LANGSIGTET",
                title: "En relation, ikke en leverance",
                body: "Vi søger samarbejdspartnere, der ser potentialet i en samlet løsning til identitet og dokumentation — og som vil være med fra begyndelsen.",
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

      {/* HVAD VI TILBYDER + HVAD VI BEDER OM */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          <div className="bg-background p-10 md:p-14">
            <p className="text-[10px] tracking-[0.4em] text-accent">
              HVAD VI TILBYDER
            </p>
            <h2 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl">
              En tidlig plads i udviklingen.
            </h2>
            <ul className="mt-10 space-y-5 text-sm font-light leading-relaxed text-foreground/80">
              {[
                "Gratis adgang til klinikplatformen i hele pilotperioden.",
                "Direkte linje til produktteamet — input bliver hørt og prioriteret.",
                "Mulighed for at præge funktioner, arbejdsgange og dokumentation.",
                "Tidligt navn på listen over anbefalede klinikker, når produktet lanceres.",
                "Et fysisk startsæt med tag, kort og folder til klinikkens egen brug.",
              ].map((t) => (
                <li key={t} className="flex items-baseline gap-3">
                  <span className="mt-1 h-px w-3 shrink-0 bg-accent" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background p-10 md:p-14">
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">
              HVAD VI BEDER OM
            </p>
            <h2 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl">
              Tid, ærlighed og hverdagsindsigt.
            </h2>
            <ul className="mt-10 space-y-5 text-sm font-light leading-relaxed text-foreground/80">
              {[
                "Afprøv produktet i jeres egen klinik over en aftalt periode.",
                "Tilbyd profilen til relevante kunder — fx ved vaccination eller første besøg.",
                "Del jeres oplevelse: hvad fungerer, hvad støjer, hvad mangler.",
                "Et kort månedligt samtalemøde med produktteamet.",
                "Lov til at bruge jeres erfaring som reference, hvis I ønsker det.",
              ].map((t) => (
                <li key={t} className="flex items-baseline gap-3">
                  <span className="mt-1 h-px w-3 shrink-0 bg-border" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FORLØB */}
      <section className="bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 items-end gap-6 pb-16">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[10px] tracking-[0.45em] text-muted-foreground">
                FORLØB — N°02 / SÅDAN ARBEJDER VI SAMMEN
              </p>
              <h2 className="font-serif mt-8 text-4xl font-light leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
                Et roligt forløb i{" "}
                <span className="italic text-accent">fire faser.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="max-w-sm text-sm font-light leading-relaxed text-foreground/75 md:ml-auto">
                Forløbet er tilpasset klinisk hverdag — ingen unødig
                tidsbelastning, ingen pres. Vi tilpasser tempoet til jeres drift.
              </p>
              <div className="mt-8 h-px w-12 bg-border md:ml-auto" />
            </div>
          </div>

          <ol className="grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                tag: "INTRODUKTION",
                title: "Samtale og afstemning",
                body: "Vi mødes, lytter til jeres hverdag og afstemmer, hvordan et samarbejde bedst kan se ud.",
              },
              {
                step: "02",
                tag: "OPSÆTNING",
                title: "Klinikken på plads",
                body: "Vi opretter klinikprofil, gennemgår funktioner og gør jer klar til at bruge produktet i hverdagen.",
              },
              {
                step: "03",
                tag: "AFPRØVNING",
                title: "8–12 ugers pilotforløb",
                body: "Produktet bruges i konsultationer, journalføring og kundedialog. Vi følger med og justerer løbende.",
              },
              {
                step: "04",
                tag: "EVALUERING",
                title: "Læring og næste skridt",
                body: "Vi samler op på erfaringer og beslutter sammen, hvordan samarbejdet skal fortsætte efter piloten.",
              },
            ].map((s) => (
              <li key={s.step} className="bg-background p-8 md:p-10">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-sm italic text-muted-foreground">
                    {s.step}
                  </span>
                  <span className="text-[10px] tracking-[0.35em] text-accent">
                    {s.tag}
                  </span>
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
        </div>
      </section>

      {/* HVEM VI SØGER */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
        <p className="text-[10px] tracking-[0.4em] text-muted-foreground">
          PROFIL — N°03 / HVEM VI SØGER
        </p>
        <h2 className="font-serif mx-auto mt-8 max-w-3xl text-3xl font-light italic leading-snug md:text-5xl">
          Klinikker med omsorg, fagligt overskud og lyst til at være med fra begyndelsen.
        </h2>
        <p className="mx-auto mt-10 max-w-xl text-sm font-light leading-relaxed text-foreground/75">
          Vi søger 5–10 danske klinikker — smådyrspraksisser, dyrehospitaler
          eller specialklinikker — der gerne vil være med til at forme et
          produkt, der følger dyret gennem livet.
        </p>
      </section>

      {/* KONTAKT CTA */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">
            KONTAKT — TIDLIG PILOT
          </p>
          <h2 className="font-serif mt-8 text-3xl font-light leading-tight md:text-5xl">
            Skal jeres klinik være med?
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm font-light leading-relaxed text-foreground/75">
            Skriv kort om jeres klinik, jeres hverdag og hvad der trækker jer
            til samarbejdet — så vender vi tilbage med en samtale.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-[11px] tracking-[0.25em]">
            <a
              href="mailto:pilot@trackmypet.dk?subject=Pilotsamarbejde%20—%20dyrlæger"
              className="rounded-full bg-foreground px-6 py-3 text-background transition hover:bg-accent"
            >
              SKRIV TIL OS
            </a>
            <Link
              to="/pricing"
              className="rounded-full border border-border px-6 py-3 text-foreground transition hover:border-accent hover:text-accent"
            >
              SE KLINIKPAKKER
            </Link>
          </div>
          <p className="mt-8 text-[10px] tracking-[0.3em] text-muted-foreground">
            PILOT@TRACKMYPET.DK
          </p>
        </div>
      </section>

      <WaitlistCTA
        eyebrow="VENTELISTE — KLINIKKER OG SAMARBEJDSPARTNERE"
        title="Vær blandt de første klinikker, der får adgang til pilotforløbet."
        body="Tidlige partnere får direkte indflydelse på produktets udvikling og en plads blandt de første anbefalede klinikker."
      />

      <SiteFooter />
    </main>
  );
}
