# Spec: Mejora de Copy — AI4U Landing Page

**Fecha:** 2026-03-19
**Alcance:** `src/pages/Home.tsx` y `src/components/shared/ui/organisms/HeroSection.tsx`
**Estado:** Aprobado

---

## Principio Rector

AI4U es el equipo que trabaja sin parar — en procesos, operación y tareas del día a día — para que sus clientes tengan tiempo para lo que verdaderamente importa, en el trabajo y en la vida.

**Lo que NO hace este copy:**
- No compara agentes con humanos
- No habla de "reemplazar" trabajo humano
- No usa jerga técnica en el cuerpo de texto
- No usa frases genéricas de industria IA ("libertad operativa", "precisión industrial")

**Tono:** Titulares en camelCase (estética de marca, Virgil Abloh-inspired). Cuerpo en español natural, cálido y directo.

**Audiencia primaria:** Dueños de PyME (10–100 empleados) y ejecutivos/gerentes en empresas medianas. Dolor compartido: demasiado tiempo en operación, poco tiempo para liderar y crecer.

---

## Cambios por Sección

### 01 — Hero Section (`HeroSection.tsx`)

| Campo | Valor actual | Valor propuesto |
|---|---|---|
| Badge/tag | `strategySystemV2.0` | `ai4u.equipo // siempre activo` |
| `customTitle` | `compraTiempoNoSoftware` | `más tiempo para lo que importa.` |
| `customSubtitle` | `Desplegamos el equipo de agentes de inteligencia artificial que orquesta tu libertad operativa.` | `Somos el equipo que trabaja sin parar — en tus procesos, tu operación, tu día a día — para que tú tengas tiempo para lo que verdaderamente importa.` |
| CTA primario | `Recuperar tiempo` | `hablar con el equipo` |
| Tag lateral | `// ia con enfoque humano` | `//iaConEnfoqueHumano` *(sin cambio funcional)* |

**Nota de implementación:** El badge `strategySystemV2.0` está hardcodeado en `HeroSection.tsx` (línea 167). Debe parametrizarse o editarse directamente.

---

### 02 — Pillares (`Home.tsx` → array `pillars`)

#### Pilar 1 — Filosofía
| Campo | Valor actual | Valor propuesto |
|---|---|---|
| `title` | `elTiempoEsOro` | `elTiempoEsLoÚnicoQueNoSeRecupera` |
| `subtitle` | `filosofia01` | `filosofia01` *(sin cambio)* |
| `description` | `No vendemos software. Vendemos el activo más valioso de tu vida: tu tiempo. Recupera el control.` | `Por eso nos tomamos en serio cada hora que puedes dejar de gastar en tareas que no te necesitan a ti.` |

#### Pilar 2 — Equipo de Agentes
| Campo | Valor actual | Valor propuesto |
|---|---|---|
| `title` | `equipoDigital` | `tuEquipoNuncaParaDeTrabajar` |
| `subtitle` | `equipoAgentes02` | `equipoAgentes02` *(sin cambio)* |
| `description` | `Crea, entrena y gestiona tu propio equipo de agentes que trabajan mientras tú lideras.` | `Tus agentes están activos antes de que llegues, y siguen cuando te vas. Sin interrupciones, sin olvidos.` |

#### Pilar 3 — Infraestructura
| Campo | Valor actual | Valor propuesto |
|---|---|---|
| `title` | `infraestructura` | `infraestructuraDiseñadaParaEscalarContigo` |
| `subtitle` | `infraestructura03` | `infraestructura03` *(sin cambio)* |
| `description` | `El sistema nervioso privado donde orquestamos cada acción de tu nueva fuerza laboral.` | `La base técnica que mantiene a tu equipo funcionando — y crece cuando tú lo necesitas.` |

---

### 03 — Cita Filosófica Central (`Home.tsx`)

| Campo | Valor actual | Valor propuesto |
|---|---|---|
| Texto | `"no Lidera máquinas, orquesta libertad estratégica."` | `"trabaja en lo que solo tú puedes hacer. nosotros nos encargamos del resto."` |

---

### 04 — Características (`Home.tsx` → array `coreFeatures`)

#### Feature 1 — Gestión de Agentes
| Campo | Valor actual | Valor propuesto |
|---|---|---|
| `title` | `gestionDeAgentes` | `tuEquipoEnUnSoloLugar` |
| `description` | `Supervisa y escala tu equipo digital desde un único centro de mando.` | `Ve qué hace cada agente, ajusta prioridades y amplía el equipo cuando lo necesites — todo desde un solo panel.` |

#### Feature 2 — Habilidades
| Campo | Valor actual | Valor propuesto |
|---|---|---|
| `title` | `creacionDeHabilidades` | `agentesQueAprendenCómoTrabajásTú` |
| `description` | `Tus agentes aprenden tus protocolos únicos. Si es estratégico para ti, es enseñable para ellos.` | `Cada agente se entrena con tus procesos, tu voz y tu lógica. No es tecnología genérica — es tu manera de operar, automatizada.` |

#### Feature 3 — Ejecución
| Campo | Valor actual | Valor propuesto |
|---|---|---|
| `title` | `ejecucionAutonoma` | `operanTusHerramientas` |
| `description` | `Agentes que operan tus sistemas (CRM, ERP, Email) con precisión industrial.` | `Tus agentes trabajan en tu CRM, correo, reportes y flujos — como un miembro más del equipo que nunca olvida un paso.` |

---

### 05 — Sección WorkForce / Header (`Home.tsx`)

| Campo | Valor actual | Valor propuesto |
|---|---|---|
| Título H1 | `controlEquipo` | `controlEquipo` *(sin cambio — funciona bien)* |

---

### 06 — CTA Final (`Home.tsx`)

| Campo | Valor actual | Valor propuesto |
|---|---|---|
| Label código | `listoParaDespegar` | `// ¿cuántas horas a la semana podrías recuperar?` |
| Giant texto | `creaTuEquipo` | `empieza a recuperar tu tiempo hoy.` |
| Párrafo nuevo | *(no existe)* | `Hablamos 30 minutos. Te mostramos exactamente qué tareas de tu operación podemos tomar nosotros.` |
| CTA primario | `agendarDiagnostico` | `agendar 30 minutos` |
| CTA secundario | `explorarSuperAI` | `explorarSuperAI` *(sin cambio)* |

**Nota de implementación:** Agregar un `<BodyText>` explicativo entre el Giant y los botones en la sección CTA final.

---

## Archivos a Modificar

1. `src/pages/Home.tsx` — arrays `pillars`, `coreFeatures`, y secciones inline (quote, CTA final)
2. `src/components/shared/ui/organisms/HeroSection.tsx` — badge hardcodeado en línea 167

## Fuera de Alcance

- Páginas de Services, WhyAI4U, SuperAI, Portfolio — no se tocan en este sprint
- SEO meta tags — pueden actualizarse en un sprint separado una vez validado el copy en producción
- Componentes de diseño (layout, tipografía, colores) — sin cambios
