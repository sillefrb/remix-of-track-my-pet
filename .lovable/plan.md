## Tesen, der skal bære alt

> Track My Pet bygger Europas kritiske AI- og datainfrastruktur for kæledyr.

Produkt, tag og QR bliver **adgangspunkter** til infrastrukturen — ikke selve forretningen. Visuelt udtryk, fonte og billeder bevares 1:1.

---

## Ændringer pr. side

### 1. `src/routes/index.tsx` (forsiden)
- Ny hero-tese: "Europas AI- og datainfrastruktur for kæledyr."
- Underrubrik: "Identitet, dokumentation og data, samlet i ét verificeret lag. Ejere, dyrlæger, forsikring, internater, myndigheder, rejser og tracking arbejder på samme profil."
- Tilføj kort "Det er ikke / Det er"-blok (ikke et tag, ikke en app, ikke tracking — det forbindende lag).
- Komprimér eksisterende produkt-tunge sektioner til 2–3 korte beviser; flyt detaljer til /product.

### 2. `src/routes/vision.tsx`
- Vision skrives om til infrastrukturtesen som åbning.
- Ny sektion "198 millioner profiler, ikke 198 millioner dyr" med de 16 datapunkter (identitet, ejerhistorik, chip, vaccinationer, sygdomshistorik, medicin, adfærd, vægt, forsikring, rejser, geografi, alder, dødsårsag, race, aktivitet, GPS).
- Ny sektion "Det vigtigste aktiv" — de fem moats (profilbase, identitetsdatabase, AI-trænet veterinært datasæt, integrationsnetværk, netværkseffekter).

### 3. `src/routes/product.tsx` (komprimeres)
- Hero omformuleres: "Adgangspunktet til infrastrukturen."
- Behold ØKOSYSTEMET, SAMLET ÉT STED, SEKS SITUATIONER.
- Komprimér REJSER, OMSORGSPROFIL, VI FINDER HUND til kortere blokke.
- Ny sektion **"Tractive er ikke konkurrent"** med to kolonner: Tractive ved (hvor) / Track My Pet ved (hvem) → "GPS + identitet + journal + forsikring + AI".
- Ny sektion **"AI som motor"** med fem moduler: AI Health Timeline, AI Travel Assistant, AI Emergency, AI Insurance, AI Population Health.

### 4. `src/routes/market.tsx`
- Hero-ramme skifter fra "198 millioner hunde og katte" til "198 millioner digitale identiteter" (tallene bevares, kilden bevares).
- "Hvor er pengene"-sektionen får tilføjet linje om at det vigtigste aktiv er datasættet og netværkseffekterne, ikke abonnementet.
- BIG DATA-sektionen får tydeligere AI-framing.

### 5. `src/routes/about.tsx` og `src/routes/b2b.tsx`
- Tilføj kort infrastruktur-linje i hero, så sproget er konsistent. Ingen større omskrivning.

### 6. `src/routes/pricing.tsx`
- Tilføj én linje øverst: "Abonnementet er adgangsbilletten til infrastrukturen." Ingen prisændringer.

---

## Det visuelle

- Samme fonte (`font-serif`, `tracking`-systemet), samme tokens (`bg-card`, `text-accent`, `border-border`), samme spacing/grid.
- Ingen nye billeder — eksisterende grafik (økosystem-cirkel, EU-bar, prik-grid) genbruges.
- Ingen nye farver, ingen nye komponenter ud over rene tekstsektioner i samme stil.

---

## Rækkefølge

1. index + vision (bærer tesen)
2. product (Tractive + AI-motor + komprimering)
3. market (reframing af 198M)
4. about/b2b/pricing (mindre tilretninger)

Bekræft, så bygger jeg det i den rækkefølge.