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
      { title: "Produktet — Track My Pet" },
      {
        name: "description",
        content:
          "Premium tag, kort og folder koblet til en verificeret digital profil. Enkel opsætning. Pas, vaccinationer, rejser og nødinformation samlet ét sted.",
      },
      { property: "og:title", content: "Produktet — Track My Pet" },
      { property: "og:description", content: "Et samlet fysisk og digitalt produkt for ejer og dyr." },
      { property: "og:image", content: skaterImg },
    ],
  }),
  component: ProductPage,
});

const concepts = [
  { no: "01", name: "Track My Pet", tagline: "Fysisk nød-ID + digital identitet", body: "Et gennemtænkt tag udviklet til hverdagen — til halsbånd eller seletøj. Hvis hunden findes, scannes QR eller NFC, og ejeren kontaktes med det samme." },
  { no: "02", name: "Dog Folder", tagline: "Alt om hunden, ét sted", body: "Et fysisk premium kit kombineret med en app. Vaccinepapirer, forsikring, pas, medicin og bookinghistorik samlet ét sted." },
  { no: "03", name: "Emergency Pet Card", tagline: "Hvis der sker dig noget", body: "Et kort til pung eller bil. Hvis ejer kommer ud for en ulykke, ved redningsfolk straks, at der er et dyr alene hjemme." },
  { no: "04", name: "Lost Mode for Dogs", tagline: "NFC bygget til bortløbne hunde", body: "Ren UX omkring NFC og QR: midlertidig sporing, lokal alarm og lokal besked når hunden er væk fra hjemmet." },
  { no: "05", name: "Dokumentarkiv", tagline: "Hele dyrets liv samlet ét sted", body: "Sundhed, dokumenter, pasning, forsikring, billeder, medicin og vaccinationer — med et fysisk udgangspunkt." },
  { no: "06", name: "Rejsedokumentation", tagline: "Krydsning af grænser uden besvær", body: "Et samlet produkt der gør grænsekrydsning enkel — vaccination, ID og dokumenter klar på få sekunder." },
  { no: "07", name: "Trusted Dog Transfer", tagline: "Tryg overdragelse af ejerskab", body: "Et register over sundhed, vaccination, adfærd, ejerskab, skader og forsikring — beskytter både køber og dyr." },
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
            EDITORIAL — N°02 / ONBOARDING
          </figcaption>
        </figure>
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-8 text-center md:pt-28">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">I — PRODUKTET</p>
          <h1 className="font-serif mt-8 text-4xl font-light leading-tight md:text-6xl lg:text-7xl">
            Et produkt, <span className="italic text-accent">flere relationer.</span>
          </h1>
          <p className="mx-auto mt-10 max-w-xl text-sm font-light leading-relaxed text-foreground/70">
            Premium tag, kort og folder koblet til en verificeret digital profil. Enkel opsætning, høj praktisk værdi, ét samlet produkt.
          </p>
        </div>
      </section>

      {/* AKTIV CAMPAIGN */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 items-end gap-6 pb-16 md:pb-20">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[10px] tracking-[0.45em] text-muted-foreground">CAMPAIGN — N°03 / AKTIV</p>
              <h2 className="font-serif mt-8 text-5xl font-light leading-[0.95] tracking-tight md:text-7xl lg:text-[7rem]">
                AKTIV.<br /><span className="italic text-accent">Udviklet til</span> hverdagen.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="max-w-sm text-sm font-light leading-relaxed text-foreground/75 md:ml-auto">
                Til byen. Til rejsen. Til hverdagen. Track My Pet følger dyret og ejeren gennem hvert kapitel.
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
              <p className="text-[10px] tracking-[0.4em] text-accent">AKTIV — MANIFEST</p>
              <p className="font-serif mt-6 text-2xl font-light italic leading-snug md:text-3xl lg:text-4xl">
                Et liv med dyr er fyldt med<br />bevægelse, rejser og hverdage<br />— og dokumenter, der følger<br />med uden besvær.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE AUDIENCES */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-center text-[10px] tracking-[0.4em] text-muted-foreground">
            ÉT SAMLET STED — TRE MÅLGRUPPER
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
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">PRODUCT MOCK — N°01 / ONBOARDING</p>
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

      {/* DOCUMENT — editorial duo */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-px bg-border md:grid-cols-12">
          <figure className="bg-background md:col-span-7">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img src={documentImg} alt="Pet passport og digital profil" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <figcaption className="px-6 py-6 text-[10px] tracking-[0.35em] text-muted-foreground">
              EDITORIAL — N°04 / DOKUMENTATION
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
            EDITORIAL — N°05 / SIGHTHOUNDS
          </figcaption>
        </figure>
      </section>

      {/* TRAVEL editorial */}
      <section className="bg-card">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-px bg-border md:grid-cols-12">
          <div className="flex flex-col justify-center bg-card p-10 md:col-span-5 md:p-14">
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground">FIT FOR TRAVEL</p>
            <h2 className="font-serif mt-6 text-3xl font-light leading-tight md:text-4xl">
              Grænse, tog, hotel — <span className="italic text-accent">klar på få sekunder.</span>
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
              EDITORIAL — N°06 / TRAVEL
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

      {/* CTA */}
      <section className="bg-card">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">NÆSTE</p>
          <h2 className="font-serif mt-6 text-3xl font-light italic leading-snug md:text-4xl">
            Hvorfor er det her nødvendigt?
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
