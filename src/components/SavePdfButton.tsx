import { Printer } from "lucide-react";

export function SavePdfButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      aria-label="Gem som PDF"
      className="no-print fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-[11px] tracking-[0.25em] text-background shadow-lg transition hover:bg-accent"
    >
      <Printer className="h-4 w-4" />
      GEM SOM PDF
    </button>
  );
}
