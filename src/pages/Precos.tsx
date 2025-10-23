import React from "react";

export default function Precos() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 space-y-10">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold">Planos e Preços</h1>
        <p className="text-muted-foreground">Escolha o plano ideal para a sua operação.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-medium">Base</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Até N atendentes</li>
            <li>1 número de WhatsApp</li>
            <li>Chatbot básico e respostas rápidas</li>
            <li>Webhooks</li>
            <li>Suporte por email</li>
          </ul>
          <a href="/auth" className="mt-4 inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium">Começar</a>
        </div>
        <div className="rounded-lg border p-6 ring-1 ring-primary/20">
          <h2 className="text-xl font-medium">Pro</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Até N' atendentes</li>
            <li>Múltiplos números</li>
            <li>Fluxos avançados e gatilhos</li>
            <li>Integrações com CRM/ERP/BI</li>
            <li>Suporte por chat + SLA</li>
          </ul>
          <a href="/auth" className="mt-4 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Iniciar teste grátis</a>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-medium">Enterprise</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Atendentes ilimitados</li>
            <li>Números ilimitados</li>
            <li>SSO/MFA, auditoria e DPA</li>
            <li>Integrações custom e API dedicada</li>
            <li>Suporte com gerente de conta</li>
          </ul>
          <a href="/auth" className="mt-4 inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium">Falar com vendas</a>
        </div>
      </section>

      <section className="rounded-lg border p-6">
        <h2 className="text-xl font-medium">Free / Demo</h2>
        <p className="mt-2 text-sm text-muted-foreground">Teste gratuito com limites e opção de demo guiada.</p>
        <div className="mt-4 flex gap-3">
          <a href="/auth" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Criar conta</a>
          <a href="/comparativo" className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium">Ver diferenciais</a>
        </div>
      </section>
    </main>
  );
}
