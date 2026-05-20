import { useState, type FormEvent } from "react";

type Props = {
  eyebrow?: string;
  title?: string;
  body?: string;
  variant?: "default" | "card";
};

export function WaitlistCTA({
  eyebrow = "VENTELISTE — JOIN THE PACK",
  title = "Vær blandt de første med adgang til et verificeret pet ID udviklet til moderne kæledyrsejerskab.",
  body = "Et samlet produkt til identitet, dokumentation og tryghed samlet ét sted gennem hele dyrets liv.",
  variant = "default",
}: Props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  const wrapper =
    variant === "card"
      ? "bg-card"
      : "bg-background border-t border-border";

  return (
    <section className={wrapper}>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <p className="text-[10px] tracking-[0.4em] text-muted-foreground">
          {eyebrow}
        </p>
        <h2 className="font-serif mt-8 text-3xl font-light leading-tight md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-sm font-light leading-relaxed text-foreground/75">
          {body}
        </p>

        {submitted ? (
          <p className="mt-12 font-serif text-lg font-light italic text-accent">
            Tak — vi er i kontakt, så snart der er nyt.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="waitlist-email" className="sr-only">
              E-mail
            </label>
            <input
              id="waitlist-email"
              type="email"
              required
              placeholder="din@email.dk"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-foreground px-6 py-3 text-[11px] tracking-[0.25em] text-background transition hover:bg-accent"
            >
              SKRIV MIG OP
            </button>
          </form>
        )}

        <p className="mt-6 text-[10px] tracking-[0.3em] text-muted-foreground">
          KUN RELEVANTE OPDATERINGER OM LANCERING OG TIDLIG ADGANG
        </p>
      </div>
    </section>
  );
}
