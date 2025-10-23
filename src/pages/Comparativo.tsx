import React from "react";

export default function Comparativo() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 space-y-10">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold">Por que ZapCode</h1>
        <p className="text-muted-foreground">Entenda os diferenciais frente a soluções genéricas.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-medium">Implementação rápida</h2>
          <p className="text-sm text-muted-foreground">Go-live em poucos dias com onboarding assistido.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-medium">Suporte local</h2>
          <p className="text-sm text-muted-foreground">Atendimento em PT-BR e SLA de suporte.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-medium">Integrações prontas</h2>
          <p className="text-sm text-muted-foreground">CRM, ERP e BI + Webhooks e API pública.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-medium">Interface intuitiva</h2>
          <p className="text-sm text-muted-foreground">Fluxos visuais e automações sem código.</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Provas de valor</h2>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Cliente X reduziu 30% o tempo médio de atendimento (TMA).</li>
          <li>Cliente Y aumentou 25% as vendas via WhatsApp em 3 meses.</li>
        </ul>
      </section>

      <section className="flex gap-3">
        <a href="/precos" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Começar agora</a>
        <a href="/funcionalidades" className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium">Ver funcionalidades</a>
      </section>
    </main>
  );
}
