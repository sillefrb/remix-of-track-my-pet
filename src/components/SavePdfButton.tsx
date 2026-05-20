import { Printer } from "lucide-react";
import { useLocation, useNavigate } from "@tanstack/react-router";

export function SavePdfButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/print") return null;

  return (
    <button
      type="button"
      onClick={() => navigate({ to: "/print" })}
      aria-label="Gem som PDF"
      className="no-print fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-[11px] tracking-[0.25em] text-background shadow-lg transition hover:bg-accent"
    >
      <Printer className="h-4 w-4" />
      GEM SOM PDF
    </button>
  );
}
