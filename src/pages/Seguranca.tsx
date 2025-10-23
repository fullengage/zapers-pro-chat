import React from "react";

export default function Seguranca() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 space-y-10">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold">Segurança & Privacidade</h1>
        <p className="text-muted-foreground">Confiabilidade, proteção de dados e conformidade para operações críticas.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-medium">Infraestrutura</h2>
          <p className="text-sm text-muted-foreground">Alta disponibilidade, redundância e backups automatizados.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-medium">Criptografia</h2>
          <p className="text-sm text-muted-foreground">TLS em trânsito e AES-256 em repouso.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-medium">Controle de acesso</h2>
          <p className="text-sm text-muted-foreground">RBAC, MFA para administradores e princípio do menor privilégio.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-medium">LGPD</h2>
          <p className="text-sm text-muted-foreground">Bases legais, direitos do titular, DPA sob solicitação.</p>
        </div>
      </section>

      <section className="flex gap-3">
        <a href="/comparativo" className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium">Por que ZapCode</a>
        <a href="/precos" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Ver planos</a>
      </section>
    </main>
  );
}
