
---

# Einstein Floripa — Frontend (SPA)

> **Case — Opção 3 (Web)**
> Landing para captação contínua de currículos + **painel de triagem com IA** para apoiar decisão (Docência, Tecnologia, Captação, Pessoas etc.).

---

## Sumário

1. [Visão geral do produto](#visão-geral-do-produto)
2. [Tecnologias](#tecnologias)
3. [Arquitetura](#arquitetura)
4. [Telas](#telas)
   * [Landing (`/landing-page`)](#landing-landing-page)
   * [Dashboard (`/dashboard`)](#dashboard-dashboard)
5. [O que esses dados permitem enxergar](#o-que-esses-dados-permitem-enxergar)
6. [Como rodar localmente](#como-rodar-localmente)
7. [Decisões & trade-offs](#decisões--trade-offs)
8. [Acessibilidade, UX e microinterações](#acessibilidade-ux-e-microinterações)
9. [Limitações e próximos passos](#limitações-e-próximos-passos)

---

## Visão geral do produto

* **Problema**: o Einstein abre seleções por janelas de 6 em 6 meses; fora desses períodos, quem quer participar não tem onde se candidatar e pode perder o engajamento até a abertura da próxima janela.
* **Solução**:

  * **Landing page** com **envio de currículo** (banco de talentos) aberto o ano todo.
  * **Dashboard** que exibe os CVs já **enriquecidos por IA**: dados de contato, **score cultural de 0–10 com justificativa**, **áreas sugeridas** onde a pessoa teria mais fit, **resumo do perfil** e indicação de **experiência real**.
  * Indicadores para dar visão: total de currículos, crescimento recente, média de score cultural e um recorte especial de **Docência / Ensinos** (Docência e Hogwarts), incluindo **padrões de co-ocorrência** com outras áreas.

> A estética da landing aponta para “estudos/quadro/rascunho” (vibe *Excalidraw*), conectando com a essência do cursinho social Einstein. O dashboard é mais sóbrio, focado em eficiência e clareza.

---

## Tecnologias

* Vite
* React
* TanStack Router
* shadcn/ui + Radix
* TanStack Table
* Recharts
* motion
* Embla Carousel
* Tailwind CSS v4
* zod
* sonner

---

## Arquitetura

### Organização por **módulo/rota**

Cada rota tem **components**, **hooks** e **types** próprios. Isso facilita replicar padrões, manter coesão e refatorar sem tocar no resto do app.

```
src/
  components/            # UI global (botões, cards, etc.)
  hooks/                 # hooks globais (ex.: useIsMobile)
  lib/                   # utilidades globais
  routes/
    landing-page/
      assets/
      components/
      hooks/
      index.tsx
      __root.tsx
    dashboard/
      components/
      hooks/
      types/             # zod schemas para validar as respostas do backend
      index.tsx
  main.tsx
```

* **Estado**: local por componente/hook (não há store global).
* **Validação**: respostas do back são validadas com **zod** antes de chegar à UI.
* **UI**: Tailwind v4 + shadcn/ui (acessibilidade e consistência).

---

## Telas

### Landing (`/landing-page`)

**Para que serve**
Canal permanente de **captação de currículos**. Mesmo fora de processos seletivos, quem quer participar envia seu CV — e não se perde o interesse de quem chega “no meio do caminho”.

**Como foi pensada**

* Tom visual “estudantil”: desenho/quadro que remete a **educação e voluntariado**.
* A seção de upload é **simples** e **guiada por feedback**:
  * Arraste & solte ou selecione arquivo.
  * Validação imediata (PDF/DOC/DOCX, até **8 MB**).
  * Feedback claro via **toast** em caso de erro e **limpeza do arquivo** para evitar estado confuso.
* Ao enviar, o CV entra no **banco de talentos** e será analisado pela IA (explicado no Dashboard).

---

### Dashboard (`/dashboard`)

**O que é este painel**
É a visão operacional da triagem. Aqui os currículos chegam **já analisados**: você vê rapidamente **quem é a pessoa**, **como ela se encaixa na cultura do Einstein**, **em quais áreas teria mais impacto** e **se já tem experiência real**.
Além do detalhe individual, o painel agrega os dados para gerar **insights** úteis (volume, tendência recente, qualidade média e um recorte especial de **Docência / Ensinos**).

**O que a IA faz de fato**
Para cada CV enviado, a IA LLM (nesse caso o Gemini) é nutrida com informações da instituição (informações retiradas do site oficial), e a partir daí lê o documento e devolve:

* **Nome, e-mail e telefone** (quando detectáveis no arquivo).
* **Áreas que o candidato mais se encaixa** (1 a 3) entre:
  **Ministério**, **Embaixada do Amor**, **Vale do Silício**, **Time Square**, **Hogwarts**, **Docência**.
  A categorização é **rigorosa**: o prompt normaliza termos (ex.: “marketing” → Time Square; “ensino/monitoria” → Hogwarts/Docência).
* **Avalição de encaixe do candidato com a cultura do Einstein (0–10)** com **justificativa textual curta**.
  A pontuação **começa em 0** e **só sobe com evidências** encontradas no CV. A rubrica considera:

  * **Valores culturais** (Profissionalismo, Protagonismo, Compromisso, Parceria, Força de Vontade);
  * **Experiência real** (estágio/emprego/voluntariado com responsabilidades claras);
  * **Atuação em causa social/impacto**;
  * **Vivência em educação/docência** (monitoria/mentoria/docência).
    A justificativa mostra **por que** a nota foi dada (ex.: “monitoria X”, “projeto social Y”, “estágio Z com responsabilidades A, B, C”), deixando a avaliação **explicável** para o time.
* **Resumo do perfil** (duas ou três frases) — um “elevator pitch” do CV.
* **Experiência real**: marca se a pessoa **já atuou** (sim/não).

**Como o painel apresenta isso**

* **Cards superiores** (com janela 90/30/7 dias):
  * **Currículos analisados** e **variação vs. período anterior**;
  * **Média de score cultural** (panorama de qualidade/fit com a cultura);
  * **Com experiência real** (contagem e proporção);
  * **Docência / Ensinos**: quantos currículos são de **Docência** ou **Hogwarts** e **com que outra área** eles mais co-ocorrem (ex.: Docência + Vale do Silício).
    Esse recorte existe porque Docência/Ensinos é **o coração pedagógico** da organização, e enxergar como ele se relaciona com outras áreas ajuda a direcionar talentos.

* **Gráfico “Triagem por dia”**:
  * Mostra a evolução diária de **Docência/Ensinos** e de **perfis com experiência real**.
  * Ajuda a notar **picos**, **sazonalidade** e **efeito de campanhas** (por exemplo, aumento de perfis de ensino e, ao mesmo tempo, mais gente com experiência).

* **Tabela de currículos**:
  * Lista com **Nome, E-mail, Áreas (com ícones), Score e link para o arquivo**.
  * Ao clicar no nome, abre um **drawer** com o **resumo** e a **justificativa da pontuação**, além do indicador de **experiência real**.
  * O objetivo é **triagem rápida**: bater o olho, filtrar mentalmente e abrir detalhes só quando necessário.

## O que esses dados permitem enxergar

perfeito — aqui vai o trecho revisado para colar no README, agora com **por que cada indicador é útil**:

* **Quantos currículos chegaram no período** e **evolução nos últimos 7 dias**
  *Por que importa:* dá visibilidade de **volume** e **tendência**. Ajuda a entender se campanhas/ações recentes estão funcionando, detectar sazonalidade e **planejar a carga de triagem** (mais voluntários quando o fluxo sobe).

* **Qualidade média cultural (0–10)**
  *Por que importa:* resume o **fit médio** do pipeline com a cultura do Einstein. Se cair, sinaliza revisar mensagem de atração/canais; se subir, indica que estamos **captando perfis mais alinhados**, acelerando a seleção.

* **Distribuição por áreas e co-ocorrências** (ex.: Docência + Tecnologia)
  *Por que importa:* mostra **onde está o interesse/fit** da base e revela **combinações frequentes** (perfis de ensino com afinidade em tecnologia, marketing etc.). Isso orienta **alocação mais estratégica** e pode inspirar **projetos multidisciplinares**.

* **Proporção com experiência real**
  *Por que importa:* separa quem **pode assumir responsabilidade imediatamente** de quem é **alto potencial em formação**. Facilita montar **turmas de onboarding** diferentes e equilibrar o time entre **seniores/mentores** e **novos talentos**.

---

## Como rodar localmente

**Requisitos**: Node **22.x**

```bash
git clone <repo-url>
cd case-einstein-front
npm i
```

Crie o arquivo de variáveis e ajuste a URL do backend:

```bash
cp .env.example .env
# VITE_API_BASE_URL=http://localhost:3000
```

Suba o front:

```bash
npm run dev
# http://localhost:5173
# principais rotas:
# - /landing-page  (envio de currículos)
# - /dashboard     (painel de triagem)
```

Build/preview:

```bash
npm run build
npm run preview
```

Lint:

```bash
npm run lint
```

---

## Decisões & trade-offs

* **SPA na landing** para acelerar o desenvolvimento do case. Em produção, faria **SSG/SSR** para SEO.
* **Sem store global**: o escopo é enxuto; manter estado local e hooks por módulo torna o código direto.
* **IA explicável**: além do número, entrego **justificativa curta** do score — melhora confiança e reduz ambiguidade.
* **Recorte Docência/Ensinos**: métrica dedicada por ser estratégica à missão do Einstein.

---

## Acessibilidade, UX e microinterações

* **Radix** garante semântica/acessibilidade (navegação por teclado, ARIA e foco visível).
* **Toasts** nos momentos críticos (upload/erro).
* **Drawer** para detalhes sem perder o contexto da tabela.
* **Validação imediata** no upload (tipo/tamanho) e **reset** automático em falhas.

---

## Limitações e próximos passos

* Filtros/busca por área, score, experiência e período.
* Exportação CSV/Excel.
* SSG/SSR da landing para SEO.
* RBAC simples (admin/viewer).
* Testes automatizados e telemetria (taxa de erro de upload, tempos de resposta).

---
Feito com 💙 por Jojo :)