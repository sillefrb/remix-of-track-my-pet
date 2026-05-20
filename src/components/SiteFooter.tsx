import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-6 px-6 py-12 text-[11px] tracking-[0.25em] text-muted-foreground md:flex-row md:items-center">
        <Link to="/" className="font-serif text-foreground tracking-[0.2em]">
          TRACK MY PET
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link to="/" className="hover:text-accent" activeOptions={{ exact: true }}>FORSIDE</Link>
          <Link to="/product" className="hover:text-accent">PRODUKT</Link>
          <Link to="/vision" className="hover:text-accent">HVORFOR DET ER NØDVENDIGT</Link>
          <Link to="/market" className="hover:text-accent">BAGGRUND</Link>
          <Link to="/pricing" className="hover:text-accent">MEDLEMSKAB</Link>
        </nav>
        <span>IDENTITET OG DOKUMENTATION · © 2026</span>
      </div>
    </footer>
  );
}
