import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  const linkBase = "hover:text-accent transition-colors";
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-6 py-5">
        <Link
          to="/"
          className="font-serif text-xl font-light tracking-[0.2em] text-foreground md:text-2xl"
        >
          TRACK MY PET
        </Link>
        <nav className="hidden items-center gap-6 text-[11px] tracking-[0.25em] text-foreground/80 md:flex">
          <Link to="/" className={linkBase} activeProps={{ className: "text-accent" }} activeOptions={{ exact: true }}>
            FORSIDE
          </Link>
          <Link to="/product" className={linkBase} activeProps={{ className: "text-accent" }}>
            PRODUKT
          </Link>
          <Link to="/vision" className={linkBase} activeProps={{ className: "text-accent" }}>
            HVORFOR DET ER NØDVENDIGT
          </Link>
          <Link to="/market" className={linkBase} activeProps={{ className: "text-accent" }}>
            BAGGRUND
          </Link>
          <Link to="/pricing" className={linkBase} activeProps={{ className: "text-accent" }}>
            MEDLEMSKAB
          </Link>
          <Link to="/b2b" className={linkBase} activeProps={{ className: "text-accent" }}>
            FOR DYRLÆGER
          </Link>
          <Link to="/about" className={linkBase} activeProps={{ className: "text-accent" }}>
            OM OS
          </Link>
        </nav>
        <span className="hidden h-px w-10 bg-border lg:block" aria-hidden />

      </div>
    </header>
  );
}
