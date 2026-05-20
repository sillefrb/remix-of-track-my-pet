import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Index } from "./index";
import { ProductPage } from "./product";
import { VisionPage } from "./vision";
import { MarketPage } from "./market";
import { PricingPage } from "./pricing";
import { AboutPage } from "./about";

export const Route = createFileRoute("/print")({
  head: () => ({
    meta: [{ title: "Track My Pet — Samlet dokument" }],
  }),
  component: PrintAll,
});

function PrintAll() {
  useEffect(() => {
    const t = setTimeout(() => window.print(), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="print-all">
      <section className="print-section"><Index /></section>
      <section className="print-section"><ProductPage /></section>
      <section className="print-section"><VisionPage /></section>
      <section className="print-section"><MarketPage /></section>
      <section className="print-section"><PricingPage /></section>
      <section className="print-section"><AboutPage /></section>
    </div>
  );
}
