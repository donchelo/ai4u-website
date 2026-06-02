# Proyecto superAI

## Estructura del Ecosistema

A continuación, la estructura consolidada (hasta el nivel 3) de los servicios del ecosistema excluyendo directorios ignorados como `node_modules`, `dist`, `.next`:

```text
/home/ai_tamaprint/Software/clients/AI4U/experiments/superAI
├── apify-service
│   ├── app
│   │   └── api
│   ├── lib
│   │   ├── actors
│   │   └── apify.ts
│   ├── next.config.ts
│   ├── next-env.d.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   └── tsconfig.tsbuildinfo
├── changelog-service
│   ├── app
│   │   ├── api
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── CLAUDE.md
│   ├── INTEGRATION.md
│   ├── lib
│   │   ├── auth.ts
│   │   ├── db.ts
│   │   ├── ratelimit.ts
│   │   └── validate.ts
│   ├── next.config.ts
│   ├── next-env.d.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── packages
│   │   └── changelog-client
│   ├── README.md
│   ├── scripts
│   │   ├── cotizador-changelog-export.ts
│   │   └── migrate-cotizador.ts
│   ├── tsconfig.json
│   └── tsconfig.tsbuildinfo
├── creador-clientes
│   ├── app
│   │   ├── api
│   │   ├── CrearClienteForm.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── lib
│   │   └── page.tsx
│   ├── CLAUDE.md
│   ├── components
│   │   └── ChangelogPill.tsx
│   ├── lib
│   │   ├── logger.ts
│   │   └── toSAP.ts
│   ├── next.config.ts
│   ├── next-env.d.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.mjs
│   ├── proxy.ts
│   ├── README.md
│   ├── tsconfig.json
│   └── tsconfig.tsbuildinfo
├── kpis
│   ├── app
│   │   ├── api
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── CLAUDE.md
│   ├── components
│   │   ├── ChangelogPill.tsx
│   │   ├── KpiCard.tsx
│   │   ├── KpiDashboard.tsx
│   │   ├── KpiDetailModal.tsx
│   │   └── KpiGroup.tsx
│   ├── lib
│   │   ├── session.ts
│   │   └── types.ts
│   ├── next.config.ts
│   ├── next-env.d.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── tsconfig.json
│   └── tsconfig.tsbuildinfo
├── mc-sso
│   ├── package.json
│   ├── package-lock.json
│   ├── src
│   │   ├── crypto.ts
│   │   ├── index.ts
│   │   ├── session.ts
│   │   └── token.ts
│   ├── tests
│   │   ├── session.test.ts
│   │   └── token.test.ts
│   └── tsconfig.json
├── mission-control-main
│   ├── app
│   │   ├── api
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── login
│   │   ├── page.tsx
│   │   ├── providers-client.tsx
│   │   └── providers.tsx
│   ├── CLAUDE.md
│   ├── components
│   │   ├── AlertsBell.tsx
│   │   ├── ChangelogPill.tsx
│   │   ├── dashboard
│   │   ├── DashboardClient.tsx
│   │   ├── DashboardClientWrapper.tsx
│   │   ├── LoginClient.tsx
│   │   ├── LoginClientWrapper.tsx
│   │   ├── superai
│   │   └── TenantPicker.tsx
│   ├── docs
│   │   ├── plans
│   │   ├── specs
│   │   └── superpowers
│   ├── lib
│   │   ├── backend-client.ts
│   │   ├── chat
│   │   ├── chat-session.ts
│   │   ├── entity-map.ts
│   │   ├── supabase.ts
│   │   └── tenants
│   ├── next.config.ts
│   ├── next-env.d.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── proxy.ts
│   ├── public
│   │   ├── ai4u
│   │   ├── flexo-logo.png
│   │   ├── logo.svg
│   │   └── magdalena-logo.png
│   ├── README.md
│   ├── supabase
│   │   └── config.toml
│   ├── tsconfig.json
│   ├── tsconfig.tsbuildinfo
│   └── vercel-env-pulled.txt
├── orderloader
│   ├── AGENTS.md
│   ├── app
│   │   ├── api
│   │   ├── audit
│   │   ├── changelog
│   │   ├── clientes
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── prompts
│   ├── CLAUDE.md
│   ├── components
│   │   ├── ChangelogPill.tsx
│   │   ├── PedidoDetail.tsx
│   │   ├── PedidoTable.tsx
│   │   ├── PipelineStatus.tsx
│   │   └── RunPipelineButton.tsx
│   ├── design-system
│   │   ├── atoms
│   │   ├── docs
│   │   ├── index.ts
│   │   ├── molecules
│   │   ├── organisms
│   │   ├── templates
│   │   ├── tokens
│   │   └── utils.ts
│   ├── docker-compose.flexoimpresos.yml
│   ├── docker-compose.yml
│   ├── Dockerfile
│   ├── docs
│   │   ├── api.md
│   │   ├── data-model.md
│   │   └── runbook.md
│   ├── instrumentation.ts
│   ├── lib
│   │   ├── ai-triage.ts
│   │   ├── anthropic-retry.ts
│   │   ├── backend-client.ts
│   │   ├── clientes-seed-flexo.ts
│   │   ├── clientes-seed.ts
│   │   ├── config.ts
│   │   ├── constants.ts
│   │   ├── db.ts
│   │   ├── flexo-prompts-generated.ts
│   │   ├── logger.ts
│   │   ├── mailer.ts
│   │   ├── microsoft-graph.ts
│   │   ├── pdf-classify.ts
│   │   ├── pdf-vision.ts
│   │   ├── pipeline.ts
│   │   ├── prompts
│   │   ├── sap-client.ts
│   │   ├── sap-gateway.ts
│   │   ├── schemas.ts
│   │   └── steps
│   ├── mercadeo
│   │   ├── business-model-canvas.md
│   │   ├── costo-digitacion-manual.md
│   │   ├── Creativos
│   │   ├── customer-segments.md
│   │   ├── estudio-costos-pipeline.md
│   │   ├── gain-creators.md
│   │   ├── gains.md
│   │   ├── guia-cotizacion.md
│   │   ├── meta-cli.md
│   │   ├── pain-relievers.md
│   │   ├── pains.md
│   │   ├── pricing.md
│   │   └── value-proposition.md
│   ├── next.config.ts
│   ├── next-env.d.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.mjs
│   ├── project.tar.gz
│   ├── public
│   │   ├── brand
│   │   ├── deletion.html
│   │   ├── file.svg
│   │   ├── globe.svg
│   │   ├── next.svg
│   │   ├── privacy.html
│   │   ├── terms.html
│   │   ├── vercel.svg
│   │   └── window.svg
│   ├── README.md
│   ├── scratch
│   │   ├── flexoimpresos-oc
│   │   ├── instructivo-azure-flexoimpresos.md
│   │   ├── test-flexo-extraction.ts
│   │   ├── test-flexo-imap.ts
│   │   └── test_meta_mcp.js
│   ├── scripts
│   │   ├── apply-flexo-prompts.ts
│   │   ├── calculate-costs.ts
│   │   ├── check-graph.ts
│   │   ├── check-imap.ts
│   │   ├── deploy.sh
│   │   ├── diagnose-byspro.ts
│   │   ├── generate-flexo-prompts.ts
│   │   ├── lead-times.ts
│   │   ├── list-flexo-clients.ts
│   │   ├── print-generated-prompt.ts
│   │   ├── publish-changelog.ts
│   │   ├── pull-db.sh
│   │   ├── show-flexo-prompt.ts
│   │   ├── test-email-template.ts
│   │   ├── test-flexo-pdf.ts
│   │   ├── test-parse-pdf.ts
│   │   ├── test-sap-flexo.ts
│   │   ├── test-with-new-prompt.ts
│   │   └── verify-new-clients.ts
│   ├── server.log
│   ├── __tests__
│   │   ├── e2e
│   │   ├── helpers
│   │   ├── integration
│   │   ├── schemas.test.ts
│   │   └── step2-validar.test.ts
│   ├── tsconfig.json
│   ├── tsconfig.tsbuildinfo
│   └── vitest.config.ts
├── sap-b1-backend
│   ├── app
│   │   ├── api
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── CLAUDE.md
│   ├── components
│   │   └── ChangelogPill.tsx
│   ├── docs
│   │   └── superpowers
│   ├── lib
│   │   ├── adapters
│   │   ├── auth.ts
│   │   ├── capabilities
│   │   ├── kpis
│   │   ├── logger.ts
│   │   ├── sap
│   │   └── tenants.ts
│   ├── mcp
│   │   ├── sap-docs
│   │   └── sap-operations
│   ├── middleware.ts
│   ├── next.config.ts
│   ├── next-env.d.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── tests
│   │   ├── e2e
│   │   └── unit
│   ├── tsconfig.json
│   ├── tsconfig.tsbuildinfo
│   ├── vitest.config.ts
│   └── vitest.unit.config.ts
├── sap-b1-chat
│   ├── app
│   │   ├── api
│   │   ├── components
│   │   ├── globals.css
│   │   ├── hooks
│   │   ├── layout.tsx
│   │   ├── lib
│   │   └── page.tsx
│   ├── CLAUDE.md
│   ├── components
│   │   └── ChangelogPill.tsx
│   ├── docs
│   │   └── superpowers
│   ├── lib
│   │   ├── backend-client.ts
│   │   ├── chat
│   │   ├── entity-map.ts
│   │   └── supabase.ts
│   ├── next.config.ts
│   ├── next-env.d.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── proxy.ts
│   ├── public
│   │   └── fonts
│   ├── README.md
│   ├── tsconfig.json
│   └── tsconfig.tsbuildinfo
├── share-of-voice
│   ├── app
│   │   ├── api
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── providers-client.tsx
│   │   ├── providers.tsx
│   │   └── [sovId]
│   ├── lib
│   │   ├── apify-client.ts
│   │   ├── claude.ts
│   │   ├── sov-calculator.ts
│   │   ├── sov-supabase.ts
│   │   ├── supabase.ts
│   │   └── url.ts
│   ├── middleware.ts
│   ├── next.config.ts
│   ├── next-env.d.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── styles
│   │   └── private.css
│   ├── tsconfig.json
│   ├── tsconfig.tsbuildinfo
│   └── types
│       └── css.d.ts
├── sistemaDiseno
│   ├── CLAUDE.md
│   ├── debug-storybook.log
│   ├── docs
│   │   ├── COLOR_SYSTEM_MIGRATION.md
│   │   ├── DESIGN_SYSTEM.md
│   │   └── INTERNATIONALIZATION.md
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── assets
│   │   └── fonts
│   ├── src
│   │   ├── changelog
│   │   ├── components
│   │   ├── context
│   │   ├── demo
│   │   ├── hooks
│   │   ├── index.ts
│   │   ├── styles
│   │   ├── tokens
│   │   ├── types
│   │   ├── utils
│   │   └── vite-env.d.ts
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── vitest.shims.d.ts
└── social-listening
    ├── app
    │   ├── api
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── providers-client.tsx
    │   ├── providers.tsx
    │   └── [reportId]
    ├── lib
    │   ├── apify-client.ts
    │   ├── claude.ts
    │   ├── pdf
    │   ├── report-excel.ts
    │   ├── report-filename.ts
    │   ├── supabase.ts
    │   └── url.ts
    ├── middleware.ts
    ├── next.config.ts
    ├── next-env.d.ts
    ├── package.json
    ├── package-lock.json
    ├── styles
    │   └── private.css
    ├── tsconfig.json
    ├── tsconfig.tsbuildinfo
    └── types
        └── css.d.ts
```
