import { createFileRoute, Link } from "@tanstack/react-router";
import onboardingImg from "@/assets/dogpass-onboarding.jpg";
import skaterImg from "@/assets/dogpass-aktiv-skater.jpg";
import dachshundImg from "@/assets/dogpass-aktiv-dachshund.jpg";
import toteImg from "@/assets/dogpass-aktiv-tote.jpg";
import clinicImg from "@/assets/dogpass-clinic.jpg";
import documentImg from "@/assets/dogpass-document.jpg";
import walkImg from "@/assets/dogpass-walk.jpg";
import travelImg from "@/assets/dogpass-travel.jpg";
import productsImg from "@/assets/dogpass-products.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Produktet, Track My Pet" },
      {
        name: "description",
        content:
          "Premium tag, kort og folder koblet til en verificeret digital profil. Enkel opsætning. Pas, vaccinationer, rejser og nødinformation samlet ét sted.",
      },
      { property: "og:title", content: "Produktet, Track My Pet" },
      { property: "og:description", content: "Et samlet fysisk og digitalt produkt for ejer og dyr." },
      { property: "og:image", content: skaterImg },
    ],
  }),
  component: ProductPage,
});

const concepts = [
  { no: "01", name: "Track My Pet", tagline: "Fysisk nød-ID + digital identitet", body: "Et gennemtænkt tag udviklet til hverdagen, til halsbånd eller seletøj. Hvis hunden findes, scannes QR eller NFC, og ejeren kontaktes med det samme." },
  { no: "02", name: "Dog Folder", tagline: "Alt om hunden, ét sted", body: "Et fysisk premium kit kombineret med en app. Vaccinepapirer, forsikring, pas, medicin og bookinghistorik samlet ét sted." },
  { no: "03", name: "Emergency Pet Card", tagline: "Hvis der sker dig noget", body: "Et kort til pung eller bil. Hvis ejer kommer ud for en ulykke, ved redningsfolk straks, at der er et dyr alene hjemme." },
  { no: "04", name: "Lost Mode for Dogs", tagline: "NFC bygget til bortløbne hunde", body: "Ren UX omkring NFC og QR: midlertidig sporing, lokal alarm og lokal besked når hunden er væk fra hjemmet." },
  { no: "05", name: "Dokumentarkiv", tagline: "Hele dyrets liv samlet ét sted", body: "Sundhed, dokumenter, pasning, forsikring, billeder, medicin og vaccinationer, med et fysisk udgangspunkt." },
  { no: "06", name: "Rejsedokumentation", tagline: "Krydsning af grænser uden besvær", body: "Et samlet produkt der gør grænsekrydsning enkel, vaccination, ID og dokumenter klar på få sekunder." },
  { no: "07", name: "Trusted Dog Transfer", tagline: "Tryg overdragelse af ejerskab", body: "Et register over sundhed, vaccination, adfærd, ejerskab, skader og forsikring, beskytter både køber og dyr." },
  { no: "08", name: "Forsikring og dokumentation", tagline: "Forsikring bygget på verificerede oplysninger", body: "Når sundhed, identitet og historik allerede er samlet digitalt, bliver forsikring enklere, hurtigere og mere præcis." },
];

export function ProductPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative">
        <figure className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
          <img src={onboardingImg} alt="Ejer opretter sin hund i Track My Pet" className="h-full w-full object-cover" />
          <figcaption className="absolute bottom-6 left-6 text-[10px] tracking-[0.35em] text-background/95 md:bottom-10 md:left-10">
            EDITORIAL, N°02 / ONBOARDING
          </figcaption>
        </figure>
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-8 text-center md:pt-28">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">I, PRODUKTET</p>
          <h1 className="font-serif mt-8 text-4xl font-light leading-tight md:text-6xl lg:text-7xl">
            Det første <span className="italic text-accent">kontaktpunkt.</span>
          </h1>
          <p className="mx-auto mt-10 max-w-xl text-sm font-light leading-relaxed text-foreground/70">
            Premium tag, kort og folder er det første kontaktpunkt med en AI- og databaseret infrastruktur, der samler identitet, dokumentation, sundhedsdata og services gennem hele kæledyrets liv.
          </p>
        </div>
      </section>

      {/* AKTIV CAMPAIGN */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 items-end gap-6 pb-16 md:pb-20">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[10px] tracking-[0.45em] text-muted-foreground">CAMPAIGN, N°03 / AKTIV</p>
              <h2 className="font-serif mt-8 text-5xl font-light leading-[0.95] tracking-tight md:text-7xl lg:text-[7rem]">
                AKTIV.<br /><span className="italic text-accent">Udviklet til</span> hverdagen.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="max-w-sm text-sm font-light leading-relaxed text-foreground/75 md:ml-auto">
                Til byen. Til rejsen. Til hverdagen. Track My Pet følger dyret og ejeren gennem hele livet.
              </p>
              <div className="mt-8 h-px w-12 bg-border md:ml-auto" />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <figure className="col-span-12 md:col-span-8">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={skaterImg} alt="Mand der løber med sin hund" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between text-[10px] tracking-[0.35em] text-muted-foreground">
                <span>TIL BYEN</span><span>01 / 03</span>
              </figcaption>
            </figure>
            <figure className="col-span-12 md:col-span-4">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img src={toteImg} alt="Kvinde med chihuahua i taske" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between text-[10px] tracking-[0.35em] text-muted-foreground">
                <span>TIL REJSEN</span><span>02 / 03</span>
              </figcaption>
            </figure>
            <figure className="col-span-12 md:col-span-5 md:col-start-2">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img src={dachshundImg} alt="Kat ved vandet" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between text-[10px] tracking-[0.35em] text-muted-foreground">
                <span>TIL HVERDAGEN</span><span>03 / 03</span>
              </figcaption>
            </figure>
            <div className="col-span-12 flex flex-col justify-end md:col-span-5 md:pb-6 md:pl-6">
              <p className="text-[10px] tracking-[0.4em] text-accent">AKTIV, MANIFEST</p>
              <p className="font-serif mt-6 text-2xl font-light italic leading-snug md:text-3xl lg:text-4xl">
                Et liv med dyr er fyldt med<br />bevægelse, rejser og hverdage,<br />og dokumenter, der følger<br />med uden besvær.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE AUDIENCES */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-center text-[10px] tracking-[0.4em] text-muted-foreground">
            ÉT SAMLET STED, TRE MÅLGRUPPER
          </p>
          <h2 className="font-serif mx-auto mt-8 max-w-3xl text-center text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
            Produktet <span className="italic text-accent">samler</span> ejer, klinikker og relevante funktioner ét sted.
          </h2>
          <div className="mt-20 grid gap-px bg-border md:grid-cols-3">
            {[
              ["Ejere", "Premium tag og digital profil. Ét sted til vaccination, dokumenter, rejse og nødprofil."],
              ["Klinikker & dyrlæger", "Verificerede profiler, mindre papirarbejde, hurtigere opsætning."],
              ["Rejser og relevante funktioner", "Forsikring, grænse, pension, groomer. Deling af oplysninger via QR."],
            ].map(([k, v], i) => (
              <div key={k} className="bg-card p-10">
                <p className="text-[10px] tracking-[0.35em] text-muted-foreground">N°0{i + 1}</p>
                <h3 className="font-serif mt-6 text-2xl font-light italic md:text-3xl">{k}</h3>
                <p className="mt-6 text-sm font-light leading-relaxed text-foreground/75">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ONBOARDING MOCK */}
      <section className="bg-[#eef9f0]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-16 text-center">
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">PRODUCT MOCK, N°01 / ONBOARDING</p>
            <h2 className="font-serif mx-auto mt-6 max-w-2xl text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
              Fra papir til verificeret profil <span className="italic text-accent">på under et minut.</span>
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <figure className="md:col-span-5">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img src={clinicImg} alt="Dyrlæge der opretter digital profil" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between text-[10px] tracking-[0.35em] text-muted-foreground">
                <span>VERIFICERET HOS KLINIKKEN</span><span>KLINIK</span>
              </figcaption>
            </figure>

            <div className="md:col-span-7">
              <div className="rounded-md border border-emerald-200 bg-emerald-50/60 px-6 py-5 text-center">
                <p className="text-[10px] tracking-[0.4em] text-emerald-700">GRATIS</p>
                <p className="mt-2 font-serif text-xl font-light">Gratis</p>
              </div>

              <div className="mt-6 rounded-md bg-background p-8 shadow-[0_1px_0_rgba(0,0,0,0.04)] md:p-10">
                <p className="text-[10px] tracking-[0.35em] text-muted-foreground">ACCOUNT TYPE</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-md border-2 border-emerald-400 bg-background px-4 py-6 text-center">
                    <span className="block text-xl">🐾</span>
                    <span className="mt-3 block text-sm font-light">Dyreejer</span>
                  </div>
                  <div className="rounded-md border border-border bg-background px-4 py-6 text-center">
                    <span className="block text-xl">🏥</span>
                    <span className="mt-3 block text-sm font-light">Klinik / organisation</span>
                  </div>
                </div>

                <div className="mt-8 space-y-5">
                  {["FULL NAME", "EMAIL"].map((l) => (
                    <div key={l}>
                      <p className="text-[10px] tracking-[0.35em] text-muted-foreground">{l}</p>
                      <div className="mt-3 rounded-md border border-border px-4 py-3 text-sm font-light text-muted-foreground">
                        {l === "EMAIL" ? "you@example.com" : "Your full name"}
                      </div>
                    </div>
                  ))}
                </div>

                <button type="button" className="mt-8 w-full rounded-full bg-emerald-400 px-8 py-4 text-sm font-medium tracking-wide text-foreground transition hover:bg-emerald-500">
                  Opret profil
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENT, editorial duo */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-px bg-border md:grid-cols-12">
          <figure className="bg-background md:col-span-7">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img src={documentImg} alt="Pet passport og digital profil" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <figcaption className="px-6 py-6 text-[10px] tracking-[0.35em] text-muted-foreground">
              EDITORIAL, N°04 / DOKUMENTATION
            </figcaption>
          </figure>
          <div className="flex flex-col justify-center bg-background p-10 md:col-span-5 md:p-14">
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">FRA PAS TIL DIGITAL IDENTITET</p>
            <h2 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl">
              Et samlet produkt til identitet, dokumentation og <span className="italic text-accent">tryghed gennem hele dyrets liv.</span>
            </h2>
            <p className="mt-8 max-w-md text-sm font-light leading-relaxed text-foreground/75">
              Vaccinationer, mikrochip-ID, forsikring, ejerskab og dokumentation samles ét sted. Udviklet til at skabe mere sammenhæng mellem ejer, klinikker og vigtige oplysninger omkring dyret.
            </p>
          </div>
        </div>
      </section>

      {/* SIGHTHOUNDS full-bleed */}
      <section className="mt-px">
        <figure className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
          <img src={walkImg} alt="To salukier i golden hour" loading="lazy" className="h-full w-full object-cover" />
          <figcaption className="absolute bottom-6 left-6 text-[10px] tracking-[0.35em] text-background/95 md:bottom-10 md:left-10">
            EDITORIAL, N°05 / SIGHTHOUNDS
          </figcaption>
        </figure>
      </section>

      {/* TRAVEL editorial */}
      <section className="bg-card">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-px bg-border md:grid-cols-12">
          <div className="flex flex-col justify-center bg-card p-10 md:col-span-5 md:p-14">
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">FIT FOR TRAVEL</p>
            <h2 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl">
              Grænse, tog, hotel, <span className="italic text-accent">klar på få sekunder.</span>
            </h2>
            <p className="mt-8 max-w-md text-sm font-light leading-relaxed text-foreground/75">
              Track My Pet samler vaccination, mikrochip og rejsedokumentation i én profil, ejeren kan dele med et enkelt scan.
            </p>
          </div>
          <figure className="bg-card md:col-span-7">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img src={travelImg} alt="Lille hund i lædertaske på togperron" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <figcaption className="px-6 py-6 text-[10px] tracking-[0.35em] text-muted-foreground">
              EDITORIAL, N°06 / TRAVEL
            </figcaption>
          </figure>
        </div>
      </section>

      {/* PRODUCTS image */}
      <section className="mx-auto max-w-6xl px-6 pt-24">
        <figure className="aspect-[16/9] overflow-hidden bg-muted">
          <img src={productsImg} alt="Premium fysiske produkter" loading="lazy" className="h-full w-full object-cover" />
        </figure>
      </section>

      {/* EMERGENCY PET CARD */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-16 text-center">
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">EMERGENCY PET CARD, N°03</p>
            <h2 className="font-serif mx-auto mt-6 max-w-2xl text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
              Ét scan, og hjælperen ved <span className="italic text-accent">præcis hvad de skal gøre.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-sm font-light leading-relaxed text-foreground/75">
              En nødvisning åbnes direkte i browseren, når QR scannes. Ingen app, ingen login. Nødkontakt, instruktioner og medicininformation er tilgængelige med det samme.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <div className="rounded-md border border-border bg-card p-10 text-center">
                <p className="text-[10px] tracking-[0.4em] text-muted-foreground">SCAN FOR NØDINFO</p>
                <div className="mx-auto mt-8 grid h-44 w-44 grid-cols-8 grid-rows-8 gap-[2px] bg-background p-3">
                  {Array.from({ length: 64 }).map((_, i) => {
                    const filled = [0,1,2,5,6,7,8,15,16,18,19,20,23,24,26,29,30,31,32,33,35,37,38,40,42,45,46,48,51,52,53,56,57,58,61,62,63].includes(i);
                    return <span key={i} className={filled ? "bg-foreground" : "bg-transparent"} />;
                  })}
                </div>
                <p className="font-serif mt-8 text-lg font-light italic">Luna · Border Collie</p>
                <p className="mt-2 text-[10px] tracking-[0.35em] text-muted-foreground">VERIFICERET PROFIL · TMP-04821</p>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="rounded-md border border-border bg-card">
                <div className="flex items-center justify-between border-b border-border px-6 py-4">
                  <span className="text-[10px] tracking-[0.35em] text-accent">NØDVISNING</span>
                  <span className="text-[10px] tracking-[0.35em] text-muted-foreground">tmp.app/e/04821</span>
                </div>

                <div className="space-y-px bg-border">
                  <div className="bg-card p-6">
                    <p className="text-[10px] tracking-[0.35em] text-muted-foreground">NØDKONTAKT, PRIMÆR</p>
                    <p className="font-serif mt-3 text-2xl font-light">Sofie Lindberg</p>
                    <p className="mt-2 text-sm font-light text-foreground/75">Ejer · +45 28 14 92 03</p>
                  </div>
                  <div className="bg-card p-6">
                    <p className="text-[10px] tracking-[0.35em] text-muted-foreground">NØDKONTAKT, SEKUNDÆR</p>
                    <p className="font-serif mt-3 text-xl font-light">Anders Holm · partner</p>
                    <p className="mt-2 text-sm font-light text-foreground/75">+45 41 77 60 18</p>
                  </div>
                  <div className="bg-card p-6">
                    <p className="text-[10px] tracking-[0.35em] text-muted-foreground">INSTRUKTIONER</p>
                    <ul className="mt-3 space-y-2 text-sm font-light leading-relaxed text-foreground/85">
                      <li>· Sky og angst i fremmede omgivelser, tal stille og roligt.</li>
                      <li>· Lad sig håndtere af fremmede med selen påsat.</li>
                      <li>· Ved skade, kontakt Evidensia Frederiksberg, +45 70 20 60 60.</li>
                    </ul>
                  </div>
                  <div className="bg-card p-6">
                    <p className="text-[10px] tracking-[0.35em] text-muted-foreground">MEDICIN OG SUNDHED</p>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <div>
                        <p className="font-serif text-base font-light italic">Apoquel 16 mg</p>
                        <p className="mt-1 text-xs font-light text-foreground/70">1 tablet morgen, mod kløe</p>
                      </div>
                      <div>
                        <p className="font-serif text-base font-light italic">Allergi</p>
                        <p className="mt-1 text-xs font-light text-foreground/70">Penicillin, undgå</p>
                      </div>
                      <div>
                        <p className="font-serif text-base font-light italic">Vaccination</p>
                        <p className="mt-1 text-xs font-light text-foreground/70">DHPPi, gyldig til 03/2027</p>
                      </div>
                      <div>
                        <p className="font-serif text-base font-light italic">Mikrochip</p>
                        <p className="mt-1 text-xs font-light text-foreground/70">208 094 100 482 117</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border px-6 py-4 text-[10px] tracking-[0.35em] text-muted-foreground">
                  ADGANG LOGGET · EJER UNDERRETTET AUTOMATISK
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONCEPTS */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="text-center">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">KONCEPTERNE</p>
          <h2 className="font-serif mt-6 text-4xl font-light md:text-5xl">Otte retninger</h2>
          <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
            Alle bygget omkring ét fysisk objekt med høj oplevet værdi, lav produktionskompleksitet og mulighed for at vokse til et abonnement.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          {concepts.map((c) => (
            <article key={c.no} className="flex flex-col bg-background p-8 sm:p-10 md:p-12">
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-sm italic text-muted-foreground">{c.no}</span>
                <span className="text-[10px] tracking-[0.35em] text-muted-foreground">KONCEPT</span>
              </div>
              <h3 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl">{c.name}</h3>
              <p className="font-serif mt-3 text-base italic text-accent">{c.tagline}</p>
              <p className="mt-6 text-sm font-light leading-relaxed text-foreground/75">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SAMLET ÉT STED */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-5">
              <p className="text-[10px] tracking-[0.4em] text-muted-foreground">SAMLET ÉT STED</p>
              <h2 className="font-serif mt-8 text-4xl font-light leading-[1.0] md:text-5xl">
                Syv lag, <span className="italic text-accent">én profil.</span>
              </h2>
              <p className="mt-8 max-w-md text-sm font-light leading-relaxed text-foreground/75">
                Alt det, der i dag ligger spredt på tværs af registre, klinikker, mails og fysiske dokumenter, samles i én verificeret profil.
              </p>
            </div>
            <div className="col-span-12 md:col-span-7">
              <ul className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
                {[
                  ["N°01", "Chipdata"],
                  ["N°02", "Vaccinationer"],
                  ["N°03", "Dyrlægejournaler"],
                  ["N°04", "Forsikringsoplysninger"],
                  ["N°05", "Rejsedokumentation"],
                  ["N°06", "Ejerhistorik"],
                  ["N°07", "QR-verifikation ved grænsekontrol"],
                ].map(([no, label]) => (
                  <li key={no} className="flex items-baseline justify-between bg-background p-8">
                    <span className="font-serif text-3xl font-light leading-none">{label}</span>
                    <span className="ml-6 text-[10px] tracking-[0.35em] text-muted-foreground">{no}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ØKOSYSTEM, DYR I MIDTEN */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-center">
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">ØKOSYSTEMET</p>
            <h2 className="font-serif mx-auto mt-6 max-w-2xl text-4xl font-light leading-tight md:text-5xl">
              Dyret i midten. <span className="italic text-accent">Track My Pet er forbindelsen.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-sm font-light leading-relaxed text-foreground/75">
              Ejer, familie, dyrlæge, forsikring, rejser, pasning og nødkontakter. Alle relationer omkring dyret er forbundet ét sted.
            </p>
          </div>

          <div className="relative mx-auto mt-24 aspect-square w-full max-w-[640px]">
            {/* center */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full border border-foreground bg-background text-center md:h-40 md:w-40">
                <span className="text-[9px] tracking-[0.35em] text-muted-foreground">CENTRUM</span>
                <span className="font-serif mt-1 text-xl font-light italic md:text-2xl">Dyret</span>
              </div>
            </div>

            {/* orbit ring */}
            <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border" />

            {/* satellites */}
            {[
              { label: "Ejer", angle: -90 },
              { label: "Familie", angle: -38 },
              { label: "Dyrlæge", angle: 14 },
              { label: "Forsikring", angle: 65 },
              { label: "Rejser", angle: 116 },
              { label: "Pasning", angle: 168 },
              { label: "Nødkontakter", angle: 220 },
            ].map(({ label, angle }, i) => {
              const r = 39; // % radius from center
              const rad = (angle * Math.PI) / 180;
              const x = 50 + r * Math.cos(rad);
              const y = 50 + r * Math.sin(rad);
              return (
                <div
                  key={label}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full border border-border bg-card text-center md:h-24 md:w-24">
                    <span className="text-[9px] tracking-[0.3em] text-accent">N°0{i + 1}</span>
                    <span className="font-serif mt-1 text-xs font-light leading-tight md:text-sm">{label}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mx-auto mt-16 max-w-md text-center font-serif text-lg font-light italic leading-snug text-foreground/85">
            Syv relationer, ét sted. Ejeren beholder kontrollen.
          </p>
        </div>
      </section>

      {/* REJSER, EUROPA */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 items-end gap-6 pb-16">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[10px] tracking-[0.45em] text-muted-foreground">REJSER, N°05</p>
              <h2 className="font-serif mt-8 text-4xl font-light leading-[0.95] md:text-6xl">
                Udviklet til rejser <span className="italic text-accent">i Europa.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="max-w-sm text-sm font-light leading-relaxed text-foreground/75 md:ml-auto">
                Vaccinationer, mikrochip, pas og dokumentation samlet ét sted. Klar ved grænse, tog, færge og hotel.
              </p>
              <div className="mt-8 h-px w-12 bg-border md:ml-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-4">
            {[
              ["Mikrochip", "ISO-verificeret ID, læsbar i hele EU."],
              ["Vaccinationer", "Rabies og opdaterede datoer, validerede af klinik."],
              ["Pet Passport", "Digital kopi af pas, klar til scanning."],
              ["Sundhedsattest", "Rejseattest gyldig på tværs af lande."],
            ].map(([k, v], i) => (
              <div key={k} className="bg-background p-8">
                <span className="text-[10px] tracking-[0.35em] text-accent">N°0{i + 1}</span>
                <h3 className="font-serif mt-4 text-2xl font-light leading-tight">{k}</h3>
                <p className="mt-4 text-xs font-light leading-relaxed text-foreground/70">{v}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] tracking-[0.35em] text-muted-foreground">
            <span>DK</span><span aria-hidden className="h-px w-6 bg-border" />
            <span>SE</span><span aria-hidden className="h-px w-6 bg-border" />
            <span>DE</span><span aria-hidden className="h-px w-6 bg-border" />
            <span>FR</span><span aria-hidden className="h-px w-6 bg-border" />
            <span>IT</span><span aria-hidden className="h-px w-6 bg-border" />
            <span>ES</span><span aria-hidden className="h-px w-6 bg-border" />
            <span>NL</span><span aria-hidden className="h-px w-6 bg-border" />
            <span>+20</span>
          </div>
        </div>
      </section>

      {/* OMSORGSPROFIL, LIVSSITUATIONER */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-5">
              <p className="text-[10px] tracking-[0.4em] text-accent">OMSORGSPROFIL</p>
              <h2 className="font-serif mt-8 text-4xl font-light leading-[1.0] md:text-5xl">
                Hvis livet <span className="italic text-accent">ændrer sig.</span>
              </h2>
              <p className="mt-8 max-w-md text-sm font-light leading-relaxed text-foreground/75">
                En udvidet nødprofil, der dækker mere end blot et bortløbet dyr. Kontaktpersoner, pasningsønsker, rutiner og vigtig information, klar når der er brug for det.
              </p>
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
                Her begynder omsorgsprofilen og testamentedelen at blive konkret.
              </p>
            </div>
            <div className="col-span-12 md:col-span-7">
              <ul className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
                {[
                  ["Dyret bliver væk", "QR forbinder finder og ejer direkte. Hurtigt, enkelt."],
                  ["Dyret kommer til skade", "Allergier, medicin og dyrlæge tilgængelig for hjælperen straks."],
                  ["Ejer bliver syg", "Nødkontakt og pasningsønsker aktiveres af pårørende."],
                  ["Ejer bliver indlagt", "Pasning, rutiner og foder klart for den, der træder til."],
                  ["Ejer går bort", "Testamentedel, ny ejer, kontaktpersoner. Dyret er ikke alene."],
                  ["Pasning og rejse", "Rutiner, foder, vaner og dyrlæge i én delbar profil."],
                ].map(([k, v]) => (
                  <li key={k} className="bg-background p-7">
                    <p className="font-serif text-lg font-light italic leading-snug">{k}</p>
                    <p className="mt-3 text-xs font-light leading-relaxed text-foreground/70">{v}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VI FINDER HUND */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">VI FINDER HUND</p>
          <h2 className="font-serif mx-auto mt-8 max-w-3xl text-4xl font-light leading-[1.0] md:text-6xl">
            Et scan forbinder <span className="italic text-accent">finder og ejer.</span>
          </h2>
          <p className="mx-auto mt-10 max-w-xl text-sm font-light leading-relaxed text-foreground/75">
            Hurtigt. Enkelt. Direkte. Når et fremmed menneske finder dyret, kræver det ét scan. Ingen app, ingen login, ingen forsinkelse.
          </p>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-px bg-border md:grid-cols-3">
            {[
              ["01", "Scan", "Finderen scanner tag eller chip med telefonen."],
              ["02", "Forbind", "Ejeren får besked med det samme. Lokation deles efter samtykke."],
              ["03", "Hjem", "Direkte kontakt, uden mellemled, uden registre i flere lag."],
            ].map(([n, k, v]) => (
              <div key={n} className="bg-background p-8 text-left">
                <span className="font-serif text-sm italic text-muted-foreground">{n}</span>
                <h3 className="font-serif mt-6 text-2xl font-light">{k}</h3>
                <p className="mt-4 text-xs font-light leading-relaxed text-foreground/70">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEKS SITUATIONER */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-center">
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">SEKS SITUATIONER</p>
            <h2 className="font-serif mx-auto mt-6 max-w-3xl text-4xl font-light leading-tight md:text-5xl">
              Bygget op omkring <span className="italic text-accent">livet med dyret.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-sm font-light leading-relaxed text-foreground/75">
              Ikke en platform. Ikke et dashboard. Et samlet sted for de seks situationer, hver kæledyrsejer møder.
            </p>
          </div>

          <ol className="mt-20 grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Hverdag", "Rutiner, foder, motion og vaner samlet ét sted."],
              ["Vaccinationer", "Datoer, klinik og dokumentation altid opdateret."],
              ["Rejser", "Pas, vaccination og grænseklar profil i Europa."],
              ["Hvis dyret bliver væk", "Scan-baseret forbindelse mellem finder og ejer."],
              ["Hvis dyret kommer til skade", "Akutinfo, allergier og dyrlæge klar for hjælperen."],
              ["Hvis livet ændrer sig", "Omsorgsprofil, kontaktpersoner og pasningsønsker."],
            ].map(([k, v], i) => (
              <li key={k} className="bg-background p-10">
                <span className="font-serif text-sm italic text-muted-foreground">0{i + 1}</span>
                <h3 className="font-serif mt-6 text-2xl font-light leading-tight md:text-3xl">{k}</h3>
                <p className="mt-6 text-sm font-light leading-relaxed text-foreground/75">{v}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>


      {/* TRACTIVE — IKKE KONKURRENT */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-center">
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">KOMPLEMENTÆRT, IKKE KONKURRENT</p>
            <h2 className="font-serif mx-auto mt-6 max-w-3xl text-4xl font-light leading-tight md:text-5xl">
              Tractive ved <span className="italic text-accent">hvor.</span><br />
              Track My Pet ved <span className="italic text-accent">hvem.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-sm font-light leading-relaxed text-foreground/75">
              De to datasæt overlapper næsten ikke. De komplementerer hinanden.
            </p>
          </div>

          <div className="mt-20 grid gap-px bg-border md:grid-cols-2">
            <div className="bg-background p-10 md:p-14">
              <p className="text-[10px] tracking-[0.4em] text-muted-foreground">TRACTIVE VED</p>
              <h3 className="font-serif mt-6 text-2xl font-light italic">Hvor dyret er</h3>
              <ul className="mt-8 grid grid-cols-1 gap-2 text-sm font-light text-foreground/75 sm:grid-cols-2">
                {["Position","Hastighed","Søvn","Aktivitet","GPS","Geofencing"].map((t) => (
                  <li key={t} className="flex items-baseline gap-3"><span className="h-px w-3 translate-y-[-4px] bg-border" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-background p-10 md:p-14">
              <p className="text-[10px] tracking-[0.4em] text-accent">TRACK MY PET VED</p>
              <h3 className="font-serif mt-6 text-2xl font-light italic">Hvem dyret er</h3>
              <ul className="mt-8 grid grid-cols-1 gap-2 text-sm font-light text-foreground/75 sm:grid-cols-2">
                {["Identitet","Ejerskab","Medicin","Vaccinationer","Journal","Forsikring","Rejser","Ejerskifte","Dokumentation"].map((t) => (
                  <li key={t} className="flex items-baseline gap-3"><span className="h-px w-3 translate-y-[-4px] bg-border" />{t}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mx-auto mt-16 max-w-3xl text-center font-serif text-2xl font-light italic leading-snug text-foreground/90 md:text-3xl">
            GPS + identitet + sundhedsjournal + forsikring + AI.<br />
            <span className="text-accent">Markant stærkere end hver virksomhed alene.</span>
          </p>
        </div>
      </section>

      {/* AI SOM MOTOR */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-center">
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">AI SOM MOTOR</p>
            <h2 className="font-serif mx-auto mt-6 max-w-3xl text-4xl font-light leading-tight md:text-5xl">
              Fem moduler bygget <span className="italic text-accent">oven på datasættet.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-sm font-light leading-relaxed text-foreground/75">
              Når identitet, journal og adfærd ligger ét sted, bliver AI det lag, som omsætter data til handling.
            </p>
          </div>

          <ol className="mt-20 grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-5">
            {[
              ["AI Health Timeline", "Opdager ændringer i aktivitet, medicin, vægt og sygdomshistorik."],
              ["AI Travel Assistant", "‘Din hund kan ikke rejse til Italien i morgen. Rabiesvaccinen udløber om 11 dage.’"],
              ["AI Emergency", "Finderen scanner QR. AI viser kun det relevante: allergier, medicin, kontakt, nærmeste dyrlæge."],
              ["AI Insurance", "Forsikringen får adgang til verificerede oplysninger. Skader behandles hurtigere."],
              ["AI Population Health", "Millioner af profiler opdager sygdomsudbrud, bivirkninger, raceproblemer, vaccinedækning og levetid."],
            ].map(([k, v], i) => (
              <li key={k} className="bg-background p-8">
                <span className="font-serif text-sm italic text-muted-foreground">0{i + 1}</span>
                <h3 className="font-serif mt-6 text-xl font-light leading-tight md:text-2xl">{k}</h3>
                <p className="mt-4 text-xs font-light leading-relaxed text-foreground/70">{v}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">NÆSTE</p>
          <h2 className="font-serif mt-6 text-3xl font-light italic leading-snug md:text-4xl">
            Hvorfor er infrastrukturen nødvendig nu?
          </h2>
          <Link to="/vision" className="mt-10 inline-block rounded-full bg-foreground px-8 py-3 text-[11px] tracking-[0.25em] text-background hover:bg-accent">
            LÆS VISIONEN
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
