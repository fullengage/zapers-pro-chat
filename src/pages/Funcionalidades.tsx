import React from "react";

export default function Funcionalidades() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 space-y-10">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold">Funcionalidades detalhadas</h1>
        <p className="text-muted-foreground">Conheça os recursos que fortalecem sua operação no WhatsApp.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-medium">Atendentes</h2>
          <p className="text-sm text-muted-foreground">Suporte a múltiplos atendentes com controle de acesso.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-medium">Múltiplos números de WhatsApp</h2>
          <p className="text-sm text-muted-foreground">Gerencie vários números por workspace.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-medium">Automações</h2>
          <p className="text-sm text-muted-foreground">Chatbot, respostas rápidas e fluxos com gatilhos.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-medium">Integrações</h2>
          <p className="text-sm text-muted-foreground">CRM, ERP, BI, Webhooks e API pública.</p>
        </div>
        <div className="rounded-lg border p-6 md:col-span-2">
          <h2 className="text-xl font-medium">Relatórios & Indicadores</h2>
          <p className="text-sm text-muted-foreground">TMA, 1ª resposta, SLA, conversão, funil e satisfação.</p>
        </div>
      </section>

      <section className="flex gap-3">
        <a href="/precos" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Ver planos</a>
        <a href="/comparativo" className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium">Por que ZapCode</a>
      </section>
    </main>
  );
}
